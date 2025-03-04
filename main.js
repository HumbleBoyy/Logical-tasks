"use strict";
//// 8-chi oy ikkinchi dars
const carsArray = [
    {
        id: 1,
        name: "BMW",
        price: 89000
    },
    {
        id: 2,
        name: "Buggati",
        price: 890000
    },
    {
        id: 3,
        name: "Spark",
        price: 19000
    },
    {
        id: 4,
        name: "Aston",
        price: 9000
    },
    {
        id: 5,
        name: "Abudi",
        price: 129000
    }
];
const newArrangment = carsArray.sort((a, b) => a.price - b.price && a.name.localeCompare(b.name));
console.log(newArrangment);
// 6 - Task
// const array:(string | number)[] = ["Salom", "Rahmat"]
// array.splice(1, 0, "hello", "Qale")
// for(let i = 0; i < array.length; i++){
//      console.log(array[i])
// }
// 7 - Task
const text = 1324171;
function reverseText(text2) {
    let newText = "";
    if (typeof text2 === "string") {
        newText = text2.split("").reverse().join("");
        console.log(newText);
    }
    else {
        newText = String(text2).split("").reverse().join("");
        console.log(Number(newText));
    }
}
reverseText(text);
