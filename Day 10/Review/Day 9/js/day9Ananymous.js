
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 //Basic Anonymous function
 // var functionName = function(){};

 //extremely popular in javascript and Jquery
 //Important in object oriented programming
 //For now, it is matter style choice between anom and regular function

 //Create an anom function to calculate area of a triangle
 var triArea = function (b,h) {
     var area=.5*b*h;
     return area;

 };

 //function call for anom function
 var results = triArea(10,20);

 console.log(results);

 //CHANGES********************************************
var paraArea = function (b,h){
    var area2 = b*h;
    return area2;
};

 var results2 = paraArea(2,4);

 console.log("The area of parallelogram is "+results2);
 //***************************