
 /*
Joshua Rosario
Section 00
Date: 
Class:
 */

//alert("test");

 // Let's create a loop that will write out the lyrics "99 Bottles of beers"





 var numBeers = prompt("How many beers are on your wall?");
 //Validate user prompt
 while(isNaN(numBeers) || numBeers ===""){
     if (isNaN(numBeers)){
         numBeers=prompt("Please only use numbers\nHow many beers on the wall?")
     }else{
         numBeers=prompt("Please do not elave blank\nHow many beer on the wall?")
     }
 }

 //for(initialization; condition; increment of change){}

 for(var i=numBeers; i>0; i--){
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