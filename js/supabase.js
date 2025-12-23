<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
const SUPABASE_URL = "https://yqtaszzlibfocaonrygf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdGFzenpsaWJmb2Nhb25yeWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NjkzNTAsImV4cCI6MjA4MjA0NTM1MH0.mRu7m-xeW162j13seV1v7J_mdKWpKLEMsfkjffrAhnw";

window.supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
</script>
