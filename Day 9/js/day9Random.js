
 /*
Joshua Rosario
Section 00
Date: 7/25/15
Class: Random Number Generator
 */

//alert("test");

 //Create a function thath will take in a user prompted max and min value and return a random number between them

 //Create a variable fir the min value

var min=prompt("We are going to find a random number between 2 values\nWhat is the minimum value?");
 //validate
 while(isNaN(min)||min===""){
     if(isNaN(min)){
         min=prompt("Please only type in numbers.\nWhat is the minimum number?");
     }else{
         min=prompt("Please do not leave blank\nWhat is the minimum value?");
     }
 }

 //Number cast or parseInt
 min=Number(min);

 