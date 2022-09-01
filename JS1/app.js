const num1 = document.querySelector('#a')
const num2 = document.querySelector('#b')
const num3 = document.querySelector('#c')
const plus = document.querySelector('#plus')
const show = document.querySelector('#show')
const input = document.querySelector('#input')
const input2 = document.querySelector('#input2')
var a = 0

show.addEventListener('click', () => {
    alert((+input.value) + (+input2.value))
})
plus.addEventListener('click', () => {
    a = 1
})
num1.addEventListener('click', () => {
    if (a == 1) {

        input2.value = input2.value + num1.innerHTML
    }
    else {
        input.value = input.value + num1.innerHTML
    }
})
num2.addEventListener('click', () => {

    if (a == 1) {
        input2.value = input2.value + num2.innerHTML
    }
    else {
        input.value = input.value + num2.innerHTML
    }
})
num3.addEventListener('click', () => {
    if (a == 1) {
        input2.value = input2.value + num3.innerHTML
    }
    else {
        input.value = input.value + num3.innerHTML
    }
})