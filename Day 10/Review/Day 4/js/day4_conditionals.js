
 /*
Joshua Rosario
Section 00
Date: 7/14/15
Class: Conditionals
 */

//alert("test");

// Basic Conditional IF Statement
 // if(conditional to test){code to run if true. }

 // Create a Boolean variable
 var oldEnough = true;

 // if child is old enough tell him he can ride the coaster
 // else{} - this will run if the IF statement does not run!

 if(oldEnough){
  // Code inside of the {} will run if oldEnough is a Boolean of true
     console.log("You can ride the coaster");
 }
 else{
     // This code will run IF the if block does not run!
     // if old Enough evaluates to a Boolean of false
     console.log("sorry too young to ride");
 }


 // Relational Expressions - Operators

 // Test the kids height to see if he can ride the ride

 var kidHeight = prompt("How tall are you in inches?");

 var sneakerLift = 2;
 var minHeight = 48;

 //if the child is 48 inches or taller they can ride the ride
 if(kidHeight >=minHeight){
     // Code inside of here will run if chils is 48 or taller
     console.log("Congrats your are tall enough to ride the coaster");
 } else if(Number(kidHeight)+sneakerLift >= minHeight){
//This code will run if the child is tall enough while wearing sneakers
     console.log("You are tall enough to ride the coaster with your sneaker, if you wear your sneakers!\nCheater, cheater!");
 } else {
     console.log("sorry too short to ride the coaster");
 }

 console.log("this text is after the code block.");

 //CHANGES********************************************


 var strong = true;
 if(strong){
     console.log("You live.");
 } else{
     console.log("DIE");
 }
