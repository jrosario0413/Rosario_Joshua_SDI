
 /*
Joshua Rosario
Section 00
Date: 7/18/15
Class: While Loops
 */

//alert("test");

 //Initialize a counter variable
 var counter = 0;

 // while loop with condition
 //run as long as condition is true
 while(counter<200){
     console.log("the current value is "+counter);
     //Change the value of counter variable
     counter+=5;
     //MUST change the value or it will run for EVER

 }

 //Do while loop
 //This loop will always run at least 1 time before checking the condition

 //Create counting variable
 var i = 0;

 do{
     //This code will always run at least once
     console.log("The value of i is "+i);
     //Increment of change
     i++;
 }while(i<10);


 //CHANGES********************************************
for(var s = 20; s <30;s++){
    console.log("The value of S is "+s);
}