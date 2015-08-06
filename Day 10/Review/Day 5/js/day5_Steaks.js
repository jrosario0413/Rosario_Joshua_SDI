
 /*
Joshua Rosario
Section 00
Date: 7/16/15
Class:
 */

//alert("test");

 // Test a steak temperature to see if its done

 /*
  Extra-rare or Blue (bleu)	very red and cold	115–120 °F
  Rare (saignant)	cold red center; soft	120–130 °F
  Medium rare (à point)	warm red center; firmer	130–140 °F
  Medium (demi-anglais)	pink and firm	140–150 °F	145 °F and rest for at least 3 minutes
  Medium well (cuit)	small amount of pink in the center	150–160 °F
  Well done (bien cuit)	gray-brown throughout; firm	160 °F+	160 °F for ground beef
  */

 // Create a variable for steak temp
 var steakTemp = prompt("What is the temperature in F of your steak?");
/*
 //validate for "blank" input

 if(steakTemp===""){
     //Code will run if user leaves prompt blank
     //Re-prompt the user
     steakTemp=prompt("Please do nt leave a blank.\n What is the temperature of your steak?");
 }


 //Validate the user prompt


 console.log(isNaN(7));
console.log(isNaN("car"));

 if(isNaN(steakTemp)){
  // This code will run if steakTemp is not a number
     // Re-prompt using the same variable for the user
     steakTemp = prompt("Please only type in number.\nWhat is the temperature in F of your steak?");
 }
*/

 // Combine both validation questions
 if(isNaN(steakTemp) || steakTemp==="") {
     // Re- Prompt the user
     if (isNaN(steakTemp)) {
         steakTemp = prompt("Please only use numbers\nEnter steak temperature in F.");


     } else {
         steakTemp = prompt("Do not leave blank \nEnter steak temperature in F.");
     }

 }

 if(steakTemp<= 115){
     console.log("This steak is raw do not eat it.");
 } else if(steakTemp <= 120){
     console.log("The Steak is extra rare.");
 } else if(steakTemp <= 130){
     console.log("The Steak is rare.");
 } else if (steakTemp <= 140){
     console.log("The steak is medium rare.");
 } else if(steakTemp<= 150){
     console.log("The steak is medium.");
 } else if(steakTemp<= 160){
     console.log("The steak is medium well.");
 } else {
     console.log("Well done.");
 }


 //CHANGES********************************************

 (steakTemp>200)? console.log("Too hot"):console.log("I'll eat it");