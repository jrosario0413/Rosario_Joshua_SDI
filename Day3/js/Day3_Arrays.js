/*
Joshua Rosario
Section 00
7/11/2015
Arrays
 */

//alert("mk");

// Create a basic Array
// Picking Oranges
var orangeBins = [30,500,10002];

// How many oranges did we pick?
var totalOranges = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(totalOranges+" oranges were picked in 3 days");

// Average number of oranges picked
var averageOranges = totalOranges / 3;

// Length property of an Arrays
console.log(orangeBins.length);


console.log("The average number of oranges picked is "+ averageOranges);


// Create an array of Avengers
var avengerNames = ["Iron-man", "Captain America", "Hawkeye", "Hulk"];

// Print out whole array
console.log(avengerNames);

// Access a specific item in array
console.log(avengerNames[1]);

// Use a cariable as an index number
var num = 2;
console.log(avengerNames[num]);

// Set a specific item
avengerNames[3]="Thor";
console.log(avengerNames);

// Add a new item in our array
avengerNames[4]= "Falcon";

console.log(avengerNames);

// Add a new item
avengerNames[avengerNames.length]= "Black Widow";
console.log(avengerNames);

// Ceate new array for fruits
var fruitArray = ["banana", "pear", "peach", "strawberry"];
console.log(fruitArray);


// Push - method or a function of arrays
// Adds it to the end of the array
fruitArray.push("pineapple");
console.log(fruitArray);
console.log(fruitArray[4]);

fruitArray.push("date");
console.log(fruitArray);

// Pop method - removes the "last" items in the array AND "returns" it
var caught = fruitArray.pop();
console.log(fruitArray);
console.log(caught);

// Splice - used for adding and removing items in an array
// splice(position, # of items to remove, items to put in)
fruitArray.splice(2,0, "lemon");
console.log(fruitArray);
