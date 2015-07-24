
 /*
Joshua Rosario
Section 00
Date: 7/23/15
Class:Function Worksheet
 */

//alert("test");

 //Function worksheet

 //Calculate the Circumference of a Circle
 var radius = 5;
 var diameter=5*2;
 var pie = 3.14;
 var circumference = pie*diameter;
 console.log("The Circumference of the Circle is "+circumference);

 //Create a function for circumference of a circle
 function calcCircum(p,d){
     // Calculate the circumference
     var circumferenceTotal=p*d;

     //Console.log the results
     console.log("The circumference is "+circumferenceTotal);



     return circumferenceTotal;

 }

var total=calcCircum(3.14,30);
 console.log("The circumference of whatever circle is "+total);


 //Bee stings to KILL

 var animalWeight = 5;

 //Create a funcition that will calculate death by bee sting
 function stings(animalWeight){

     //animal weight* 8.666666667 = stings needed to die
     var stingsNeeded = animalWeight* 8.666666667;

     //Print out the results
     console.log("It takes "+stingsNeeded+" stings to kill an animal that weights "+animalWeight+" pounds");

return stingsNeeded;
 }
//use function

 var results2 = stings(animalWeight);
 // print results

 console.log("It takes "+results2+" stings to kill an animal that weights "+animalWeight+" pounds");

