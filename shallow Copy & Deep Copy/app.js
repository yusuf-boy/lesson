// shallow Copy & Deep Copy

/* -- primitive --*/
let a = 2
let b = a
b = 7

console.log('b', a)
console.log('a:', b)

/* -- reference --*/
const person = {
    name: 'John',
    age: 30,
}

// spread operator - to'liq ma'lumotni nusxalash
const newPerson = {...person}

newPerson.name = 'anna'
newPerson.age = 28

console.log('person', person)
console.log('newPerson:', newPerson)

// chap tomonda kelsa bu rest operator qolgan ma'lumontni nusxalash
const [bir, ...qolgani] = [1, 2, 3]
console.log(qolgani)
