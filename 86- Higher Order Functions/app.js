// EXAMPLE 1
// const greeting = () => {
//     return "Hello";
// }
//
// const sayHello = (func, name) => {
//     return func() + ' ' + name
// }
// const result = sayHello(greeting, 'anna'); // berilayotgan argumentlar cheksiz bo'lishi mumkin
// console.log(result);

// EXAMPLE 2
// function sayHello() {
//     return () => {
//         return `Hello`;
//     };
// }
//
// const result = sayHello()();

// EXAMPLE 3
// let callME = () => {
//     console.log("Hello there")
// }
// callME()

const  movies = [
    {
        name: "Spider-Men: Across The Spider-Verse",
        year: 2023,
        rate: 8.8,
        genre: ["Adventure", "Action", "Comedy"],
        country: ["United States"],
        isAdult: false,
    },
    {
        name: "The Godfather",
        year: 1972,
        rate: 9.2,
        genre: ["Mafia", "Crime Film", "Drama"],
        country: ["United States", "Italy"],
        isAdult: true,
    },
    {
        name: "Y-34",
        year: 2018,
        rate: 5.9,
        genre: ["Adventure", "Drama", "War", "Action"],
        country: ["Russia"],
        isAdult: true,
    },
    {
        name: "Parasite",
        year: 2019,
        rate: 7.5,
        genre: ["Adventure", "Drama", "War", "Action"],
        country: ["South Korea"],
        isAdult: true,
    },
    {
        name: "Titanic",
        year: 1999,
        rate: 7.5,
        genre: ["Adventure", "Drama", "Thriller", "Action"],
        country: ["United States", "English"],
        isAdult: true,
    },
    {
        name: "Paddington",
        year: 2014,
        rate: 4.5,
        genre: ["Adventure", "Fantasy", "Animation", "Comedy"],
        country: ["France","English"],
        isAdult: false,
    },
];
// Reduce()
// const array1 = [1, 2, 3, 4, 5];
// const sum = array1.reduce((acc, curVal) => {
//     console.log('Accumulator', acc, 'currentValue', curVal);
//     return acc + curVal;
// })
// console.log(sum)

const allMoviesGodfather = movies.flatMap((movie) => {
    return movie.genre
})
console.log(allMoviesGodfather)

const  sumAllGodfather = allMoviesGodfather.reduce((acc, curVal) => {
    if(!acc[curVal]){
        acc[curVal] = 1;
    } else  {
        acc[curVal] += 1;
    }
    return acc
}, {})
console.log(sumAllGodfather)


// from
// const ArrayFrom = Array.from('12345', (numStr) => {
//     return +numStr;
// })
// console.log(ArrayFrom);

//  object.assign();
// const newObj = Object.assign(movies);
// console.log(newObj);

// sort()
// const sortedMovies = movies.sort((m1, m2) => {
//         return m1.rate - m2.rate;
// })
// console.log('newArray', sortedMovies);
// console.log('originalArray', movies);


// FLAT() | FLATMAP();
// let arr1 = [10, 20, [30, 40, 50],[60, 70, 80, 90], 100];
// let arr2 = [10, 20, [30, [40, 50]], [[60, 70, 80], 90], 100];
// let arr3 = [10, 20, [30, [40, 50]], [[[60, 70], 80], 90], 100];
//
// const arr2Example = arr2.flat()
// console.log(arr2Example);
//
// let employee = [
//     {id: 101, name: 'john', skills: ['HTML', 'CSS', 'JAVASCRIPT']},
//     {id: 101, name: 'john', skills: ['C#', 'SGL']},
//     {id: 101, name: 'john', skills: ['ANGULAR', 'REACT']},
// ];
// let employee1 = employee.map((employee) => {
//     return employee.skills;
// }).flat()
// console.log('map + flat', employee1);
//
// let employee2 = employee.flatMap((employee) => {
//     return employee.skills;
// })
// console.log('flatMap', employee2);


// FIND() | FINDINDEX();
// const findeMovie = movies.find((movie) => {
//     return movie.name === "Titanic"
// })
// console.log(findeMovie);

// MAP
// const decriseRates = movies.map((movie) => {
//     return {...movie, rate: movie.rate - 1}
// })
// console.log(movies)
// console.log(decriseRates);

//for
// const moviesUpTo6 = []
// for (let i = 0; i < movies.length; i++) {
//     if (movies[i].rate >= 6 && movies[i].rate <= 8) {
//         moviesUpTo6.push(movies[i]);
//     }
// }
// console.log(moviesUpTo6);

// const moviesUpTo6 = movies.filter((movie,) => {
//     return movie.rate >= 6 && movie.rate <= 8
// })
// console.log(moviesUpTo6);

// for(let i = 0; i < movies.length; i++) {
//     console.log(`Name:'${movies[i].name}, "year:"${movies[i].year}`);
// }

//forEach()
// movies.forEach((item, index, arr) => {
//     console.log(index, `Name: ${item.name}, year: ${item.year}`)
// })

// // some() vs every()
// const someMovies = movies.some((movie) => {
//     console.log(movie)
//     return movie.year > 2023
// })
// console.log(someMovies)
