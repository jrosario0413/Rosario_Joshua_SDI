/*
This is gonna be a multi lined comment
Joshua Rosario
7/9/15
SDI Section 00
Day 2 Coding Basics
 */
//alert("This is making sure our js file is connected");

//This is a single line comment
//Usually describes what comed right after

/*
multi line comment
anything between the stars and slashes is ignored by the browsers
 */

//alert - gives the user info but returns nothing to us
alert("Welcome to SDI");

//Console logging information
console.log("This is the console learn to love it");

//Declare a variable
//Start with keyword var
var whatever; //Declaration of a variable
//Define the variable
whatever = 45;
// create a storage container = value ;

//Declare and define a variable
var a = 2;

//Send variable value to the console so we can see it
console.log(a);

//Change the value of a variable
a=6;
console.log(a);

//add 3 to the current value of a
a=a+3;
console.log(a);

//Create another variable
var b;
b=a+3;

console.log(a);
console.log(b);

//Simple math
//Find your age

//Create a variable for year born
var yearBorn = 1994;
var age = 2015 - yearBorn;
console.log(age);


//MATH!!!!!
// +,-,*, /

//Find the area of a triangle
var width = 8;
var height = 7;

var areaTriangle = width*height/2;
console.log(areaTriangle);

//Modulo - %
//Gives you the remainder

var remainder = 31%3;
console.log(remainder);

//Find out if even or odd
//Modulo by 2
var evenOrOdd = 67%2
console.log(evenOrOdd);
// 0 means even
// 1 means odd


//Assignment Operators
/*
= Assignment Operator - "is"
++ Adds 1 to the current value of the variable
-- Substarcts 1 from current value
=+ Addition assignment operator - adds the value after it to the current value
-= Substraction assignment operator - substracts the value after it of the current value
/= Division operator - divides by the current value
*= Multiplication assignment - multplies the following by the current
 */

var tester = 5;
tester++; // tester = tester+1;
tester--; // tester = tester-1;
tester +=3; // tester = tester + 3;
tester -=6; // tester = tester - 6;
tester /=3 // tester = tester / 3;
tester *=6 // tester = tester * 6;


console.log(tester);

// Order of Operations
// PEMDAS - Please Excuse My Dear Aunt Sally
// Parenthesis, Exponents, Multiplication, Divide, Add, Subtract

//Find quiz Averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

// add up all of them then divide by the number of them
var average = (quiz1 + quiz2 + quiz3) /3;
console.log(average);

// String - text for coding
// Must have matching " or '
// Needed to separate variable names from standard text

var kermit = "light green";
var frogName = "kermit";

console.log(frogName);

// Double or single quotes?
// Escape character \ blackslash
var phrase = 'I don\'t know.\nYou never know!';
console.log(phrase);

// \n New Line Character


// Booleans - True or False
// Light switches of programming
var yes = true;
var nope = "false";
var notCorrect = false;
// A string of "false" is NOT equal to a Boolean of false


