
 /*
Joshua Rosario
Section 00
Date: 7/25/15
Class:procedure
 */

//alert("test");

 //This is a normal function

 function calcArea(w,h){
     var area = w*h;
     //returns a variable
     return area;
 }

 //function call to calcArea
 //catch the return value
 var results1 = calcArea(10,20);

 console.log(results1);

 //this is a procedure
 //list of steps to do
 //returns nothing
 function calcPeri(w,h){
     var peri=2*w+2*h;
     console.log(peri);
 }


 //function call for our procedure
 //does not catch anything
 calcPeri(10,20);
