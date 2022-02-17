const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginSignupPageBtn = document.getElementById("login-signup-page-btn");
const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");
const loginEl = document.getElementById("login-el");
const signupEl = document.getElementById("signup-el");
const loginCloseBtn = document.getElementById("login-close-btn");
const signupCloseBtn = document.getElementById("signup-close-btn");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");

const filterBtn = document.getElementById("filter-btn");
const filterSidebar = document.getElementById("filter-sidebar");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

const hideEl = (element, elementContainer) => {
  elementContainer.style.display = "none";
  element.style.display = "none";
};

const showEl = (element, elementContainer) => {
  elementContainer.style.display = "flex";
  element.style.display = "flex";
};

loginBtn.addEventListener("click", () => {
  hideEl(signupEl, signupContainer);
  showEl(loginEl, loginContainer);
});

loginCloseBtn.addEventListener("click", () => hideEl(loginEl, loginContainer));

loginSignupPageBtn.addEventListener("click", () => {
  hideEl(signupEl, signupContainer);
  showEl(loginEl, loginContainer);
});

signupBtn.addEventListener("click", () => {
  hideEl(loginEl, loginContainer);
  showEl(signupEl, signupContainer);
});

signupCloseBtn.addEventListener("click", () => hideEl(signupEl, signupContainer));

filterBtn.addEventListener("click", () => {
  filterSidebar.style.display = "flex";
  sidebarBackdrop.style.display = "initial"
});

sidebarCloseBtn.addEventListener("click", () => {
  filterSidebar.style.display = "none";
  sidebarBackdrop.style.display = "none";
})

window.addEventListener("click", e => {
  if (e.target == sidebarBackdrop) {
    filterSidebar.style.display = "none";
    sidebarBackdrop.style.display = "none";
  }
});
