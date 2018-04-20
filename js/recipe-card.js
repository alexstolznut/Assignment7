/*eslint-env browser*/
var recipeCard = function (title, servings, ingredients) {
    "use strict";
    var title1 = title;
    var servings1 =servings;
    var ingredients1 = [ingredients];
    ingredients1 = ingredients1.join();
    ingredients1 = ingredients1.split(",");
    this.speak = function () {
        
        window.console.log(title1);
        window.console.log("Servings: " + servings1);
        for (var i = 0; i <= ingredients1.length; i = i + 1) {
            window.console.log("- " + ingredients1[i]);
        }

    }
   



};


var recipeCard1 = new recipeCard("Guacamole", "4", "3 Avocados, 1 Lime, 1 Teaspoon Salt, 1/2 Cup Onion, 3 Tablespoons Cilantro, 2 Diced Tomatoes, 1 Teaspoon Garlic, 1 Pinch Ground Pepper");
recipeCard1.speak();

