"use strict";
console.log("hello")

var button1 = document.getElementById("season-btn");
var sales = (function () {
    var privateItems = [];

    return {
        loadSaleItems: function(callbackFunction) {
            //create XHR to load products.json
            var loader = new XMLHttpRequest();

            //Listener for load event
            //function for callback
            loader.addEventListener("load", function () {
                //set value to privateItems array
              privateItems = JSON.parse(this.responseText).products;
              console.log("privateItems", privateItems);
                
            callbackFunction(privateItems);
            });
            
            loader.open("GET", "products.json");
            loader.send();
        }
    }
})();

function listProducts (products) {
        //list products to the DOM
        var list = document.getElementById("all-products");
        var outputString = "";
        
        console.log("hello there");
        //for loop through array
      for (var i = 0; i < products.length; i++) {
          var currentProducts = products[i];

          //build up or DOM string
          outputString += `<h1>${currentProducts.name}</h1>`;
          outputString += `<h3>${currentProducts.price}</h3>`;
        }

      list.innerHTML = outputString;
}

var salesCategories = (function () {
    var privateCategories = [];

    return {
        loadCategories: function () {
            //create XHR to load products.json
            var loading = new XMLHttpRequest();

            //Listener for load event
            //function for callback
            loading.addEventListener("load", function () {
                //set value to privateItems array
              privateCategories = JSON.parse(this.responseText).categories;
              console.log("privateCategories", privateCategories);
                
            });
            
            loading.open("GET", "categories.json");
            loading.send();
        }
    }
})();

function whatSeason(){
    var currentSeason = document.getElementById("dropDown").value;
    console.log("current season", currentSeason);
    if (currentSeason == 1){
        console.log("winter is coming");
    } else if(currentSeason == 2){
        console.log("autumn");
    } else if(currentSeason == 3){
        console.log("spring");
    }
};

function allDiscount(products){
    for(let i = 0; i < products.length; i++);
      var currentProducts = products[i];
      var currentId = currentProducts.category_id;
      console.log("works", currentId);
}


sales.loadSaleItems();
salesCategories.loadCategories();
sales.loadSaleItems(whatSeason);
sales.loadSaleItems(listProducts);

button1.addEventListener("click", whatSeason);





// let dataProducts = new XMLHttpRequest();  //First let for Products json

// dataProducts.addEventListener("load", dataProComplete);
// dataProducts.addEventListener("error", dataProFailed);

// function dataProComplete(event){
//     console.log("event", event);
//     if(event.target.status === 200){
//         let bigData = JSON.parse(event.target.responseText);
//         console.log("data", bigData);
//         console.log(bigData);
//     }else{
//         console.log("Check yo self!");
//     }
// }

// function dataProFailed(event){
//     console.log("ooppps");
// }

// dataProducts.open("GET", "products.json");
// dataProducts.send(); 


// let dataCategories = new XMLHttpRequest();   // Second let for Categories json

// dataCategories.addEventListener("load", dataRequestComplete);
// dataCategories.addEventListener("error", dataRequestFailed);

// function dataRequestComplete(event) {
//     console.log("categories have loaded");
//     let catData = JSON.parse(event.target.responseText);
//     console.log("catData", catData.categories);
//     showData(catData.categories);
// }
// function dataRequestFailed(event){
//     console.log("this data failed to load", event);
// }

// function showData(taco) {        // Create function to display to DOM
//     let productsDiv = document.getElementById("all-products");
//     let productsData = '';
//     let item;
//     for(item in taco){
//         console.log(item, "item");
//         let productsItem = taco[item];
//          productsData += `<div><h2> ${productsItem.name}: ${productsItem.price}: ${productsItem.category_id}</h2></div>`
//     };
//     productsDiv.innerHTML = productsData;
//     console.log("here are the products");
// }

// dataCategories.open("GET", "categories.json");
// dataCategories.send();
