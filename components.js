// components.js - المكونات المشتركة للواجهة

// مكون الهيدر
function renderHeader() {
    const header = document.getElementById('main-header');
    header.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <div class="nav-content">
                    <!-- الشعار -->
                    <div class="logo">
                        <i class="fas fa-leaf" style="color: var(--primary-green); font-size: 1.8rem;"></i>
                        <span class="logo-text">المنصة الزراعية</span>
                    </div>

                    <!-- زر القائمة للموبايل -->
                    <button class="mobile-menu-btn" id="mobile-menu-toggle">
                        <i class="fas fa-bars"></i>
                    </button>

                    <!-- شريط التنقل الرئيسي -->
                    <ul class="nav-links" id="main-nav">
                        <li><a href="#" data-page="home"><i class="fas fa-home"></i> الرئيسية</a></li>
                        <li><a href="#" data-page="farms"><i class="fas fa-tractor"></i> المزرعة</a></li>
                        <li><a href="#" data-page="market"><i class="fas fa-store"></i> السوق</a></li>
                        <li><a href="#" data-page="products"><i class="fas fa-seedling"></i> المنتجات</a></li>
                        <li><a href="#" data-page="sessions"><i class="fas fa-users"></i> الجلسات</a></li>
                        <li><a href="#" data-page="chats"><i class="fas fa-comments"></i> المحادثات</a></li>
                        <li><a href="#" data-page="dashboard"><i class="fas fa-chart-line"></i> الداشبورد</a></li>
                    </ul>

                    <!-- أدوات المستخدم -->
                    <div class="user-tools">
                        <!-- البحث السريع -->
                        <div class="search-container">
                            <input type="text" class="search-input" placeholder="ابحث عن منتجات أو مزارعين...">
                            <button class="search-btn">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>

                        <!-- الإشعارات -->
                        <div class="notification-icon">
                            <i class="fas fa-bell"></i>
                            <span class="badge">3</span>
                        </div>

                        <!-- الملف الشخصي -->
                        <div class="profile-dropdown">
                            <div class="profile-trigger">
                                <img src="https://via.placeholder.com/40" alt="صورة المستخدم" class="profile-img">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <div class="dropdown-menu">
                                <a href="#" data-page="profile"><i class="fas fa-user"></i> الملف الشخصي</a>
                                <a href="#" data-page="settings"><i class="fas fa-cog"></i> الإعدادات</a>
                                <hr>
                                <a href="#" id="logout-btn"><i class="fas fa-sign-out-alt"></i> تسجيل الخروج</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `;

    // إضافة تنسيقات الهيدر
    const style = document.createElement('style');
    style.textContent = `
        .navbar {
            background-color: var(--white);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
        }
        
        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: bold;
            font-size: 1.2rem;
            color: var(--primary-green);
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 20px;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            padding: 8px 15px;
            border-radius: 5px;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .nav-links a:hover {
            background-color: var(--light-gray);
            color: var(--primary-green);
        }
        
        .user-tools {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .search-container {
            display: flex;
            align-items: center;
        }
        
        .search-input {
            padding: 8px 15px;
            border: 1px solid #ddd;
            border-radius: 20px 0 0 20px;
            width: 200px;
        }
        
        .search-btn {
            background-color: var(--primary-green);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 0 20px 20px 0;
            cursor: pointer;
        }
        
        .notification-icon {
            position: relative;
            cursor: pointer;
            font-size: 1.2rem;
            color: var(--text-light);
        }
        
        .badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: var(--orange);
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .profile-dropdown {
            position: relative;
        }
        
        .profile-trigger {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
        }
        
        .profile-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-radius: 8px;
            padding: 10px 0;
            min-width: 200px;
            display: none;
        }
        
        .profile-dropdown:hover .dropdown-menu {
            display: block;
        }
        
        .dropdown-menu a {
            display: block;
            padding: 10px 20px;
            text-decoration: none;
            color: var(--text-dark);
            transition: background-color 0.3s;
        }
        
        .dropdown-menu a:hover {
            background-color: var(--light-gray);
        }
        
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
}

// مكون الفوتر
function renderFooter() {
    const footer = document.getElementById('main-footer');
    footer.innerHTML = `
        <div class="footer-content">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-section">
                        <h3><i class="fas fa-leaf"></i> المنصة الزراعية</h3>
                        <p>منصة متكاملة لربط المزارعين والتجار والموردين والخبراء في القطاع الزراعي</p>
                    </div>
                    
                    <div class="footer-section">
                        <h4>روابط سريعة</h4>
                        <ul>
                            <li><a href="#">الرئيسية</a></li>
                            <li><a href="#">عن المنصة</a></li>
                            <li><a href="#">اتصل بنا</a></li>
                            <li><a href="#">سياسة الخصوصية</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>تواصل معنا</h4>
                        <p><i class="fas fa-envelope"></i> info@agricultural-platform.com</p>
                        <p><i class="fas fa-phone"></i> +966 123 456 789</p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2024 المنصة الزراعية. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </div>
    `;

    // إضافة تنسيقات الفوتر
    const style = document.createElement('style');
    style.textContent = `
        .footer-content {
            background-color: var(--primary-green);
            color: white;
            padding: 40px 0 20px;
            margin-top: 40px;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .footer-section h3, .footer-section h4 {
            margin-bottom: 15px;
        }
        
        .footer-section ul {
            list-style: none;
        }
        
        .footer-section ul li {
            margin-bottom: 8px;
        }
        
        .footer-section a {
            color: white;
            text-decoration: none;
        }
        
        .footer-section a:hover {
            text-decoration: underline;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
        }
    `;
    document.head.appendChild(style);
}

// مكون Modal للنماذج
function createModal(title, content, buttons = []) {
    const modalId = 'modal-' + Date.now();
    const modalHTML = `
        <div class="modal-overlay" id="${modalId}">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                ${buttons.length > 0 ? `
                <div class="modal-footer">
                    ${buttons.map(btn => `
                        <button class="btn ${btn.type || 'secondary'}" data-action="${btn.action}">
                            ${btn.text}
                        </button>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        </div>
    `;

    const container = document.getElementById('modal-container');
    container.innerHTML += modalHTML;

    // إضافة تنسيقات Modal
    const style = document.createElement('style');
    if (!document.querySelector('#modal-styles')) {
        style.id = 'modal-styles';
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                animation: fadeIn 0.3s;
            }
            
            .modal-content {
                background-color: white;
                border-radius: 10px;
                width: 90%;
                max-width: 500px;
                max-height: 90vh;
                overflow-y: auto;
                animation: slideIn 0.3s;
            }
            
            .modal-header {
                padding: 20px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--text-light);
            }
            
            .modal-body {
                padding: 20px;
            }
            
            .modal-footer {
                padding: 20px;
                border-top: 1px solid #eee;
                display: flex;
                justify-content: flex-end;
                gap: 10px;
            }
            
            .btn {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s;
            }
            
            .btn.primary {
                background-color: var(--primary-green);
                color: white;
            }
            
            .btn.secondary {
                background-color: var(--light-gray);
                color: var(--text-dark);
            }
            
            .btn:hover {
                opacity: 0.9;
                transform: translateY(-2px);
            }
        `;
        document.head.appendChild(style);
    }

    // إضافة أحداث الإغلاق
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    return modal;
}

// نظام الإشعارات
function showNotification(type, message, duration = 5000) {
    const types = {
        success: { icon: '✓', color: 'var(--light-green)' },
        error: { icon: '✗', color: '#f44336' },
        warning: { icon: '⚠', color: 'var(--orange)' },
        info: { icon: 'ℹ', color: 'var(--blue)' }
    };

    const notif = types[type] || types.info;
    const notificationId = 'notif-' + Date.now();
    
    const notificationHTML = `
        <div class="notification ${type}" id="${notificationId}">
            <span class="notification-icon">${notif.icon}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    const container = document.getElementById('notification-container');
    container.innerHTML += notificationHTML;

    // إضافة تنسيقات الإشعارات
    const style = document.createElement('style');
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                left: 20px;
                background-color: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                gap: 10px;
                min-width: 300px;
                z-index: 3000;
                animation: slideInLeft 0.3s;
                border-right: 4px solid;
            }
            
            .notification.success { border-right-color: var(--light-green); }
            .notification.error { border-right-color: #f44336; }
            .notification.warning { border-right-color: var(--orange); }
            .notification.info { border-right-color: var(--blue); }
            
            .notification-icon {
                font-weight: bold;
                font-size: 1.2rem;
            }
            
            .notification-message {
                flex-grow: 1;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: var(--text-light);
            }
            
            @keyframes slideInLeft {
                from { transform: translateX(-100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    const notification = document.getElementById(notificationId);
    const closeBtn = notification.querySelector('.notification-close');
    
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    if (duration > 0) {
        setTimeout(() => {
            if (document.getElementById(notificationId)) {
                notification.remove();
            }
        }, duration);
    }
}

// تهيئة جميع المكونات
document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
});
