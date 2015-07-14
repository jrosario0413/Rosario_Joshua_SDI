
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

 var kidHeight = 42;

 var sneakerLift = 2;

 //if the child is 48 inches or taller they can ride the ride
 if(kidHeight >=48){
     // Code inside of here will run if chils is 48 or taller
     console.log("Congrats your are tall enough to ride the coaster");
 } else{
     console.log("sorry too short to ride the coaster");
 }

 console.log("this text is after the code block.");