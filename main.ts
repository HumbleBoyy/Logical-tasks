
//// 8-chi oy ikkinchi dars


// 2 - Task
// const arr1:(number | boolean | null)[] = [5,6,true,null,8]
// const arr2:(number | boolean | null)[] = [0,2,6,false,6]
// const newArray:(number | boolean | null)[] = []
// let array = newArray.concat(arr1, arr2)
// console.log(array)
// let sum:number = 0
// for(let i = 0; i < array.length; i++){
//     sum + Number(array[i]) 
// }

// console.log(sum)

// 3 - Task
// const numbersArray:number[] = [18,29,30,47,10,40,48,29,70,2]

// function findSmallestNumberIndex(arr:number[]):number{
//     let minIndex:number = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < arr[minIndex]){
//             minIndex = i
//         }
//     }
//     return minIndex
// }

// console.log(findSmallestNumberIndex(numbersArray))


// 4-Task
// let arr1:number[] = [5,4,3,2,1]
// let arr2:number[] = [20,10,28,50,90,32,55,67,42,6]

// const newArray:number[] = []
// const mainArray = newArray.concat(arr1, arr2)
// console.log(mainArray.sort((a,b)=> a - b))

// 5-Task
interface CarsType  {
    id:number,
    name:string,
    price:number
   }

const carsArray:CarsType[] = [
    {
      id:1,
      name:"BMW",
      price:89000
    },
    {
        id:2,
        name:"Buggati",
        price:890000
    },
    {
        id:3,
        name:"Spark",
        price:19000
    },
    {
        id:4,
        name:"Aston",
        price:9000
    },
    {
        id:5,
        name:"Abudi",
        price:129000
    }
]

const newArrangment = carsArray.sort((a,b)=> a.price - b.price && a.name.localeCompare(b.name))
console.log(newArrangment)


// 6 - Task
// const array:(string | number)[] = ["Salom", "Rahmat"]
// array.splice(1, 0, "hello", "Qale")
// for(let i = 0; i < array.length; i++){
//      console.log(array[i])
// }

// 7 - Task
const text:string | number  = 1324171

function reverseText(text2:string | number):void{
    let newText:string | number  = ""
   if(typeof text2 === "string"){
     newText =  text2.split("").reverse().join("")
     console.log(newText)
   }else{
     newText =  String(text2).split("").reverse().join("")
     console.log(Number(newText))
   }
   
}
reverseText(text)