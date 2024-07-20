import { menu } from "./settings.js";

let language = "EN";

export const init = () => {
  console.log("Initializing sidemenu");
  drawMenu(language);


  // add event listener for the side menu toggle language
  document.getElementById("icon-language").addEventListener("click", toggleLanguage);
};

function drawMenu(language) {
  console.log(menu);
  // Link stylesheet
  var parent = document.getElementById("sidemenu");
  parent.innerHTML =
    '<link rel="stylesheet" href="components/sidemenu/sidemenu.css">';
  menu.forEach((option) => {
    drawMenuOption(language, option);
  });
}

function toggleLanguage() {
  if (language === "EN") {
    language = "ES";
  } else {
    language = "EN";
  }
  drawMenu(language);
}

function drawMenuOption(language, option) {
  const parent = document.getElementById("sidemenu");

  const divOption = document.createElement("div");
  divOption.className = "sidemenu-option";
  parent.appendChild(divOption);

  const divIcon = document.createElement("div");
  divIcon.className = "sidemenu-icon";
  divIcon.style.background = "var(--" + option.module + ")";
  divOption.appendChild(divIcon);

  const icon = document.createElement("i");
  icon.className = "fas fa-" + option.icon;
  divIcon.appendChild(icon);

  const divText = document.createElement("div");
  divText.className = "sidemenu-text";
  divText.id = "sidemenu-option-" + option.module;
  divOption.appendChild(divText);

  const label = document.createElement("label");
  label.textContent = (language === "ES") ? option.title[0] : option.title[1];
  divText.appendChild(label);

  if (option.submenu) {
      const divArrow = document.createElement("div");
      divArrow.className = "sidemenu-arrow";
      divOption.appendChild(divArrow);

      const arrowIcon = document.createElement("i");
      arrowIcon.className = "fas fa-chevron-down";
      divArrow.appendChild(arrowIcon);

      const submenuContainer = document.createElement("div");
      submenuContainer.className = "submenu-container";
      divOption.appendChild(submenuContainer);

      option.submenu.forEach(submenuOption => {
        var submenuOptionDiv = document.createElement('div');
        submenuOptionDiv.className = 'submenu-option';
        submenuContainer.appendChild(submenuOptionDiv);

        var submenuOptionLabel = document.createElement('label');
        submenuOptionLabel.textContent = language === 'EN' ? submenuOption.title[1] : submenuOption.title[0];
        submenuOptionDiv.appendChild(submenuOptionLabel);
    });

      divOption.addEventListener("click", function () {
          submenuContainer.classList.toggle("submenu-visible");
          arrowIcon.classList.toggle("rotate-arrow");
      });
  }
}
// <!--html goes here-->
//     <div class="sidemenu-arrow">
//         <i id="icon-down-arrow" class="fas fa-chevron-down" style="color: #ffffff;"></i>
//     </div>
