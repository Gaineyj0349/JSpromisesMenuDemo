function menuItemClicked(key) {
    //clear table from previous
    let tableParent  = document.getElementById("div_food_display");
    while (tableParent .firstChild) {
        tableParent .removeChild(tableParent .firstChild);
    }
    createTableFromFoodCategory(key);

}

function menuInit() {
    console.log("menuInit called!");
    foodCategoryArray.forEach(function (obj) {
        if(obj.name !== "Toppings"){
            let category = document.createElement("a");
            category.setAttribute("href", "#");
            category.innerHTML = obj.name;
            category.onclick = function(){
                menuItemClicked(obj.id);
            };
            O("menu_food_nav").appendChild(category);
        }
    });
    createTableFromFoodCategory(1);
}

function createTableFromFoodCategory(categoryIndex) {
    let mappedFoods = foodArray.filter(obj => obj.foodCategory === categoryIndex);
    let table = document.createElement('table');
    table.setAttribute("class", "menu_table")
    O("div_food_display").appendChild(table);
    let headerRow = table.insertRow();
    headerRow.setAttribute("class", "menu_table_header");
    let header1 =  headerRow.insertCell(0);
    header1.setAttribute("class", "menu_table_header_td");
    header1.innerHTML = "Dish"
    let header2 =  headerRow.insertCell(1);
    header2.setAttribute("class", "menu_table_header_td");
    header2.innerHTML = "Price"
    mappedFoods.forEach(function (obj) {
        let tableRow = table.insertRow();
        let cell1 =  tableRow.insertCell(0);
        cell1.setAttribute("class", "menu_table_nonheader_td");
        cell1.innerHTML = getFoodStringHTML(obj);
        if(obj.price !== 0){
            let cell2 =  tableRow.insertCell(1);
            cell2.setAttribute("class", "menu_table_nonheader_td");
            cell2.innerHTML = "$"+pricesArray[obj.price].amount;
        }else{
            //TODO logic to take care of special case price
            let cell2 =  tableRow.insertCell(1);
            cell2.setAttribute("class", "menu_table_nonheader_td");
            cell2.innerHTML = 0;
        }
    });

}

function getFoodStringHTML(obj){
    let string = "";
    string += "<b class='menu_table_nonheader_td_name'><u>" + obj.name +"</u></b>" +
        getDescriptionIfNotEmpty(obj);
    return string;
}

function getDescriptionIfNotEmpty(obj){
    let string = "";
    if(obj.description.length>0){
        string += "<br><span class='menu_table_nonheader_td_description'>"+ obj.description +"</span>";
    }
    string += getIngredientsIfNotEmpty(obj);
    return string;
}

function getIngredientsIfNotEmpty(obj){
    let string = "";
    if(obj.foodIngredientsArray !== undefined ){
        string += "<br><i class='menu_table_nonheader_td_ingredients'>"+ getIngredientsArrayAsString(obj) +"</i>";
    }
    return string;
}

function getIngredientsArrayAsString(obj){
    let string = "";
    let firstItem = true;
    console.log(obj.foodIngredientsArray.length);
    obj.foodIngredientsArray.forEach(function (ingredient) {
        if(firstItem){
            firstItem = false;
            string +=  ingredientsArray[ingredient].name ;
        }else{
            string +=  ", "+ ingredientsArray[ingredient].name ;
        }
    });


    return string;
}