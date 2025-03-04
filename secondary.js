"use strict";
//  8-chi oy birinchi dars
// 1 - Task
// const a:string | null = prompt("First number")
// const b:string | null = prompt("Second Number")
// function calculateNumber(value:string | null, value2:string | null){
//     return Number(value) + Number(value2)
// }
// const res:Number = calculateNumber(a, b)
// console.log(res)
// 2-Task
// const arrayNum:number[] = [1,2,3,4,5,6,7,9,10]
// let summa:number = 0
// function arrayFn(array:number[]){
//     for(let i = 0; i < array.length; i++){
//         summa += i
//     }
// }
// arrayFn(arrayNum)
// console.log(summa)
// 3 - Task
// const array1:number[] = [1,-2,-3,-5,-9,19,20,22,3]
// const array2:number[] = []
// function arrayFn(){
//     for(let i = 0; i < array1.length; i++){
//        if(array1[i] < 0){
//         array1[i] = -array1[i]
//        }
//     }
// }
// arrayFn()
// console.log(array1)
// 4-Task
// const array1:any = ["5", 2, "true", "salom"]
// for(let i = 0; i < array1.length; i++){
//     if(Number(array1[i])){
//         array1[i] = Number(array1[i])
//     }
//     else{
//         array1[i] = 0
//     }
// }
// console.log(array1)
// 5 - Task
// const personArry:{id:number, name:string,status:boolean}[] = [
//    {
//       id:1,
//       name:"John",
//       status:true
//    },
//     {
//         id:2,
//         name:"Tom",
//         status:false
//     },
//     {
//         id:3,
//         name:"Thomas",
//         status:false
//     }
// ]
// for(let i = 0; i < personArry.length; i++){
//   if(personArry[i].status  true!==){
//      console.log(personArry[i].name)
//   }
// }
// 6 -Task
// function findMidNumber(a:number, b:number, c:number){
//      const result = (a+b+c) / 3
//      console.log(result)
// }
// findMidNumber(12,22,213)
// 7 - Task
// const oddAndEvenNum:number[] = [1,2,4,6,7,11,3,13]
// function switchOddEven(oddtoEven:number[]){
//     oddtoEven[0] = oddtoEven[0] + 1
//     console.log(oddtoEven)
// }
// switchOddEven(oddAndEvenNum)
// 8 - Task
// const user1:string[] = ["Tom", "Jerry", "Marry", "John", "Tom"]
// const user2:string[] = ["Tom", "Jerry", "Maren", "John", "Tom", "Karen"]
// function findSameName(sameName:string[], sameName2:string[]){
//      for(let user of user1){
//          for(let userTwo of user2){
//             if(user === userTwo){
//                 console.log(user)
//             }
//          }
//      }
// }
// findSameName(user1, user2)
// 2 - Exercise
// 1 - Task
// const size:string | null = prompt("Enter size")
// let list:{id:number, name:string  | null}[] = []
// function userNameList(){
//     if(Number(size)){
//         for(let i = 0; i < Number(size); i++){
//            let value:string | null = prompt("Enter Name")
//            const data = {
//             id:Number(i+1),
//             name:value
//            }
//           list.push(data)
//         }
//     }
// }
// userNameList()
// console.log(list)
// userNameList(size)
// 2 - Task
// const array:number[] = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,6]
// function removeSameOnes(arry:number[]){
//     const newArray:number[] = []
//     for(let i = 0; i < arry.length; i++){
//           if(!newArray.includes(arry[i])){
//              newArray.push(arry[i])
//           }
//     }
//     console.log(newArray)
// }
// removeSameOnes(array)
// 3-Task
// const inputNmumber:string | null = prompt("Enter a number")
// const numbersArray:number[] = [88,90,100,200,30,40]
// for(let i = 0; i < numbersArray.length; i++){
//     if(numbersArray[i] === Number(inputNmumber)){
//         console.log(numbersArray.indexOf(numbersArray[i]))
//     }
// }
// 4 - Task
// const inputNumber:string | null = prompt("Enter a number")
// const numbersArray:number[] = [88,75,321,45,67]
// for(let i = 0;   i < numbersArray.length; i++){
//     if(numbersArray[i] === Number(inputNumber)){
//         numbersArray.splice(i, 1)
//         console.log(numbersArray)
//     }
// }
