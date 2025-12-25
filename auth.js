// auth.js - نظام المصادقة

function renderLoginPage() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <div class="auth-container fade-in">
            <div class="auth-box">
                <!-- علامات التبويب -->
                <div class="auth-tabs">
                    <button class="auth-tab active" data-tab="login">تسجيل الدخول</button>
                    <button class="auth-tab" data-tab="register">إنشاء حساب جديد</button>
                </div>

                <!-- محتوى تسجيل الدخول -->
                <div class="auth-content active" id="login-content">
                    <form id="login-form">
                        <div class="form-group">
                            <label for="login-email"><i class="fas fa-envelope"></i> البريد الإلكتروني</label>
                            <input type="email" id="login-email" required placeholder="example@domain.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="login-password"><i class="fas fa-lock"></i> كلمة المرور</label>
                            <input type="password" id="login-password" required>
                            <a href="#" class="forgot-password">نسيت كلمة المرور؟</a>
                        </div>
                        
                        <button type="submit" class="auth-btn primary">
                            <i class="fas fa-sign-in-alt"></i> تسجيل الدخول
                        </button>
                    </form>
                </div>

                <!-- محتوى إنشاء حساب -->
                <div class="auth-content" id="register-content">
                    <form id="register-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="full-name"><i class="fas fa-user"></i> الاسم الكامل</label>
                                <input type="text" id="full-name" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email"><i class="fas fa-envelope"></i> البريد الإلكتروني</label>
                                <input type="email" id="email" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="password"><i class="fas fa-lock"></i> كلمة المرور</label>
                                <input type="password" id="password" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="confirm-password"><i class="fas fa-lock"></i> تأكيد كلمة المرور</label>
                                <input type="password" id="confirm-password" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone"><i class="fas fa-phone"></i> رقم الهاتف</label>
                                <input type="tel" id="phone" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="state"><i class="fas fa-map-marker-alt"></i> المحافظة/الولاية</label>
                                <select id="state" required>
                                    <option value="">اختر المحافظة</option>
                                    <option value="الرياض">الرياض</option>
                                    <option value="مكة">مكة</option>
                                    <option value="الشرقية">الشرقية</option>
                                    <option value="عسير">عسير</option>
                                </select>
                            </div>
                        </div>
                        
                        <!-- اختيار الدور -->
                        <div class="form-group">
                            <label><i class="fas fa-user-tag"></i> الدور</label>
                            <div class="role-options">
                                <label class="role-option">
                                    <input type="radio" name="role" value="farmer" required>
                                    <div class="role-card">
                                        <i class="fas fa-tractor"></i>
                                        <span>مزارع</span>
                                    </div>
                                </label>
                                
                                <label class="role-option">
                                    <input type="radio" name="role" value="trader">
                                    <div class="role-card">
                                        <i class="fas fa-store"></i>
                                        <span>تاجر</span>
                                    </div>
                                </label>
                                
                                <label class="role-option">
                                    <input type="radio" name="role" value="supplier">
                                    <div class="role-card">
                                        <i class="fas fa-truck"></i>
                                        <span>مورد</span>
                                    </div>
                                </label>
                                
                                <label class="role-option">
                                    <input type="radio" name="role" value="expert">
                                    <div class="role-card">
                                        <i class="fas fa-user-graduate"></i>
                                        <span>خبير</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        
                        <!-- شروط الخدمة -->
                        <div class="terms-agreement">
                            <input type="checkbox" id="terms" required>
                            <label for="terms">أوافق على <a href="#">شروط الخدمة</a> و <a href="#">سياسة الخصوصية</a></label>
                        </div>
                        
                        <button type="submit" class="auth-btn primary">
                            <i class="fas fa-user-plus"></i> إنشاء حساب
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    // إضافة تنسيقات صفحة المصادقة
    const style = document.createElement('style');
    style.textContent = `
        .auth-container {
            min-height: calc(100vh - 200px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 20px;
            background: linear-gradient(135deg, var(--light-green) 0%, var(--primary-green) 100%);
        }
        
        .auth-box {
            background-color: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            width: 100%;
            max-width: 800px;
            overflow: hidden;
        }
        
        .auth-tabs {
            display: flex;
            background-color: var(--light-gray);
        }
        
        .auth-tab {
            flex: 1;
            padding: 20px;
            border: none;
            background: none;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            color: var(--text-light);
        }
        
        .auth-tab.active {
            background-color: white;
            color: var(--primary-green);
            box-shadow: 0 -3px 0 var(--primary-green) inset;
        }
        
        .auth-content {
            padding: 40px;
            display: none;
        }
        
        .auth-content.active {
            display: block;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--text-dark);
        }
        
        input, select {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        
        input:focus, select:focus {
            outline: none;
            border-color: var(--primary-green);
            box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.1);
        }
        
        .forgot-password {
            display: inline-block;
            margin-top: 5px;
            color: var(--blue);
            text-decoration: none;
            font-size: 0.9rem;
        }
        
        .auth-btn {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        
        .auth-btn.primary {
            background-color: var(--primary-green);
            color: white;
        }
        
        .auth-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .role-options {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 10px;
        }
        
        .role-option {
            position: relative;
        }
        
        .role-option input {
            position: absolute;
            opacity: 0;
        }
        
        .role-card {
            padding: 20px 10px;
            border: 2px solid #ddd;
            border-radius: 8px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .role-card i {
            font-size: 2rem;
            margin-bottom: 10px;
            color: var(--text-light);
        }
        
        .role-option input:checked + .role-card {
            border-color: var(--primary-green);
            background-color: rgba(46, 125, 50, 0.05);
        }
        
        .role-option input:checked + .role-card i {
            color: var(--primary-green);
        }
        
        .terms-agreement {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 20px 0;
            padding: 15px;
            background-color: var(--light-gray);
            border-radius: 8px;
        }
        
        .terms-agreement a {
            color: var(--blue);
            text-decoration: none;
        }
    `;
    document.head.appendChild(style);

    // إضافة أحداث علامات التبويب
    const tabs = document.querySelectorAll('.auth-tab');
    const contents = document.querySelectorAll('.auth-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            
            // تحديث علامات التبويب النشطة
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // تحديث المحتوى النشط
            contents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // حدث تسجيل الدخول
    document.getElementById('login-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        try {
            showNotification('info', 'جاري تسجيل الدخول...');
            
            // هنا سيتم إضافة كود Supabase للدخول
            // const { data, error } = await supabase.auth.signInWithPassword({
            //     email,
            //     password
            // });
            
            // محاكاة الدخول بنجاح
            setTimeout(() => {
                showNotification('success', 'تم تسجيل الدخول بنجاح!');
                currentUser = { email, role: 'farmer' };
                navigateTo('dashboard');
            }, 1500);
            
        } catch (error) {
            showNotification('error', 'خطأ في تسجيل الدخول. تحقق من بياناتك.');
        }
    });

    // حدث إنشاء حساب
    document.getElementById('register-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            fullName: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirm-password').value,
            phone: document.getElementById('phone').value,
            state: document.getElementById('state').value,
            role: document.querySelector('input[name="role"]:checked')?.value
        };
        
        // التحقق من تطابق كلمات المرور
        if (formData.password !== formData.confirmPassword) {
            showNotification('error', 'كلمات المرور غير متطابقة!');
            return;
        }
        
        try {
            showNotification('info', 'جاري إنشاء الحساب...');
            
            // هنا سيتم إضافة كود Supabase للتسجيل
            // const { data, error } = await supabase.auth.signUp({
            //     email: formData.email,
            //     password: formData.password,
            //     options: {
            //         data: {
            //             full_name: formData.fullName,
            //             role: formData.role,
            //             phone: formData.phone,
            //             state: formData.state
            //         }
            //     }
            // });
            
            // محاكاة التسجيل بنجاح
            setTimeout(() => {
                showNotification('success', 'تم إنشاء الحساب بنجاح! تحقق من بريدك الإلكتروني.');
                document.querySelector('[data-tab="login"]').click();
            }, 1500);
            
        } catch (error) {
            showNotification('error', 'حدث خطأ أثناء إنشاء الحساب. حاول مرة أخرى.');
        }
    });
}

// وظيفة تسجيل الخروج
function logout() {
    // هنا سيتم إضافة كود Supabase للتسجيل الخروج
    // await supabase.auth.signOut();
    
    currentUser = null;
    showNotification('info', 'تم تسجيل الخروج بنجاح');
    navigateTo('home');
                                                            }
