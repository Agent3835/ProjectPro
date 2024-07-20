import {
    getSideMenuVisible,
    toggleSideMenuVisible,
    getLanguage,
    toggleLanguageOnce
} from "../../js/main.js";
import { getUser } from "../../js/providers/users.js";

export const init = () => {
    console.log('Initializing header...');

    // Load user data
    getUser().then((response) => {
        if (response.status === 0) {
            showUser(response.user);
        }
    });

    // Add event listener for the side menu toggle button
    document.getElementById('header-left').addEventListener('click', toggleSideMenu);
    document.getElementById('icon-language').addEventListener('click', toggleLanguage);
    document .getElementById('icon-theme').addEventListener('click', toggleTheme);
};

function showUser(user) {
    console.log('User photo URL:', user.photo); // Verifica la URL aquí
    document.getElementById('img-user-photo').src = user.photo;
    document.getElementById('label-user-name').textContent = user.name;
    document.getElementById('label-user-role').textContent = user.role.name;
    document.getElementById('label-language').textContent = user.preferences.language.id;
    document.getElementById('label-theme').textContent = user.preferences.theme;
}

function toggleSideMenu() {
    toggleSideMenuVisible();
    if (getSideMenuVisible()) {
        document.getElementById('sidemenu').style.display = 'block';
  //      document.getElementById('content').style.marginLeft = '300px'; // Ajusta según tus necesidades
    } else {
        document.getElementById('sidemenu').style.display = 'none';
        document.getElementById('content').style.marginLeft = '0';
    }
}

function toggleTheme() {
    console.log('Toggling theme...');
    toggleThemeOnce();
    if (getTheme() === 'dark') {
        document.getElementById('icon-theme').style.color = 'white';
    } else {
        document.getElementById('icon-theme').style.color = 'black';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});


