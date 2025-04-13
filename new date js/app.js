// date

// console.log(new Date());

const  now = new Date();
const today = now.getDate() < 10 ? '0' + now.getDate(): now.getDate();
const month = now.getMonth() //< 10 ? '0' + now.getMonth() : now.getMonth();
const year = now.getFullYear()

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

console.log('today:', today)
console.log('month:', months[month])
console.log('year:', year)

// time

const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
const minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
const second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

console.log(`hour:${hour}:${minute}:${second}`)
