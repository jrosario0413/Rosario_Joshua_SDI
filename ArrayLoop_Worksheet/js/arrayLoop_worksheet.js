
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
 var arr =["superman","batman","wonderwoman","flash","cyborg","aquaman","greenlantern"];
 //user chooses hero to lead assault


var hero = prompt("Select your hero to lead the assault on Arkham Asylum\nsuperman, batman, wonderwoman, flash, cyborg, aquaman, greenlantern");




 for(var i =0; i<arr.length; i++){
     //call out hero
     if(arr[i]==="superman" || arr[i]==="batman"){
         console.log("Good job "+arr[i]+". You lead assault.");
     }else{
         console.log("Follow the leader "+arr[i]);

     }
 }
