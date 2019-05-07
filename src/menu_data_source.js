
$(document).ready(function() {
    initPromiseChain();
});

//this chains together the promises to complete in order
function initPromiseChain() {
    initPricesData();
}


function initPricesData(){
    window.pricesArray = [];
    getJSONArray("../src/prices.json")
        .then(array => {
            for(let i = 0; i<array.length; i++){
                let num = array[i]["_id"];
                pricesArray[num] = new Price(array[i]["_id"],array[i]["_amount"]);
            };
            initIngredientsData();
        }, error => alert("Error occurred: " + error))
        .catch(error => alert("Error occurred: " + error));
}

function initIngredientsData(){
    window.ingredientsArray = [];
    getJSONArray("../src/ingredients.json")
        .then(array => {
            for(let i = 0; i<array.length; i++){
                let num = array[i]["_id"];
                ingredientsArray[num] = new Ingredient(array[i]["_id"],array[i]["_name"],
                    array[i]["_type"]);
            };
            initIngredientsTypeData();
        }, error => alert("Error occurred: " + error))
        .catch(error => alert("Error occurred: " + error));
}

function initIngredientsTypeData(){
    window.ingredientsTypeArray = [];
    getJSONArray("../src/ingredients_type.json")
        .then(array => {
            for(let i = 0; i<array.length; i++){
                let num = array[i]["_id"];
                ingredientsTypeArray[num] = new IngredientType(array[i]["_id"],array[i]["_type"]);
            };
            initFoodCategoryData();
        }, error => alert("Error occurred: " + error))
        .catch(error => alert("Error occurred: " + error));
}

function initFoodCategoryData(){
    window.foodCategoryArray = [];
    getJSONArray("../src/food_categories.json")
        .then(array => {
            for(let i = 0; i<array.length; i++){
                let num = array[i]["_id"];
                foodCategoryArray[num] = new FoodCategory(array[i]["_id"],array[i]["_name"],array[i]["_description"]);
            };
            initFoodData();
        }, error => alert("Error occurred: " + error))
        .catch(error => alert("Error occurred: " + error));
}

function initFoodData(){
    window.foodArray = [];
    getJSONArray("../src/food.json")
        .then(array => {
            for(let i = 0; i<array.length; i++){
                 num = array[i]["_id"];
                foodArray[num] =
                    new Food(array[i]["_id"],array[i]["_name"],array[i]["_food_category"], array[i]["_ingredients_array"],
                        array[i]["_price"],array[i]["_description"]);
            };
            menuInit()
        }, error => alert("Error occurred: " + error))
        .catch(error => alert("Error occurred: "+num  + error));
}


