
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
 //ask age
 var yearBorn = prompt("What year were you born?");
 //validate age of user

 if(isNaN(yearBorn) || yearBorn==="") {
     // Re- Prompt the user
     if (isNaN(yearBorn)) {
         yearBorn = prompt("Please only use numbers\nWhat year were you born?");


     } else {
         yearBorn = prompt("Do not leave blank\nWhat year were you born?");

     }
 }
     var currentYear = 2015;
     var age = currentYear - yearBorn;
     console.log("age is "+age);
     if(age<=13){
         alert("Too young for consoles, play with toys");
         console.log("Buy toys");

     } else {
         (age <=6)? alert("Too young Play with toys") : alert("Old enough for mature gaming");
         console.log("Old enough for mature gaming");


         var gameBudget = prompt("What is your spending limit (Budget)?");
         console.log(gameBudget);
//Validate user
         if (isNaN(gameBudget) || gameBudget === "") {
             // Re- Prompt the user
             if (isNaN(gameBudget)) {
                 gameBudget = prompt("Please only use numbers\nWhat is your Budget?");


             } else {
                 gameBudget = prompt("Do not leave blank\nWhat is your Budget?");
             }

         }
console.log("Your budget is $"+gameBudget);

         if (gameBudget <= 150) {
             alert("Save more money!");
             console.log("Dude save your money!!!!!");
         } else if (gameBudget >= 160 && gameBudget <= 350) {
             alert("You can buy a Nintendo 3DS.");
             console.log("You can buy a Nintendo 3DS.");
         } else if (gameBudget >= 350 && gameBudget <= 399) {
             alert("You can buy an Xbox One.");
             console.log("You can buy an Xbox One.");
         } else if (gameBudget >= 400 && gameBudget <= 699) {
             alert("You can buy a PlayStation 4");
             console.log("You can buy a PlayStation 4");
         } else if (gameBudget <= 800) {
             alert("You can buy a PC");
             console.log("You can buy a PC");
         } else {
             alert("You can actually buy all current gen consoles!!!!!!");
             console.log("You can actually buy all current gen consoles!!!!!!");
         }

     }



 //Tested Results
 //"year born = 2015 - 1994 = your age is 21 "Old enough for mature gaming" - the budget was 400 - so I was able to buy a PS4
 //"year born" = 2015 -2008 = your age is 7 "too young for consoles buy toys"
 //"year born" = 2015 - 1999 = your age is 16 "old enough for mature gaming" - the budget was 900 - so i was able to buy all current gen consoles
 // "year born" = 2015 - 2000" = your age is 15 "old enough for mature gaming" - the budget was 266 - so i was able to buy a nintendo 3ds