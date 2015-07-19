
 /*
Joshua Rosario
Section 00
Date: 7/18/15
Class:Do while loops
 */

//alert("test");

 // Do while Loop
 //ask user if they wanna fight?
 var fight= prompt("Want to fight? (yes)or(no)?");

 // Validate
 while(fight.toLowerCase()!="yes"&& fight.toLowerCase()!="no") {
// re- prompt the user using the same variable
     fight = prompt("Please only use type yes or no.\nYES or NO.");
 }

     var matchLenght = prompt("Please enter match time limit(seconds).");
     // Directly after each prompt, validate for that prompt
     while (isNaN(matchLenght) || matchLenght === "") {
         // re-Prompt using the same variable
         matchLenght = prompt("Please only use numbers and Do not leave blank\nPlease enter a number.");
     }
     do {
         console.log("You have " + matchLenght + " seconds left in the match");
         matchLenght--
     } while (matchLenght > 0);


     console.log("TIMES UP!!!");


