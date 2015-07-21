
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 // We have 1 zombie here at Full Sail.
 //It can bite 4 people a day and turn them into zombies by the next day.

 //The CDC wants to know how many zombies there will be in 8 days
 //Create the givens
 //How many zombies with have
 var numZombies = 1;

 //Number of bites a zombie can have a day
 var numBites = 4;

 //What is our timeline?
 var days = 8;
/*
 for(var i =1; i<=days; i++){
     //How many people get infected everyday
     var infectedPeople = numZombies*numBites;

     // How many zombies will we have?
     numZombies+=infectedPeople;

     console.log("on Day # "+i+" there will be "+numZombies+" Zombies!!!");
 }
 */

 //The CDC wants to know how many zombies days it will take for there to be a million zombies

 //Variable to count the number of days
 var numDays = 1;

 while(numZombies<=1000000){
     //How many people get infected everyday
     var infectedPeople = numZombies*numBites;

     // How many zombies will we have?
     numZombies+=infectedPeople;

     //Report out each day
     console.log("on Day # "+numDays+" there will be "+numZombies+" Zombies!!!");

     //Increment the day
     numDays++;
 }

 console.log("It will take "+(numDays-1)+" to make a million zombies!");