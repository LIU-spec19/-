document.addEventListener('DOMContentLoaded', function() {
    // 启动测试按钮
    const launchBtn = document.getElementById('launchQuiz');
    const quizContainer = document.getElementById('quizContainer');
    
    if (launchBtn && quizContainer) {
        launchBtn.addEventListener('click', function() {
            quizContainer.style.display = 'block';
            // 随机选择一道题目显示
            const questions = ['question1', 'question2', 'question3'];
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            questions.forEach(q => {
                document.getElementById(q).style.display = q === randomQuestion ? 'block' : 'none';
            });
            // 平滑滚动到测试区域
            quizContainer.scrollIntoView({ behavior: 'smooth' });
        });
        
        // 关闭测试按钮
        const closeBtn = document.getElementById('closeQuiz');
        closeBtn.addEventListener('click', function() {
            quizContainer.style.display = 'none';
        });
    }
    
    // 提交答案逻辑
    const submitBtn = document.getElementById('submitQuiz');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            const selectedOption = document.querySelector('input[name="q1"]:checked');
            const modal = document.createElement('div');
            modal.className = 'modal';
            
            if (!selectedOption) {
                modal.innerHTML = `
                    <div class="modal-content">
                        <h3>请选择答案</h3>
                        <p>您还没有选择任何答案，请先选择一个选项。</p>
                        <button class="modal-close-btn">确定</button>
                    </div>
                `;
            } else {
                // 获取当前显示的题目
                const currentQuestion = document.querySelector('.quiz-question[style="display: block;"]');
                const questionId = currentQuestion.id;
                
                // 根据题目ID判断正确答案
                let correctAnswer;
                let explanation;
                
                switch(questionId) {
                    case 'question1':
                        correctAnswer = 'B';
                        explanation = '完全正确！鸣沙山东麓的断崖上共排列着735个洞窟，构成了壮观的敦煌莫高窟。';
                        break;
                    case 'question2':
                        correctAnswer = 'B';
                        explanation = '正确答案是B.前秦。莫高窟始建于前秦建元二年（366年），由沙门乐僔始建。';
                        break;
                    case 'question3':
                        correctAnswer = 'B';
                        explanation = '正确答案是B.1900年。藏经洞（第17窟）是在1900年由道士王圆箓发现的。';
                        break;
                }
                
                const isCorrect = selectedOption.value === correctAnswer;
                modal.innerHTML = `
                    <div class="modal-content">
                        <h3>${isCorrect ? '回答正确!' : '回答错误'}</h3>
                        <p>${explanation}</p>
                        <button class="modal-close-btn">确定</button>
                    </div>
                `;
            }
            
            document.body.appendChild(modal);
            modal.style.display = 'block';
            
            modal.addEventListener('click', function(e) {
                if (e.target.classList.contains('modal-close-btn') || e.target === modal) {
                    modal.style.display = 'none';
                    setTimeout(() => modal.remove(), 300);
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取所有时间轴项目和内容
    const timelineItems = document.querySelectorAll('.timeline-item');
    const expandAllBtn = document.getElementById('expandAllBtn');
    const collapseAllBtn = document.getElementById('collapseAllBtn');
    
    // 展开/折叠单个内容的函数
    function toggleContent(content, shouldExpand) {
        if (shouldExpand) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
        updateButtonStates();
    }
    
    // 为每个时间轴项目添加点击事件
    timelineItems.forEach(item => {
        const dot = item.querySelector('.timeline-dot');
        const content = item.querySelector('.timeline-content');
        
        dot.addEventListener('click', function() {
            // 切换当前内容的展开状态（不影响其他内容）
            if (content.classList.contains('active')) {
                toggleContent(content, false);
            } else {
                toggleContent(content, true);
            }
        });
    });
    
    // 展开所有内容
    expandAllBtn.addEventListener('click', function() {
        document.querySelectorAll('.timeline-content').forEach(content => {
            content.classList.add('active');
        });
        updateButtonStates();
    });
    
    // 折叠所有内容
    collapseAllBtn.addEventListener('click', function() {
        document.querySelectorAll('.timeline-content').forEach(content => {
            content.classList.remove('active');
        });
        updateButtonStates();
    });
    
    // 更新按钮状态
    function updateButtonStates() {
        const allContents = document.querySelectorAll('.timeline-content');
        const allExpanded = Array.from(allContents).every(content => content.classList.contains('active'));
        const allCollapsed = Array.from(allContents).every(content => !content.classList.contains('active'));
        
        if (allExpanded) {
            expandAllBtn.classList.add('active');
            collapseAllBtn.classList.remove('active');
        } else if (allCollapsed) {
            collapseAllBtn.classList.add('active');
            expandAllBtn.classList.remove('active');
        } else {
            expandAllBtn.classList.remove('active');
            collapseAllBtn.classList.remove('active');
        }
    }
    
    // 初始展开第一个时间轴内容
    const firstContent = document.querySelector('.timeline-item:first-child .timeline-content');
    if (firstContent) {
        toggleContent(firstContent, true);
    }
});
//夜间模式
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

// 轮播图逻辑
function initBannerCarousel() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev-btn');
    const nextBtn = document.querySelector('.carousel-btn.next-btn');
    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
        if (!slide) return;
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        slide.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function startAutoPlay() {
        intervalId = setInterval(nextSlide, 4000);
    }

    function stopAutoPlay() {
        clearInterval(intervalId);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    slide.addEventListener('mouseenter', stopAutoPlay);
    slide.addEventListener('mouseleave', startAutoPlay);

    showSlide(0);
    startAutoPlay();
}
document.addEventListener('DOMContentLoaded', initBannerCarousel);
