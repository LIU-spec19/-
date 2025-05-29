// 获取当前页面的文件名
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    return page || 'index.html'; // 如果没有文件名，默认为index.html
}

// 设置当前页面的导航标签为active状态
function setActiveNav() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', setActiveNav); 