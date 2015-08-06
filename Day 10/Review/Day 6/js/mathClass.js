
 /*
Joshua Rosario
Section 00
Date: 7/18/15
Class:Math Class
 */

//alert("test");

 //round() - normal rounding .5 goes up .49999 goes down
// Does not permanently change the variable value


 //To change the variable assign it to the variable
 var num1 = 9.444;
 num1 = Math.round(num1);
 console.log(num1);
 console.log(Math.round(num1));
 console.log(num1);

 //Floor() - rounds down to the nearest integer
 var num2 = 6.8;
 console.log(num2);
 console.log(Math.floor(num2));

 // Ceil() - Rounds up to the nearest integer

 var num3 = 6.8;
 console.log(num3);
 console.log(Math.ceil(num3));

 // Random() - Returns a number between 0 and almost 1
 var num4 = Math.random();
 console.log(num4);

 //Number between 0 and 10
 var num5 = Math.random()*10;
 console.log(num5);

 //Random number between 2 other numbers NOT zero
 //Math.Random()*(Max-Min)+Min

 //Number between 50 and 80
 var num6 = Math.random()*(80-50)+50;
 console.log(num6);

 //An Integer between 100 to 1000
 var num7 = Math.round(Math.random()*(1000-100)+100);
 console.log(num7);

 //.toFixed(x) - Rounds to a decimal place - x decimal

var num8 = 12.123456;
 console.log(num8);
 console.log(num8.toFixed(2));

 // Math Constants
 //Pi - 3.1425923423
 //Math.PI
 console.log(Math.PI.toFixed(5));

 //Circumference of a circle
 //2*r*pi
 var radius = 7;
 var circleCumfre = 2*radius*Math.PI;
 console.log(circleCumfre);

 //CHANGES********************************************
//area of parallelogram

 var height = 2;
 var base = 2222;

 var area34 = height * base;

 console.log("The area of the rectangle is "+area34+" feet square.");
