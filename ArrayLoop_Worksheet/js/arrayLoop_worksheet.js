
 /*
Joshua Rosario
Section 00
Date: 7/21/15
Class: Array Loop Worksheet
 */

//alert("test");

//Justice League Heroes
 //Who leads the assault?

// hero array
 var arr =["superman","batman","flash","cyborg","aquaman"];
 var heroFinder = false;
 //user chooses hero to lead assault


var hero = prompt("Select your hero to lead the assault on Arkham Asylum\nsuperman, batman, flash, cyborg, aquaman");
//validate user prompt
 for(var j = 0; j < arr.length; j++){
     if(hero === arr[j]){
         heroFinder = true;
     }
 }

 while(heroFinder === false){
     hero = prompt("Please select a hero and do not leave blank")
     j = 0;
     for(var j = 0; j < arr.length; j++){
         if(hero === arr[j]){
             heroFinder = true;
         }
     }
 }


     //call out hero
     if(hero==="superman") {
         console.log("Good job "+hero+". You lead the assault!");

     }
     else if(hero==="batman"){
         console.log("Good job "+hero+". You lead the assault!");

     }

     else if (hero==="flash"){
         console.log("Good job "+hero+". You lead the assault!");

     }
     else if(hero==="cyborg"){
         console.log("Good job "+hero+". You lead the assault!");

     }
     else if(hero==="aquaman"){
         console.log("Good job "+hero+". You lead the assault!");

     }

 for(var i =0; i<arr.length; i++) {
    console.log("Follow the leader "+arr[i]);
 }
