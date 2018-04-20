/*eslint-env browser*/

//STEP 1
//function Cat() {}
//var cat1 = new Cat();
//STEP 2
//var Dog = function () {}
//var dog1 = new Dog();
//
//window.console.log(dog1, cat1);


//STEP 3
//var Animal = function () {
//    "use strict";
//
//    this.message = window.console.log("This is an animal");
//
//
//
//}
//var part3 = new Animal();
//part3.message;

//STEP 4
//var Animal2 = function () {
//    "use strict";
//
//    this.message = function (message) {
//        return window.console.log(message);
//    }
//}
//
//var test = new Animal2();
//test.message("Again");

//STEP 5
//var Animal = function(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//
//var Dog = new Animal("Feline", "Grumpy", "Black", "2ft", "5ft");
//
//window.console.log(Dog.type, Dog.breed, Dog.color, Dog.height, Dog.length);

//STEP 6
//var Animal = function(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//var animal = new Animal("Feline", "Grumpy", "Black", "2ft", "5ft");
//for (var property in animal){
//    window.console.log(property);
//}

//STEP 7

//var Animal = function(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//
//var speak = function(object){
//    
//    var type = object.type.toUpperCase();
//    if(type === "DOG"){
//        window.console.log("The " + object.color.toLocaleLowerCase() + " dog is barking");
//    } else if (type === "CAT") {
//        window.console.log("The " + object.color.toLocaleLowerCase() + " cat is meowing");
//    } else {
//        window.console.log("We only speak for cats and dogs");
//    }
//}
//var animal = new Animal("cat", "Grumpy", "Black", "2ft", "5ft");
//
//speak(animal);

//STEP 8
//var Animal = function (type, breed, color, height, length) {
//    "use strict";
//    var type, breed, color, height, length;
//    var checkType = function () {
//
//        if (type.toUpperCase() === "DOG") {
//            return "dog";
//        } else {
//            return "cat";
//        }
//    };
//
//    this.speak = function () {
//        var x = checkType();
//        window.console.log(x + " has made a noise");
//    }
//
//
//
//};
//
//
//var animal = new Animal("Unicorn", "Grumpy", "Black", "2ft", "5ft");
//animal.speak();

//STEP 9

//String.prototype.findWords = function () {
//    var word = "the"
//    var tempWord = this.split(" ");
//    var count = 0;
//    for(var i = 0; i < tempWord.length; i = i + 1){
//        if(tempWord[i] === word){
//          count+=1
//        }
//           
//    
//    }
//    window.alert("'The' Appeared in your string "+count+" times" );
//}
//var message = "the dog the dog the dog the the theodore";
//message.findWords();