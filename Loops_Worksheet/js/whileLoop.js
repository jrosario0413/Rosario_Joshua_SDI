
 /*
Joshua Rosario
Section 00
Date: 7/18/15
Class:While Loop
 */

//alert("test");

 // While Loop

//MATCH LENGTH

 // Ask the user for time limit
 var matchLenght = prompt("Please enter match time limit(seconds).");
 // Directly after each prompt, validate for that prompt
 while(isNaN(matchLenght) || matchLenght===""){
     // re-Prompt using the same variable
     matchLenght=prompt("Please only use numbers and Do not leave blank\nPlease enter a number.");
 }


 while(matchLenght>0){
     console.log("You have "+matchLenght+" seconds left in the match");
     matchLenght--
 }
 console.log("TIMES UP!!!");