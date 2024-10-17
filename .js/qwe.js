// 1. O'zgaruvchilar
// JavaScriptda o'zgaruvchilarni yaratish uchun var, let yoki const kalit so'zlari ishlatiladi.
let ism = "Ali ";
var yosh = 25;
const davlat= " O'zbekiston";
let ntj = ism + yosh + davlat;

// let - o'zgaruvchini qayta aniqlash mumkin.
// var - eski usul, lekin hamon ishlatiladi.
// const - bu o'zgaruvchini o'zgartirib bo'lmaydi.

console.log(ntj);

// 2. Operatsiyalar va shartli iboralar
// Matematik amallarni bajarish:
let a = 10;
let b = 5;
let natija = a + b; // natija 15 ga teng bo'ladi
console.log(natija);

//shartli iboralar:
if (yosh >= 18) {
    console.log("Siz kattasiz. ");
} else {
    console.log("siz kichiksiz.");
}

// 3. Sikllar
// JavaScriptda takroriy operatsiyalarni bajarish uchun sikllar ishlatiladi:

for (let i = 0; i < 5; i++) {
    console.log(i); // 0 dan 4 gacha bo'lgan raqamlar chiqadi
} 

// 4. Funksiyalar
// Funksiya - bu kod bo'lagini qayta ishlatishga imkon beradigan usul:
function salomBer(ism) {
    console.log("salom, " + ism + "!");
}

salomBer("ali"); //"salom, ali!" chigadi


// 5.DOM bilan ishlash
// JavaScript yordamida HTML elementlarini boshqarish mumkin. Masalan:
document.getElementById("myElement").innerHTML = "Yangi matn!";
//Bu kod id is myElement bo'lgan HTML elementining ichidagi matnni o'zgartiradi.



