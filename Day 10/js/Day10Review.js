
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 //Figure out how much pizza cost per square inch
 //How much pizza per slice

 //Prompt the user for:
 //Radius of pizza
 //Cost of pizza
 //# of the slices

 var pizzaRadius = prompt("We are going to calculate how much pizza costs.\nWhat is the radius of your pizza?");
 //Validate
 while(isNaN(pizzaRadius)|| pizzaRadius===""){
     //re-prompt
     pizzaRadius=prompt("Please do not leave blank and only use numbers.\nWhat is your pizza radius?");
 }

 //Cast to numbers
 pizzaRadius=Number(pizzaRadius);

 var pizzaCost = prompt("How much does your pizza cost in total?");
 //Validate
 while(isNaN(pizzaCost)|| pizzaCost===""){
     //re-prompt
     pizzaCost=prompt("Please do not leave blank and only use numbers.\nWhat is your pizza cost?");
 }

 //cast to number
pizzaCost=Number(pizzaCost);


 var pizzaSlices = prompt("How many slices are in your pizza?");
 //Validate
 while(isNaN(pizzaSlices)|| pizzaSlices===""){
     //re-prompt
     pizzaSlices=prompt("Please do not leave blank and only use numbers.\nHow many pizza slices?");
 }

 //cast to number
 pizzaSlices=Number(pizzaSlices);





 //Create a function that launches all of the other functions
 function masterPizzaFunk(rad,cost,slices){
     //Function call for area function
     var area =pizzaArea(rad);

     //Function call the Sq In Function
     var sqInCost = pizzaSqInCost(cost,area);

     //Function call to slices function
     var slicePrice = pricePerSlice(slices,cost);

     return [sqInCost,slicePrice];

 }

 //function call to master function
 var result = masterPizzaFunk(pizzaRadius,pizzaCost,pizzaSlices);


 //Print out results
 console.log("Your pizza cost $"+result[0]+" per sq inch of pizza or $"+result[1]+" per slice.");


 //Create a function to calculate the area of pizza
 function pizzaArea(r){
     //Area of circle r*r*PI
     var area = Math.pow(r,2)*Math.PI;
     return area;


 }

 //Create a function that calculates the price per square inch

 function pizzaSqInCost(price,area){
//Cost per in = price/area
     var costPerIn = price/area;
     //Since this is cost - aka dollars and cents
     //Round to 2 decimal places
     costPerIn=costPerIn.toFixed(2);

     return costPerIn;



 }

 //Create a function that calculates the cost per slice
 function pricePerSlice(slices,price){
     //cost per slice = pizza price/#of slices
     var costPerSlice = price/slices;

     //round to 2 decimal places
     costPerSlice = costPerSlice.toFixed(2);

     return costPerSlice;


 }