//1
// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// fruits[0] = 'kiwi';
// console.log(fruits[0]);
// // console.log(fruits.length);
// fruits.length = 2;
// console.log(fruits);
// fruits.length = 9;
// console.log(fruits);

//2
// let Arr1 = [1, 5, "4", "hello"];
// let Arr2 = [true, 2, {}, ["a"], 222];
// console.log(Arr1[1]);
// console.log(Arr2[1]);
// console.log(Arr1[1] + Arr2[1]);
//3
// let vegetables = ['potato', 'tomato', 'cucumber', 'onion',    'carrot'];
//\\
//\/\\
//\/\/\\
//\/\/\/\\
// console.log(vegetables);                                     //\/\/\/\/\\
// console.log(vegetables[0]);                                 //\/\/\/\/\/\\
// vegetables[4] = 'garlic';                                  //\/\/\/\/\/\/\\
// console.log(vegetables[4]);                               //\/\/\/\/\/\/\/\\
// console.log(vegetables);                                 //\/\/\/\/\/\/\/\/\\
//\/\/\/\/\/\/\/\/\/\\
//4                                                       //\/\/\/\/\/\/\/\/\/\/\\
// let cities = ['Dnipro', 'New York', 'Paris', 'Kyiv']; //\/\/\/\/\/\/\/\/\/\/\/\\
// console.log(cities.length);

//5
// let Arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < Arr.length; i++){
// console.log(Arr[i]);
// }

// for (const element of Arr){
//     // Arr[i] = Arr[i] * Arr[i];
//     console.log(element);
//     }

//6
// let mass = [2, 3, 4, 5, 6, 7, 8];
// for (let element of mass){
//     console.log(element);
//     }

//7
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let element of cart){
//     total = total + element;
// }
// console.log(total);

//8
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let element of numbers) {
//   total = total + element;
//   total = total % 2 === 0 ? total : 0;
// }
// console.log(total);

//9
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]);
console.log(matrix[1][2]);
console.log(matrix[2][2]);