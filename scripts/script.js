const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginSignupPageBtn = document.getElementById("login-signup-page-btn");
const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");
const loginEl = document.getElementById("login-el");
const signupEl = document.getElementById("signup-el");
const loginCloseBtn = document.getElementById("login-close-btn");
const signupCloseBtn = document.getElementById("signup-close-btn");

loginBtn.addEventListener("click", () => {
  signupContainer.style.display = "none";
  signupEl.style.display = "none";
  loginContainer.style.display = "flex";
  loginEl.style.display = "flex";
});

loginCloseBtn.addEventListener("click", () => {
  loginContainer.style.display = "none";
  loginEl.style.display = "none";
});

loginSignupPageBtn.addEventListener("click", () => {
  signupContainer.style.display = "none";
  signupEl.style.display = "none";
  loginContainer.style.display = "flex";
  loginEl.style.display = "flex";
});

signupBtn.addEventListener("click", () => {
  loginContainer.style.display = "none";
  loginEl.style.display = "none";
  signupContainer.style.display = "flex";
  signupEl.style.display = "flex";
});

signupCloseBtn.addEventListener("click", () => {
  signupContainer.style.display = "none";
  signupEl.style.display = "none";
});
