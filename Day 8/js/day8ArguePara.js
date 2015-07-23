
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 // Arguements goes in the function call - "specific values"
 //Parameters goes in the function definition and these catch the arguement - "Generic containers"


 //Create variables for width and height
 var width = 10;
 var height = 20;



 //Create a function to calculate the area of a rectangle

 function calcArea(w,h){

     //Create variables
    // width = 10;
      //height = 20;

     //Calculate area
     var area = w*h;

     //console log the area
     console.log("The area of a rectangle with a width of "+w+" and a height of "+h+" is "+area);
 }

 //call the function
 calcArea(width,height);


 //Find the area with width = 6 height = 7
 calcArea(6,7);

 //ask the user
 var userWidth = prompt("Lets calculate the area of a rectangle.\nPlease enter a Width");

 //Validate & number cast the input
 var userHeight=prompt("Please enter a Height");

 //How would i calculate the area?
 calcArea(userWidth,userHeight);

 //Create a funcition that will calculate dog years
 function dogYears(humanAge){
     //Input a human year and spit out a dog year
     //humanAge*7 = dog age
     var dogAge = humanAge*7;

     //Print out the results
     console.log("A dog who is "+humanAge+" is "+dogAge+" in dog years.");


 }

 //Calculate how old a 4 year old dog is in dog years
 dogYears(4);

 //Calculate how old a 7 year old dog is in dog years
dogYears(7);

 //prompt user for their dog age
 var yourDogAge = prompt("Let's figure out how old your dog is in dog years.\nPlease enter your dog's human age");

 dogYears(yourDogAge);
