// 用户管理器对象
const userManager = {
    // 模拟用户数据库
    users: JSON.parse(localStorage.getItem('users')) || [
        { username: 'admin', password: '123456', nickname: '管理员' }
    ],
    
    // 登录方法
    login: function(username, password, remember) {
        const user = this.users.find(u => u.username === username && u.password === password);
        
        if (user) {
            // 保存登录状态
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', user.username);
            
            // 如果需要记住用户
            if (remember) {
                localStorage.setItem('rememberedUser', JSON.stringify({
                    username: user.username,
                    password: user.password
                }));
            } else {
                localStorage.removeItem('rememberedUser');
            }
            
            return { success: true, message: '登录成功！' };
        } else {
            return { success: false, message: '用户名或密码错误！' };
        }
    },
    
    // 注册方法
    register: function(nickname, username, password) {
        // 检查用户名是否已存在
        if (this.users.some(u => u.username === username)) {
            return { success: false, message: '用户名已存在！' };
        }
        
        // 添加新用户
        this.users.push({ username, password, nickname });
        localStorage.setItem('users', JSON.stringify(this.users));
        
        return { success: true, message: '注册成功！' };
    },
    
    // 获取当前登录用户
    getCurrentUser: function() {
        const remembered = localStorage.getItem('rememberedUser');
        if (remembered) {
            return JSON.parse(remembered);
        }
        return null;
    },
    
    // 检查登录状态
    checkLoginStatus: function() {
        const loginLink = document.getElementById('loginLink');
        const userGreeting = document.getElementById('userGreeting');
        
        if (!loginLink || !userGreeting) return;
        
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
    },
    
    // 退出登录
    logout: function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        this.checkLoginStatus();
    }
};

// 页面加载时检查登录状态
document.addEventListener('DOMContentLoaded', function() {
    userManager.checkLoginStatus();
    
    // 设置退出功能
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            userManager.logout();
            window.location.reload();
        });
    }
});