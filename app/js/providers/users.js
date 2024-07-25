import { settings } from "../settings.js";

export async function getUser() {
    var url = settings.apiUrl + "data/users.json";
    console.log(url);
    return fetch(url)
        .then((response) => response.text())
        .then((text) => { return JSON.parse(text) })
}

export async function getUserByID(email,password) {
    var url = settings.apiUrl + "data/users.json/?email="+email+"&password="+password;
    return fetch(url)
        .then((response) => response.text())
        .then((text) => { return JSON.parse(text) })
}