// 允许用户拖拽重新排列项目顺序
document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.main_box2 ul');
    if (!list) return;
  
    let draggedItem = null;
  
    // 为每个列表项添加拖拽属性
    Array.from(list.children).forEach(item => {
      item.draggable = true;
      
      item.addEventListener('dragstart', function() {
        draggedItem = this;
        setTimeout(() => this.style.opacity = '0.4', 0);
      });
  
      item.addEventListener('dragend', function() {
        this.style.opacity = '1';
      });
  
      item.addEventListener('dragover', function(e) {
        e.preventDefault();
        if (this !== draggedItem) {
          const rect = this.getBoundingClientRect();
          const midY = rect.top + rect.height / 2;
          
          if (e.clientY < midY) {
            list.insertBefore(draggedItem, this);
          } else {
            list.insertBefore(draggedItem, this.nextSibling);
          }
        }
      });
    });
  
    // 添加视觉反馈样式
    const style = document.createElement('style');
    style.textContent = `
      .main_box2 ul li[draggable="true"] {
        cursor: move;
        transition: transform 0.2s;
      }
      .main_box2 ul li.drag-over {
        border: 2px dashed #fac013;
      }
    `;
    document.head.appendChild(style);
  });

// 确保在DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 创建按钮
    const randomBtn = document.createElement('button');
    randomBtn.textContent = '🎲 随机推荐';
    randomBtn.className = 'random-explore-btn';
    
    // 关键修改：插入到body末尾
    document.body.insertAdjacentElement('beforeend', randomBtn);
  
    // 随机跳转功能
    randomBtn.addEventListener('click', function() {
      const items = document.querySelectorAll('.main_box2 ul li');
      if (items.length === 0) return;
      
      const randomItem = items[Math.floor(Math.random() * items.length)];
      randomItem.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // 添加临时高亮类
      randomItem.classList.add('highlight-item');
      setTimeout(() => {
        randomItem.classList.remove('highlight-item');
      }, 2000);
    });
  });
//夜间模式
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // 轮播图功能
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;
    
    // 创建指示点
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // 更新轮播图位置
    function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // 更新指示点状态
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    
    // 更新幻灯片active状态
    slides.forEach((slide, index) => {
        const isActive = index === currentIndex;
        slide.classList.toggle('active', isActive);
        
        const h3 = slide.querySelector('h3');
        const p = slide.querySelector('p');
        
        if(isActive) {
            // 重置动画确保每次切换都能触发
            h3.style.animation = 'none';
            p.style.animation = 'none';
            // 强制重绘
            void h3.offsetWidth;
            void p.offsetWidth;
            // 重新应用动画
            h3.style.animation = 'fadeInUp 1s ease-out 0.3s forwards';
            p.style.animation = 'fadeInUp 1s ease-out 0.6s forwards';
        } else {
            // 非活动幻灯片保持隐藏状态
            h3.style.opacity = '0';
            p.style.opacity = '0';
            h3.style.animation = 'none';
            p.style.animation = 'none';
        }
    });
}
    
    // 跳转到指定幻灯片
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // 下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }
    
    // 上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    // 按钮事件
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // 自动轮播
    let slideInterval = setInterval(nextSlide, 5000);
    
    // 鼠标悬停时暂停自动轮播
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});