// for, if, else bular if ros bolsa ishlatiladi. 
//else yolgon bolsa ishlatiladi.
// //for har bir takrorlashda bajariladigan cod
// for (let i = 0; i < 5; i++) {
//     console.log("Bu " + i + "-marta bajarildi");
// }

// ///
// let yosh = 20;

// if (yosh >= 18) {
//     console.log("Siz kattasiz!"); 
// } else { 
//     console.log("Siz hali yoshligingiz uchun katta bo'lmagansiz."); 
// }

// ///
// let baho1 = 75;

// if (baho1 >= 90) {
//     console.log("Ajoyib!"); 
// } else if (baho1 >= 75) {
//     console.log("Yaxshi!"); 
// } else {
//     console.log("Yaxshiroq harakat qiling!"); 
// }


///
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let pairsons = [];
// let toxons = [];

// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 == 0) {
//         pairsons.push(number[i]);
//     } else {
//         toxons.push(number[i]);
//     }
// }
// console.log("Juft sonlar:", pairsons);
// console.log("Toq sonlar:", toxons);


// ///
// let matn = "JavaScript dasturlash tili juda kuchli va moslashuvchan.";
// let harflarSoni = {};
// let birinchia = null;

// for (let i = 0; i < matn.length; i++) { // stringning uzunligini (ya'ni undagi belgilar sonini)

//     let belgi = matn[i].toLowerCase(); 
    
//     if (belgi >= 'a' && belgi <= 'z') {
//         if (harflarSoni[belgi]) {
//             harflarSoni[belgi]++;
//         } else {
//             harflarSoni[belgi] = 1;
//         }
//     }
//     if (belgi === "y") {
//         birinchia = belgi;
//         break;
//     }
// }

// console.log("Harflar soni:", harflarSoni);
// console.log("Matndagi birinchi 'a' harfi:", birinchia);

///
// let i = 0;
// while (i < 5) {
//     console.log("i ning qiymati:", i);
//     i++;
// }

// do {
//     console.log("Bir marta bo'lsa ham bajariladi!");
//     i--;
// } while (i > 0);

///
// let baho = 4;
// switch (baho) {
//     case 5:
//         console.log("A'lo baho!");
//         break;
//     case 4:
//         console.log("Yaxshi baho!");
//         break;
//     default:
//         console.log("Harakat qilish kerak!");
// }


// while
// let i = 0; // bunda 0 ning orniga 3 qoysa 
// while (i < 3) { // buyerga fagot i o'zi bolsa
//     alert( i );
//     i++; // ++ ning orniga -- qoysa  /// NATICHA: 3 dan 1 boladi ///
// }

///
//  BUNDAY HAM YOZSA HAM BOLADI
// let I = 3;
// while (I) alert(I--);


// // do
// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);
// console.log(i)


// // 0 dan 2 gacha chigadi
// for (let i = 0; i < 3; i++) {
//     alert(i); // 0, 1, 2
//   }
//   alert(i);


// // 0 dan 3 gacha chigadi
// let i = 0;

// for (i = 0; i < 3; i++) { 
//   alert(i); // 0, 1, 2, 3
// }

// alert(i);


/// BUNI KORISH KERAK BIR-BIRINI QOSHMAYAPDI
// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' +sum );


// let person = new Object() ;
// person.name = "stone";
// person.age = 28;
// console.log(person["name"]);
// console.log(person["age"])
 
// let person = {
//     name : "stone",
//     age : 28
// };
// console.log(person.name)


// Фақат мусбат сонларнинг квадратларини қайтариш Функция positiveSquare(numbers) ёзинг. 
// У массивни қабул қилиб, фақат мусбат сонларнинг квадратларини қайтариши керак.
// function positiveSquare(numbers) {
//     return numbers
//     .filter(num => num > 0)
//     .map(num => num * num)
// }
// const numbers = [7, -1, 5, -3, 0, 1, 2, 3, 34];
// const result = positiveSquare(numbers);
// console.log(result);


// Кўп сонларнинг умумий қийматини қўшиш
// Функция sumMultipleNumbers(...numbers) ёзинг. 
// У бир нечта сонни қабул қилиб, уларнинг умумий қийматини қайтариши керак.
// function sumMultipleNumbers(numbers) {
//     let a = 0
//     numbers
//     .map(num => a += num)
//     return a
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = sumMultipleNumbers(numbers);
// console.log(result);


/// Сонларнинг қўшилишини даврийлик билан ҳисоблаш
//Функция cyclicSum(numbers, step) ёзинг. 
//У массив ва қадамни (step) қабул қилиб, массив элементларини бериладиган қадам билан қўшиш керак. 
//Масалан, [1, 2, 3, 4, 5] ва қадам = 2 учун, натижа 1 + 3 + 5 = 9 бўлади.
// function cyclicSum(numbers, step) {
//     let sum = 0;
    
//     for (let i = 0; i < numbers.length; i += step) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// let numbers = [1, 2, 3, 4, 5];
// let step = 6;

// let result = cyclicSum(numbers, step);
// console.log("sunma: ", result);


/// Чуқур массивни фильтр қилиш Функция deepFilter(arr, condition) ёзинг. 
//У чуқур массивни (массив ичида массив) ва шартни қабул қилиб, 
// шартга мос келадиган элементларни қайтаради.
// function  deepFilter(arr, condition) {
//     const result = [];

//     for (const item of arr) { // item bu massiv ichidagi har bir elementni ifodalaydigan o'zgaruvchi bo'lib, u for...of tsiklida ishlatiladi. Har safar tsikl ishlaganda,
//         // massivning keyingi elementi item ga o‘tkaziladi va u ustida ishlash amalga oshiriladi.
//         if (Array.isArray(item)) {
//             const filtered = deepFilter(item, condition);
//             if (filtered.length > 0) { // .length uning ichidagi elemetlarni qaytaradi
//                 result.push(filtered);
//             }
//         }else if (condition(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// }
// const arr = [1, [2, [3, 4], 5], 7];
// const condition = x => x = 2;
// const filteredArr = deepFilter(arr, condition);
// console.log(filteredArr); 


/// Массивнинг ўртача қийматини топиш Функция averageArray(numbers) ёзинг. 
// У массивни қабул қилиб, ундаги барча элементларнинг ўртача қийматини қайтариши керак.
// function averageArray(numbers) {
//     let sum = 0
//     numbers
//     .map(num => sum += num)
    
//     return sum/numbers.length
// }
// let numbers = [1, 2, 3, 4, 5];
// let result = averageArray(numbers);
// console.log("sunma: ", result);





// 1.Sonlar orasidagi farqni topish
// differenceBetweenTwoNumbers(a, b) nomli funksiyani yozing. 
// Bu funksiya ikkita sonni qabul qiladi va ularning farqini qaytaradi. 
// Masalan, agar a = 10 va b = 4 bo'lsa, funksiya 6 ni qaytarishi kerak.
function differenceBetweenTwoNumbers(a, b) {
    // return Math.abs(a - b);
    return a - b;
}
// const num1 = 10
// const num2 = 4

// console.log(differenceBetweenTwoNumbers(num1, num2))
console.log(differenceBetweenTwoNumbers("10","4"))


// 2.Sonni kvadratga oshirish
// squareNumber(num) nomli funksiyani yozing. 
// Bu funksiya bitta sonni qabul qiladi va uning kvadratini qaytaradi. 
// Misol uchun, agar num = 5 bo'lsa, funksiya 25 ni qaytarishi kerak.
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber("5"))


// 3.Eng katta sonni topish
// findMax(numbers) nomli funksiyani yozing. 
// Bu funksiya bir nechta sonni qabul qiladi va ulardan eng kattasini qaytaradi. 
// Misol uchun, agar numbers = [1, 3, 5, 2] bo'lsa, funksiya 5 ni qaytarishi kerak.
function findMax(numbers) {
    return Math.max(...numbers);
}
const numbers = [1, 2, 5, 3];
console.log(findMax(numbers));


// 4.Sonni teskari tartibda chiqarish
// reverseNumber(num) nomli funksiyani yozing. 
// Bu funksiya bitta sonni qabul qilib, uni teskari tartibda qaytaradi. 
// Misol uchun, agar num = 1234 bo'lsa, funksiya 4321 ni qaytarishi kerak.
function reverseNumber(num) {
    const reversed = num.toString() // Sonni satrga aylantiramiz
                       .split('')   // Har bir raqamni ajratamiz
                       .reverse()   // Raqamlarni (teskari) tartibda aylantiramiz
                       .join('');   // Raqamlarni qayta birlashtiramiz
    return parseInt(reversed) * Math.sign(num); // Natijani songa aylantirib, ishorani saqlab qolamiz
}
console.log(reverseNumber(1234));


// 5.Faktorial hisoblash
// calculateFactorial(n) nomli funksiyani yozing. 
// Bu funksiya n sonini qabul qiladi va uning faktorialini qaytaradi. 
// Misol uchun, agar n = 5 bo'lsa, funksiya 120 ni qaytarishi kerak.
function calculateFactorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(calculateFactorial("5"))


function calculateDigitSum(n) {
    // return String(n).split('').reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(calculateDigitSum(1+2+3))

// // getAttribute() va  setAttribute()
// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))

// link.setAttribute('href', 'https://www.yandex.ru')
// link.textContent = 'Go To Yandex Main Page'

// const text = document.querySelector('p')
// console.log(text.getAttribute('class'))
// text.setAttribute('class', 'success')

// text.setAttribute('style', 'color: red') 
