document.addEventListener('DOMContentLoaded', function() {
    // 页面加载动画
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    document.body.appendChild(pageTransition);

    // 页面加载完成后移除过渡效果
    window.addEventListener('load', function() {
        setTimeout(() => {
            pageTransition.classList.remove('active');
        }, 100);
    });

    // 滚动显示动画
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    scrollRevealElements.forEach(element => {
        observer.observe(element);
    });

    // 列表项动画
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100);
    });

    // 图片加载动画
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.classList.add('img-loading');
            img.addEventListener('load', function() {
                this.classList.remove('img-loading');
            });
        }
    });

    // 按钮点击波纹效果
    const buttons = document.querySelectorAll('.btn-animate');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
            
            const ripple = document.createElement('span');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 导航菜单动画
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 表单输入动画
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // 卡片悬停效果
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });

    // 文字显示动画
    const textElements = document.querySelectorAll('.text-reveal');
    textElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.animationDelay = `${i * 0.1}s`;
            element.appendChild(span);
        }
    });

    // 页面切换动画
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && this.href.startsWith(window.location.origin)) {
                e.preventDefault();
                const targetUrl = this.href;
                
                pageTransition.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500);
            }
        });
    });
}); 