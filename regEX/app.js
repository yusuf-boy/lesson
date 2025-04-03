const signupForm = document.querySelector('#signup-form')
// const username = document.querySelector('#username')
const message = document.querySelector('.message')
 
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log('Form Subimed')
    // console.log(username.value)
    const regEX = /^[a-zA-Z0-9]{6,12}$/
    const inputVal = signupForm.username.value

    if(regEX.test(inputVal)) {
        message.textContent = "Ma'lumat to'g'ri kiritildi"
    } else {

        message.textContent = "Kiritilayorgan ma'lumot 6 va 12 orasida bo'lshi kerak. shuningdek kichik va katta lotin harflaridan iborat bo'lshi zarur."
    }
})

// const name = '@!#yusuf1994'
// const regEX = /^[a-zA-Z0-9]{6,12}$/

// const result = regEX.test(name)
// const result = name.search(regEX)

// console.log(result)