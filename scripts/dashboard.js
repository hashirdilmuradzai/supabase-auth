const supabaseURL = "https://baiatiwucgslosyrtfuv.supabase.co";
const SupabaseKey = "sb_publishable_4RKSX2Eq2zYTjWiEPEu6vg_b1pRjN37";

const supabaseClient = supabase.createClient(supabaseURL, SupabaseKey);

const checkUser = async () => {
  const response = await supabaseClient.auth.getUser();

  if (!response.data.user) {
    window.location.href = "../pages/auth.html";
  }
};

checkUser();
