export async function loadComponent(options){

//split url
var urlParts = options.url.split('/');
var fileName = urlParts[urlParts.length - 1];

//request and module urls
var now = new Date();
var componentUrl = window.location.href + options.url + "/" + fileName;
var requestUrl = componentUrl  + '.html' + '?a=' + now.getTime();
var moduleUrl = componentUrl + '.js';

//get component
console.log('Loading Component ' + componentUrl);
return await fetch(requestUrl, {
    headers: {
        'pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'cache': 'no-store'
    }
})
.then((response) => response.text())
.then((html) =>{document.getElementById(options.parent).innerHTML = html})
.then(() => {importModule(moduleUrl)})
}

// import module
async function importModule(moduleUrl){
    console.log('Importing module ' + moduleUrl);
    let{init} = await import (moduleUrl);
    init();
}