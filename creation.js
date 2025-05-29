// 点击列表项触发弹窗
document.querySelectorAll('.Co_create_works_box li').forEach(item => {
    item.addEventListener('click', function(e) {
        // 防止重复弹窗
        if (e.target.closest('.modal')) return;
        
        // 获取隐藏的完整内容
        const fullContent = this.querySelector('.full-content').innerHTML;
        
        // 创建弹窗结构
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="modal-body">${fullContent}</div>
            </div>
        `;
        
        // 添加到页面
        document.body.appendChild(modal);
        modal.style.display = 'block';
        
        // 关闭按钮事件
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
            modal.remove();
        });
        
        // 点击外部关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                modal.remove();
            }
        });
    });
});
//放大图片
document.addEventListener('DOMContentLoaded', function() {
    // 创建图片模态框
    const imageModal = document.createElement('div');
    imageModal.className = 'image-modal';
    imageModal.innerHTML = `
        <span class="close-image-modal">&times;</span>
        <div class="image-modal-content"></div>
    `;
    document.body.appendChild(imageModal);
    
    // 为每个放大按钮添加点击事件
    document.querySelectorAll('.zoom-btn').forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
            
            // 获取对应的图片URL
            const worksBoxImg = this.closest('.works_box_img');
            const imageUrl = worksBoxImg.dataset.bgImage;
            
            // 设置模态框内容
            const modalContent = imageModal.querySelector('.image-modal-content');
            modalContent.innerHTML = `<img src="${imageUrl}" alt="放大图片">`;
            
            // 显示模态框
            imageModal.classList.add('active');
        });
    });
    
    // 关闭模态框
    imageModal.querySelector('.close-image-modal').addEventListener('click', function() {
        imageModal.classList.remove('active');
    });
    
    // 点击模态框背景关闭
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.classList.remove('active');
        }
    });
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
