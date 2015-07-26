
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
 var pie = 3.14;
 var diameter = 6;


 //create  another variable for a base of a triangle
 var base = 5;


 //create a function to calculate the circumference of a circle
 var calcCircum= function(p,d){
     var circumTotal =p*d;
     return circumTotal;
 };

 //function call to Circumference
 var resultsCircum = calcCircum(pie,diameter);
 console.log("The circumference is "+resultsCircum);




 //function call
 var resultsCircum = calcCircum(pie,width);
 console.log("The perimeter is "+resultsPeri);

 //create a function to calculate the area of a rectangle
 function calcArea(h,w){
     var area = w*h;
     return area;
 }
