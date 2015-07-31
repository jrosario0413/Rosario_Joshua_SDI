
 /*
Joshua Rosario
Section 00
Date: 7/30/15
Class: Final
 */

//alert("test");

 var userCost = prompt("What is the cost of your item?");

 while(isNaN(userCost)||userCost===""){
     userCost=prompt("Please only user numbers and do not leave blank");
 }




 var userDiscount = prompt("What is the discount amount you desire?\nIt can only be from 0% to 100%");

while(isNaN(userDiscount)||userDiscount==="") {
    userDiscount = prompt("Please only use numbers from 0 to 100.\nAnd do not leave blank");

}

while(userDiscount<0||userDiscount>100) {


    if (userDiscount < 0 || userDiscount > 100) {
        userDiscount = prompt("Please only use numbers from 0 to 100.\nAnd do not leave blank");
        while (isNaN(userDiscount) || userDiscount === "") {
            userDiscount = prompt("Please only use numbers from 0 to 100.\nAnd do not leave blank");

        }
    }
    else {
        console.log("The cost of the item is $" + userCost + ".");
        console.log("The desire amount of discount was " + userDiscount + "%.");
    }

}

function discountedCost(c,d){
    var cost = userCost;

    var discount = cost*(userDiscount/100);

    var discountedPrice = cost - discount;

    return discountedPrice
}

discountedCost(userCost,userDiscount);

console.log(discountedCost());


console.log("The final cost of an item that cost $"+userCost+" with a discount of "+userDiscount+" is $"+discountedCost());


 /*

 test cost of $12 and 50% = 6

 $75 and 45% = 41.25
  */













