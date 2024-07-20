import { loadComponent } from "./providers/components.js";
import { settings } from "./settings.js";

//side menu
var sideMenuVisible = true;
let language = "EN";

//getters and setters
export function getSideMenuVisible() {
  return sideMenuVisible;
}
export function toggleSideMenuVisible() {
  sideMenuVisible = !sideMenuVisible;
}
//getters
export function getLanguage() {
  return language;
}

//setters
export function setLanguage(language) {
  language = language;
}

//toggle language
export function toggleLanguageOnce() {
  if (language === "EN") {
    language = "ES";
  } else {
    language = "EN";
  }
  console.log("Language:", language);
}

//event handler
window.addEventListener("load", load);

//load document
function load() {
  console.log("Loading Main...");
  //loading components
  // loadComponent({
  //     parent: 'header',
  //     url: 'components/header'
  // });
  settings.load.components.forEach((c) => {
    loadComponent(c);
  });
}
