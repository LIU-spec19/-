document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    // 点击返回顶部按钮时显示/隐藏下拉菜单
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // 点击页面其他地方时隐藏下拉菜单
    document.addEventListener('click', function(e) {
        if (!backToTopBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
    
    // 点击下拉菜单中的链接时跳转
    dropdownMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            dropdownMenu.style.display = 'none';
        }
    });
    
    // 返回顶部功能
    backToTopBtn.addEventListener('dblclick', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // 新增：显示更多内容功能
    const readMoreBtn = document.querySelector('.read-more-btn');
    const readMoreContent = document.querySelector('.read-more-content');
    
    if (readMoreBtn && readMoreContent) {
        readMoreBtn.addEventListener('click', function() {
            readMoreContent.classList.toggle('show');
            
            // 更改按钮文本
            if (readMoreContent.classList.contains('show')) {
                readMoreBtn.textContent = '收起内容';
            } else {
                readMoreBtn.textContent = '点击显示更多内容';
            }
        });
    }
});

// 当前页面高亮功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面文件名
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // 找到导航栏中对应的链接
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
            // 同时高亮父级li元素
            link.closest('li').classList.add('active');
        }
    });
});
/*搜索*/
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('simpleSearch');
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const inputValue = this.value.trim();
            const options = document.getElementById('pageSuggestions').options;
            let isValid = false;
            
            // 检查输入是否匹配datalist中的选项
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === inputValue) {
                    isValid = true;
                    break;
                }
            }
            
            if (isValid) {
                // 根据输入跳转到对应页面
                switch(inputValue) {
                    case '敦煌学的由来':
                        window.location.href = './DunhuangStudies.html';
                        break;
                    case '历史简介':
                        window.location.href = './history.html';
                        break;
                    case '音乐主题':
                        window.location.href = './music.html';
                        break;
                    case '舞蹈主题':
                        window.location.href = './dance.html';
                        break;
                    case '敦煌手势':
                        window.location.href = './Scripture.html';
                        break;
                    case '寻梦敦煌':
                        window.location.href = './creation.html';
                        break;
                }
            } else {
                // 显示不匹配提示
                alert('没有找到匹配的页面，请从下拉列表中选择或检查输入内容');
                this.focus();
            }
        }
    });
});

// 壁画精选图片旋转功能
document.addEventListener('DOMContentLoaded', function() {
    const muralItems = document.querySelectorAll('.Mural_Special_list li');
    
    muralItems.forEach(item => {
        const img = item.querySelector('img');
        
        item.addEventListener('click', function(e) {
            // 防止点击链接时触发
            if (e.target.tagName === 'A') return;
            
            // 如果正在旋转，则不重复触发
            if (img.classList.contains('rotate-y-3d')) return;
            
            // 添加旋转类
            img.classList.add('rotate-y-3d');
            
            // 动画结束后移除类
            img.addEventListener('animationend', function() {
                img.classList.remove('rotate-y-3d');
            }, { once: true });
        });
    });
});
//敦煌手势
document.addEventListener('DOMContentLoaded', function() {
    // 检查当前页面是否是 index.html
    if (document.body.dataset.page === 'index') {
        const gestureItems = document.querySelectorAll('#literature_box .Co_create_works_box li');
        
        // 创建模态框元素
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        const modalImg = document.createElement('img');
        modalImg.className = 'modal-image';
        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        // 为每个手势项添加点击事件
        gestureItems.forEach(item => {
            item.addEventListener('click', function() {
                // 获取背景图片URL
                const bgImage = this.querySelector('.works_box_img').dataset.bgImage;
                
                // 设置模态框图片
                modalImg.src = bgImage;
                
                // 显示模态框
                modal.classList.add('active');
                
                // 2秒后自动关闭
                setTimeout(() => {
                    modal.classList.remove('active');
                }, 2000);
            });
        });

        // 点击遮罩层也可关闭
        modal.addEventListener('click', function() {
            this.classList.remove('active');
        });
    }
});

// 阅读进度条
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.insertBefore(progressBar, document.body.firstChild);
    
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector('.reading-progress-bar').style.width = scrolled + '%';
    });
});

// 为乐器和舞蹈专题每个项目添加收藏按钮，状态保存在localStorage
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.main_box2 ul li');
    if (items.length === 0) return;
  
    // 初始化收藏数据
    let favorites = JSON.parse(localStorage.getItem('dunhuangFavorites')) || {};
  
    items.forEach(item => {
      const title = item.querySelector('p:nth-child(2)').textContent;
      const favBtn = document.createElement('button');
      favBtn.className = 'fav-btn';
      favBtn.innerHTML = favorites[title] ? '★ 已收藏' : '☆ 收藏';
      item.appendChild(favBtn);
  
      favBtn.addEventListener('click', () => {
        favorites[title] = !favorites[title];
        localStorage.setItem('dunhuangFavorites', JSON.stringify(favorites));
        favBtn.innerHTML = favorites[title] ? '★ 已收藏' : '☆ 收藏';
      });
    });
  
    // 基础样式
    const style = document.createElement('style');
    style.textContent = `
      .fav-btn {
        display: block; margin-top: 10px;
        padding: 5px 10px; background: #f8f8f8;
        border: 1px solid #ddd; border-radius: 4px;
        cursor: pointer;
      }
      .fav-btn:hover { background: #ffeb3b; }
    `;
    document.head.appendChild(style);
  });

// 登录增强版状态检查
function checkLoginStatus() {
    const loginLink = document.getElementById('loginLink');
    const userGreeting = document.getElementById('userGreeting');
    
    if (!loginLink || !userGreeting) {
        console.error('关键元素未找到！');
        return;
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username') || '用户';

    if (isLoggedIn) {
        loginLink.style.display = 'none';
        userGreeting.style.display = 'inline';
        document.getElementById('usernameDisplay').textContent = username;
    } else {
        loginLink.style.display = 'inline';
        userGreeting.style.display = 'none';
    }
}

// 退出功能
function setupLogout() {
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        logoutLink.addEventListener('click', function() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            checkLoginStatus(); // 立即更新UI
        });
    }
}

// 页面初始化
window.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    setupLogout();
});
// 为寻梦敦煌部分添加了解更多链接
document.addEventListener('DOMContentLoaded', function() {
    const coCreateItems = document.querySelectorAll('#Co_create_works .Co_create_works_box li');
    
    coCreateItems.forEach(item => {
        // 创建"了解更多"链接
        const learnMoreLink = document.createElement('a');
        learnMoreLink.className = 'learn-more-link';
        learnMoreLink.href = './creation.html';
        learnMoreLink.textContent = 'Learn More';
        
        // 添加到li元素中
        item.appendChild(learnMoreLink);
        
        // 确保点击链接时不触发li的点击事件
        learnMoreLink.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
});
// 为敦煌手势部分添加点击放大提示
document.addEventListener('DOMContentLoaded', function() {
    const gestureItems = document.querySelectorAll('#literature_box .Co_create_works_box li');
    
    gestureItems.forEach(item => {
        // 创建"点击放大手势图"提示
        const gestureHint = document.createElement('div');
        gestureHint.className = 'gesture-hint';
        gestureHint.textContent = '点击放大手势图';
        
        // 添加到li元素中
        item.appendChild(gestureHint);
    });
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    const pageLoader = document.querySelector('.page-loader');
    
    // 1秒后隐藏加载动画
    setTimeout(() => {
        pageLoader.classList.add('hidden');
        // 动画结束后移除元素
        setTimeout(() => {
            pageLoader.remove();
        }, 500);
    }, 1000);
});

// 图片预览功能
function initImagePreview() {
    const previewContainer = document.createElement('div');
    previewContainer.className = 'image-preview';
    previewContainer.innerHTML = `
        <button class="close-preview">&times;</button>
        <button class="prev-image">&lt;</button>
        <button class="next-image">&gt;</button>
        <img src="" alt="预览图片">
    `;
    document.body.appendChild(previewContainer);

    const preview = document.querySelector('.image-preview');
    const previewImg = preview.querySelector('img');
    const closeBtn = preview.querySelector('.close-preview');
    const prevBtn = preview.querySelector('.prev-image');
    const nextBtn = preview.querySelector('.next-image');

    let currentImageIndex = 0;
    let images = [];

    // 为所有可预览图片添加点击事件
    document.querySelectorAll('.previewable-image').forEach((img, index) => {
        img.addEventListener('click', () => {
            images = Array.from(document.querySelectorAll('.previewable-image')).map(img => img.src);
            currentImageIndex = index;
            showImage(currentImageIndex);
            preview.style.display = 'flex';
        });
    });

    function showImage(index) {
        previewImg.src = images[index];
        prevBtn.style.display = index > 0 ? 'block' : 'none';
        nextBtn.style.display = index < images.length - 1 ? 'block' : 'none';
    }

    closeBtn.addEventListener('click', () => {
        preview.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showImage(currentImageIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            showImage(currentImageIndex);
        }
    });

    // 点击背景关闭预览
    preview.addEventListener('click', (e) => {
        if (e.target === preview) {
            preview.style.display = 'none';
        }
    });

    // 键盘控制
    document.addEventListener('keydown', (e) => {
        if (preview.style.display === 'flex') {
            if (e.key === 'Escape') {
                preview.style.display = 'none';
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
}

// 返回顶部按钮
function initBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    initImagePreview();
    initBackToTop();
});

// 在js/main.js中添加图片懒加载功能
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 在js/main.js中添加防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动事件处理
window.addEventListener('scroll', debounce(() => {
    // 处理滚动相关逻辑
}, 100));

// 在js/main.js中添加分享按钮功能
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: '敦煌文化',
                    text: '探索敦煌文化的瑰宝',
                    url: window.location.href
                });
            }
        });
    });
}

// 在js/main.js中添加
function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');
}

// 在发送消息时使用
input.addEventListener('input', (e) => {
    e.target.value = sanitizeInput(e.target.value);
});

// 在js/main.js中添加
window.addEventListener('error', (e) => {
    console.error('页面错误:', e.message);
    // 可以添加错误上报逻辑
});

// 添加图片加载错误处理
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        this.src = './images/placeholder.png';
    };
});

// 在js/main.js中添加
const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('存储失败:', e);
        }
    },
    get: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.error('读取失败:', e);
            return null;
        }
    }
};

