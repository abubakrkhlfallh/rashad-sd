// main.js - التطبيق الرئيسي وإدارة الصفحات

// دالة التنقل بين الصفحات
function navigateTo(page) {
    currentPage = page;
    const mainContent = document.getElementById('main-content');
    
    // إضافة تأثير تحميل
    mainContent.innerHTML = `
        <div class="page-loader">
            <div class="loader">
                <i class="fas fa-seedling fa-spin" style="color: var(--primary-green); font-size: 3rem;"></i>
                <p>جاري التحميل...</p>
            </div>
        </div>
    `;
    
    // إضافة تنسيقات التحميل
    const style = document.createElement('style');
    style.textContent = `
        .page-loader {
            min-height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .loader {
            text-align: center;
        }
        
        .fa-spin {
            animation: spin 2s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // محاكاة تأخير التحميل
    setTimeout(() => {
        switch(page) {
            case 'home':
                renderHomePage();
                break;
            case 'login':
                renderLoginPage();
                break;
            case 'dashboard':
                renderDashboard();
                break;
            case 'farms':
                renderFarmsPage();
                break;
            case 'market':
                renderMarketPage();
                break;
            case 'profile':
                renderProfilePage();
                break;
            default:
                renderHomePage();
        }
    }, 500);
}

// صفحة الرئيسية
function renderHomePage() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <div class="home-page fade-in">
            <!-- قسم البطل -->
            <section class="hero-section">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h1>مرحباً بكم في المنصة الزراعية الرقمية</h1>
                            <p>منصة متكاملة تربط المزارعين بالتجار والموردين والخبراء الزراعيين لتحقيق أقصى استفادة من القطاع الزراعي</p>
                            <div class="hero-buttons">
                                ${!currentUser ? `
                                    <button class="btn primary" data-page="login">
                                        <i class="fas fa-sign-in-alt"></i> تسجيل الدخول
                                    </button>
                                    <button class="btn secondary" data-page="login">
                                        <i class="fas fa-user-plus"></i> إنشاء حساب
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                        <div class="hero-image">
                            <i class="fas fa-tractor"></i>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- المميزات -->
            <section class="features-section">
                <div class="container">
                    <h2 class="section-title">مميزات المنصة</h2>
                    <div class="features-grid grid-4">
                        <div class="feature-card">
                            <i class="fas fa-tractor"></i>
                            <h3>إدارة المزارع</h3>
                            <p>إدارة كاملة لمزارعك ومحاصيلك وتتبع الإنتاجية</p>
                        </div>
                        
                        <div class="feature-card">
                            <i class="fas fa-store"></i>
                            <h3>سوق إلكتروني</h3>
                            <p>بيع وشراء المحاصيل والمنتجات الزراعية بسهولة</p>
                        </div>
                        
                        <div class="feature-card">
                            <i class="fas fa-user-graduate"></i>
                            <h3>استشارات خبراء</h3>
                            <p>استشر خبراء زراعيين متخصصين في أي وقت</p>
                        </div>
                        
                        <div class="feature-card">
                            <i class="fas fa-chart-line"></i>
                            <h3>تحليلات ذكية</h3>
                            <p>تقارير وتحليلات تساعد في اتخاذ القرارات</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- إحصائيات -->
            <section class="stats-section">
                <div class="container">
                    <div class="stats-grid grid-4">
                        <div class="stat-card">
                            <i class="fas fa-users" style="color: var(--primary-green);"></i>
                            <h3>+<span data-count="5000">0</span></h3>
                            <p>مستخدم نشط</p>
                        </div>
                        
                        <div class="stat-card">
                            <i class="fas fa-tractor" style="color: var(--orange);"></i>
                            <h3>+<span data-count="1200">0</span></h3>
                            <p>مزرعة مسجلة</p>
                        </div>
                        
                        <div class="stat-card">
                            <i class="fas fa-handshake" style="color: var(--blue);"></i>
                            <h3>+<span data-count="3500">0</span></h3>
                            <p>صفقة مكتملة</p>
                        </div>
                        
                        <div class="stat-card">
                            <i class="fas fa-leaf" style="color: var(--light-green);"></i>
                            <h3>+<span data-count="50">0</span>%</h3>
                            <p>زيادة في الإنتاجية</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
    
    // إضافة تنسيقات الصفحة الرئيسية
    const style = document.createElement('style');
    style.textContent = `
        .hero-section {
            background: linear-gradient(135deg, var(--light-green) 0%, var(--primary-green) 100%);
            color: white;
            padding: 80px 0;
        }
        
        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }
        
        .hero-text h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        
        .hero-text p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            opacity: 0.9;
        }
        
        .hero-buttons {
            display: flex;
            gap: 15px;
        }
        
        .hero-image i {
            font-size: 15rem;
            opacity: 0.8;
            text-align: center;
            display: block;
        }
        
        .section-title {
            text-align: center;
            margin: 50px 0 30px;
            color: var(--primary-green);
            font-size: 2rem;
        }
        
        .features-section {
            padding: 50px 0;
        }
        
        .feature-card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
        }
        
        .feature-card i {
            font-size: 3rem;
            color: var(--primary-green);
            margin-bottom: 20px;
        }
        
        .feature-card h3 {
            margin-bottom: 15px;
            color: var(--text-dark);
        }
        
        .stats-section {
            padding: 50px 0;
            background-color: var(--light-gray);
        }
        
        .stat-card {
            text-align: center;
            padding: 30px;
        }
        
        .stat-card i {
            font-size: 3rem;
            margin-bottom: 20px;
        }
        
        .stat-card h3 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: var(--text-dark);
        }
    `;
    document.head.appendChild(style);
    
    // إضافة تأثير العد للإحصائيات
    animateStats();
}

// صفحة لوحة التحكم
function renderDashboard() {
    if (!currentUser) {
        navigateTo('login');
        return;
    }
    
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <div class="dashboard-page fade-in">
            <div class="container">
                <!-- السايدبار -->
                <aside class="sidebar">
                    <div class="user-mini-profile">
                        <img src="https://via.placeholder.com/80" alt="صورة المستخدم">
                        <h4>${currentUser?.fullName || 'مستخدم'}</h4>
                        <span class="role-badge farmer">مزارع</span>
                    </div>
                    
                    <nav class="sidebar-nav">
                        <h5>القوائم الرئيسية</h5>
                        <ul>
                            <li class="active"><a href="#"><i class="fas fa-chart-line"></i> لوحة التحكم</a></li>
                            <li><a href="#" data-page="farms"><i class="fas fa-tractor"></i> مزرعتي</a></li>
                            <li><a href="#"><i class="fas fa-calendar-alt"></i> خطط الزراعة</a></li>
                            <li><a href="#"><i class="fas fa-seedling"></i> المنتجات المعروضة</a></li>
                            <li><a href="#"><i class="fas fa-shopping-cart"></i> المشتريات</a></li>
                            <li><a href="#"><i class="fas fa-users"></i> الجلسات الاستشارية</a></li>
                            <li><a href="#"><i class="fas fa-file-alt"></i> التقارير</a></li>
                        </ul>
                    </nav>
                </aside>
                
                <!-- المحتوى الرئيسي -->
                <main class="dashboard-content">
                    <!-- الترحيب -->
                    <div class="dashboard-header">
                        <h1>مرحباً ${currentUser?.fullName || 'مستخدم'}</h1>
                        <p>الأربعاء، 15 يناير 2024</p>
                    </div>
                    
                    <!-- بطاقات الملخص -->
                    <div class="summary-cards grid-4">
                        <div class="summary-card">
                            <div class="card-icon" style="background-color: rgba(76, 175, 80, 0.1);">
                                <i class="fas fa-map" style="color: var(--light-green);"></i>
                            </div>
                            <div class="card-info">
                                <h3>25</h3>
                                <p>الهكتار الكلي</p>
                            </div>
                        </div>
                        
                        <div class="summary-card">
                            <div class="card-icon" style="background-color: rgba(255, 193, 7, 0.1);">
                                <i class="fas fa-seedling" style="color: var(--yellow);"></i>
                            </div>
                            <div class="card-info">
                                <h3>8</h3>
                                <p>محصول نشط</p>
                            </div>
                        </div>
                        
                        <div class="summary-card">
                            <div class="card-icon" style="background-color: rgba(33, 150, 243, 0.1);">
                                <i class="fas fa-money-bill-wave" style="color: var(--blue);"></i>
                            </div>
                            <div class="card-info">
                                <h3>125,000</h3>
                                <p>ريال إيرادات متوقعة</p>
                            </div>
                        </div>
                        
                        <div class="summary-card">
                            <div class="card-icon" style="background-color: rgba(121, 85, 72, 0.1);">
                                <i class="fas fa-calendar-check" style="color: var(--brown);"></i>
                            </div>
                            <div class="card-info">
                                <h3>3</h3>
                                <p>جلسات قادمة</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- المخططات والإحصائيات -->
                    <div class="dashboard-grid">
                        <div class="chart-container">
                            <div class="chart-header">
                                <h3>المحاصيل حسب الموسم</h3>
                                <select class="chart-filter">
                                    <option>هذا العام</option>
                                    <option>الربع الأخير</option>
                                </select>
                            </div>
                            <div class="chart-placeholder skeleton" style="height: 300px;"></div>
                        </div>
                        
                        <div class="chart-container">
                            <div class="chart-header">
                                <h3>الإيرادات المتوقعة</h3>
                                <select class="chart-filter">
                                    <option>2024</option>
                                    <option>2023</option>
                                </select>
                            </div>
                            <div class="chart-placeholder skeleton" style="height: 300px;"></div>
                        </div>
                        
                        <div class="tasks-container">
                            <div class="tasks-header">
                                <h3>المهام القادمة</h3>
                                <button class="btn small"><i class="fas fa-plus"></i> إضافة مهمة</button>
                            </div>
                            <div class="tasks-list">
                                <div class="task-item">
                                    <div class="task-info">
                                        <h4>ري محصول القمح</h4>
                                        <p>غداً، 10:00 صباحاً</p>
                                    </div>
                                    <span class="task-status pending">معلق</span>
                                </div>
                                <div class="task-item">
                                    <div class="task-info">
                                        <h4>تسميد البطاطس</h4>
                                        <p>بعد غد، 8:00 صباحاً</p>
                                    </div>
                                    <span class="task-status in-progress">قيد التنفيذ</span>
                                </div>
                                <div class="task-item">
                                    <div class="task-info">
                                        <h4>حصاد الطماطم</h4>
                                        <p>الجمعة، 6:00 صباحاً</p>
                                    </div>
                                    <span class="task-status completed">مكتمل</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="weather-container">
                            <div class="weather-header">
                                <h3>الطقس الحالي</h3>
                                <span>الرياض</span>
                            </div>
                            <div class="weather-content">
                                <div class="weather-main">
                                    <i class="fas fa-sun" style="color: var(--orange); font-size: 3rem;"></i>
                                    <div class="weather-temp">
                                        <h2>28°</h2>
                                        <p>مشمس</p>
                                    </div>
                                </div>
                                <div class="weather-details">
                                    <div class="weather-detail">
                                        <i class="fas fa-wind"></i>
                                        <span>15 كم/س</span>
                                    </div>
                                    <div class="weather-detail">
                                        <i class="fas fa-tint"></i>
                                        <span>40% رطوبة</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    `;
    
    // إضافة تنسيقات لوحة التحكم
    const style = document.createElement('style');
    style.textContent = `
        .dashboard-page .container {
            display: grid;
            grid-template-columns: 250px 1fr;
            gap: 30px;
            padding-top: 30px;
        }
        
        .sidebar {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            height: fit-content;
            position: sticky;
            top: 100px;
        }
        
        .user-mini-profile {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
            margin-bottom: 20px;
        }
        
        .user-mini-profile img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
        }
        
        .role-badge {
            display: inline-block;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .role-badge.farmer {
            background-color: rgba(76, 175, 80, 0.2);
            color: var(--light-green);
        }
        
        .sidebar-nav h5 {
            color: var(--text-light);
            margin-bottom: 15px;
            font-size: 0.9rem;
            text-transform: uppercase;
        }
        
        .sidebar-nav ul {
            list-style: none;
        }
        
        .sidebar-nav li {
            margin-bottom: 10px;
        }
        
        .sidebar-nav a {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 15px;
            text-decoration: none;
            color: var(--text-dark);
            border-radius: 8px;
            transition: all 0.3s;
        }
        
        .sidebar-nav a:hover {
            background-color: var(--light-gray);
        }
        
        .sidebar-nav li.active a {
            background-color: rgba(46, 125, 50, 0.1);
            color: var(--primary-green);
        }
        
        .dashboard-content {
            padding-bottom: 50px;
        }
        
        .dashboard-header {
            margin-bottom: 30px;
        }
        
        .summary-cards {
            margin-bottom: 30px;
        }
        
        .summary-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .card-icon {
            width: 60px;
            height: 60px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .card-icon i {
            font-size: 1.5rem;
        }
        
        .card-info h3 {
            font-size: 1.8rem;
            margin-bottom: 5px;
            color: var(--text-dark);
        }
        
        .dashboard-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        .chart-container, .tasks-container, .weather-container {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .chart-header, .tasks-header, .weather-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .chart-placeholder {
            border-radius: 8px;
        }
        
        .tasks-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .task-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border: 1px solid #eee;
            border-radius: 8px;
        }
        
        .task-status {
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .task-status.pending {
            background-color: rgba(255, 193, 7, 0.2);
            color: var(--yellow);
        }
        
        .task-status.in-progress {
            background-color: rgba(33, 150, 243, 0.2);
            color: var(--blue);
        }
        
        .task-status.completed {
            background-color: rgba(76, 175, 80, 0.2);
            color: var(--light-green);
        }
        
        .weather-main {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .weather-details {
            display: flex;
            gap: 20px;
        }
        
        .weather-detail {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--text-light);
        }
    `;
    document.head.appendChild(style);
}

// صفحة إدارة المزارع
function renderFarmsPage() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <div class="farms-page fade-in">
            <div class="container">
                <div class="page-header">
                    <h1><i class="fas fa-tractor"></i> إدارة المزارع</h1>
                    <button class="btn primary" id="add-farm-btn">
                        <i class="fas fa-plus"></i> إضافة مزرعة جديدة
                    </button>
                </div>
                
                <!-- فلترة المزارع -->
                <div class="filter-section">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="ابحث عن مزرعة...">
                    </div>
                    <div class="filter-options">
                        <select>
                            <option>جميع أنواع التربة</option>
                            <option>طينية</option>
                            <option>رملية</option>
                            <option>طمية</option>
                        </select>
                        <select>
                            <option>جميع مصادر المياه</option>
                            <option>بئر</option>
                            <option>نهر</option>
                            <option>مياه معالجة</option>
                        </select>
                    </div>
                </div>
                
                <!-- قائمة المزارع -->
                <div class="farms-grid grid-3">
                    <!-- مزرعة 1 -->
                    <div class="farm-card">
                        <div class="farm-header">
                            <h3>مزرعة النخيل</h3>
                            <span class="farm-status active">نشطة</span>
                        </div>
                        <div class="farm-info">
                            <div class="info-item">
                                <i class="fas fa-ruler-combined"></i>
                                <span>5 هكتار</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-mountain"></i>
                                <span>تربة طينية</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-tint"></i>
                                <span>بئر</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>الرياض</span>
                            </div>
                        </div>
                        <div class="farm-actions">
                            <button class="btn small secondary"><i class="fas fa-eye"></i> تفاصيل</button>
                            <button class="btn small secondary"><i class="fas fa-edit"></i> تعديل</button>
                            <button class="btn small danger"><i class="fas fa-trash"></i> حذف</button>
                        </div>
                    </div>
                    
                    <!-- مزرعة 2 -->
                    <div class="farm-card">
                        <div class="farm-header">
                            <h3>مزرعة الخضروات</h3>
                            <span class="farm-status active">نشطة</span>
                        </div>
                        <div class="farm-info">
                            <div class="info-item">
                                <i class="fas fa-ruler-combined"></i>
                                <span>3 هكتار</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-mountain"></i>
                                <span>تربة رملية</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-tint"></i>
                                <span>نهر</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>القصيم</span>
                            </div>
                        </div>
                        <div class="farm-actions">
                            <button class="btn small secondary"><i class="fas fa-eye"></i> تفاصيل</button>
                            <button class="btn small secondary"><i class="fas fa-edit"></i> تعديل</button>
                            <button class="btn small danger"><i class="fas fa-trash"></i> حذف</button>
                        </div>
                    </div>
                    
                    <!-- زر إضافة مزرعة -->
                    <div class="add-farm-card" id="add-farm-card">
                        <i class="fas fa-plus"></i>
                        <p>إضافة مزرعة جديدة</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // إضافة تنسيقات صفحة المزارع
    const style = document.createElement('style');
    style.textContent = `
        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .filter-section {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .search-box {
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: var(--light-gray);
            padding: 10px 15px;
            border-radius: 8px;
            width: 300px;
        }
        
        .search-box input {
            border: none;
            background: none;
            width: 100%;
            font-size: 1rem;
        }
        
        .search-box input:focus {
            outline: none;
        }
        
        .filter-options {
            display: flex;
            gap: 10px;
        }
        
        .filter-options select {
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: white;
            min-width: 150px;
        }
        
        .farms-grid.grid-3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
        
        .farm-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .farm-card:hover {
            transform: translateY(-5px);
        }
        
        .farm-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .farm-status {
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .farm-status.active {
            background-color: rgba(76, 175, 80, 0.2);
            color: var(--light-green);
        }
        
        .farm-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .info-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--text-light);
        }
        
        .farm-actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        
        .btn.small {
            padding: 8px 15px;
            font-size: 0.9rem;
        }
        
        .btn.danger {
            background-color: #f44336;
            color: white;
        }
        
        .add-farm-card {
            background: white;
            border: 2px dashed #ddd;
            border-radius: 10px;
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s;
            color: var(--text-light);
        }
        
        .add-farm-card:hover {
            border-color: var(--primary-green);
            color: var(--primary-green);
        }
        
        .add-farm-card i {
            font-size: 3rem;
            margin-bottom: 15px;
        }
    `;
    document.head.appendChild(style);
    
    // حدث إضافة مزرعة
    document.getElementById('add-farm-btn')?.addEventListener('click', showAddFarmModal);
    document.getElementById('add-farm-card')?.addEventListener('click', showAddFarmModal);
}

// صفحة السوق
function renderMarketPage() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <div class="market-page fade-in">
            <div class="container">
                <div class="page-header">
                    <h1><i class="fas fa-store"></i> السوق الزراعي</h1>
                    <button class="btn primary">
                        <i class="fas fa-plus"></i> إضافة عرض جديد
                    </button>
                </div>
                
                <!-- فلترة السوق -->
                <div class="market-filters">
                    <div class="filter-row">
                        <div class="search-box">
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="ابحث عن منتج...">
                        </div>
                        <button class="btn secondary"><i class="fas fa-filter"></i> فلترة متقدمة</button>
                    </div>
                    
                    <div class="filter-options">
                        <select>
                            <option>جميع المحافظات</option>
                            <option>الرياض</option>
                            <option>مكة</option>
                        </select>
                        <select>
                            <option>جميع المحاصيل</option>
                            <option>قمح</option>
                            <option>تمور</option>
                        </select>
                        <div class="price-range">
                            <input type="number" placeholder="من" min="0">
                            <span>إلى</span>
                            <input type="number" placeholder="إلى" min="0">
                        </div>
                        <button class="btn small primary">تطبيق الفلتر</button>
                    </div>
                </div>
                
                <!-- المنتجات -->
                <div class="products-grid grid-4">
                    <!-- منتج 1 -->
                    <div class="product-card">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=قمح" alt="قمح">
                            <span class="product-badge">عرض جديد</span>
                        </div>
                        <div class="product-info">
                            <h3>قمح عالي الجودة</h3>
                            <div class="product-meta">
                                <span><i class="fas fa-weight"></i> 500 كجم</span>
                                <span><i class="fas fa-map-marker-alt"></i> الرياض</span>
                            </div>
                            <div class="product-price">
                                <h4>1,200 ريال</h4>
                                <span>لكل طن</span>
                            </div>
                            <div class="product-seller">
                                <img src="https://via.placeholder.com/30" alt="البائع">
                                <div>
                                    <p>أحمد محمد</p>
                                    <div class="rating">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <span>(4.5)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="product-actions">
                                <button class="btn small secondary"><i class="fas fa-eye"></i> التفاصيل</button>
                                <button class="btn small primary"><i class="fas fa-cart-plus"></i> إضافة للسلة</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- أضف المزيد من المنتجات بنفس الهيكل -->
                </div>
            </div>
        </div>
    `;
}

// وظائف مساعدة
function animateStats() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// نموذج إضافة مزرعة
function showAddFarmModal() {
    const modalContent = `
        <form id="add-farm-form">
            <div class="form-group">
                <label for="farm-name"><i class="fas fa-signature"></i> اسم المزرعة</label>
                <input type="text" id="farm-name" required placeholder="أدخل اسم المزرعة">
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="farm-area"><i class="fas fa-ruler-combined"></i> المساحة (هكتار)</label>
                    <input type="number" id="farm-area" required min="0" step="0.1">
                </div>
                
                <div class="form-group">
                    <label for="soil-type"><i class="fas fa-mountain"></i> نوع التربة</label>
                    <select id="soil-type" required>
                        <option value="">اختر نوع التربة</option>
                        <option value="طينية">طينية</option>
                        <option value="رملية">رملية</option>
                        <option value="طمية">طمية</option>
                        <option value="حصوية">حصوية</option>
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="water-source"><i class="fas fa-tint"></i> مصدر المياه</label>
                    <select id="water-source" required>
                        <option value="">اختر مصدر المياه</option>
                        <option value="بئر">بئر</option>
                        <option value="نهر">نهر</option>
                        <option value="مياه معالجة">مياه معالجة</option>
                        <option value="مياه أمطار">مياه أمطار</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="farm-location"><i class="fas fa-map-marker-alt"></i> الموقع</label>
                    <select id="farm-location" required>
                        <option value="">اختر المحافظة</option>
                        <option value="الرياض">الرياض</option>
                        <option value="مكة">مكة</option>
                        <option value="الشرقية">الشرقية</option>
                    </select>
                </div>
            </div>
            
            <div class="form-group">
                <label for="farm-coordinates"><i class="fas fa-map"></i> الإحداثيات (اختياري)</label>
                <input type="text" id="farm-coordinates" placeholder="أدخل الإحداثيات الجغرافية">
            </div>
        </form>
    `;
    
    const modal = createModal('إضافة مزرعة جديدة', modalContent, [
        { text: 'إلغاء', type: 'secondary', action: 'cancel' },
        { text: 'حفظ المزرعة', type: 'primary', action: 'save' }
    ]);
    
    // حدث حفظ المزرعة
    modal.querySelector('[data-action="save"]')?.addEventListener('click', async () => {
        const form = document.getElementById('add-farm-form');
        const formData = new FormData(form);
        
        // هنا سيتم إضافة كود Supabase لحفظ المزرعة
        showNotification('success', 'تم إضافة المزرعة بنجاح!');
        modal.remove();
        
        // تحديث صفحة المزارع
        setTimeout(() => {
            renderFarmsPage();
        }, 1000);
    });
}

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
    // إضافة أحداث التنقل
    document.addEventListener('click', (e) => {
        // التنقل عبر الروابط
        if (e.target.closest('[data-page]')) {
            e.preventDefault();
            const page = e.target.closest('[data-page]').dataset.page;
            navigateTo(page);
        }
        
        // زر تسجيل الخروج
        if (e.target.closest('#logout-btn')) {
            e.preventDefault();
            logout();
        }
    });
    
    // تهيئة Supabase (إلغاء التعليق عند توفر الرابط الصحيح)
    /*
    const { createClient } = supabase;
    window.supabase = createClient(API_CONFIG.supabaseUrl, API_CONFIG.supabaseKey);
    */
    
    // تحميل الصفحة الأولى
    if (window.location.hash) {
        const page = window.location.hash.substring(1);
        navigateTo(page);
    } else {
        navigateTo('home');
    }
});
