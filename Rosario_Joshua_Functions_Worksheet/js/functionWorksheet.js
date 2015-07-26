
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
 var userPrompt = prompt("Would you like to calculate the area of a parallelogram?\nPlease answer yes or no?");

 while(userPrompt.toLowerCase() !="yes" && userPrompt.toLowerCase()!="no"){
     userPrompt=prompt("Please only answer yes or no\nWould you like to calculate the area of a parallelogram?");
 }

 if(userPrompt.toLowerCase()==="yes"){
     //create a function to calculate area of a parallelogram

     var paArea = function(b,h){
         var area = b*h;
         return area;
     };
//function call to parallelogram area
     var paAreaTotal = paArea(base,height);
     console.log("The parallelogram area is "+paAreaTotal);

 }



 //create a function to calculate the circumference of a circle
 var calcCircum= function(p,d){
     var circumTotal =p*d;
     return circumTotal;
 };

 //function call to Circumference
 var resultsCircum = calcCircum(pie,diameter);
 console.log("The circumference is "+resultsCircum);




 //function call
 var resultsCircum = calcCircum(pie,diameter);
 console.log("The Circumference is "+resultsCircum);


 //create a procedure that will console.log the circle circumference and area of parallelogram
 function printOut(c,a){
     console.log("The circumference of the circle is "+c);
     console.log("The area of the parallelogram is "+a);
 }

 //function call for printOut

 printOut(resultsCircum,paAreaTotal);