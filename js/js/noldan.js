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
var text = "Hello, world!"
var character = text.charAt(7);
console.log(character);



// concat bu ikkita sizning ulashda ishlatiladi 
var firstName = "John";
var lastName = "Doe";
var fullName = firstName.concat(" " lastName);
console.log(fullName);


// indexOf bu shungacha kelgan sozni sonini aytadi
var text = "Hello, World!";
var index = text.indexOf("World");
console.log(index);


// sozlarni toLowerCase hammasini kichik qiladi, buesa toUpperCase hammasini kata qiladi
var text = "Hello, world!";
var UpperCaseText = text.toUpperCase();
var LowerCaseText = text.toLowerCase();
console.log(UpperCaseText+"<br>");
console.log(LowerCaseText);


// slice bu esa Hello shunda 0, 5 bolsa shuni chiqoradi
var text = "Hello, world!";
var slicedText = text.slice(0, 5);
consoles.log(slicedText);


// replace soz orniga boshga zor qoyish 
var text = "Hello, world!";
var replaceText = text.replace("world", "Universe");
console.log(replaceText);



// split
var csvData = "John,Doe,30";
var daraArray = csvData.split(",");
console.log(daraArray);



// trim()
var paddedText = "     Hello, World!             ";
var trimmedText = paddedText.trim();
console.log(trimmedText);



// startsWith() endsWith()
var text = "Hello, world!";
var startsWithHello = text.startsWith("Hello");
var endsWithWorld = text.endsWith("world");
console.log(startsWithHello+<br>);
console.log(endsWithWorld);