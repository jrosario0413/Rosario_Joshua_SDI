
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");
//Function Worksheet

 //Find circumference of a Circle and Area

 //Create variables for height and width
 var pie = Math.PI;
 var diameter = 6;


 //create  another variable for a base of a parallelogram
 var base = 5;
var height = 6;
 //ASk user if they would like to calculate area of a parallelogram
 var userPrompt = prompt("Would you like to calculate the area of a parallelogram and Circumference of a circle?\nPlease answer yes or no?");

 while(userPrompt.toLowerCase() !="yes" && userPrompt.toLowerCase()!="no"){
     userPrompt=prompt("Please only answer yes or no\nWould you like to calculate the area of a parallelogram?");
 }

 if(userPrompt.toLowerCase()==="yes") {
     //create a function to calculate area of a parallelogram

     var paArea = function () {
         var base = 5;
         var height = 6;

         var area = base * height;
         return area;
     };
//function call to parallelogram area
     console.log(paArea(base,height));
      console.log("The area is "+paArea(base,height)+" feet square.");

     var paAreaTotal = paArea();


     //create a function to calculate the circumference of a circle
     var calcCircum = function () {
        var pie = Math.PI;
         var diameter = 6;

         var circumTotal = pie * diameter;
         return circumTotal;
     };

     //function call to Circumference
     console.log(Math.round(calcCircum(pie,diameter)));
     var resultsCircum = calcCircum(pie, diameter);
     console.log("The circumference is " + Math.round(resultsCircum)+" feet.");


     //create a procedure that will console.log the circle circumference and area of parallelogram
     function printOut(c, a) {
         console.log("The circumference of the circle is " + c+" feet.");
         console.log("The area of the parallelogram is " + a+" feet square");
     }

     //function call for printOut
printOut(Math.round(resultsCircum),paAreaTotal);

 } else{
     alert("Ok well see ya");
 }

 //Test codes
 /*
 I always tested the circumference with PI so only the diameter changed I started with 6 and total is 19 used 20 for diameter came out as 63
 i also used 14 for diameter and total came out to 44

 for the area of parallelogram i used base 5 and height 6 total was = 30
 base = 5 height = 7 total = 35
  */

