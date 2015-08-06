
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 // Create an array of Scooby-Doo Characters

 var scoobyGang = ["Scooby","Shaggy","Velma","Daphne"];

 //Push an array
 scoobyGang.push("Fred");

 scoobyGang.push("Scooby Dum");

 scoobyGang.push("Scrappy");

 //Cycle through this array and tell each one of them that they solved a crime.
 console.log(scoobyGang.length);

 for(var i =0; i<scoobyGang.length; i++){
     //call out scooby and shaggy to get scooby snacks
     if(scoobyGang[i]==="Scooby" || scoobyGang[i]==="Shaggy"){
         console.log("Good job "+scoobyGang[i]+". You get a scooby snack.");
     }else{
         console.log("You have solved the crime "+scoobyGang[i]);

     }
 }


 //Create an array of bills
 var bills=[50,10,5,20,10,40];

 // create a variable and define it for total
 var total = 0;

 //create a loop to add u all of our bills from dinner
 for(var j = 0; j<bills.length; j++ ) {
     //Test to get each item in bill
     // console.log(bills[j]);

     //only add up bills 15 or greater
     if (bills[j] > 15){

     //Add up the values of bills
         total += bills[j];
 }
 }

 console.log("The total of your bills is $ "+total);


 //CHANGES********************************************

 var names=["josh","nesto","vid"];
 

 for(var e =0; i<scoobyGang.length; i++){
     //call out scooby and shaggy to get scooby snacks
     if(names[e]==="josh" || names[e]==="vid"){
         console.log("Good job "+names[e]+". you are awesome.");
     }else{
         console.log("You sir area average "+names[e]);

     }
 }