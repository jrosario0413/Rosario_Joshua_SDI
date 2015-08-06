
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 //Variable Scope
 //Variable that are inside and outside of a function


 //Create a variable called width in our main code
 //This variable is scoped outside of the function
 //Scoped to the Main Code
 var width =5;

 //Console log it
 console.log("Starting width is "+width);

 // Create a variable called changeMe
 //Scoped to the main code
 var changeMe =7;
 console.log("The starting value of changeMe is "+changeMe);




 // create a function that calculates the perimeter of a rectangle
 function calcPeri(){
     //Create variables for width and height and perimeter
     //Try not to re use variable names
     //BUT this is going to be impossible for larger files

     //This variable is scoped to the function calcPeri
     var width = 10;
     console.log("Width inside of function is "+width);
     var height = 20;
     var perimeter = width*2+height*2;

     //Change the value of changeMe
     changeMe=15;
     console.log("Inside of function changeMe is "+changeMe);


     console.log("The perimeter is "+perimeter);
 }

 console.log("Before the function call width is "+width);

 console.log("Before the function call changMe is "+changeMe);

 calcPeri();

 console.log("After the function call changeMe is "+changeMe);

 console.log("After the function call width is "+width);


 //This will not work
 // Main Code cannot see inside of a function
 //console.log("The value of height is "+height);


 //CHANGES********************************************
 function calcArea(){

     var width = 20;
     var height= 30;
     var area = width*height;
     console.log("The area of the rectangle "+area);
 }