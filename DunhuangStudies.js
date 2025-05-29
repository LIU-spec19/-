// 完整中英文对照翻译
const translations = {
    "zh": {
        "content1": `1900年农历5月26日，敦煌莫高窟惊现藏经洞，万千典籍堆叠如丘。五万余件文献中，佛经占比逾九成，兼有道经、摩尼教典、景教文书，更有官牍、典籍、账册、诗词等世俗文本。除汉文写卷外，更藏吐蕃、西夏、于阗、天竺等十余种古文字遗珍，铜佛、法器等圣物亦同窟而出。`,
        "content2": `此发现与殷墟甲骨、明清档案、敦煌简牍并称四大文献奇迹。这些写本与石窟艺术互为表里，成为研究中古丝路的密钥，催生国际显学"敦煌学"，被誉为开启中世纪世界的金钥匙。`,
        "content3": `腐败的清政府未能对其进行应有的保护，致使藏经洞中的大批敦煌遗书和文物先后被外国"探险队"捆载而去，经英、法、日、美、俄等国探险家的盗窃掠夺，藏经洞绝大部分文物不幸流散到世界各地，仅剩下少部分留存于国内，造成中国文化史上的空前浩劫。`,
        "content4": `1910年，敦煌藏经洞劫余文献运藏京师图书馆（今国家图书馆前身）。而今，藏经洞发现已经整整一百年了，中国国家图书馆作为世界上收藏敦煌遗书最多的单位，以其丰富的馆藏，为敦煌学的发展作出了重要贡献。`,
        "content5": `国图与敦煌学会联办百年特展，既揭露文物流散之痛，更彰显遗书之华彩。此举既为振兴民族文脉，亦促世界文明对话；既护佑文化遗产，更助西部文化腾飞，激扬赤子之心。`,
        "content6": `敦煌在中国，敦煌学在世界。敦煌属于整个人类文明。石窟永驻华夏，学术花开五洲。`
    },
    "en": {
        "content1": `On May 26, 1900 (lunar calendar), a hidden library cave was accidentally discovered in the Mogao Grottoes of Dunhuang, revealing mounds of ancient manuscripts. Among the over 50,000 documents, Buddhist scriptures constitute more than 90%, accompanied by Taoist texts, Manichaean canons, Nestorian scriptures, as well as secular writings including official documents, classical literature, accounting records, and poetry. Beyond Chinese manuscripts, the cave preserved treasures in over ten ancient scripts such as Tibetan, Tangut, Khotanese, and Sanskrit, along with sacred artifacts like bronze Buddha statues and ritual implements.`,
        "content2": `This discovery, together with the Yinxu oracle bones, Ming-Qing archives, and Dunhuang bamboo slips, is hailed as one of China's Four Great Document Miracles. These manuscripts and cave art form an inseparable whole, providing the key to studying the medieval Silk Road and giving birth to the internationally renowned field of "Dunhuang Studies", often called the golden key to unlocking the medieval world.`,
        "content3": `The corrupt Qing government failed to provide adequate protection, leading to the plundering of the cave's treasures by foreign "expeditions". Through systematic looting by explorers from Britain, France, Japan, America, and Russia, the vast majority of the cave's artifacts were scattered across the globe, with only a fraction remaining in China - an unprecedented cultural catastrophe in Chinese history.`,
        "content4": `In 1910, the surviving manuscripts were transported to the Capital Library (predecessor of the National Library of China). Now, a full century after the discovery, the National Library of China, holding the world's largest collection of Dunhuang manuscripts, has made significant contributions to Dunhuang Studies through its extensive archives.`,
        "content5": `The centennial exhibition jointly organized by the National Library and Dunhuang Academy not only reveals the tragedy of cultural dispersal but also highlights the splendor of these manuscripts. This initiative revitalizes our cultural heritage, promotes global civilizational dialogue, safeguards cultural relics, boosts Western China's cultural development, and inspires patriotic devotion.`,
        "content6": `While Dunhuang is in China, Dunhuang Studies belongs to the world. These grottoes are a permanent treasure of Chinese civilization, while their academic study flourishes across all continents.`
    }
};

// 增强版语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const translateElements = document.querySelectorAll('[data-translate-id]');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // 检测浏览器语言偏好
    const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
    const savedLang = localStorage.getItem('preferredLang') || browserLang;
    
    // 初始化
    setLanguage(savedLang);
    
    // 按钮事件
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            // 添加切换动画
            document.body.classList.add('language-changing');
            setTimeout(() => {
                setLanguage(lang);
                localStorage.setItem('preferredLang', lang);
                document.body.classList.remove('language-changing');
            }, 300);
        });
    });
    
    function setLanguage(lang) {
        // 更新按钮
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // 更新内容（带过渡效果）
        translateElements.forEach(el => {
            const key = el.dataset.translateId;
            if (translations[lang] && translations[lang][key]) {
                el.style.opacity = 0;
                setTimeout(() => {
                    el.innerHTML = translations[lang][key];
                    el.style.opacity = 1;
                }, 150);
            }
        });
        
        // 更新页面语言属性
        document.documentElement.lang = lang;
    }
});
//夜间模式
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

// 内容轮播逻辑
function initContentCarousel() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-container .prev-btn');
    const nextBtn = document.querySelector('.carousel-container .next-btn');
    
    let counter = 0;
    const size = images[0].clientWidth;
    
    slide.style.transform = `translateX(${-size * counter}px)`;
    
    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) counter = -1;
        counter++;
        slide.style.transition = "transform 0.5s ease";
        slide.style.transform = `translateX(${-size * counter}px)`;
    });
    
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) counter = images.length;
        counter--;
        slide.style.transition = "transform 0.5s ease";
        slide.style.transform = `translateX(${-size * counter}px)`;
    });
    
    setInterval(() => {
        if (counter >= images.length - 1) counter = -1;
        counter++;
        slide.style.transition = "transform 0.5s ease";
        slide.style.transform = `translateX(${-size * counter}px)`;
    }, 3000);
}

// Banner轮播逻辑
function initBannerCarousel() {
    const slide = document.querySelector('.carousel-slide2');
    const images = document.querySelectorAll('.carousel-slide2 img');
    const prevBtn = document.querySelector('.carousel-container2 .prev-btn2');
    const nextBtn = document.querySelector('.carousel-container2 .next-btn2');
    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
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

    slide.addEventListener('mouseenter', stopAutoPlay);
    slide.addEventListener('mouseleave', startAutoPlay);

    showSlide(0);
    startAutoPlay();
}

// 初始化两个轮播
document.addEventListener('DOMContentLoaded', function() {
    initContentCarousel();
    initBannerCarousel();
});

// 点赞和评论功能
document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.querySelector('.like-btn');
    const likeCount = document.querySelector('.like-count');
    const quickCommentBtn = document.querySelector('.quick-comment-btn');
    const commentInput = document.querySelector('.comment-input input');
    const sendCommentBtn = document.querySelector('.send-comment-btn');
    const commentsList = document.querySelector('.comments-list');
    const emojiPicker = document.querySelector('.emoji-picker');
    const emojis = document.querySelectorAll('.emoji');
    
    let likeCountNum = 0;
    let commentCount = 0;
    let lastClickTime = 0;
    const quickComments = ['同意！', '说得好！', '学习了！', '精彩！', '👍'];

    // 从localStorage加载评论数据
    function loadComments() {
        const savedComments = localStorage.getItem('dunhuangComments');
        const savedLikes = localStorage.getItem('dunhuangLikes');
        const savedReplies = localStorage.getItem('dunhuangReplies');
        
        if (savedComments) {
            const comments = JSON.parse(savedComments);
            // 统计每个用户的评论数
            const userCommentCount = {};
            comments.forEach(comment => {
                userCommentCount[comment.username] = (userCommentCount[comment.username] || 0) + 1;
            });
            // 渲染评论时传入用户评论数
            comments.forEach(comment => {
                renderComment(comment, userCommentCount[comment.username]);
            });
            commentCount = comments.length;
            document.getElementById('commentCount').textContent = commentCount;
        }
        
        if (savedLikes) {
            document.getElementById('totalLikes').textContent = savedLikes;
        }
    }

    // 保存评论到localStorage
    function saveComment(comment) {
        let comments = JSON.parse(localStorage.getItem('dunhuangComments') || '[]');
        comments.push(comment);
        localStorage.setItem('dunhuangComments', JSON.stringify(comments));
    }

    // 保存点赞数到localStorage
    function saveLikes(count) {
        localStorage.setItem('dunhuangLikes', count);
    }

    // 保存回复到localStorage
    function saveReply(commentId, reply) {
        let replies = JSON.parse(localStorage.getItem('dunhuangReplies') || '{}');
        if (!replies[commentId]) {
            replies[commentId] = [];
        }
        replies[commentId].push(reply);
        localStorage.setItem('dunhuangReplies', JSON.stringify(replies));
    }

    // 渲染评论
    function renderComment(comment, userCommentCount) {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.dataset.commentId = comment.id;
        
        const userSpan = document.createElement('span');
        userSpan.className = 'comment-user';
        userSpan.textContent = comment.username;
        
        // 修改冠军图标显示逻辑：同一用户评论达到3条时显示
        if (userCommentCount >= 3) {
            const trophyIcon = document.createElement('i');
            trophyIcon.className = 'fa fa-trophy trophy-icon';
            userSpan.appendChild(trophyIcon);
        }
        
        // 添加冒号
        const colonSpan = document.createElement('span');
        colonSpan.textContent = '：';
        userSpan.appendChild(colonSpan);
        
        const contentSpan = document.createElement('span');
        contentSpan.className = 'comment-content';
        contentSpan.textContent = comment.content;

        const timeSpan = document.createElement('span');
        timeSpan.className = 'comment-time';
        timeSpan.textContent = comment.time;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'comment-actions';
        
        const likeBtn = document.createElement('button');
        likeBtn.className = 'comment-action-btn like-comment';
        likeBtn.innerHTML = '<i class="fa fa-heart-o"></i> 点赞';
        
        const replyBtn = document.createElement('button');
        replyBtn.className = 'comment-action-btn reply-comment';
        replyBtn.innerHTML = '<i class="fa fa-reply"></i> 回复';
        
        actionsDiv.appendChild(likeBtn);
        actionsDiv.appendChild(replyBtn);
        
        const repliesDiv = document.createElement('div');
        repliesDiv.className = 'comment-replies';
        
        // 加载该评论的回复
        const savedReplies = JSON.parse(localStorage.getItem('dunhuangReplies') || '{}');
        if (savedReplies[comment.id]) {
            savedReplies[comment.id].forEach(reply => {
                const replyItem = document.createElement('div');
                replyItem.className = 'reply-item';
                replyItem.innerHTML = `
                    <span class="reply-user">${reply.username}</span>
                    <span class="reply-content">${reply.content}</span>
                `;
                repliesDiv.appendChild(replyItem);
            });
        }
        
        commentItem.appendChild(userSpan);
        commentItem.appendChild(contentSpan);
        commentItem.appendChild(timeSpan);
        commentItem.appendChild(actionsDiv);
        commentItem.appendChild(repliesDiv);
        
        commentsList.insertBefore(commentItem, commentsList.firstChild);

        // 添加点赞功能
        likeBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-heart-o')) {
                icon.classList.replace('fa-heart-o', 'fa-heart');
                this.classList.add('active');
                const currentLikes = parseInt(document.getElementById('totalLikes').textContent) + 1;
                document.getElementById('totalLikes').textContent = currentLikes;
                saveLikes(currentLikes);
            } else {
                icon.classList.replace('fa-heart', 'fa-heart-o');
                this.classList.remove('active');
                const currentLikes = parseInt(document.getElementById('totalLikes').textContent) - 1;
                document.getElementById('totalLikes').textContent = currentLikes;
                saveLikes(currentLikes);
            }
        });

        // 添加回复功能
        replyBtn.addEventListener('click', function() {
            const replyInput = document.createElement('div');
            replyInput.className = 'reply-input';
            replyInput.innerHTML = `
                <input type="text" placeholder="回复 ${comment.username}...">
                <button class="send-reply-btn">发送</button>
            `;
            
            if (!repliesDiv.querySelector('.reply-input')) {
                repliesDiv.insertBefore(replyInput, repliesDiv.firstChild);
                
                const input = replyInput.querySelector('input');
                const sendBtn = replyInput.querySelector('.send-reply-btn');
                
                const sendReply = () => {
                    const replyContent = input.value.trim();
                    if (replyContent) {
                        const reply = {
                            username: document.getElementById('usernameDisplay').textContent || '陌生人',
                            content: replyContent,
                            time: new Date().toLocaleString()
                        };
                        
                        const replyItem = document.createElement('div');
                        replyItem.className = 'reply-item';
                        replyItem.innerHTML = `
                            <span class="reply-user">${reply.username}</span>
                            <span class="reply-content">${reply.content}</span>
                        `;
                        repliesDiv.insertBefore(replyItem, replyInput);
                        input.value = '';
                        replyInput.remove();
                        
                        saveReply(comment.id, reply);
                    }
                };
                
                sendBtn.addEventListener('click', sendReply);
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') sendReply();
                });
            }
        });
    }

    // 添加评论函数
    function addComment(content) {
        commentCount++;
        const username = document.getElementById('usernameDisplay').textContent || '陌生人';
        const now = new Date();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeStr = `${month}月${day}日 ${hours}:${minutes}`;
        
        const comment = {
            id: Date.now().toString(),
            username: username,
            content: content,
            time: timeStr
        };
        
        // 获取当前用户的评论数
        const savedComments = JSON.parse(localStorage.getItem('dunhuangComments') || '[]');
        const userCommentCount = savedComments.filter(c => c.username === username).length + 1;
        
        renderComment(comment, userCommentCount);
        saveComment(comment);
        document.getElementById('commentCount').textContent = commentCount;
    }

    // 页面加载时加载保存的评论
    loadComments();

    // 点赞功能
    likeBtn.addEventListener('click', function() {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastClickTime;
        lastClickTime = currentTime;

        // 触发振动（如果设备支持）
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        likeBtn.classList.add('animate');
        setTimeout(() => {
            likeBtn.classList.remove('animate');
        }, 300);
        
        // 检测双击（300ms内的两次点击）
        if (timeDiff < 300) {
            likeBtn.innerHTML = '<i class="fa fa-fire"></i>';
            likeBtn.classList.add('liked');
            showToast('点赞成功！');
        } else {
            likeCountNum++;
            likeCount.textContent = likeCountNum;
            
            if (likeCountNum % 2 === 1) {
                likeBtn.innerHTML = '<i class="fa fa-heart"></i>';
                likeBtn.classList.add('liked');
                showToast('点赞成功！');
            } else {
                likeBtn.innerHTML = '<i class="fa fa-heart-o"></i>';
                likeBtn.classList.remove('liked');
                showToast('已取消点赞');
            }
        }
    });
    
    // 表情选择器功能
    quickCommentBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        emojiPicker.classList.toggle('show');
    });

    // 点击表情发送评论
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            addComment(this.textContent);
            emojiPicker.classList.remove('show');
        });
    });

    // 点击其他地方关闭表情选择器
    document.addEventListener('click', function(e) {
        if (!emojiPicker.contains(e.target) && e.target !== quickCommentBtn) {
            emojiPicker.classList.remove('show');
        }
    });
    
    // 发送评论功能
    sendCommentBtn.addEventListener('click', function() {
        const comment = commentInput.value.trim();
        if (comment) {
            addComment(comment);
            commentInput.value = '';
        }
    });
    
    // 回车发送评论
    commentInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const comment = commentInput.value.trim();
            if (comment) {
                addComment(comment);
                commentInput.value = '';
            }
        }
    });

    // 添加提示信息函数
    function showToast(message) {
        // 创建提示元素
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        document.body.appendChild(toast);

        // 显示提示
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        // 2秒后移除提示
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }
});