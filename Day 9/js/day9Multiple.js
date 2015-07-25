
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
 console.log(resultsArea);




 //function call must go under function definition for an anonymous function
 var resultsPeri = calcPeri(height,width);
 console.log(resultsPeri);

 //create a function to calculate the area of a rectangle
 function calcArea(h,w){
     var area = w*h;
     return area;
 }

//create a function to calculate area of a triangle
 var triArea = function(b,h){
     var area = .5*b*h;
     return area;
 };

 //function call to triangle area
 var triAreaTotal = triArea(base,height);
 console.log(triAreaTotal);

 //create a procedure that will console.log the rectangle perimeter and area
 function printOut(p,a){
     console.log("The perimeter is "+p);
     console.log("The area of the rectangle is "+a);
 }

 //function call for printOut

 printOut(resultsPeri,resultsArea);