
 /*
Joshua Rosario
Section 00
Date: 7/14/15
Class: Logical Operators
 */

//alert("test");

 // Check the price of an item. Scooter
 var scooterCost = 1000;
var  budget = 800;
 var paycheck = 500;

 // if the price of the scooter is less than our budget then we can buy
 // AND if our paycheck is over 400;


 if(scooterCost<budget){
     console.log("We can buy the scooter.");
 } else {
     console.log("The cost is too high for our budget.");
 }

 if(paycheck>400){
     console.log("We can buy the scooter!");
 } else {
     console.log("Our paycheck is too small to buy the scooter");
 }


 // Use the AND logical operator to test both conditions at one time

 if(scooterCost<budget&&paycheck>400){
     console.log("Both the scooter is in budget and our payceck is high enough");

 } else {
     console.log("sorry you cannot buy the scooter");
 }

 // OR Logical Operator
 //Either one must be true in order to be true.

 // if the scooter is less than or equal to our budget OR if we won the lottery than we can buy the scooter

 var wonLottery = false;

 if(scooterCost<=budget || wonLottery){
     console.log("you have enough money to buy the scooter or you won the LOTTERY!!!");
 } else {
     console.log("Sorry, no scooter for you, keep playing the lottery");
 }