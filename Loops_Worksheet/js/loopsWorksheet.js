
 /*
Joshua Rosario
Section 00
Date: 7/18/15
Class: Loops Worksheet
 */

//alert("test");

// For Loop

 //Killstreak loop
 //KillStreaks:
 //5 kills UAV
 //10 kills Air Strike
 //25 kills Tactial Nuke

 for(var kills=0;kills<6;kills++){
console.log("You have "+kills+" kills.");


 }

console.log("You have earned a UAV");
 console.log("BUT you died go on another killing spree!!");

 for(var kills2=0;kills2<11;kills2++){
     console.log("You have "+kills2+" kills.")
 }
 console.log("You have earned an Air Strike.");
 console.log("BUT you died go on another killing spree!!");

 for(kills3=0;kills3<26;kills3++){
     console.log("You have "+kills3+" kills.")
 }
 console.log("YOU EARNED THE TACTICAL NUKE");
alert("You EARNED THE TACTICAL NUKE");
 var nuke= prompt("Call it in? (yes)or(no)?");

 // Validate
 while(nuke.toLowerCase()!="yes"&& nuke.toLowerCase()!="no"){
// re- prompt the user using the same variable
     nuke=prompt("Please only use type yes or no.\nYES or NO.");


     }
 if(nuke.toLowerCase()==="yes"){
     console.log("You win the game,\nEVERYONE DIES!!!!!!!");
     alert("You win the game,\nEVERYONE DIES!!!!!!!");
 } else {
     alert("boo you suck");
     console.log("boo you suck");
 }

