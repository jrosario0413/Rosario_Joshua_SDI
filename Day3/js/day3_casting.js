
 /*
Joshua Rosario
Section 00
Date: 7/11/15
Class: Casting Variables
 */

//alert("test");

 // Casting variables means treating one variable like another
 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

 // Number() - treats what is inside of () like a number, if possible!
 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 // Cast Numbers as strings
 //Strings()
 var areaCode = 407;
 var prefix = 555;
 var lineNumber = 1234;

 var phoneNumber = String(areaCode) + "-" +String (prefix) +"-" + String(lineNumber);
 console.log(phoneNumber);

 // all prompt() returns text strings!!!
 var videoGamesCurrent = prompt("How many video games do you currently own?");
 var gamesBought = prompt("How many games did you buy today?");
 var totalGames = Number(videoGamesCurrent) + Number(gamesBought);
 console.log(totalGames);

// Parsing integers
 // Looks through text strings and returns the first integer
 //The first character in the text string MUST be the number
 //spaces aren't counted
 //If it can not converted, it returns NaN - Not A Number

 var a = parseInt("21 years old");
 console.log(a);

 var b = parseInt("He is 21 years old");
 console.log(b);

 var c = Number("40 years old");
 console.log(c);

 // parseFloat allows decimal places INT does not!
var d = parseFloat("21.11 years old");
 console.log(d);

 