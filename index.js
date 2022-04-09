const display = document.querySelector("#display")
const AC = document.querySelector("#ac")
const sign = document.querySelector("#sign")
const percent = document.querySelector("#percent")
const operations = document.querySelectorAll(".operation")

const dot = document.querySelector("#dot")
const equals = document.querySelector("#equals")
const numbers = document.querySelectorAll(".number")

let currentOperation = "";
let firstNumber;
display.textContent = "0"

AC.addEventListener("click", clearDisplay)
numbers.forEach((e) => {
    e.addEventListener("click", (e) => insertNumber(e.target.textContent))
})
operations.forEach((elem) => {
    elem.addEventListener("click", (e) => changeOperation(e.target.textContent))
})
equals.addEventListener("click", (e) => {
    display.textContent = equal().toString().slice(0,9)
})
sign.addEventListener("click", changeSign)
percent.addEventListener("click", percentage)
function clearDisplay() {
    display.textContent = "0"
}
dot.addEventListener("click", addDot)

function addDot() {
    !display.textContent.includes(".") && (display.textContent += ".")
}

function insertNumber(num) {
    if (display.textContent.length < 9) {
        if (display.textContent == "0") {
            if (num == "0") return
            display.textContent = num
            return; 
        }
        display.textContent += num
        
    }
}

function changeOperation(op) {
    currentOperation = op
    firstNumber = +display.textContent
    display.textContent = "0"
}

function equal() {
    
    switch(currentOperation) {
        case "":
            return +display.textContent ;
        case "+":
            return firstNumber + +display.textContent
        case "*":
            return firstNumber * +display.textContent
        case "/":
            return firstNumber / +display.textContent
        case "-":
            return firstNumber - +display.textContent

    }
    currentOperation = "";
}

function changeSign() {
    if (+display.textContent == 0) return
    display.textContent =  (0 - +display.textContent).toString().slice(0,8)
}

function percentage() {
    let number = (+display.textContent / 100).toString().slice(0,9)
    if (number.includes("e")) return
    display.textContent = number
}

// Keybord Support

window.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") display.textContent = display.textContent.slice(0, display.textContent.length - 1)
    if (!isNaN(+e.key)) insertNumber(e.key)
    if (e.key == "*" || e.key == "/" || e.key == "+" || e.key == "-") changeOperation(e.key)
    if (e.key == "Enter") display.textContent = equal().toString().slice(0,9)
    if (e.key == ".") addDot()
    if (e.key == "Delete") clearDisplay()
})


