// main.js
import my from './myFunctions.js';

const myMethod = my.outer;
var qwert = myMethod()
qwert()

// int
// flost
// string
// boolean
// array

// var name = "Ali";
// var years = 2;
// const country= " O'zbekiston";
// var array = [1,2,3,4, [1.2 ,2, 3, ['dsa', true, [1] ] ] ];
// array[4][3][2][0]

// var isBoy = true;

// var result = name + years + country;


// console.log(result);

// var a = 10 + 5;

// if (years >= 18) {
//     console.log("Siz kattasiz. ");
// } else {
//     console.log("siz kichiksiz.");
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// array.forEach(element => {

//     if (Array.isArray(element)) {
//         element.forEach(i => {
//             console.log(i);
//         });
//     }else{
//         console.log(element);
//     }
// });

// function Hello(name, years) {
  
//     console.log("name, " + name + ' years ' + years + "!");
// }
// Hello('Muhammadislom','26')
// Hello('Yusuf','23')





// najim
// riki
// function doc(name, years, color, food){

//     console.log("name: " + name + years + " years " + color + " favorite food" + food);
// }
// doc("nashim", " 4", "color black", " go'sh")
// doc("riki", " 8", "color chocolate", " go'sh")





// function factorial(n) {
//     if (n <=1 ) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));




// let student = {
//     name: "ali",
//     age: 21,
//     greet() {
//         return `Hello, my name is ${this.name}`;
//     } 
// };
// console.log(student.greet());





// function outer() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(`Count:${count}`);
//     };
// }
// let counter = outer();
// counter();
// counter();






// let nums = [1, 2, 3];
// let newNums = [...nums, 4, 5];
// console.log(newNums);



