// LocalStorage

// setItem
// const names = ['ahror', 'sardor','doniyor']
// localStorage.setItem('names', JSON.stringify(names))
//
// // getItem
// const getNames = JSON.parse(localStorage.getItem('name'))
// console.log(getNames)
//
// // clear
// localStorage.clear()

console.log(localStorage.getItem('names'));
const names = JSON.parse(localStorage.getItem('names'))
    ? JSON.parse(localStorage.getItem('names')) : []

if (names.length > 0) {
    names.forEach((name) => {
        console.log(name)
    })
} else {
    console.log("no name")
}






