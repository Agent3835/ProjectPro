import { settings } from "../settings.js";

export async function getProducts() {
    var url = settings.apiUrl + "data/products.json";
    return fetch(url)
        .then((response) => response.text())
        .then((text) => { return JSON.parse(text) })
}