/*
Joshua Rosario
Section 00
7/11/15
Prompts
 */

//alert("test");

// Ask the user for their input

var userInput = prompt("Enter your year of birth:");


//CHANGES********************************************
while(isNaN(userInput)||userInput===""){
    userInput = prompt("only type in numbers\nWhat is your age?");
}
//**********************************************************
console.log(userInput);
var age = 2015 - userInput;
console.log("You are "+ age + " years old");

// Calculate the area of a Rectangle

//Prompt the user for width
var width = prompt("Let's calculate the area of rectangle.\nPlease enter a width");

//Prompt the user for height
var height = prompt("Please enter the height");

// Calculate the area using the user input
var area = width * height;

console.log("the area of your rectangle is "+area);

// Create a variable that holds the whole result
var result = "the area of your rectangle is " + area;
console.log(result);
alert(result);