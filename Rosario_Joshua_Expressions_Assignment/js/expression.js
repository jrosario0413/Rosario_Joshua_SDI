
 /*
Joshua Rosario
Section 00
Date: 7/11/15
Expression Assignment
 */
//alert("test");

 // I plan on coding how to calculate the area of 3 Parallelogram and find the average

// ask the user for the measurements
 alert("Calculate the area of 3 Parallelograms, and find the average area");

var base1= prompt("What is the measurement of the 'base' for first parallelogram?");
 var height1 = prompt("What is the measurement of the 'height' for the first parallelogram?");
var area1 = base1 * height1;
 console.log("The area of the first parallelogram is "+area1 + " square feet.");
 alert("The area of the first parallelogram is "+area1 + " square feet.");

 // Calculated area of first parallelogram

alert("Let's calculate area of the second parallelogram.");

 //ask user for information
 var base2 = prompt("What is the measurement of the 'base' for second parallelogram?");
 var height2 = prompt("What is the measurement of the 'height' for the second parallelogram?");
 var area2 = base2 * height2;
 console.log("The area of the second parallelogram is "+area2 + " square feet.");
 alert("The area of the second parallelogram is "+area2 + " square feet.");

 // Calculated area of second parallelogram

 alert("Let's calculate the area of the third parallelogram, and find out the average area");

 // ask user for information

 var base3 = prompt("What is the measurement of the 'base' for third parallelogram?");
 var height3 = prompt("What is the measurement of the 'height' for the third parallelogram?");
 var area3 = base3 * height3;
 console.log("The area of the third parallelogram is "+area3 + " square feet.");
 alert("The area of the third parallelogram is "+area3 + " square feet.");

 // calculated area of third parallelogram
 var arrayParallelograms =[area1, area2, area3];

 //var parallelarea1 = area1;
 //var parallelarea2 = area2;
 //var parallelarea3 = area3;
 var averageArea = (area1+area2+area3)/arrayParallelograms.length;

 console.log("The average area is "+averageArea+ " square feet.");
 alert("The average area is "+averageArea+ " square feet.");

 //calculated the average area

/*
tested multiple times with
1st parallelogram: base = 4 height = 5 area = 20
2nd parallelogram: base = 5 height = 8 area = 40
3rd parallelogram: base = 6 height = 10 area = 60
average area for set = 40

second go
1st parallelogram: base = 6 height = 10 area = 60
2nd parallelogram: base = 8 height = 10 area = 80
3rd parallelogram: base = 10 height = 4 area = 40
average area for set = 60
 */