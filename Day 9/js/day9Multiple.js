
 /*
Joshua Rosario
Section 00
Date: 7/25/15
Class:Multple
 */

//alert("test");

 //Create variables for height and width
 var height = 8;
 var width = 6;


 //create  another variable for a base of a triangle
 var base = 5;


 //create a function to calculate the perimeter of a rectangle
 var calcPeri= function(h,w){
     var periTotal =2*h+2*w;
     return periTotal;
 };

 //function call to area
 var resultsArea = calcArea(height,width);
 console.log("The area is "+resultsArea);




 //function call must go under function definition for an anonymous function
 var resultsPeri = calcPeri(height,width);
 console.log("The perimeter is "+resultsPeri);

 //create a function to calculate the area of a rectangle
 function calcArea(h,w){
     var area = w*h;
     return area;
 }

 //ASk user if they would like to calculate area of a triangle
 var userPrompt = prompt("Would you like to calculate the area of a rectangle?\nPlease answer yes or no?");

 while(userPrompt.toLowerCase() !="yes" && userPrompt.toLowerCase()!="no"){
     userPrompt=prompt("Please only answer yes or no\nWould you like to calculate the area of a triangle?");
 }

 //conditional to see if we should run the anonymous function
 if(userPrompt.toLowerCase()==="yes"){
     //create a function to calculate area of a triangle

     var triArea = function(b,h){
         var area = .5*b*h;
         return area;
     };

     //function call to triangle area
     var triAreaTotal = triArea(base,height);
     console.log("The Triangle area is "+triAreaTotal);
 }








 //create a procedure that will console.log the rectangle perimeter and area
 function printOut(p,a){
     console.log("The perimeter is "+p);
     console.log("The area of the rectangle is "+a);
 }

 //function call for printOut

 printOut(resultsPeri,resultsArea);