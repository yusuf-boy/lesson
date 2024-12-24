/// add & remove class
// const content = document.querySelector('p')

// console.log(content.classList)
// content.classList.add('success') // bu add nom qoshish
// content.classList.remove('success') // bu esa remove olib tashlash deyiladi
// content.classList.add('success')

// const para = document.querySelectorAll('p')

// para.forEach((text) => {
//     if (text.textContent.includes('success')) {
//         text.classList.add('success')
//     }

//     if (text.textContent.includes('error')) {
//         text.classList.add('error')
//     }
// })


const article = document.querySelector('article')

console.log(article.children)

Array.from(article.children).forEach((child) => {
    child.classList.add('artilce-child')
}) 
