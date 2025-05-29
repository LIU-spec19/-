document.addEventListener('DOMContentLoaded', function() {
    const loginSpan = document.getElementById("loginTitle");
    const registerSpan = document.getElementById("registerTitle");
    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box2");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loadingOverlay = document.getElementById("loadingOverlay");
    
    // 切换登录/注册表单
    loginSpan.addEventListener("click", function() {
        box1.style.display = "block";
        box2.style.display = "none";
        loginSpan.classList.add("title_style");
        registerSpan.classList.remove("title_style");
        // 清除表单错误信息
        clearFormErrors(loginForm);
    });
    
    registerSpan.addEventListener("click", function() {
        box2.style.display = "block";
        box1.style.display = "none";
        registerSpan.classList.add("title_style");
        loginSpan.classList.remove("title_style");
        // 清除表单错误信息
        clearFormErrors(registerForm);
    });
    
    // 表单验证函数
    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');
        
        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (!input.checkValidity()) {
                isValid = false;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.textContent = input.validationMessage;
                    errorMessage.style.display = 'block';
                }
            } else {
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.style.display = 'none';
                }
            }
        });
        
        // 特殊验证：确认密码
        if (form.id === 'registerForm') {
            const password = form.querySelector('input[name="password"]');
            const confirmPassword = form.querySelector('input[name="confirmPassword"]');
            const errorMessage = confirmPassword.nextElementSibling;
            
            if (password.value !== confirmPassword.value) {
                isValid = false;
                errorMessage.textContent = '两次输入的密码不一致';
                errorMessage.style.display = 'block';
            }
        }
        
        return isValid;
    }
    
    // 清除表单错误信息
    function clearFormErrors(form) {
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.style.display = 'none';
            error.textContent = '';
        });
    }
    
    // 显示加载动画
    function showLoading() {
        loadingOverlay.style.display = 'flex';
    }
    
    // 隐藏加载动画
    function hideLoading() {
        loadingOverlay.style.display = 'none';
    }
    
    // 显示成功消息
    function showSuccessMessage(message, type = 'success') {
        const successDiv = document.createElement('div');
        successDiv.className = `success-message ${type}`;
        successDiv.textContent = message;
        document.body.appendChild(successDiv);
        
        // 添加动画类
        setTimeout(() => {
            successDiv.classList.add('show');
        }, 10);
        
        // 2秒后移除消息
        setTimeout(() => {
            successDiv.classList.remove('show');
            setTimeout(() => {
                successDiv.remove();
            }, 300);
        }, 2000);
    }

    // 登录表单提交
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm(loginForm)) {
            return;
        }
        
        const username = loginForm.querySelector('input[name="username"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;
        const remember = loginForm.querySelector('input[name="remember"]').checked;
        
        showLoading();
        
        // 调用用户管理器的登录方法
        const result = userManager.login(username, password, remember);
        
        hideLoading();
        
        if (result.success) {
            showSuccessMessage('登录成功！正在跳转...', 'success');
            // 登录成功后延迟1.5秒重定向到首页
            setTimeout(() => {
                window.location.href = './index.html';
            }, 1500);
        } else {
            showSuccessMessage(result.message, 'error');
            const errorMessage = loginForm.querySelector('input[name="password"]').nextElementSibling;
            errorMessage.textContent = result.message;
            errorMessage.style.display = 'block';
        }
    });
    
    // 注册表单提交
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm(registerForm)) {
            return;
        }
        
        const nickname = registerForm.querySelector('input[name="nickname"]').value;
        const username = registerForm.querySelector('input[name="username"]').value;
        const password = registerForm.querySelector('input[name="password"]').value;
        const confirmPassword = registerForm.querySelector('input[name="confirmPassword"]').value;
        const agree = registerForm.querySelector('input[name="agreeCheckbox"]').checked;
        
        // 验证密码一致性
        if (password !== confirmPassword) {
            showSuccessMessage('两次输入的密码不一致', 'error');
            return;
        }
        
        if (!agree) {
            showSuccessMessage('请先同意用户协议和隐私政策', 'error');
            const errorMessage = registerForm.querySelector('input[name="agreeCheckbox"]').nextElementSibling;
            errorMessage.textContent = '请先同意用户协议和隐私政策';
            errorMessage.style.display = 'block';
            return;
        }
        
        showLoading();
        
        // 调用用户管理器的注册方法
        const result = userManager.register(nickname, username, password);
        
        hideLoading();
        
        if (result.success) {
            showSuccessMessage('注册成功！正在跳转到登录页面...', 'success');
            // 注册成功后延迟1.5秒切换到登录表单
            setTimeout(() => {
                // 清空注册表单
                registerForm.reset();
                // 切换到登录表单
                loginSpan.click();
                // 自动填充用户名
                loginForm.querySelector('input[name="username"]').value = username;
                // 清空密码字段
                loginForm.querySelector('input[name="password"]').value = '';
            }, 1500);
        } else {
            showSuccessMessage(result.message, 'error');
            const errorMessage = registerForm.querySelector('input[name="username"]').nextElementSibling;
            errorMessage.textContent = result.message;
            errorMessage.style.display = 'block';
        }
    });
    
    // 实时验证输入
    const inputs = document.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                const errorMessage = this.nextElementSibling;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.style.display = 'none';
                }
            }
        });
    });
    
    // 检查是否有记住的用户
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        loginForm.querySelector('input[name="username"]').value = currentUser.username;
        loginForm.querySelector('input[name="remember"]').checked = true;
    }
});