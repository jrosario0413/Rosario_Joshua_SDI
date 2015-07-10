// Joshua Rosario
// 7/9/2015
// SDI
// Section 00
// Day 3 Lab Expressions

//alert("does this work?"

// Slice of Pizza Part 1

//number of slices per pizza = 8
//number of people at the party = 16
//number of pizzas ordered = 4

var slices = 12;
var people = 16;
var ordered = 4;

// Calculate number of slices per person
var spp = (slices * ordered / people);
//The result output
console.log("Each person ate "+ spp + " slices of pizza at the party.");

// Slice of Pizza Part 2

// Unfortunately there aren't any leftovers

var sparky = (slices * ordered % people);
// Output for sparky
console.log("Sparky got " + sparky + " slices of pizza.");

// Average Shopping Bill

// 5 Weekly grocery bills

var week1 = 200;
var week2 = 175;
var week3 = 150;
var week4 = 125;
var week5 = 100;

//Total ammount
var total =  (week1 + week2 + week3 + week4 + week5);

// Find average

var averageBill = total /5;
//Average = 150

//Output Result

console.log("You have spent a total of $"+ total + " on groceries over the past 5 weeks. " + "That is an average of $"+ averageBill + " per week.");

// Discount

var originalPrice = 500;
var discount = 25;
var discountPercentage = discount / 100;
var xbox = "xboxOne";
var salesTax = 0.07;

var discountedPrice = originalPrice - (originalPrice * discountPercentage);

// Calculate price with tax and without
var priceWithTax = (discountedPrice * salesTax) + discountedPrice;
var priceNoTax = discountedPrice;
// xbox was originally 500 but with a 25% discount it goes for 375 without tax but with tax it goes for 401.25

// Output Result

console.log("Your"+ xbox +" was originally $"+ originalPrice +", but after a "+ discount +"% discount, it is now $"+ priceNoTax + " without tax, and $"+ priceWithTax +" with tax." );