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
    e.addEventListener("click", insertNumber)
})
operations.forEach((elem) => {
    elem.addEventListener("click", changeOperation)
})
operations.forEach((elem) => {
    elem.addEventListener("click", changeOperation)
})
equals.addEventListener("click", (e) => {
    display.textContent = equal().toString().slice(0,9)
})
sign.addEventListener("click", changeSign)
percent.addEventListener("click", percentage)
function clearDisplay() {
    display.textContent = "0"
}
dot.addEventListener("click", () => display.textContent += ".")

function insertNumber(e) {
    if (display.textContent.length < 9) {
        if (display.textContent == "0") {
            if (e.target.textContent == "0") return
            display.textContent = e.target.textContent
            return;
        }
        display.textContent += e.target.textContent
        
    }
}

function changeOperation(e) {
    currentOperation = e.target.textContent
    firstNumber = +display.textContent
    display.textContent = "0"
}

function equal() {
    
    switch(currentOperation) {
        case "":
            return ;
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

