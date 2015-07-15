
 /*
Joshua Rosario
Section 00
Date: 7/14/15
Class:Ternary
 */

//alert("test");

 //See if your GPA is high enough to graduate!

 var gpa = 3.9;

 // IF your GPA is over 2.0 then you can graduate
 if(gpa>2){
     console.log("Congrats you can graduate");
 } else {
     console.log("Sorry your GPA too low");
 }

 // Convert to a ternary
 // (Condition to test)? true code : false code;
 (gpa > 2)? console.log("GPA is Great!") : console.log("Gpa too low");


 // Test kids age versus what book they should read
 // if the kid is under 10 then they can read Green Eggs & Ham, other wise they read the Time machine

 var age = 12;
 var book;

 book = (age > 10)? "The Time Machine" : "Green Eggs & Ham";
 var book2 = (age<=10)? "Green Eggs , Ham" : "The time machine";
 console.log("Your kid should read "+book);
 console.log(book2);

