import { getProducts } from "../../js/providers/products.js";

export const init = () => {
  console.log("Initializing Products...");
  getProducts().then((response) => {
    console.log(response);
    if (response.status === 0) showProducts(response.products);
  });
};


function showProducts(data) {
    console.log('Showing Products...');
    let template = document.getElementById('template-product');
    if (!template) {
        console.log('Template element template-day not found');
        return;
    }
    let fragment = document.createDocumentFragment();
    var index = 0;

    data.forEach(d => {
        console.log(d);

        let templateContent = template.content.cloneNode(true);
        templateContent.querySelector('#product-name').textContent = d.ProductName;
        templateContent.querySelector('#product-category').textContent = d.ProductType;
        templateContent.querySelector('#product-description').textContent = d.Description;
        templateContent.querySelector('#product-price').textContent = d.Price;
        templateContent.querySelector('#product-img').src = d.Image;
        fragment.appendChild(templateContent);
        index++;
    });

    document.getElementById('catalog').appendChild(fragment);

}


