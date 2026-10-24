const supabaseURL = "https://baiatiwucgslosyrtfuv.supabase.co";
const SupabaseKey = "sb_publishable_4RKSX2Eq2zYTjWiEPEu6vg_b1pRjN37";

const supabaseClient = supabase.createClient(supabaseURL, SupabaseKey);

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const signUpName = document.querySelector("#signup-name");
const signUpPhone = document.querySelector("#signup-phone");
const signUpEmail = document.querySelector("#signup-email");
const signUpPassword = document.querySelector("#signup-password");

const createNewUser = async (event) => {
  event.preventDefault();

  const response = await supabaseClient.auth.signUp({
    email: signUpEmail.value.trim(),
    password: signUpPassword.value.trim(),
    options: {
      data: {
        name: signUpName.value.trim(),
        phone: signUpPhone.value.trim(),
      },
    },
  });

  if (!response.error) {
    alert("Your account has been created successfully!");
    signUpName.value = "";
    signUpPhone.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
    window.location.href = "../pages/auth.html";
  } else {
    alert(response.error.message);
  }
};

const signInEmail = document.querySelector("#signin-email");
const signInPassword = document.querySelector("#signin-password");

const logInUser = async (event) => {
  event.preventDefault();

  const response = await supabaseClient.auth.signInWithPassword({
    email: signInEmail.value,
    password: signInPassword.value,
  });

  if (!response.error) {
    alert("Login successful! Welcome back.");
    signInEmail.value = "";
    signInPassword.value = "";
    window.location.href = "../pages/dashboard.html";
  } else {
    alert(response.error.message);
  }
};
