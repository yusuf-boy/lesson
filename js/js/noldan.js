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

/*--- dom selectors ---*/
// 1)getElementsByTagName  (xammasini olib keldip aytadi)
const listItem = document.getElementsByTagName('li')
// console.log(listItem[1])
// listItem.forEach((li) => {
//     console.log(li)
// })        //listItem BU ERREYGA OXSHAGANI BILAN ERREYMANS SHU UCHUN forEachni oqimayapdi


// 2)getElementsByClassName


// 3)getElementsById


// 4)querySelector / querySelectorAll\