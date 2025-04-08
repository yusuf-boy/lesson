// filter
const movies = [
    { name: 'Avatar 3D', year: 2008, rating: 9 },
    { name: 'Titanic 4D', year: 1997, rating: 7 },
    { name: 'Fast 9 3D',year: 2020, rating: 4 },
    { name: 'Avengers', year: 2012, rating: 6 },
]

const filterMovies = movies.filter(movie => movie.year > 2010)

console.log(filterMovies)

//forEach
const  newMovies = []

movies.forEach((movie) => {
    if (movie.year > 2010) {
        newMovies.push(movie)
    }
})

console.log(newMovies)
