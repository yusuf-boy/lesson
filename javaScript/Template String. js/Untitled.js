// temlate string
const title = 'Rastomojka qachon ochiladi ?! yohud Monopoliya Respublikasi'
const author = "lag'mon makazi"
const likes = 35000000

//concatentation way
/*let result = 'Bu past nomi ' + title + ' ' + author + ' tomonidan yozilgan. ' + 'va bu postda ' + likes + ' ta like bor'*/

//template string way
//let result = `Bu post nomi ${title}, ${author} tomonidan yozilgan. Va bu postda ${likes} ta like bor`

let result = `
    <h2>${title}</h2>
    <p>${author} tomonidan yozilgan</p>
    <span>${likes}</span>
`
console.log(result)