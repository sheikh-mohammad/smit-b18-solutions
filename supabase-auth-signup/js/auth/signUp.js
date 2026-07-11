import { PROJECT_URL, PUBLISH_KEY } from "./../config/config.js";
const { createClient } = supabase;

const supabaseClient = createClient(PROJECT_URL, PUBLISH_KEY);

const email = document.getElementById("email");
const password = document.getElementById("password");

const signUpHandler = async (event) => {
  event.preventDefault();

  const user = {
    email: email.value,
    password: password.value,
  };

  const { data: signedUpUser, error } = await supabaseClient.auth.signUp(user);

  email.value = "";
  password.value = "";

  if (error) {
    console.log(error);
    alert("Error in User Sign Up");
    return;
  }

  console.log(signedUpUser);
  alert("User signed up successfully!");
};

window.signUpHandler = signUpHandler;
