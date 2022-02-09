//? Named Function
// 1. Create two variables that each hold a NUMBER.
// 2. Create a function that accepts to numbers as function parameters, adds the two parameter variables together, and returns the value.
// 3. Pass the variables made before as arguments for the function and run the function.
// 4. Store the returned function value in a variable and log that variable to the console.

//? Anonymous Function
// 1. Create two variables that each hold a STRING.
// 2. Create an anonymous function with a name that accepts two strings as function parameters, combines the parameter variables into one string, and returns the new value.
// 3. Use variables made above as arguments for the anonymous function and run the anonymous function.
// 4. Store the returned function value in a variable and log that variable to the console.




//named function for finding the biggest number.
var firstNumber =50;
var secondNumber =74;

function addTwoNumbers(a,b){
    return a+b;
}

addTwoNumbers(firstNumber,secondNumber);
var result = addTwoNumbers(50,70);
console.log("result:", result);
//end named function.

//anonymous function
var firstString = "Hello ";
var secondString ="world!";

var addTwoStrings = function (x,y){
    return x+y;
}

addTwoStrings(firstString,secondString);
var stringResult = addTwoStrings("hello ","bob");
console.log("stringResult :", stringResult);
//end anonymous function