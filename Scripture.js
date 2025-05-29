// 在文档2.js中添加
document.addEventListener('DOMContentLoaded', function() {
    // 创建筛选按钮 - 根据图片中的实际选项卡修改
    const filterContainer = document.createElement('div');
    filterContainer.className = 'gesture-filter';
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">全部手势</button>
        <button class="filter-btn" data-filter="gaochang">高昌</button>
        <button class="filter-btn" data-filter="beiei">北魏</button>
        <button class="filter-btn" data-filter="tang">唐代</button>
        <button class="filter-btn" data-filter="song">宋代</button>
        <button class="filter-btn" data-filter="yuan">元代</button>
        <div class="result-counter">共找到 ${document.querySelectorAll('#Documents_box ul li').length} 个手势</div>
    `;
    
    // 插入到标题下方
    const mainBox = document.getElementById('main_box');
    const h3 = mainBox.querySelector('h3');
    mainBox.insertBefore(filterContainer, h3.nextSibling);
    
    // 筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn:not(.result-counter)');
    const gestureItems = document.querySelectorAll('#Documents_box ul li');
    const resultCounter = document.querySelector('.result-counter');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            let visibleCount = 0;
            
            // 筛选项目
            gestureItems.forEach(item => {
                const eraText = item.querySelector('.jing_txt p:nth-child(2) span').textContent;
                
                // 改进匹配逻辑，处理不同格式的朝代信息
                let matchesFilter = false;
                
                if (filter === 'all') {
                    matchesFilter = true;
                } else {
                    // 处理不同格式的朝代信息
                    const eraLower = eraText.toLowerCase();
                    
                    if (filter === 'gaochang' && eraLower.includes('高昌')) {
                        matchesFilter = true;
                    } else if (filter === 'beiei' && eraLower.includes('北魏')) {
                        matchesFilter = true;
                    } else if (filter === 'tang' && (eraLower.includes('唐') || eraText.includes('唐代'))) {
                        matchesFilter = true;
                    } else if (filter === 'song' && (eraLower.includes('宋') || eraText.includes('宋代'))) {
                        matchesFilter = true;
                    } else if (filter === 'yuan' && (eraLower.includes('元') || eraText.includes('元代'))) {
                        matchesFilter = true;
                    }
                }
                
                if(matchesFilter) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // 更新计数器
            resultCounter.textContent = `共找到 ${visibleCount} 个手势`;
            
            // 确保清除浮动
            document.querySelector('.clear').style.display = 'block';
        });
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

// 灯箱功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有手势图片和灯箱元素
    const gestureImages = document.querySelectorAll('.jing_img img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = lightbox.querySelector('.close-btn');
    const prevBtn = lightbox.querySelector('.prev-btn');
    const nextBtn = lightbox.querySelector('.next-btn');
    const gestureName = lightbox.querySelector('.gesture-name');
    const gestureEra = lightbox.querySelector('.gesture-era');
    const imageCounter = lightbox.querySelector('.image-counter');
    
    let currentIndex = 0;
    
    // 打开灯箱并显示指定索引的图片
    function openLightbox(index) {
        if (index < 0 || index >= gestureImages.length) return;
        currentIndex = index;
        updateLightboxContent();
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // 更新灯箱内容
    function updateLightboxContent() {
        if (!gestureImages.length) return;
        
        const currentImg = gestureImages[currentIndex];
        const parentLi = currentImg.closest('li');
        
        if (!currentImg || !parentLi) return;
        
        lightboxImg.src = currentImg.src;
        lightboxImg.alt = currentImg.alt;
        
        const nameElement = parentLi.querySelector('.jing_txt p:nth-child(1)');
        const eraElement = parentLi.querySelector('.jing_txt p:nth-child(2) span');
        
        if (nameElement) gestureName.textContent = nameElement.textContent;
        if (eraElement) gestureEra.textContent = eraElement.textContent;
        
        imageCounter.textContent = `${currentIndex + 1} / ${gestureImages.length}`;
    }
    
    // 关闭灯箱
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    // 绑定图片点击事件
    gestureImages.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });
    
    // 导航按钮事件
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + gestureImages.length) % gestureImages.length;
            updateLightboxContent();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % gestureImages.length;
            updateLightboxContent();
        });
    }
    
    // 关闭按钮和背景点击
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + gestureImages.length) % gestureImages.length;
                updateLightboxContent();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % gestureImages.length;
                updateLightboxContent();
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
});