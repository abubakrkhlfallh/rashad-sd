// supabase-integration.js - ربط مع قاعدة البيانات

// تهيئة عميل Supabase
function initSupabase() {
    // تحقق من توفر مكتبة supabase
    if (typeof supabase === 'undefined') {
        console.error('مكتبة Supabase غير متوفرة. تأكد من إضافة السكربت.');
        return null;
    }
    
    try {
        const supabaseClient = supabase.createClient(
            API_CONFIG.supabaseUrl,
            API_CONFIG.supabaseKey
        );
        
        console.log('تم تهيئة Supabase بنجاح');
        return supabaseClient;
    } catch (error) {
        console.error('خطأ في تهيئة Supabase:', error);
        return null;
    }
}

// وظائف التعامل مع البيانات

// 1. الملف الشخصي
async function getProfile(userId) {
    const client = initSupabase();
    if (!client) return null;
    
    try {
        const { data, error } = await client
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();
            
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('خطأ في جلب الملف الشخصي:', error);
        return null;
    }
}

async function updateProfile(userId, updates) {
    const client = initSupabase();
    if (!client) return false;
    
    try {
        const { error } = await client
            .from('profiles')
            .update(updates)
            .eq('id', userId);
            
        if (error) throw error;
        return true;
    } catch (error) {
        console.error('خطأ في تحديث الملف الشخصي:', error);
        return false;
    }
}

// 2. المزارع
async function getFarms(farmerId) {
    const client = initSupabase();
    if (!client) return [];
    
    try {
        const { data, error } = await client
            .from('farms')
            .select('*')
            .eq('farmer_id', farmerId)
            .order('created_at', { ascending: false });
            
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('خطأ في جلب المزارع:', error);
        return [];
    }
}

async function createFarm(farmData) {
    const client = initSupabase();
    if (!client) return null;
    
    try {
        const { data, error } = await client
            .from('farms')
            .insert([farmData])
            .select()
            .single();
            
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('خطأ في إنشاء المزرعة:', error);
        return null;
    }
}

// 3. المنتجات
async function getProducts(supplierId = null) {
    const client = initSupabase();
    if (!client) return [];
    
    try {
        let query = client.from('products').select('*');
        
        if (supplierId) {
            query = query.eq('supplier_id', supplierId);
        }
        
        query = query.order('created_at', { ascending: false });
        
        const { data, error } = await query;
        
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('خطأ في جلب المنتجات:', error);
        return [];
    }
}

// 4. جلسات الخبراء
async function getExpertSessions(userId, role) {
    const client = initSupabase();
    if (!client) return [];
    
    try {
        let query = client.from('expert_sessions').select('*');
        
        if (role === 'expert') {
            query = query.eq('expert_id', userId);
        } else {
            query = query.eq('user_id', userId);
        }
        
        query = query.order('scheduled_at', { ascending: true });
        
        const { data, error } = await query;
        
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('خطأ في جلب الجلسات:', error);
        return [];
    }
}

// 5. نظام المحادثات
async function getChats(userId) {
    const client = initSupabase();
    if (!client) return [];
    
    try {
        const { data, error } = await client
            .from('chats')
            .select(`
                *,
                user_one:profiles!user_one(*),
                user_two:profiles!user_two(*),
                messages(*)
            `)
            .or(`user_one.eq.${userId},user_two.eq.${userId}`)
            .order('created_at', { ascending: false });
            
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('خطأ في جلب المحادثات:', error);
        return [];
    }
}

async function sendMessage(chatId, senderId, content) {
    const client = initSupabase();
    if (!client) return false;
    
    try {
        const { error } = await client
            .from('messages')
            .insert([{
                chat_id: chatId,
                sender_id: senderId,
                content: content
            }]);
            
        if (error) throw error;
        return true;
    } catch (error) {
        console.error('خطأ في إرسال الرسالة:', error);
        return false;
    }
}

// 6. تحديث في الوقت الحقيقي (Real-time)
function setupRealtimeListeners(userId) {
    const client = initSupabase();
    if (!client) return;
    
    // استمع للرسائل الجديدة
    client
        .channel('messages-channel')
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'messages'
        }, (payload) => {
            // تحديث واجهة المحادثات
            console.log('رسالة جديدة:', payload.new);
            
            // عرض إشعار
            if (payload.new.sender_id !== userId) {
                showNotification('info', 'رسالة جديدة من المستخدم');
            }
        })
        .subscribe();
    
    // استمع لتحديثات الجلسات
    client
        .channel('sessions-channel')
        .on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'expert_sessions'
        }, (payload) => {
            console.log('تحديث الجلسة:', payload.new);
            
            // عرض إشعار لتحديث حالة الجلسة
            if (payload.new.user_id === userId || payload.new.expert_id === userId) {
                showNotification('info', 'تحديث في جدول الجلسات');
            }
        })
        .subscribe();
}

// دمج Supabase مع وظائف التطبيق
async function loadDashboardData(userId) {
    if (!userId) return;
    
    // جلب البيانات بالتوازي
    const [farms, products, sessions] = await Promise.all([
        getFarms(userId),
        getProducts(),
        getExpertSessions(userId, currentUser?.role)
    ]);
    
    // تحديث واجهة المستخدم بالبيانات
    updateDashboardUI({ farms, products, sessions });
}

// تحديث واجهة لوحة التحكم بالبيانات الحقيقية
function updateDashboardUI(data) {
    // تحديث بطاقات الملخص
    if (data.farms && data.farms.length > 0) {
        const totalArea = data.farms.reduce((sum, farm) => sum + (farm.area || 0), 0);
        document.querySelector('.card-info h3').textContent = totalArea;
    }
    
    // تحديث قائمة المزارع
    if (data.farms) {
        renderFarmsList(data.farms);
    }
    
    // تحديث المنتجات
    if (data.products) {
        renderProductsList(data.products);
    }
                    }
