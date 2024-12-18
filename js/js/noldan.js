// objectlar arrayda

const movies = [
    {name: 'avatar', likes:456},
    {name: 'Harry Potter', likes:484},
    {name: 'Titsnic', likes:987},
    {name: 'Sitve Jobs', likes:156},
    {name: 'Sherlock', likes:574},
]

movies.forEach((movies)=> {
    // // BU BITA TATOR BOLIB CHIGADI
    // console.log(movies.name)
    // console.log(movies.likes)

    // BU ESA HAMMASI BITA SOZ BOLIB CHIGADI
    const result = `Kino nomi: ${movies.name}, Likes: ${movies.likes}` 
    console.log(result);
})

// Math, Math.PI, Math.E
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.6

// sonning eng yaqin butun qismga yaxlitlaydi
// Math.round()
console.log(Math.round(area))

// eng yaqin kichik butun qismga qarab yaxlitlaydi
//Math.floor()
console.log(Math.floor(area))

// eng yaqqin kattasiga butun qismga qarab yaxlitlaydi
// Math.ceil()
console.log(Math.ceil(area))

// sonning faqat butun qismini qaytaradi 
// Math.trunc()
console.log(Math.trunc(area))

// 0 va 1 oralig'ida ixtiyoriy raqamlarni qaytaradi
// Math.random()
// console.log(Math.random(area))
const randomNumber = Math.trunc(Math.random() * 10) + 1 
console.log(randomNumber)


//bunda charAt() sozdagi qaysi xarif kerak bolsa shuning sonini kiritiladi
let text1 = "Hello, world!"
let character = text1.charAt(7);
console.log(character);



// concat bu ikkita sizning ulashda ishlatiladi 
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ",lastName);
console.log(fullName);


// indexOf bu shungacha kelgan sozni sonini aytadi
let text2 = "Hello, World!";
let index = text2.indexOf("World");
console.log(index);


// sozlarni toLowerCase hammasini kichik qiladi, buesa toUpperCase hammasini kata qiladi
let text3 = "Hello, world!";
let UpperCaseText = text3.toUpperCase();
let LowerCaseText = text3.toLowerCase();
console.log(UpperCaseText+"<br>");
console.log(LowerCaseText);


// // slice bu esa Hello shunda 0, 5 bolsa shuni chiqoradi
// let text = "Hello, world!";
// let slicedText = text.slice(0, 5);
// consoles.log(slicedText);


// replace soz orniga boshga zor qoyish 
let nomi = "Hello, world!";
let replaceText = nomi.replace("world", "Universe");
console.log(replaceText);



// split
let csvData = "John,Doe,30";
let daraArray = csvData.split(",");
console.log(daraArray);



// trim()
let paddedText = "     Hello, World!             ";
let trimmedText = paddedText.trim();
console.log(trimmedText);



// startsWith() endsWith()
let text7 = "Hello, world!";
let startsWithHello = text7.startsWith("Hello");
let endsWithWorld = text7.endsWith("world");
console.log(startsWithHello+"<br>");
console.log(endsWithWorld);


// WeakSet
const myWeakSet = new WeakSet();
const obj1 = { name: "John" };
const obj2 = { name: "Jane" };

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj1)+ "<br>");
console.log(myWeakSet.has(obj2)+ "<br>");
console.log(myWeakSet.has({ name: "john"}));


// // js DOM BUNI KORISH KERAK XATOSI BOR
// const text6 = document.getElementById('mytext6');
// text6.addEventListener('click', function() {
//     alert('text6 clicked!');
// });


/// function
function salomBer(ism) {
    console.log("Salom, " + ism + "!");
}
salomBer("Ali");


// /// Array bilan ishlash
// let sonlar = [1, 2, 3, 4, 5];
// for (let son of sonlar) {
//     console.log(son * 2);
// }


/// Obyekt bilan ishlash
let talaba = {
    name: "Ali",
    yosh: 20,
    boho: "A'lo"
};
console.log("Talabaning ismi:", talaba.name);


/// (map, filter, reduce)
let sonlar = [1, 2, 3, 4, 5];
let kvadratlar = sonlar.map(son => son * son);
let kvadratlar2 = sonlar.filter(son => son );
let kvadratlar3 = sonlar.reduce(son => son);
console.log(kvadratlar);
console.log(kvadratlar2);
console.log(kvadratlar3);


/// Asinxron dasturlash (setTimeout, Promise, async/await)
///Vaqt kechikishi yoki ma'lumotlarni serverdan olishni boshqarish:
setTimeout(() => {
    console.log("3 soniyadan so'ng chiqdi!");
}, 3000);
 

//
// function sayHi() {
//     alert('Привет');
//   }
  
//  setTimeout(sayHi, 1000);


// //
// setTimeout("alert('Привет')", 1000);


// ///
// setTimeout(() => alert('Привет'), 1000);


///
// let timerId = setTimeout(() => alert("hech narsa bo'lmaydi"), 1000);
// alert(timerId); // идентификатор таймера

// clearTimeout(timerId);
// alert(timerId);


///
// let i = 0;

// setTimeout(() => alert(i), 100);

// for(let j = 0; j < 100000000; j++) {
//   i++;
// }


// /// cheksiz davom qiladi
// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);
  


///
// let i = 1;
// setTimeout(function run() {
//   func(i);
//   setTimeout(run, 100);
// }, 100);


///
