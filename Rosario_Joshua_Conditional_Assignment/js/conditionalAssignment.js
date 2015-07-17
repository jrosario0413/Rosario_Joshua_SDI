
 /*
Joshua Rosario
Section 00
Date: 7/16/15
Class: Conditional Assignment
 */

//alert("test");

 // To calculate if you are a PC, Xbox, Playstation, or nintendo gamer
 // PC gaming uses mouse and Keyboard - Precision - approximately $700
 // Xbox - Halo/ Gears of War / TitanFall - bigger controller - approximately $350
 // PlayStation - Uncharted/ Tomb Raider/ Bloodborne - smaller controller - approximately $400
 // Nintendo ds - pokemon/ mario/ smash bros - approximately $160
 // Why not enjoy all gaming systems - approximately $1600

 //alert("What gaming console is for you?");
//ask gamer for budget
var gameBudget = prompt("First, What is your spending limit (Budget)?");
console.log(gameBudget);
//Validate user
 if(isNaN(gameBudget) || gameBudget==="") {
     // Re- Prompt the user
     if (isNaN(gameBudget)) {
         steakTemp = prompt("Please only use numbers");


     } else {
         gameBudget= prompt("Do not leave blank");
     }

 }


 if(gameBudget<= 150){
     alert("Save more money!");
     console.log("Dude save your money!!!!!");
 } else if(gameBudget <= 160){
     alert("You can buy a Nintendo 3DS.");
     console.log("You can buy a Nintendo 3DS.");
 } else if(gameBudget >= 350&& gameBudget<=399){
     alert("You can buy an Xbox One.");
     console.log("You can buy an Xbox One.");
 } else if (gameBudget >= 400&& gameBudget<=699){
     alert("You can buy a PlayStation 4");
     console.log("You can buy a PlayStation 4");
 } else if(gameBudget>= 700){
     alert("You can buy a PC");
     console.log("You can buy a PC");
 } else {
     alert("You can actually buy all current gen consoles!!!!!!");
     console.log("You can actually buy all current gen consoles!!!!!!");
 }

