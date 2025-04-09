// filter, map, sort
const movies = [
    { name: 'Avatar 3D', year: 2008, rating: 9 },
    { name: 'Titanic 4D', year: 1997, rating: 7 },
    { name: 'Fast 9 3D',year: 2020, rating: 4 },
    { name: 'Avengers', year: 2012, rating: 6 },
]

const sortedMovies = movies.sort((a,b) => {
    return b.rating - a.rating
})
console.log(sortedMovies)

//alphabetical
// const names = ['ahror', 'sardor', 'doniyor', 'bobur']
//
// const sortedNames = names.sort()
// // console.log(sortedNames)
//
// // numbers
// const numbers = [3, 1, 19, 11, 7, 5]
//
// const sortedNumbers = numbers.sort((a, b) => {
//     return a - b
// })
// console.log(sortedNumbers)

// const  mapMovies = movies.map((movie) => {
//     return {name: movie.name, year: movie.year, rating: movie.rating + 1}
// })
//
// console.log(mapMovies)
// console.log(movies)

// const filterMovies = movies.filter(movie => movie.year > 2010)
//
// console.log(filterMovies)
//
// //forEach
// const  newMovies = []
//
// movies.forEach((movie) => {
//     if (movie.year > 2010) {
//         newMovies.push(movie)
//     }
// })
// console.log(newMovies)

//map
// const  numbers =[2, 3, 4, 5]
//
// const mapNumbers = numbers.map((num) => num ** 2)
//
// console.log(mapNumbers)

//forEach
/*const  newMovies = []

numbers.forEach((num) => {
    newMovies.push(num ** 2)
})

console.log(newMovies)
 */