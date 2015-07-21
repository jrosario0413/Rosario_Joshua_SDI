
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 // Let's create a loop that will write out the lyrics "99 Bottles of beers"

 //for(initialization; condition; increment of change){}

 for(var i=99; i>0; i--){
     //Verify that the loop works
     //console.log(i);
     if(i===2){

     }else if(i===1){
         console.log(i+" Bottle of beer on the wall. "+i+ " Bottle of beer. You take one down pass it around. "+ (i-1) +" Bottle of beer on the wall.");

     }
     else{
         console.log(i+" Bottles of beer on the wall. "+i+ " Bottles of beer. You take one down pass it around. "+ (i-1) +" Bottle of beer on the wall.");

     }
     console.log(i+" Bottles of beer on the wall. "+i+ " No more Bottles of beer on the wall.  \n The End");
 }