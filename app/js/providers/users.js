import { settings } from '../settings.js';

export async function getUser(){
    var url = settings.apiUrl + 'data/users.json';
    return fetch(url)
    .then((response) => response.text())
    .then((text) => {return JSON.parse(text);})
}