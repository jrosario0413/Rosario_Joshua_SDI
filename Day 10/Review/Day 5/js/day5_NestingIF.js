
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 // Some decisions affect other decisions

 // If it is warm outside, let's go to the beach
 // If it is NOT warm outside, let's go to the movies.

 //CHANGES********************************************



 // Get temperature as a variable
 var temp = prompt("what is the water temp?");

 //********************
 var waterTemp = 74;


 //test the temperature
 //warm is 80 and above

if(temp >=80){
 //code will run if temp is 80 + go to the beach
    console.log("Let's go to the beach");
    // If water is above 75 degree lets go swimming
    // if not lets get a tan

    if(waterTemp>75){
        console.log("Let's go swimming");
    } else {
        console.log("Let's get a tan");
    }
} else {
    console.log("Let's go see a movie");

    //Ask if kids are going with
    var kids =prompt("Are you bringing kids?\nPlease type in yes or no.");

    //Validate the kids prompt
    //Expecting yes or no

    if (kids.toLowerCase()!="yes"&& kids.toLowerCase()!="no"){
        //re-prompt the user
        kids=prompt("please only type in yes or no\nAre you bringing children");
    }

    //if kids are coming to the movies go see Minions
    //if not go see ant man
    //.toLowerCase() - changes a text to lower case
    console.log(kids.toLowerCase());
    // Permanently changes the values
   // kids=kids.toLowerCase();
    console.log(kids);


    if(kids.toLowerCase()==="yes"){
        console.log("Go see the Minions");
    } else {
        console.log("go see ant man");
    }

}


