class AIAssistant {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.isTyping = false;
        this.apiKey = 'sk-63f64b33f56c4c14a4a9284be1a1fc11'; // 这里需要填入您的API密钥
        this.apiEndpoint = 'https://api.deepseek.com/v1/chat/completions'; // 或其他大模型API端点
        this.init();
    }

    init() {
        // 创建AI助手界面
        this.createAssistantUI();
        // 绑定事件
        this.bindEvents();
        // 添加欢迎消息
        this.addMessage('assistant', '你好！我是敦煌文化AI助手，有什么可以帮你的吗？');
    }

    createAssistantUI() {
        // 创建主容器
        const assistant = document.createElement('div');
        assistant.className = 'ai-assistant';
        
        // 创建悬浮按钮
        const button = document.createElement('button');
        button.className = 'ai-assistant-button';
        button.innerHTML = '<img src="./images/ai-assistant.png" alt="AI助手">';
        
        // 创建聊天窗口
        const window = document.createElement('div');
        window.className = 'ai-assistant-window';
        window.innerHTML = `
            <div class="ai-assistant-header">
                <h3>
                    <img src="./images/ai-assistant.png" alt="AI助手">
                    敦煌文化AI助手
                </h3>
                <button class="ai-assistant-close">×</button>
            </div>
            <div class="ai-assistant-messages"></div>
            <div class="ai-assistant-input">
                <input type="text" placeholder="请输入你的问题...">
                <button>发送</button>
            </div>
        `;
        
        assistant.appendChild(button);
        assistant.appendChild(window);
        document.body.appendChild(assistant);
        
        // 保存引用
        this.button = button;
        this.window = window;
        this.messagesContainer = window.querySelector('.ai-assistant-messages');
        this.input = window.querySelector('input');
        this.sendButton = window.querySelector('button');
    }

    bindEvents() {
        // 打开/关闭聊天窗口
        this.button.addEventListener('click', () => this.toggleWindow());
        this.window.querySelector('.ai-assistant-close').addEventListener('click', () => this.toggleWindow());
        
        // 发送消息
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    toggleWindow() {
        this.isOpen = !this.isOpen;
        this.window.classList.toggle('active', this.isOpen);
        if (this.isOpen) {
            this.input.focus();
        }
    }

    async sendMessage() {
        const message = this.input.value.trim();
        if (!message || this.isTyping) return;
        
        // 添加用户消息
        this.addMessage('user', message);
        this.input.value = '';
        
        // 显示正在输入状态
        this.showTypingIndicator();
        
        try {
            // 调用AI接口获取回复
            const response = await this.getAIResponse(message);
            // 移除输入状态
            this.removeTypingIndicator();
            // 添加AI回复
            this.addMessage('assistant', response);
        } catch (error) {
            this.removeTypingIndicator();
            this.addMessage('assistant', '抱歉，我遇到了一些问题，请稍后再试。');
        }
    }

    addMessage(type, content) {
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = content;
        this.messagesContainer.appendChild(message);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        this.messages.push({ type, content });
    }

    showTypingIndicator() {
        this.isTyping = true;
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<span></span><span></span><span></span>';
        this.messagesContainer.appendChild(indicator);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    removeTypingIndicator() {
        this.isTyping = false;
        const indicator = this.messagesContainer.querySelector('.typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    async getAIResponse(message) {
        try {
            // 构建对话历史
            const conversationHistory = this.messages.map(msg => ({
                role: msg.type === 'user' ? 'user' : 'assistant',
                content: msg.content
            }));

            // 添加系统提示词
            const systemPrompt = {
                role: 'system',
                content: `你是一个专业的敦煌文化AI助手，名为"敦敦"。你需要：
                1. 回答用户关于敦煌文化的问题
                2. 介绍网站各个板块的内容
                3. 提供网站功能使用指南
                4. 解释敦煌艺术特色
                5. 分享敦煌历史背景
                请用专业、友好、易懂的方式回答。`
            };

            console.log('发送API请求:', {
                endpoint: this.apiEndpoint,
                model: 'deepseek-chat',
                messageCount: conversationHistory.length + 2
            });

            // 构建API请求
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: 'deepseek-chat',
                    messages: [systemPrompt, ...conversationHistory, { role: 'user', content: message }],
                    temperature: 0.7,
                    max_tokens: 500,
                    stream: false
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                console.error('API响应错误:', {
                    status: response.status,
                    statusText: response.statusText,
                    errorData
                });
                throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log('API响应成功:', data);
            return data.choices[0].message.content;

        } catch (error) {
            console.error('AI响应错误:', error);
            // 如果API调用失败，使用本地回复
            return this.getLocalResponse(message);
        }
    }

    // 本地回复作为备用
    getLocalResponse(message) {
        const responses = {
            '你好': '你好！我是敦煌文化AI助手敦敦，很高兴为你服务。你可以向我询问关于敦煌文化、莫高窟、壁画、舞蹈、音乐等任何问题。',
            '敦煌': '敦煌是古丝绸之路上的重要城市，以莫高窟闻名于世。我们的网站提供了丰富的敦煌文化内容，包括敦煌学的由来、历史简介、壁画精选、敦煌手势等板块。',
            '莫高窟': '莫高窟，俗称千佛洞，是世界上现存规模最大、内容最丰富的佛教艺术圣地。现存735个洞窟，跨越4至14世纪，保存彩塑3000余尊、壁画4.5万平方米。',
            '壁画': '敦煌壁画以其精美的艺术价值和丰富的历史文化内涵而闻名于世。在我们的网站中，你可以欣赏到乐器主题和舞蹈主题的精选壁画。',
            '舞蹈': '敦煌石窟展现了千姿百态、灵动飘逸的舞蹈艺术，包括飞天舞者、伎乐菩萨等。在"舞蹈主题"板块中，你可以欣赏到这些优美的舞蹈形象。',
            '音乐': '敦煌石窟的乐器图像以佛教音乐为主题。在"乐器主题"板块中，你可以了解各种古代乐器的形态和特点。',
            '手势': '敦煌手势是佛教艺术中的重要表现形式，包括化须弥山手、持莲手等多种手势。在"敦煌手势"板块中，你可以详细了解这些手势的含义。',
            '寻梦敦煌': '"寻梦敦煌"板块展示了现代艺术家对敦煌文化的创新诠释，包括敦煌纹样、飞天、音韵等主题的现代创作。',
            '导航': '网站顶部导航栏提供了所有主要板块的入口，包括：网站首页、敦煌学的由来、历史简介、壁画精选（乐器主题、舞蹈主题）、敦煌手势、寻梦敦煌等。',
            '搜索': '在网站右上角有搜索框，你可以输入关键词快速找到感兴趣的内容。',
            '登录': '点击右上角的"登录"按钮可以进行用户登录，登录后可以享受更多功能。',
            '帮助': '我可以帮你了解：\n1. 敦煌文化基础知识\n2. 网站各个板块的内容\n3. 如何浏览和使用网站功能\n4. 敦煌艺术特色\n5. 历史背景介绍\n请告诉我你想了解哪方面的内容？'
        };

        // 简单的关键词匹配
        for (const [key, value] of Object.entries(responses)) {
            if (message.includes(key)) {
                return value;
            }
        }

        return '抱歉，我暂时无法回答这个问题。你可以询问关于：\n1. 敦煌文化基础知识\n2. 网站功能使用\n3. 壁画艺术特色\n4. 历史背景介绍\n5. 具体板块内容\n请告诉我你想了解哪方面的内容？';
    }
}

// 初始化AI助手
document.addEventListener('DOMContentLoaded', () => {
    window.aiAssistant = new AIAssistant();
});

document.addEventListener('DOMContentLoaded', function() {
    const assistantButton = document.querySelector('.ai-assistant-button');
    const assistantWindow = document.querySelector('.ai-assistant-window');
    const closeButton = document.querySelector('.ai-assistant-close');
    const inputField = document.querySelector('.ai-assistant-input input');
    const sendButton = document.querySelector('.ai-assistant-input button');
    const messagesContainer = document.querySelector('.ai-assistant-messages');
    const initialTooltip = document.querySelector('.initial-tooltip');
    const tooltipClose = document.querySelector('.tooltip-close');

    // 显示初始提示对话框
    setTimeout(() => {
        initialTooltip.style.display = 'block';
    }, 2000);

    // 关闭提示对话框
    tooltipClose.addEventListener('click', () => {
        initialTooltip.style.display = 'none';
    });

    // 点击AI助手按钮时关闭提示对话框
    assistantButton.addEventListener('click', () => {
        initialTooltip.style.display = 'none';
        assistantWindow.style.display = 'flex';
        // 添加消息提示
        addMessage('您好！我是敦煌文化AI助手，很高兴为您服务。请问有什么可以帮您的吗？', 'assistant');
    });

    // 关闭助手窗口
    closeButton.addEventListener('click', () => {
        assistantWindow.style.display = 'none';
    });

    // 发送消息
    function sendMessage() {
        const message = inputField.value.trim();
        if (message) {
            addMessage(message, 'user');
            inputField.value = '';
            // 模拟AI回复
            setTimeout(() => {
                addMessage('感谢您的提问，我正在思考中...', 'assistant');
            }, 500);
        }
    }

    // 添加消息到聊天窗口
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // 发送按钮点击事件
    sendButton.addEventListener('click', sendMessage);

    // 输入框回车事件
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // 添加鼠标悬停效果
    assistantButton.addEventListener('mouseenter', () => {
        assistantButton.style.transform = 'scale(1.1)';
    });

    assistantButton.addEventListener('mouseleave', () => {
        assistantButton.style.transform = 'scale(1)';
    });
}); 