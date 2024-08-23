let age = 25; // Declare and assign a variable [O'zgaruvchini e'lon qiling va tayinlang]
const name = "yusuf"; // Declare a constant variable [Doimiy o'zgaruvchini e'lon qilish]

let num = 42;        // Nunber
let str = 'hello';   // String
let flag = true;     // Boolean
let obj = { key: "value" };  // Object
let arr = [1, 2, 3]; // Array

let result = 5 + 3;           // Addition
let isGreaterThan = 54 > 3;   // Comparison
let isTrue = true && false;   // logicar

/*if (condition) {
   // Code to execute if condition is true [ Agar shart to'g'ri bo'lsa, bajariladigan kod ]
} else if (anotherCondition) {
    // Code to execute if anotherCondition is true [ Agar boshqa shart to'g'ri bo'lsa, bajariladigan kod ]
} else {
    // Code to execute if no condition is true [ Hech qanday shart bajarilmreassignment is allowedasa, bajariladigan kod ]
}*/

/*for(let i = 0; i < 5; i++) {
    // Code to repeat 5 times [ 5 marta takrorlash uchun kod ]
}

while (condition) {
    // Code to repeat while condition is true  [ Shart to'g'ri bo'lganda takrorlash uchun kod ]
} */

// Using var [ Vardan foydalanish ]
// Var operatori, agar kerak bo'lsa, uni ishga tushirish orqali o'zgaruvchini e'lon qiladi.
/*var x;  // Declaration [ Deklaratsiya ]
x = 10;  // Initialization [ Boshlash ]

//Let direktivasi blok doirasi bo'lgan o'zgaruvchini uning qiymatini ishga tushirish imkoniyati bilan e'lon qiladi.
let y;
y = 2;

const z = 30;

console.log(x ** y)
console.log(y + 65)
console.log(z - 56)*/

/*if (true) {
    let x = 10;
    let y = 20;
    console.log(y);
    console.log(x)
}
console.log(y); // x is not defined [ x aniqlanmagan ]

let counter = 1;
counter = 2; //reassignment is allowed [ qayta tayinlashga ruxsat beriladi ]
console.log(counter)

let x = 1;
let x = 2; */ // error : identifier 'x' has already been declared [ xato: 'x' identifikatori allaqachon e'lon qilingan ]

/*var globalVar = 42;
console.log(window.globalVar); // 42 (in a browser) [ 42 soni brauzerda aniqlanmagan ]

let globalVLet = 42;
console.log(window.globalLet); // undefined (in a browser)*/


/*// JS CONST 
const pi = 3.14159;

if (true) {
    const blockScopedVar = "I'm only available in this block [Men bu blokda faqat mavjud emasman]";
}
console.log(blockScopedVar); // This will reult in an error since blockScopedVar is not defined here. [ Blok Scoped Var bu erda belgilangan emas, chunki, bu xato sabab bo'ladi.]
*/


/*//const Object
const person = {
    name: "yusuf" 
};

console.log(person.name);

// You can modify the properties of the constant object [ Siz doimiy ob'ektning xususiyatlarini o'zgartirishingiz mumkin ]
person.name = "Bob";
console.log(person.name); // Outputs: "Bob" [ Chiqishlar ]

// However, you cannot reassign 'person' to a different object [ Biroq ,siz 'shaxsni' boshqa ob'ektga qayta tayinlay olmaysiz ]
//person = { name: "Charlie"};

// const array [ const qatori ]
const numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); // Outputs: 1

// You can modify elements within the constant array
numbers[0] = 10;
console.log(numbers[0]);

// However, you cannot reassign 'numbers' to a different array
numbers = [6, 7, 8, 9]; // This will thron an error: "Assignment" [Bu xato qiladi "Topshiriq"]*/

/*
// JS Data Types [Data Types]
//Number
let num = 42;

let pi = 3.14159;

let str = "hello, World!";

let isTrue = true;

let isFales = false;

let undefinedVar;

let nullValue = null;

const uniqueSymbol = Symbol('description');

let peson = {name: "Alice", age: 30 };

let fruits = ["apple", "banana", "orange"];

function add(a, b) {
    return a + b;
}

let currentDate = new Date();

let regex = /[0-9]+/;*/