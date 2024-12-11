// for, if, else bular if ros bolsa ishlatiladi. 
//else yolgon bolsa ishlatiladi.
//for har bir takrorlashda bajariladigan cod
for (let i = 0; i < 5; i++) {
    console.log("Bu " + i + "-marta bajarildi");
}

///
let yosh = 20;

if (yosh >= 18) {
    console.log("Siz kattasiz!"); 
} else {
    console.log("Siz hali yoshligingiz uchun katta bo'lmagansiz."); 
}

///
let baho1 = 75;

if (baho1 >= 90) {
    console.log("Ajoyib!"); 
} else if (baho1 >= 75) {
    console.log("Yaxshi!"); 
} else {
    console.log("Yaxshiroq harakat qiling!"); 
}

///
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pairsons = [];
let toxons = [];

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        pairsons.push(number[i]);
    } else {
        toxons.push(number[i]);
    }
}

console.log("Juft sonlar:", pairsons);
console.log("Toq sonlar:", toxons);

///
let matn = "JavaScript dasturlash tili juda kuchli va moslashuvchan.";
let harflarSoni = {};
let birinchia = null;

for (let i = 0; i < matn.length; i++) { // stringning uzunligini (ya'ni undagi belgilar sonini)

    let belgi = matn[i].toLowerCase(); 
    
    if (belgi >= 'a' && belgi <= 'z') {
        if (harflarSoni[belgi]) {
            harflarSoni[belgi]++;
        } else {
            harflarSoni[belgi] = 1;
        }
    }
    if (belgi === "a") {
        birinchia = belgi;
        break;
    }
}

console.log("Harflar soni:", harflarSoni);
console.log("Matndagi birinchi 'a' harfi:", birinchia);

// ///
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
let baho = 4;
switch (baho) {
    case 5:
        console.log("A'lo baho!");
        break;
    case 4:
        console.log("Yaxshi baho!");
        break;
    default:
        console.log("Harakat qilish kerak!");
}


// // while
// let i = 0; // bunda 0 ning orniga 3 qoysa 
// while (i < 3) { // buyerga fagot i ozi bolsa
//     alert( i );
//     i++; // ++ ning orniga -- qoysa  /// NATICHA: 3 dan 1 boladi ///
// }
// //  BUNDAY HAM YOZSA HAM BOLADI
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
//   alert(i); // 0, 1, 2
// }

// alert(i);


let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );

