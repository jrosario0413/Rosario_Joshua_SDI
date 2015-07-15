
 /*
Joshua Rosario
Section 00
Date: 7/14/15
Class: Conditional Worksheet
 */

//alert("test");

// Group 1: Expressions with Conditionals
 // Last Chance for Gas


    var gasEfficiency = 20; //(in MPG's)
    var gasTank = 10; // (in gallons)
    var gasReading = 50; // (in%)

 var convertToDecimal = gasReading / 100;

 var howMuchGasLeft = gasTank * convertToDecimal;

 var howFarCanIGo = gasEfficiency * howMuchGasLeft;

 var distance = 200;



 if(howFarCanIGo<distance){
     console.log("You only have 5 gallons of gas in your tank, better get gas now while you can!");
 } else {
     console.log("Yes, you can make it without stopping for gas!");
 }

 //Group 2: Multiple Results
 // Check the login


 var usernameEntered = 1;
 var usernamePassword = 2;
 var correctUsername = 3;
 var correctPassword = 4;

 if(usernameEntered+usernamePassword>=3){
console.log("Welcome, XXX!");
 } else if(correctUsername+usernamePassword<4){
console.log("User not found. Try Again.");
 } else{
     console.log("Password does not match our records.");
 }

// Group 3: Multiple Conditions
 // Movie Ticket

 var ticketAdult = 12;
 var discount = 7;
 var movieTime = 4;
var age = 18;
var age2 = 60;
 if(movieTime>=3 && movieTime<=5){
console.log("The Ticket price is $7.00.");
 } else if(age<55){
console.log("The Ticket price is $12.00.");
 } else{
     console.log("The Ticket is $1000000.");
 }

//can hold 10 gallons
 //50% left
 //50 / 100 = .50
 //10