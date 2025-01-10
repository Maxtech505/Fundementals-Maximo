/*
* objects, interfaces, and API's
 */
/*
let dog = {
    name: "miles",
    breed: "doberman",
    age: 10,
    color: "black",
    numLegs: 4,
    isGoodWithChildren: false,
    isGoodWithDogs: false,
    isGoodWithCats: true,
    bark: function (typeofwoof) {
        console.log("woof");
    },
};

 */

function x(y) {
    y.num = y.num+1;
    console.log(y);
}

let y={
    name:"miles",
    num: 10,

};
x(y);
console.log(y);