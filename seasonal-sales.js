console.log("hello")

let dataProducts = new XMLHttpRequest();  //First let for Products json

dataProducts.addEventListener("load", dataProComplete);
dataProducts.addEventListener("error", dataProFailed);

function dataProComplete(event){
    console.log("event", event);
    if(event.target.status === 200){
        let bigData = JSON.parse(event.target.responseText);
        console.log("data", bigData);
    }else{
        console.log("Check yo self!");
    }
}

function dataProFailed(event){
    console.log("ooppps");
}

dataProducts.open("GET", "products.json");
dataProducts.send(); 


let dataCategories = new XMLHttpRequest();   // Second let for Categories json

dataCategories.addEventListener("load", dataRequestComplete);
dataCategories.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event) {
    console.log("categories have loaded");
    let catData = JSON.parse(event.target.responseText);
    console.log("catData", catData);
    showData(catData);
}
function dataRequestFailed(event){
    console.log("this data failed to load", event);
}

function showData(taco) {        // Create function to display to DOM
    let productsDiv = document.getElementById("all-products");
    let productsData = '';
    let item;
    for(item in taco){
        let productsItem = taco[item];
         productsData += `<div><h2> ${productsItem.name}: ${productsItem.price}: ${productsItem.category_id}</h2></div>`
    };
    productsDiv.innerHTML = productsData;
    console.log("here are the products");
}

dataProducts.open("GET", "products.json");
dataProducts.send();
