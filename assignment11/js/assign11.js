// Hello dear web surfer, if you're reading this then you've discovered my deception
// yes this assignment was supposed to use PHP, but alas PHP insisted that it not be used
// what to do?
// well build some ridiculous javascript ofc.
// obviously this would look cleaner if it was done with PHP
// in fact it would look cleaner if it was done with better javascript
// but in the face of time constraints an application had to be constructed
// so here it is, a brute force solution to assignment 11
// on the surface it looks no different and is fully functional
// hopefully that and the comments explaing its insanity count for something


// Arrays contianing items from the categories and their definintions
var foods = new Array("abalone", "ahi", "antipasto", "hamburger", "quinoa");
var beverages = new Array("absinthe", "amaretto", "aperitif", "margarita", "riesling");
var condiments = new Array("horseradish", "hollandaise", "ketchup", "margarine", "marmalade");
var foods_def = new Array("Shellfish of the univalve family, meaning they only have one shell.",
    "A term used in Hawaii to describe a yellow fin tuna.",
    "This term  denotes a relatively light dish before a meal.",
    "A patty of beef served on a bun and topped with condiments.",
    "This grain was once the staple food of the Incas.");
var beverages_def = new Array("An anise-flavored liqueur.",
    "An Italian almond flavored liqueur made from apricot pits.",
    "A French term for an alcoholic beverage served before a meal as an appetizer.",
    "A drink made using fresh lime juice, orange liqueur and tequila.",
    "A classic German white wine.");
var condiments_def = new Array("Made from a plant that grows wild in European coastal areas.",
    "Made with butter and egg yolks and served hot with vegetables, fish, and eggs.",
    "A thick sweet sauce made with tomatoes, vinegar, sugar, salt, and spices.",
    "A butter substitute.",
    "A jellylike preserve that contains pieces of citrus fruit and rind.");

// function to generate buttons and check answers
function populate() {
    // get the current items stype
    var selection = document.getElementById('selection').value;
    // create a new array to hold values between 0 and 4 to use for selection from the item arrays
    var randIndex = new Array();
    // populate randIndex array with unique random ints within the given range
    while(randIndex.length < 3) {
        var randNum = Math.floor(Math.random() * 4);
        if(randIndex.indexOf(randNum) === -1) randIndex.push(randNum);
    }

    if (selection == 'foods') {
        // if the user selects food
        // with the exception of the item type each block of the if statement is very simular
        // there are two things to note from this:
        // 1. Yes it the code could be streamlined to about 1/3 its size
        // 2. There will only be comments on this first section
        
        // display the item randomly selected from food
        document.getElementById('category').innerHTML = `What answer best applies to the food: ${foods[randIndex[0]]}`;
        // clean choices and results
        document.getElementById('choices').innerHTML = "";
        document.getElementById('result').innerHTML = "";
        // build the first button as the
        var buttonOne = document.createElement("input");  
        buttonOne.type = "button";
        // make the button's value equal to a defintion, note button one is always the 'correct' button
        buttonOne.value = `${foods_def[randIndex[0]]}`
        // function that occures onclick
        buttonOne.onclick = function() {
            // appends an h4 claiming 'you are correct' to results.
            document.getElementById('result').innerHTML = "";
            var result = document.createElement("h4");
            result.innerText = "You are correct";
            document.getElementById("result").appendChild(result);
        }
        // create button two
        var buttonTwo = document.createElement("input");  
        buttonTwo.type = "button";
        // pick some other definition from the current class
        buttonTwo.value = `${foods_def[randIndex[1]]}`
        buttonTwo.onclick = function(){
            document.getElementById('result').innerHTML = "";
            var result = document.createElement("h4");
            result.innerText = "You are incorrect";
            document.getElementById("result").appendChild(result);
        }
        // identical to button two, but with a different random definition
        var buttonThree = document.createElement("input");  
        buttonThree.type = "button";
        buttonThree.value = `${foods_def[randIndex[2]]}`
        buttonThree.onclick = function(){
            document.getElementById('result').innerHTML = "";
            var result = document.createElement("h4");
            result.innerText = "You are incorrect";
            document.getElementById("result").appendChild(result);
        }
        // create array of buttons
        var buttons = new Array(buttonOne, buttonTwo, buttonThree);
        // shuffle array of buttons
        shuffle(buttons);
        // append randomly shuffled buttons to document, with linebreak after each button
        document.getElementById("choices").appendChild(buttons[0]);
        document.getElementById("choices").appendChild(document.createElement("br"));
        document.getElementById("choices").appendChild(buttons[1]);
        document.getElementById("choices").appendChild(document.createElement("br"));
        document.getElementById("choices").appendChild(buttons[2]);
        document.getElementById("choices").appendChild(document.createElement("br"));

    } else if (selection == 'beverages') {
        // if the user selects beverages
        document.getElementById('category').innerHTML = `What answer best applies to the food: ${beverages[randIndex[0]]}`;
        document.getElementById('choices').innerHTML = "";
        document.getElementById('result').innerHTML = "";
        var buttonOne = document.createElement("input");  
        buttonOne.type = "button";
        buttonOne.value = `${beverages_def[randIndex[0]]}`
        buttonOne.onclick = function(){
            document.getElementById('result').innerHTML = "";
            var result = document.createElement("h4");
            result.innerText = "You are correct";
            document.getElementById("result").appendChild(result);
        }
        var buttonTwo = document.createElement("input");  
        buttonTwo.type = "button";
        buttonTwo.value = `${beverages_def[randIndex[1]]}`
        buttonTwo.onclick = function(){
            document.getElementById('result').innerHTML = "";
            var result = document.createElement("h4");
            result.innerText = "You are incorrect";
            document.getElementById("result").appendChild(result);
        }
        var buttonThree = document.createElement("input");  
        buttonThree.type = "button";
        buttonThree.value = `${beverages_def[randIndex[2]]}`
        buttonThree.onclick = function(){
            document.getElementById('result').innerHTML = "";
            var result = document.createElement("h4");
            result.innerText = "You are incorrect";
            document.getElementById("result").appendChild(result);
        }
        var buttons = new Array(buttonOne, buttonTwo, buttonThree);        
        shuffle(buttons);
        document.getElementById("choices").appendChild(buttons[0]);
        document.getElementById("choices").appendChild(document.createElement("br"));
        document.getElementById("choices").appendChild(buttons[1]);
        document.getElementById("choices").appendChild(document.createElement("br"));
        document.getElementById("choices").appendChild(buttons[2]);
        document.getElementById("choices").appendChild(document.createElement("br"));

    } else if (selection == 'condiments') {
        // if the user selects condiments
        document.getElementById('category').innerHTML = `What answer best applies to the food: ${condiments[randIndex[0]]}`;
        document.getElementById('choices').innerHTML = "";
        document.getElementById('result').innerHTML = "";
        var buttonOne = document.createElement("input");  
        buttonOne.type = "button";
        buttonOne.value = `${condiments_def[randIndex[0]]}`
        buttonOne.onclick = function(){
            document.getElementById('result').innerHTML = "";
            var result = document.createElement("h4");
            result.innerText = "You are correct";
            document.getElementById("result").appendChild(result);
        }
        var buttonTwo = document.createElement("input");  
        buttonTwo.type = "button";
        buttonTwo.value = `${condiments_def[randIndex[1]]}`
        buttonTwo.onclick = function(){
            document.getElementById('result').innerHTML = "";
            var result = document.createElement("h4");
            result.innerText = "You are incorrect";
            document.getElementById("result").appendChild(result);
        }
        var buttonThree = document.createElement("input");  
        buttonThree.type = "button";
        buttonThree.value = `${condiments_def[randIndex[2]]}`
        buttonThree.onclick = function(){
            document.getElementById('result').innerHTML = "";
            var result = document.createElement("h4");
            result.innerText = "You are incorrect";
            document.getElementById("result").appendChild(result);
        }
        var buttons = new Array(buttonOne, buttonTwo, buttonThree);
        shuffle(buttons);
        document.getElementById("choices").appendChild(buttons[0]);
        document.getElementById("choices").appendChild(document.createElement("br"));
        document.getElementById("choices").appendChild(buttons[1]);
        document.getElementById("choices").appendChild(document.createElement("br"));
        document.getElementById("choices").appendChild(buttons[2]);
        document.getElementById("choices").appendChild(document.createElement("br"));

    }
}

// function added to shuffle the button arrays
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

