/*
All arrays are attached to the window object - ex: window.pricesArray = [];
All arrays are associative arrays and the identifier is the _id from json.

 */

class Price {
    id;
    amount;
    constructor(id, amount){
        this.id = id;
        this.amount = amount;
    }
}

class Ingredient{
    id;
    name;
    type;
    constructor(id, name,type){
        this.id = id;
        this.name = name;
        this.type = type;
    }
}

class IngredientType{
    id;
    type;
    constructor(id, type){
        this.id = id;
        this.type = type;
    }
}

class FoodCategory{
    id;
    name;
    description;
    constructor(id, name,description){
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

class Food{
    id;
    name;
    foodCategory;
    foodIngredientsArray = [];
    price;
    description;
    constructor(id, name, foodCategory, ingredientsArrayString, price, description) {
        this.id = id;
        this.name = name;
        this.foodCategory = foodCategory;
        this.price = price;
        this.description = description;


        //initialize the foodIngredientsArray with the ingredientsArrayString argument
        if(ingredientsArrayString.length>0){
            if(ingredientsArrayString.includes(",")){

                this.foodIngredientsArray = ingredientsArrayString.split(",");
                for(let i = 0; i<  this.foodIngredientsArray.length ; i++){
                    this.foodIngredientsArray[i] = parseInt(this.foodIngredientsArray[i],10);
                }
            }else{
                this.foodIngredientsArray.push(parseInt(ingredientsArrayString))
                for(let i = 0; i<  this.foodIngredientsArray.length ; i++){
                    this.foodIngredientsArray[i] = parseInt(this.foodIngredientsArray[i],10);
                }
            }
        }
    }
}