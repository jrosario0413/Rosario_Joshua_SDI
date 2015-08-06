
 /*
Joshua Rosario
Section 00
Date: 7/18/15
Class: For Loops
 */

//alert("test");

 //Basic for loop
 //for(initialize counter; condition; increment of change){}

 for(var i = 10; i > 0; i--){
     console.log("The value of i is "+i);
 }

 // Breaks - if this command is run, your loop will stop
 for(var j = -10; j < 5; j--){
     console.log("The value of j is "+j);

     // IF the value of j is 3 stop my loop
     if(j<-10000){
         break;
     }
 }

 //CHANGES********************************************
var d = prompt("what number should 'd' equal to?");
 while(isNaN(d)||d===""){
     d = prompt("please only use numbers\nwhat does d equal to?");
 }
 console.log("The value of d is "+d);