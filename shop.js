// 商品数据
const products = [
    {
        id: 1,
        name: "飞天茶杯",
        price: 29.9,
        originalPrice: 39.9,
        category: "艺术复制品",
        image: "images/products/cap.png",
        description: "手握千年敦煌艺术，白瓷胎体上飞天翩跹起舞，高温釉下彩工艺确保图案历久弥新。杯口鎏金描边，搭配莲花底托，品茶时尽显东方美学。",
        sales: 128,
        stock: 50,
        discount: {
            endTime: new Date('2025-05-29T18:00:00'), // 2025年5月29日18:00
            rate: 0.75
        },
        tags: ["折扣"]
    },
    {
        id: 2,
        name: "琵琶梳子",
        price: 149,
        originalPrice: 199,
        category: "服饰配饰",
        image: "images/products/shuzi.png",
        description: "以莫高窟《反弹琵琶》为灵感，檀木梳身雕刻细腻乐舞纹样，梳齿圆润不伤发。随身携带的敦煌艺术品，梳发时仿佛听见丝路驼铃。",
        sales: 256,
        stock: 30,
        tags: [ "热销"]
    },
    {
        id: 3,
        name: "限定魔方",
        price: 199,
        originalPrice: 299,
        category: "文创文具",
        image: "images/products/mofang.png",
        description: "六面重现敦煌经典壁画：飞天、藻井、九色鹿。特制哑光材质防滑耐磨，转动时壁画元素交错变幻，既是益智玩具更是移动的艺术展。",
        sales: 89,
        stock: 20,
        discount: {
            endTime: new Date('2025-05-29T19:00:00'), // 2025年5月29日19:00
            rate: 0.67
        },
        tags: [ "折扣"]
    },
    {
        id: 4,
        name: "主题书签",
        price: 19.9,
        originalPrice: 29.9,
        category: "文创文具",
        image: "images/products/bookmark.png",
        description: "0.3mm加厚黄铜蚀刻飞天剪影，流苏缀有青金石珠子。金属镂空工艺呈现敦煌纹样，阅读时如同展开一幅微型经卷。",
        sales: 512,
        stock: 100,
        tags: ["限定"]
    },
    {
        id: 5,
        name: "主题书签",
        price: 15.9,
        originalPrice: 29.9,
        category: "文创文具",
        image: "images/products/shuqian1.png",
        description: "仿古宣纸烫金工艺，复刻敦煌写经体《心经》片段。边缘做旧处理呈现岁月质感，配套流苏采用传统中国结编织技法。",
        sales: 52,
        stock: 100,
        tags: ["热销"]
    },
    {
        id: 6,
        name: "主题书签",
        price: 19.9,
        originalPrice: 27.9,
        category: "文创文具",
        image: "images/products/shuqian2.png",
        description: "天然小叶紫檀薄片雕刻供养人像，背面阴刻洞窟编号。木纹自然形成的山水感与雕刻相映成趣，附赠真丝保护套。",
        sales: 192,
        stock: 100,
        tags: ["热销"]
    },
    {
        id: 7,
        name: "主题书签",
        price: 18.9,
        originalPrice: 29.9,
        category: "文创文具",
        image: "images/products/shuqian3.png",
        description: "掐丝珐琅工艺再现敦煌色谱，矿物颜料点缀的飞天衣袂可触立体纹理。每款独立编号，附赠洞窟色彩解析卡。",
        sales: 110,
        stock: 135,
        tags: ["热销","限定"]
    },
    {
        id: 8,
        name: "敦煌冰箱贴",
        price: 19.9,
        originalPrice: 29.9,
        category: "家居装饰",
        image: "images/products/bingxiangtie.png",
        description: "3D浮雕工艺立体呈现菩萨造像，磁体包裹在仿壁画泥坯中。开合冰箱时，阳光折射会让贴面闪现壁画中特有的云母闪光效果。",
        sales: 345,
        stock: 80,
        tags: ["限定"]
    },
    {
        id: 9,
        name: "折扇夜灯",
        price: 19.9,
        originalPrice: 39.9,
        category: "家居装饰",
        image: "images/products/fanlight.png",
        description: "仿绢本设色工艺呈现《五台山图》，LED灯珠透过双层宣纸营造洞窟烛光效果。可调节三档亮度，展开后形成1.2米全景灯光画卷。",
        sales: 178,
        stock: 40,
        discount: {
            endTime: new Date('2025-05-29T20:00:00'), // 2025年5月29日20:00
            rate: 0.5
        },
        tags: ["折扣"]
    },
    {
        id: 10,
        name: "敦煌绮梦",
        price: 8.99,
        originalPrice: 15.27,
        category: "服饰配饰",
        image: "images/products/fushi1.png",
        description: "100%桑蚕丝斜纹绸，数码印花精准还原壁画矿物色。佩斯利纹样中暗藏十二生肖敦煌变体图，边缘缀有仿经卷残卷流苏。",
        sales: 123,
        stock: 76,
        tags: ["热销","限定"]
    },
    {
        id: 11,
        name: "丝路流彩",
        price: 7.495,
        originalPrice: 14.99,
        category: "服饰配饰",
        image: "images/products/fushi2.png",
        description: "阿富汗青金石与和田玉珠交替串联，银饰件采用失蜡法铸造骆驼商队造型。每颗珠子对应一个丝路古城，佩戴时如同重走丝绸之路。",
        sales: 18,
        stock: 40,
        discount: {
            endTime: new Date('2025-05-29T21:00:00'), // 2025年5月29日21:00
            rate: 0.5
        },
        tags: ["折扣"]
    },
    {
        id: 12,
        name: "莫高遗韵",
        price: 8.88,
        originalPrice: 14.99,
        category: "服饰配饰",
        image: "images/products/fushi3.png",
        description: "纯银錾刻供养人像吊坠，背面刻有对应洞窟编号。仿古做旧工艺呈现千年氧化效果，配链采用唐代金银细工中的绞丝工艺。",
        sales: 45,
        stock: 80,
        tags: ["热销"]
    },
    {
        id: 13,
        name: "飞天茶杯",
        price: 37.5,
        originalPrice: 49.9,
        category: "艺术复制品",
        image: "images/products/cap1.png",
        description: "仿辽三彩工艺，杯身呈现《药师经变》全景。独家专利窑变技术使釉色随温度变化，注热水时飞天衣带会显现隐藏的经文暗纹。",
        sales: 18,
        stock: 79,
        discount: {
            endTime: new Date('2025-05-29T18:00:00'), // 2025年5月29日18:00
            rate: 0.75
        },
        tags: ["折扣"]
    },
    {
        id: 14,
        name: "飞天茶杯",
        price: 28.5,
        originalPrice: 37.9,
        category: "艺术复制品",
        image: "images/products/cap2.png",
        description: "甜白瓷胎体薄至0.3cm，透光可见飞天投影。杯盖设计取材于华盖纹样，内置茶漏雕刻八宝吉祥纹，三才杯结构暗合天地人理念。",
        sales: 138,
        stock: 50,
        tags: ["热销"]
    },
    {
        id: 15,
        name: "飞天茶杯",
        price: 29.9,
        originalPrice: 39.9,
        category: "艺术复制品",
        image: "images/products/cap3.png",
        description: "创新将敦煌色系融入现代骨瓷，天青釉底色搭配数字化复原的褪色壁画效果。杯柄设计取材于敦煌古乐器箜篌造型，握感符合人体工学。",
        sales: 128,
        stock: 50,
        tags: ["新品"]
    },
    {
        id: 16,
        name: "飞天茶杯",
        price: 29.9,
        originalPrice: 39.9,
        category: "艺术复制品",
        image: "images/products/cap4.png",
        description: "采用已失传的唐代绞胎工艺，黏土中混入敦煌五色沙，每只茶杯都有独一无二的流沙纹路。配套茶托复刻藏经洞经卷木匣纹样。",
        sales: 28,
        stock: 93,
        discount: {
            endTime: new Date('2025-05-29T19:00:00'), // 2025年5月29日19:00
            rate: 0.75
        },
        tags: ["折扣"]
    },
    {
        id: 17,
        name: "飞天花瓶",
        price: 29.9,
        originalPrice: 39.9,
        category: "家居装饰",
        image: "images/products/jiaju1.png",
        description: "仿北魏彩塑佛龛造型，瓶身开光处手绘《鹿王本生图》。内胆采用专利双層结构，插花时可营造壁画中常见的背光特效。",
        sales: 75,
        stock: 89,
        tags: ["热销","新品"]
    },
    {
        id: 18,
        name: "九色鹿烛台",
        price: 19.9,
        originalPrice: 29.9,
        category: "家居装饰",
        image: "images/products/jiaju2.png",
        description: "失蜡法铸造青铜鹿身，鹿角延伸为莲花烛托。烛光透过镂空鹿身投射出壁画剪影，配套特制香料蜡烛燃烧时会散发敦煌香方复刻的檀香。",
        sales: 55,
        stock: 88,
        tags: ["热销","新品"]
    },
    {
        id: 19,
        name: "佛像茶壶",
        price: 39.9,
        originalPrice: 59.9,
        category: "家居装饰",
        image: "images/products/jiaju3.png",
        description: "壶钮为3D打印复原的45窟佛首，壶身浮雕《金刚经》变文。专利侧把设计灵感来自香炉柄，倒茶时壶内机关会使茶水呈现瀑布效果。",
        sales: 45,
        stock: 80,
        tags: ["热销","限定","新品"]
    }
];

// 购物车数据
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM 元素
const productsGrid = document.querySelector('.products-grid');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartItems = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const totalPrice = document.querySelector('.total-price');
const searchInput = document.querySelector('.search-bar input');
const categoryLinks = document.querySelectorAll('.category-list a');
const sortSelect = document.querySelector('.sort-options select');
const cartIcon = document.querySelector('.cart-icon');
const closeCartBtn = document.querySelector('.close-cart');
const priceSlider = document.getElementById('priceSlider');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');

// 显示商品
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // 计算折扣信息
    const discountInfo = product.discount ? `
        <div class="discount-badge">
            <span class="discount-rate">${Math.round((1 - product.discount.rate) * 100)}% OFF</span>
            <div class="countdown" data-end="${product.discount.endTime.getTime()}">
                <span class="countdown-hours">00</span>:
                <span class="countdown-minutes">00</span>:
                <span class="countdown-seconds">00</span>
            </div>
        </div>
    ` : '';

    // 计算库存状态
    const stockStatus = product.stock <= 10 ? 
        `<div class="stock-warning">仅剩 ${product.stock} 件</div>` : '';

    card.innerHTML = `
        <div class="product-tags">
            ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
        </div>
        ${discountInfo}
        ${stockStatus}
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price-container">
                <p class="product-price">${product.price.toFixed(2)}</p>
                ${product.originalPrice ? `<p class="original-price">${product.originalPrice.toFixed(2)}</p>` : ''}
            </div>
            <div class="product-stats">
                <span class="sales-count">已售 ${product.sales} 件</span>
                <span class="stock-count">库存 ${product.stock} 件</span>
            </div>
            <button class="add-to-cart" data-id="${product.id}">加入购物车</button>
        </div>
        
        <!-- 添加详情标签和弹出框 -->
        <button class="details-trigger">商品详情</button>
        <div class="product-details-popup">
            <div class="product-description">${product.description}</div>
            <div class="product-specs">
                <p><strong>分类:</strong> ${product.category}</p>
                <p><strong>库存:</strong> ${product.stock} 件</p>
            </div>
        </div>
    `;
    return card;
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', handleSearch);

    // 分类筛选
    categoryLinks.forEach(link => {
        link.addEventListener('click', handleCategoryFilter);
    });

    // 排序功能
    sortSelect.addEventListener('change', handleSort);

    // 购物车图标点击
    cartIcon.addEventListener('click', toggleCart);

    // 关闭购物车
    closeCartBtn.addEventListener('click', toggleCart);

    // 添加商品到购物车
    productsGrid.addEventListener('click', handleAddToCart);

    // 结算按钮点击
    document.querySelector('.checkout-btn').addEventListener('click', handleCheckout);

    // 标签筛选
    const tagButtons = document.querySelectorAll('.tags .tag');
    tagButtons.forEach(button => {
        button.addEventListener('click', handleTagFilter);
    });

    // 价格区间筛选
    priceSlider.addEventListener('input', handlePriceFilter);
    minPriceInput.addEventListener('input', handlePriceFilter);
    maxPriceInput.addEventListener('input', handlePriceFilter);
}

// 处理搜索
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// 处理分类筛选
function handleCategoryFilter(e) {
    e.preventDefault();
    const category = e.target.textContent;
    
    // 更新活动状态
    categoryLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');

    const filteredProducts = category === '全部商品' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
}

// 处理排序
function handleSort(e) {
    const sortBy = e.target.value;
    
    // 获取当前筛选后的商品（包括价格区间筛选）
    let filteredProducts = getFilteredProducts();

    // 根据不同的排序方式排序
    switch(sortBy) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'default':
            // 默认排序：新品 > 折扣 > 热销 > 限定
            filteredProducts.sort((a, b) => {
                const getTagPriority = (tags) => {
                    if (tags.includes('新品')) return 4;
                    if (tags.includes('折扣')) return 3;
                    if (tags.includes('热销')) return 2;
                    if (tags.includes('限定')) return 1;
                    return 0;
                };
                
                const priorityA = getTagPriority(a.tags);
                const priorityB = getTagPriority(b.tags);
                
                if (priorityA !== priorityB) {
                    return priorityB - priorityA;
                }
                
                // 如果标签优先级相同，则按销量排序
                return b.sales - a.sales;
            });
            break;
    }

    displayProducts(filteredProducts);
}

// 获取当前筛选后的商品
function getFilteredProducts() {
    // 获取当前选中的分类和标签
    const activeCategory = document.querySelector('.category-list a.active').textContent;
    const activeTags = Array.from(document.querySelectorAll('.tags .tag.active'))
        .map(tag => tag.textContent);
    
    // 获取价格区间
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || 300;
    
    // 筛选商品
    let filteredProducts = products;

    // 应用分类筛选
    if (activeCategory !== '全部商品') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === activeCategory
        );
    }

    // 应用标签筛选
    if (activeTags.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            product.tags.some(tag => activeTags.includes(tag))
        );
    }

    // 应用价格筛选
    filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );

    return filteredProducts;
}

// 处理添加到购物车
function handleAddToCart(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === productId);
        
        if (product) {
            if (addToCart(product)) {
                updateCartUI();
                displayProducts(products); // 更新商品显示
                showNotification('商品已添加到购物车');
            }
        }
    }
}

// 添加到购物车
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
            product.stock -= 1;
        } else {
            showNotification('库存不足！');
            return false;
        }
    } else {
        if (product.stock > 0) {
            cart.push({
                ...product,
                quantity: 1
            });
            product.stock -= 1;
        } else {
            showNotification('库存不足！');
            return false;
        }
    }
    return true;
}

// 更新购物车UI
function updateCartUI() {
    // 更新购物车数量
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // 更新购物车列表
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="product-price">${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="remove-item" data-id="${item.id}">×</button>
        </div>
    `).join('');

    // 更新总价
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `${total.toFixed(2)}`;

    // 保存到本地存储
    localStorage.setItem('cart', JSON.stringify(cart));

    // 添加数量控制按钮事件监听
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', handleQuantityChange);
    });

    // 添加删除按钮事件监听
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', handleRemoveItem);
    });
}

// 处理商品数量变化
function handleQuantityChange(e) {
    const productId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (e.target.classList.contains('plus')) {
            item.quantity += 1;
        } else if (e.target.classList.contains('minus')) {
            item.quantity = Math.max(1, item.quantity - 1);
        }
        updateCartUI();
    }
}

// 处理删除商品
function handleRemoveItem(e) {
    const productId = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification('商品已从购物车移除');
}

// 处理结算
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('购物车为空，请先添加商品');
        return;
    }

    // 这里可以添加实际的结算逻辑
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderDetails = cart.map(item => 
        `${item.name} × ${item.quantity} = ¥${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    if (confirm(`确认结算以下商品？\n\n${orderDetails}\n\n总计：¥${total.toFixed(2)}`)) {
        // 清空购物车
        cart = [];
        updateCartUI();
        showNotification('订单已提交，感谢您的购买！');
    }
}

// 切换购物车显示
function toggleCart() {
    cartSidebar.classList.toggle('active');
}

// 显示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // 添加样式
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '4px';
    notification.style.zIndex = '1000';
    notification.style.animation = 'slideIn 0.3s ease-out';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .cart-item {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid var(--border-color);
    }
    .cart-item-image {
        width: 60px;
        height: 60px;
        object-fit: cover;
        margin-right: 1rem;
    }
    .cart-item-info {
        flex: 1;
    }
    .quantity-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
    .quantity-btn {
        width: 24px;
        height: 24px;
        border: 1px solid var(--border-color);
        background: white;
        border-radius: 4px;
        cursor: pointer;
    }
    .quantity-btn:hover {
        background-color: var(--background-color);
    }
    .remove-item {
        background: none;
        border: none;
        color: #ff4444;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.5rem;
    }
    .remove-item:hover {
        color: #cc0000;
    }
`;
document.head.appendChild(style);

// 初始化轮播图
const bannerSwiper = new Swiper('.banner-swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 更新倒计时
function updateCountdowns() {
    const countdowns = document.querySelectorAll('.countdown');
    console.log('Found countdowns:', countdowns.length); // 添加调试信息
    
    countdowns.forEach(countdown => {
        const endTime = parseInt(countdown.dataset.end);
        const now = Date.now();
        const timeLeft = endTime - now;
        
        console.log('End time:', endTime, 'Now:', now, 'Time left:', timeLeft); // 添加调试信息

        if (timeLeft <= 0) {
            countdown.parentElement.remove();
            return;
        }

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const hoursEl = countdown.querySelector('.countdown-hours');
        const minutesEl = countdown.querySelector('.countdown-minutes');
        const secondsEl = countdown.querySelector('.countdown-seconds');

        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    });
}

// 处理标签筛选
function handleTagFilter(e) {
    const selectedTag = e.target.textContent;
    
    // 更新标签按钮状态
    const tagButtons = document.querySelectorAll('.tags .tag');
    tagButtons.forEach(button => {
        if (button.textContent === selectedTag) {
            button.classList.toggle('active');
        } else {
            button.classList.remove('active');
        }
    });

    // 获取所有选中的标签
    const activeTags = Array.from(document.querySelectorAll('.tags .tag.active'))
        .map(button => button.textContent);

    // 筛选商品
    let filteredProducts = products;
    if (activeTags.length > 0) {
        filteredProducts = products.filter(product => 
            product.tags.some(tag => activeTags.includes(tag))
        );
    }

    // 显示筛选后的商品
    displayProducts(filteredProducts);
}

// 处理价格筛选
function handlePriceFilter(e) {
    // 如果是滑块触发的，更新最高价输入框
    if (e.target === priceSlider) {
        maxPriceInput.value = priceSlider.value;
    }

    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || 300;
    
    // 确保最小值不大于最大值
    if (minPrice > maxPrice) {
        minPriceInput.value = maxPrice;
        return;
    }

    // 获取当前排序方式
    const currentSort = sortSelect.value;
    
    // 获取筛选后的商品
    let filteredProducts = getFilteredProducts();
    
    // 应用当前排序
    handleSort({ target: { value: currentSort } });
}

// 初始化价格范围
function initPriceRange() {
    // 设置滑块和输入框的初始值
    const maxPrice = Math.max(...products.map(product => product.price));
    priceSlider.max = Math.ceil(maxPrice / 10) * 10; // 向上取整到最接近的10的倍数
    maxPriceInput.max = priceSlider.max;
    maxPriceInput.value = priceSlider.max;
}

// 确保 init() 被调用
function init() {
    displayProducts(products);
    setupEventListeners();
    initPriceRange(); // 初始化价格范围
    setInterval(updateCountdowns, 1000);
    updateCountdowns(); // 立即执行一次
}

document.addEventListener('DOMContentLoaded', init);

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

// 广告弹窗控制
document.addEventListener('DOMContentLoaded', function() {
    const adPopup = document.querySelector('.ad-popup');
    const closeAdBtn = document.querySelector('.close-ad');
    const adItems = document.querySelectorAll('.ad-item');
    
    // 重置动画
    function resetAnimation() {
        adItems.forEach(item => {
            item.style.animation = 'none';
            item.offsetHeight; // 触发重排
            item.style.animation = null;
        });
    }
    
    // 页面加载完成后显示广告
    setTimeout(() => {
        adPopup.classList.add('active');
        resetAnimation(); // 重置动画
    }, 1000); // 在加载动画结束后显示
    
    // 关闭广告
    closeAdBtn.addEventListener('click', () => {
        adPopup.classList.remove('active');
    });
    
    // 点击广告外部区域关闭
    adPopup.addEventListener('click', (e) => {
        if (e.target === adPopup) {
            adPopup.classList.remove('active');
        }
    });
});