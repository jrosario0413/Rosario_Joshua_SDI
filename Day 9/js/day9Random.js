
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

 //variable for max
 var max = prompt("What is the max value?");

 while((isNaN(max)||max==="") || max<=min)
     if(isNaN(max)){
         max=prompt("Please only type in numbers.\nWhat is the max number?");
     }else if(max<=min&& max!=""){
         max=prompt("Please make sure that the max value is GREATER than the minimum value of "+min+".\nWhat is the max value?")
     }else{
         max=prompt("Please do not leave blank\nWhat is the max value?");
     }

 //Number Cast
     max=Number(max);

 //test values of min and max
 console.log("The min value is "+min+".\nThe max value is "+max+".");


 //Function call the randomizer function
var results1= randomizer(min,max);
console.log("Your random number is "+results1+".");


 //15 random numbers between 10 and 20 to print the console.log
 //What is the sum of these random numbers
 var total=0;

 //Lets create an array to hold the values
 var randomArray =[];

 for(var i=0;i<15;i++){
var tempNum = randomizer(10,20);
     randomArray[i]=tempNum;
     console.log(tempNum);
     total+=tempNum;

 }
console.log("the total of 15 random numbers is " +total+".");
console.log(randomArray);


 //Create the random function
 function randomizer(mn,mx) {
//generate our random number
     var randomNum = Math.round(Math.random()*(mx-mn)+mn);
console.log(randomNum);

     //Return the random number to our main code
     return randomNum;
 }