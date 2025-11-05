const StorageManager = {
    KEYS: {
        USERS: 'food_delivery_users',
        SESSION: 'food_delivery_session',
        CART: 'food_delivery_cart'
    },

    loadUsers() {
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.USERS)) || {};
        } catch {
            return {};
        }
    },

    saveUsers(users) {
        localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
    },

    loadSession() {
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.SESSION)) || null;
        } catch {
            return null;
        }
    },

    saveSession(session) {
        localStorage.setItem(this.KEYS.SESSION, JSON.stringify(session));
    },

    clearSession() {
        localStorage.removeItem(this.KEYS.SESSION);
    },

    loadCart() {
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.CART)) || { count: 0 };
        } catch {
            return { count: 0 };
        }
    },

    saveCart(cart) {
        localStorage.setItem(this.KEYS.CART, JSON.stringify(cart));
    }
};

const MockData = {
    restaurants: [
        {
            name: 'Burger House',
            cuisine: 'Бургеры, Фастфуд',
            rating: '4.8',
            deliveryTime: '20-30 мин',
            image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Бургеры',
            freeDelivery: true,
            priceRange: '₽₽'
        },
        {
            name: 'Pizza Palace',
            cuisine: 'Пицца, Итальянская',
            rating: '4.7',
            deliveryTime: '25-35 мин',
            image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Пицца',
            freeDelivery: false,
            priceRange: '₽₽'
        },
        {
            name: 'Суши Мастер',
            cuisine: 'Суши, Японская',
            rating: '4.9',
            deliveryTime: '30-40 мин',
            image: 'https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Суши',
            freeDelivery: true,
            priceRange: '₽₽₽'
        },
        {
            name: 'Healthy Bowl',
            cuisine: 'Здоровая еда, Салаты',
            rating: '4.6',
            deliveryTime: '15-25 мин',
            image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Здоровье',
            freeDelivery: false,
            priceRange: '₽₽'
        },
        {
            name: 'Вьетнам Фо',
            cuisine: 'Вьетнамская, Азия',
            rating: '4.7',
            deliveryTime: '25-35 мин',
            image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Азия',
            freeDelivery: true,
            priceRange: '₽₽'
        },
        {
            name: 'Хинкали & Хачапури',
            cuisine: 'Грузинская',
            rating: '4.8',
            deliveryTime: '30-40 мин',
            image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Грузия',
            freeDelivery: false,
            priceRange: '₽₽'
        },
        {
            name: 'Sweet Dreams',
            cuisine: 'Десерты, Выпечка',
            rating: '4.9',
            deliveryTime: '20-30 мин',
            image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Десерты',
            freeDelivery: true,
            priceRange: '₽'
        },
        {
            name: 'Coffee Time',
            cuisine: 'Кофе, Напитки',
            rating: '4.5',
            deliveryTime: '10-20 мин',
            image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Кофе',
            freeDelivery: false,
            priceRange: '₽'
        },
        {
            name: 'Green Life',
            cuisine: 'Веганское, Здоровье',
            rating: '4.7',
            deliveryTime: '25-35 мин',
            image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Веган',
            freeDelivery: true,
            priceRange: '₽₽'
        },
        {
            name: 'Рамен Дом',
            cuisine: 'Рамен, Азия',
            rating: '4.8',
            deliveryTime: '25-35 мин',
            image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Азия',
            freeDelivery: false,
            priceRange: '₽₽'
        },
        {
            name: 'Combo Kings',
            cuisine: 'Комбо предложения',
            rating: '4.6',
            deliveryTime: '20-30 мин',
            image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Комбо',
            freeDelivery: true,
            priceRange: '₽₽'
        },
        {
            name: 'Паста Мания',
            cuisine: 'Итальянская, Паста',
            rating: '4.7',
            deliveryTime: '25-35 мин',
            image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Паста',
            freeDelivery: false,
            priceRange: '₽₽'
        }
    ],

    categories: [
        { label: 'Все', icon: 'grid' },
        { label: 'Самовывоз', icon: 'shopping-bag' },
        { label: 'Бургеры', icon: 'hamburger' },
        { label: 'Комбо', icon: 'box' },
        { label: 'Пицца', icon: 'pizza' },
        { label: 'Суши', icon: 'fish' },
        { label: 'Здоровье', icon: 'apple' },
        { label: 'Азия', icon: 'noodles' },
        { label: 'Грузия', icon: 'utensils' },
        { label: 'Десерты', icon: 'cake' },
        { label: 'Кофе', icon: 'coffee' },
        { label: 'Веган', icon: 'leaf' }
    ]
};

const SVGIcons = {
    grid: '<path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z"/>',
    'shopping-bag': '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    hamburger: '<circle cx="12" cy="12" r="10"/><path d="M8 14h8M8 10h8"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    pizza: '<circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/>',
    fish: '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5M12 12v.5M6 12v.5"/>',
    apple: '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>',
    noodles: '<path d="M12 2v20M8 2v20M16 2v20M4 8h16M4 14h16"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    cake: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1M2 21h20M7 8v3M12 8v3M17 8v3"/>',
    coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>'
};

const UIManager = {
    elements: {},

    init() {
        this.cacheElements();
        this.setupEventListeners();
    },

    cacheElements() {
        this.elements = {
            header: document.getElementById('header'),
            loginButton: document.getElementById('login-button'),
            userArea: document.getElementById('user-area'),
            cartCount: document.getElementById('cart-count'),
            categoriesContainer: document.getElementById('categories-container'),
            restaurantGrid: document.getElementById('restaurant-grid'),
            manualSearch: document.getElementById('manual-search'),
            aiPrompt: document.getElementById('ai-prompt'),
            aiButton: document.getElementById('ai-button'),
            aiClear: document.getElementById('ai-clear'),
            aiLoader: document.getElementById('ai-loader'),
            aiButtonText: document.getElementById('ai-button-text'),
            aiResult: document.getElementById('ai-result'),
            aiPlaceholder: document.getElementById('ai-placeholder'),
            aiOutput: document.getElementById('ai-output')
        };
    },

    setupEventListeners() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.elements.aiPrompt.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                AIHelper.getSuggestion();
            }
        });
    },

    handleScroll() {
        if (window.scrollY > 10) {
            this.elements.header.classList.add('scrolled');
        } else {
            this.elements.header.classList.remove('scrolled');
        }
    },

    renderUserArea() {
        const session = StorageManager.loadSession();

        if (session && session.user) {
            const name = session.user.name || session.user.email;
            const avatarText = (name[0] || 'U').toUpperCase();

            this.elements.userArea.innerHTML = `
                <div class="user-profile">
                    <div class="user-avatar">${avatarText}</div>
                    <div class="user-info">
                        <div class="user-name">${name}</div>
                        <button class="user-logout" id="logout-btn">Выйти</button>
                    </div>
                </div>
            `;

            document.getElementById('logout-btn').addEventListener('click', () => {
                StorageManager.clearSession();
                this.renderUserArea();
                alert('Вы вышли из аккаунта');
            });
        } else {
            this.elements.userArea.innerHTML = `
                <button class="login-btn" id="login-button">Войти</button>
            `;

            document.getElementById('login-button').addEventListener('click', () => {
                AuthModal.show();
            });
        }
    },

    setCartCount(count) {
        this.elements.cartCount.textContent = count;
    }
};

const RestaurantRenderer = {
    currentFilter: 'Все',
    currentSearchQuery: '',

    init() {
        this.renderCategories();
        this.renderRestaurants();
        this.setupSearch();
    },

    renderCategories() {
        UIManager.elements.categoriesContainer.innerHTML = '';

        MockData.categories.forEach(category => {
            const isActive = category.label === this.currentFilter;
            const button = document.createElement('button');
            button.className = `category-btn ${isActive ? 'active' : ''}`;
            button.innerHTML = `
                <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${SVGIcons[category.icon] || SVGIcons.grid}
                </svg>
                <span>${category.label}</span>
            `;

            button.addEventListener('click', () => {
                this.currentFilter = category.label;
                this.currentSearchQuery = '';
                UIManager.elements.manualSearch.value = '';
                this.renderCategories();
                this.renderRestaurants();
            });

            UIManager.elements.categoriesContainer.appendChild(button);
        });
    },

    renderRestaurants() {
        let restaurants = MockData.restaurants.slice();

        if (this.currentFilter !== 'Все' && this.currentFilter !== 'Самовывоз') {
            restaurants = restaurants.filter(r => r.category === this.currentFilter);
        }

        if (this.currentSearchQuery) {
            const query = this.currentSearchQuery.toLowerCase();
            restaurants = restaurants.filter(r =>
                r.name.toLowerCase().includes(query) ||
                r.cuisine.toLowerCase().includes(query) ||
                r.category.toLowerCase().includes(query)
            );
        }

        UIManager.elements.restaurantGrid.innerHTML = '';

        if (restaurants.length === 0) {
            UIManager.elements.restaurantGrid.innerHTML = `
                <div class="empty-state">
                    <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p class="empty-title">По вашему запросу ничего не найдено</p>
                </div>
            `;
            return;
        }

        restaurants.forEach((restaurant, index) => {
            const card = document.createElement('div');
            card.className = 'restaurant-card';
            card.style.animationDelay = `${index * 0.05}s`;

            card.innerHTML = `
                <a href="#" class="restaurant-link">
                    <div class="restaurant-image-wrapper">
                        <img
                            src="${restaurant.image}"
                            alt="${restaurant.name}"
                            class="restaurant-image"
                            loading="lazy"
                        >
                        ${restaurant.freeDelivery ? '<div class="restaurant-badge">Бесплатная доставка</div>' : ''}
                    </div>
                    <div class="restaurant-info">
                        <h3 class="restaurant-name">${restaurant.name}</h3>
                        <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                        <div class="restaurant-meta">
                            <div class="restaurant-rating">
                                <span class="rating-star">
                                    <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <span>${restaurant.rating}</span>
                                </span>
                                <span class="price-range">${restaurant.priceRange}</span>
                            </div>
                            <span class="delivery-time">
                                <svg class="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>${restaurant.deliveryTime}</span>
                            </span>
                        </div>
                    </div>
                </a>
            `;

            UIManager.elements.restaurantGrid.appendChild(card);
        });
    },

    setupSearch() {
        let searchTimer;

        UIManager.elements.manualSearch.addEventListener('input', (e) => {
            this.currentSearchQuery = e.target.value.trim();
            this.currentFilter = 'Все';

            clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                this.renderCategories();
                this.renderRestaurants();
            }, 350);
        });
    }
};

const AIHelper = {
    API_KEY: '',
    API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=',

    init() {
        UIManager.elements.aiButton.addEventListener('click', () => this.getSuggestion());
        UIManager.elements.aiClear.addEventListener('click', () => this.clear());
    },

    async getSuggestion() {
        const prompt = UIManager.elements.aiPrompt.value.trim();

        if (!prompt) {
            this.showResult('Пожалуйста, введите запрос');
            return;
        }

        this.setLoading(true);

        try {
            if (this.API_KEY) {
                await this.fetchAISuggestion(prompt);
            } else {
                this.generateLocalSuggestion(prompt);
            }
        } catch (error) {
            console.error('AI Error:', error);
            this.showResult('Ошибка сети. Попробуйте позже.');
        } finally {
            this.setLoading(false);
        }
    },

    async fetchAISuggestion(prompt) {
        const systemPrompt = `Ты - AI-помощник сервиса доставки еды. Помоги пользователю выбрать блюдо на основе его запроса.
Отвечай кратко, список из 2-3 рекомендаций с короткими описаниями. Используй маркированный список.`;

        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
        };

        const response = await fetch(this.API_URL + this.API_KEY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text || 'Нет ответа';
            this.showResult(text);
        } else {
            throw new Error('AI API Error');
        }
    },

    generateLocalSuggestion(prompt) {
        const query = prompt.toLowerCase();
        let suggestions = [];

        if (/салат|легк|полезн|здоров/i.test(query)) {
            suggestions = [
                '🥗 Легкий салат с киноа и авокадо',
                '🥙 Греческий салат с сыром фета',
                '🍓 Смузи боул с ягодами и орехами'
            ];
        } else if (/пицц/i.test(query)) {
            suggestions = [
                '🍕 Пицца "Пепперони" на тонком тесте',
                '🍕 Маргарита с моцареллой',
                '🍕 Четыре сыра'
            ];
        } else if (/сыт|мяс|бургер/i.test(query)) {
            suggestions = [
                '🍔 Двойной чизбургер с беконом',
                '🥩 Стейк с картофелем',
                '🌯 Буррито с курицей'
            ];
        } else if (/суши|рол/i.test(query)) {
            suggestions = [
                '🍣 Филадельфия классическая',
                '🍣 Калифорния с крабом',
                '🍱 Сет "Токио" (24 шт)'
            ];
        } else {
            suggestions = [
                '🍜 Рамен с курицей и яйцом',
                '🍕 Пицца "Пепперони"',
                '🥗 Цезарь с креветками'
            ];
        }

        this.showResult(suggestions.join('\n'));
    },

    showResult(text) {
        UIManager.elements.aiOutput.innerHTML = text.replace(/\n/g, '<br>');
        UIManager.elements.aiResult.classList.remove('hidden');
        UIManager.elements.aiPlaceholder.classList.add('hidden');
    },

    clear() {
        UIManager.elements.aiPrompt.value = '';
        UIManager.elements.aiOutput.innerHTML = '';
        UIManager.elements.aiResult.classList.add('hidden');
        UIManager.elements.aiPlaceholder.classList.remove('hidden');
    },

    setLoading(isLoading) {
        UIManager.elements.aiButton.disabled = isLoading;

        if (isLoading) {
            UIManager.elements.aiLoader.classList.remove('hidden');
            UIManager.elements.aiButtonText.classList.add('hidden');
        } else {
            UIManager.elements.aiLoader.classList.add('hidden');
            UIManager.elements.aiButtonText.classList.remove('hidden');
        }
    }
};

const AuthModal = {
    modal: null,
    screens: {},
    currentScreen: 'main',
    smsCode: null,
    smsTargetPhone: '',
    resendTimer: null,

    init() {
        this.modal = document.getElementById('auth-modal');
        this.cacheScreens();
        this.setupEventListeners();
    },

    cacheScreens() {
        this.screens = {
            main: document.getElementById('screen-main'),
            code: document.getElementById('screen-code'),
            register: document.getElementById('screen-register')
        };
    },

    setupEventListeners() {
        document.getElementById('auth-close-button').addEventListener('click', () => this.hide());
        document.getElementById('auth-back-button').addEventListener('click', () => this.navigateTo('main'));

        this.setupLoginTabs();
        this.setupRegisterTabs();
        this.setupLoginHandlers();
        this.setupRegisterHandlers();
        this.setupCodeHandlers();
        this.setupPasswordToggles();
    },

    setupLoginTabs() {
        const tabEmail = document.getElementById('tab-email');
        const tabPhone = document.getElementById('tab-phone');
        const emailScreen = document.getElementById('login-email-screen');
        const phoneScreen = document.getElementById('login-phone-screen');

        tabEmail.addEventListener('click', () => {
            tabEmail.classList.add('active');
            tabPhone.classList.remove('active');
            emailScreen.classList.remove('hidden');
            phoneScreen.classList.add('hidden');
        });

        tabPhone.addEventListener('click', () => {
            tabPhone.classList.add('active');
            tabEmail.classList.remove('active');
            phoneScreen.classList.remove('hidden');
            emailScreen.classList.add('hidden');
        });
    },

    setupRegisterTabs() {
        const regTabPhone = document.getElementById('reg-tab-phone');
        const regTabEmail = document.getElementById('reg-tab-email');
        const phoneScreen = document.getElementById('register-phone-screen');
        const emailScreen = document.getElementById('register-email-screen');

        regTabPhone.addEventListener('click', () => {
            regTabPhone.classList.add('active');
            regTabEmail.classList.remove('active');
            phoneScreen.classList.remove('hidden');
            emailScreen.classList.add('hidden');
        });

        regTabEmail.addEventListener('click', () => {
            regTabEmail.classList.add('active');
            regTabPhone.classList.remove('active');
            emailScreen.classList.remove('hidden');
            phoneScreen.classList.add('hidden');
        });
    },

    setupLoginHandlers() {
        document.getElementById('login-submit-button').addEventListener('click', () => {
            const email = document.getElementById('login-email-input').value.trim();
            const password = document.getElementById('login-password-input').value;

            if (!email || !password) {
                alert('Заполните email и пароль');
                return;
            }

            const users = StorageManager.loadUsers();
            const user = users[email.toLowerCase()];

            if (!user || user.password !== password) {
                alert('Неверный логин или пароль');
                return;
            }

            this.login({ email, name: user.name || email.split('@')[0] });
        });

        document.getElementById('phone-submit-button').addEventListener('click', () => {
            const phone = document.getElementById('login-phone-input').value.replace(/[^0-9]/g, '').slice(-10);

            if (phone.length < 7) {
                alert('Введите корректный номер');
                return;
            }

            this.sendSMS(phone);
        });

        document.getElementById('go-to-register-button').addEventListener('click', () => {
            this.navigateTo('register');
        });
    },

    setupRegisterHandlers() {
        document.getElementById('register-phone-submit-button').addEventListener('click', () => {
            const phone = document.getElementById('register-phone-input').value.replace(/[^0-9]/g, '').slice(-10);

            if (phone.length < 7) {
                alert('Введите корректный номер');
                return;
            }

            this.sendSMS(phone);
        });

        document.getElementById('register-email-submit-button').addEventListener('click', () => {
            const email = document.getElementById('register-email-input').value.trim().toLowerCase();
            const password = document.getElementById('register-password-input').value;
            const confirmPassword = document.getElementById('register-confirm-password-input').value;

            if (!email || !password || !confirmPassword) {
                alert('Заполните все поля');
                return;
            }

            if (password !== confirmPassword) {
                alert('Пароли не совпадают');
                return;
            }

            const users = StorageManager.loadUsers();

            if (users[email]) {
                alert('Пользователь с таким email уже существует');
                return;
            }

            users[email] = { name: email.split('@')[0], password };
            StorageManager.saveUsers(users);
            this.login({ email, name: users[email].name });
            alert('Регистрация успешна!');
        });

        document.getElementById('register-password-input').addEventListener('input', (e) => {
            const password = e.target.value;
            let score = 0;

            if (password.length >= 8) score += 30;
            if (/[A-Z]/.test(password)) score += 20;
            if (/[0-9]/.test(password)) score += 20;
            if (/[^A-Za-z0-9]/.test(password)) score += 30;

            const width = Math.min(100, score);
            document.getElementById('pw-strength-bar').style.width = width + '%';
        });
    },

    setupCodeHandlers() {
        document.getElementById('code-submit-button').addEventListener('click', () => {
            const code = document.getElementById('sms-code-input').value.trim();

            if (!code) {
                alert('Введите код');
                return;
            }

            if (code === this.smsCode) {
                const users = StorageManager.loadUsers();
                const emailKey = 'phone_' + this.smsTargetPhone;

                if (!users[emailKey]) {
                    users[emailKey] = {
                        name: 'Пользователь',
                        password: '',
                        phone: this.smsTargetPhone
                    };
                    StorageManager.saveUsers(users);
                }

                this.login({ email: emailKey, name: users[emailKey].name || '+' + this.smsTargetPhone });
            } else {
                const errorMsg = document.getElementById('code-error-message');
                errorMsg.classList.remove('hidden');
                errorMsg.textContent = 'Неверный код';
            }
        });

        document.getElementById('resend-code-button').addEventListener('click', () => {
            if (document.getElementById('resend-code-button').disabled) return;

            this.smsCode = String(Math.floor(1000 + Math.random() * 9000));
            console.log('Resent SMS code:', this.smsCode);
            this.startResendCooldown();
            alert('Код отправлен повторно');
        });
    },

    setupPasswordToggles() {
        document.getElementById('toggle-login-pw').addEventListener('click', () => {
            const input = document.getElementById('login-password-input');
            input.type = input.type === 'password' ? 'text' : 'password';
        });

        document.getElementById('toggle-reg-pw').addEventListener('click', () => {
            const input = document.getElementById('register-password-input');
            input.type = input.type === 'password' ? 'text' : 'password';
        });
    },

    sendSMS(phone) {
        this.smsTargetPhone = phone;
        this.smsCode = String(Math.floor(1000 + Math.random() * 9000));
        document.getElementById('code-phone-display').textContent = `+7 ${phone}`;
        console.log('SMS code:', this.smsCode);

        this.navigateTo('code');
        this.startResendCooldown();
    },

    startResendCooldown() {
        const button = document.getElementById('resend-code-button');
        let seconds = 30;

        button.disabled = true;
        button.textContent = `Отправить повторно (${seconds}s)`;

        clearInterval(this.resendTimer);

        this.resendTimer = setInterval(() => {
            seconds--;
            button.textContent = `Отправить повторно (${seconds}s)`;

            if (seconds <= 0) {
                clearInterval(this.resendTimer);
                button.disabled = false;
                button.textContent = 'Отправить код повторно';
            }
        }, 1000);
    },

    login(user) {
        StorageManager.saveSession({ user });
        UIManager.renderUserArea();
        this.hide();
    },

    show() {
        this.modal.classList.add('active');
        this.reset();
    },

    hide() {
        this.modal.classList.remove('active');
    },

    reset() {
        this.navigateTo('main');
        document.getElementById('code-error-message').classList.add('hidden');
        document.getElementById('sms-code-input').value = '';
    },

    navigateTo(screen) {
        Object.values(this.screens).forEach(s => s.classList.add('hidden'));

        const authTitle = document.getElementById('auth-title');
        const backButton = document.getElementById('auth-back-button');

        if (screen === 'main') {
            this.screens.main.classList.remove('hidden');
            authTitle.textContent = 'Войдите';
            backButton.classList.add('hidden');
        } else if (screen === 'code') {
            this.screens.code.classList.remove('hidden');
            authTitle.textContent = 'Подтверждение';
            backButton.classList.remove('hidden');
        } else if (screen === 'register') {
            this.screens.register.classList.remove('hidden');
            authTitle.textContent = 'Регистрация';
            backButton.classList.remove('hidden');
        }

        this.currentScreen = screen;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    UIManager.init();
    UIManager.renderUserArea();

    const cart = StorageManager.loadCart();
    UIManager.setCartCount(cart.count || 0);

    RestaurantRenderer.init();
    AIHelper.init();
    AuthModal.init();

    document.getElementById('support-btn').addEventListener('click', () => {
        alert('Поддержка доступна 24/7\nТел: 8-800-555-35-35');
    });
});
