const numbers = document.querySelectorAll('.number');
const display = document.querySelector('#screen');
const actions = document.querySelectorAll('.action')
const clearButton = document.querySelector('#button-clear');
const equalsButton = document.querySelector('.equals');

let actionButtonPressed = false;
let equalsButtonPressed = false;
let firstNumber = 0;
let secondNumber = 0;
let operand = '';
let theAnswer = [];
let equalsAnswer = 0;

// function for calculating answer
function calculate(firstNumber, secondNumber, operand){
    switch (operand){

        case '+':
            return firstNumber + secondNumber;

        case '-':
            return firstNumber - secondNumber;
            
        case 'x':
            return firstNumber * secondNumber;

        case '/':
            return firstNumber / secondNumber;
    }
}

//add clear button 
clearButton.addEventListener('click', ()=>{
    display.textContent = '';
    actionButtonPressed = false;
    equalsButtonPressed = false;
    firstNumber = 0;
    secondNumber = 0;
    operand = '';
    theAnswer = [];
    equalsAnswer = 0;
})

//add equals button 
equalsButton.addEventListener('click', ()=>{

    if (equalsButtonPressed === false){

        actionButtonPressed = false;
        secondNumber = parseFloat(display.textContent);
        equalsAnswer = calculate(firstNumber,secondNumber,operand);
        firstNumber = equalsAnswer;
        secondNumber = 0;
        operand = '';
        console.log(equalsAnswer);
        display.textContent = '';
        display.textContent = equalsAnswer;

    } equalsButtonPressed = true;
})

//onclick for number buttons
function addNumberListeners(){
    numbers.forEach(number => {
        number.addEventListener('click', ()=> {

            equalsButtonPressed = false;

            if (actionButtonPressed === false){
                display.append(number.textContent);
            } else if (actionButtonPressed === true){
                display.textContent = '';
                display.append(number.textContent);
                actionButtonPressed = false;   
            }

        });
    });
}   addNumberListeners();

//onclick for operands
function addActionListeners(){
    actions.forEach(action => {
        action.addEventListener('click', () => {

            equalsButtonPressed = false;

            if (actionButtonPressed === false) {

                firstNumber = parseFloat(display.textContent);
                actionButtonPressed = true;
                operand = action.textContent;

            } else if (actionButtonPressed === true){

                secondNumber = parseFloat(display.textContent);
                theAnswer = calculate(firstNumber, secondNumber, operand);
                display.textContent = theAnswer;
                operand = action.textContent;
                firstNumber = theAnswer;
                console.log(theAnswer);
            }           
        })
    })
}   addActionListeners();





