
 /*
Joshua Rosario
Section 00
Date: 7/23/15
Class:Function Worksheet
 */

//alert("test");

 //Function worksheet

 //Calculate the Circumference of a Circle
 var radius = 5;
 var diameter=5*2;
 var pie = 3.14;
 var circumference = pie*diameter;
 console.log("The Circumference of the Circle is "+circumference);

 //Create a function for circumference of a circle
 function calcCircum(p,d){
     // Calculate the circumference
     var circumferenceTotal=p*d;

     //Console.log the results
     console.log("The circumference is "+circumferenceTotal);


     //in order to use results in main code use return
     //return - "Whatever you want to return";
     return circumferenceTotal;

 }

