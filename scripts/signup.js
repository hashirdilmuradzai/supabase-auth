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

  console.log(response);

  if (!response.error) {
    alert("Your account has been created successfully!");
    window.location.href = "../pages/signin.html";
  } else {
    alert(response.error.message);
  }

  signUpName.value = "";
  signUpPhone.value = "";
  signUpEmail.value = "";
  signUpPassword.value = "";
};
