
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 //Create a function area of a rectangle
 function calcArea(w,h){
     // Calculate the area
     var area=w*h;

     //Console.log the results
     console.log("The area is "+area);


     //in order to use results in main code use return
     //return - "Whatever you want to return";
     return area;

 }

 //call the function
 //catch the returned value in a variable
 var results = calcArea(10,30);

 //Access the area in Main Code
 console.log(results);


 //Calculate w 40 h 60
 var results2 = calcArea(40,60);
 console.log(results2);

 //what is the total area of both rectangles
 var total = results+results2;
 console.log("The combine area of both is "+total);

 //CHANGES********************************************
if(results<results2){
    console.log("Wow big rectangle");
}else{
    console.log("You defy quantum physics");
}