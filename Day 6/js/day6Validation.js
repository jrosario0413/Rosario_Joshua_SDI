
 /*
Joshua Rosario
Section 00
Date: 7/18/15
Class: Validation
 */

//alert("test");

 // isNAN(item to test)
 //true if not a number
 //false if it is a number

 //to test blank we test (item ===" ")

 //to test text strings
 //(item.toLowerCase() !="yes" && (item.toLowerCase() !="no")

 // For validation we use a while loop
 // Use a while loop because we dont know how many times the user will get it wrong

 // Ask the user for a number
 var userNum = prompt("Please enter in a number.");
 // Directly after each prompt, validate for that prompt
 while(isNaN(userNum) || userNum===""){
     // re-Prompt using the same variable
     userNum=prompt("Please only use numbers and Do not leave blank\nPlease enter a number.");
 }
 console.log("After the while loop.");

 // Ask the user for either red or black
 var color= prompt("Please choose red or black");

// Validate
 while(color.toLowerCase()!="red"&& color.toLowerCase()!="black"){
// re- prompt the user using the same variable
     color=prompt("Please only use type red or black.\nChoose your color.")
 }