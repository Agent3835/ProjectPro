import { getUser } from "../../js/providers/users.js";
import { getSideMenuVisible, toggleSideMenuVisible } from "../../js/main.js";

var lang = "EN";

export const init = () => {
  console.log("Initializing header");
  getUser().then((response) => {
    if (response.status === 0) showUser(response.user);
  });
};

function showUser(user) {
  document.getElementById("img-user-photo").src = user.photo;
  document.getElementById("label-user-name").textContent = user.name;
  document.getElementById("label-user-role").textContent = user.role.name;
  document.getElementById("label-lang").textContent = getLanguage();
  
  document.getElementById("label-lang").addEventListener("click", () => {
    toggleLanguage();
  });
  // Events
  document.getElementById("icon-language").addEventListener("click", () => {
    toggleLanguage();
  });
  document.getElementById("header-menu").addEventListener("click", () => {
    toggleSideMenu();
  });
  document.getElementById("icon-theme").addEventListener("click", () => {
    toggleTheme();
  });
}

function getLanguage() {
  return lang;
}

// Toggle language
function toggleLanguage() {
  lang = getLanguage() === "EN" ? "ES" : "EN";
  document.getElementById("label-lang").textContent = lang;
  console.log("Toggle language...");

  const event = new CustomEvent("languageToggled", { detail: { lang } });
  window.dispatchEvent(event);
}

// Toggle side menu
function toggleSideMenu() {
  toggleSideMenuVisible();
  console.log("Toggle side menu...");
  if (getSideMenuVisible()) {
    document.getElementById("sidemenu").style.display = "block";
    document.getElementById("content").style.width = 'calc(100% - 300px)';
  } else {
    document.getElementById("sidemenu").style.display = "none";
    document.getElementById("content").style.width = '100%';
  }
}

// Toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}
