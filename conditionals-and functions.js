/*
* Conditionals, functions, Scope and loops
 */
/*...*/
//equals
let equals = 1 === 1;
console.log(equals);
//greater than
let greaterThan = 5 > 1;

//greater than equals
let greaterThanEq = 5 >= 5;

//less than equals
let lessThanEq = 4 <= 9;

//not Equals
let notEquals = 5 !== 2;


/*
let storeA = 1.40;
let storeB = 4.40;

function compareStorePrices(storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeBIsLower) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}
//compareStorePrices(10, 5);
//compareStorePrices(7, 10);

function squareNum(num) {
    let squered = num * num;
    return squered;
}

let squaredNumber = squareNum(9);
console.log(squaredNumber);

*/
/*
let x = 10;

function addNumbers(n, m, x) {
    console.log(x);
    let b;
    if (1 === 1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(2, 3, 8);

 */
/*
//                        0  1  2  3  4
let ourarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrlength = ourarray.length;
for (let i = 0; i < ourarray.length; i++) {
    for (let j = 0; j < ourarray.length; j++) {}
//console.log("i is equal to: " + i);
   //console.log(ourarray[i]);
}

*/

let x = 0;
while (x < 10) {
    console.log("I am a loop!");
    x = x + 1;
}