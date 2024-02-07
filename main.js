let arrayFirstNumber = [];
let arraySecondNumber = [];
let arrayOfOperation = [];
let operationClicked = false;
let operationSymbol = undefined;
const outputNode = document.querySelector('.js-output');
    // Добавляем числа в массив при нажатии на кнопки с классом .number
const pushNum = () => {
    document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', function() {
        if (!operationClicked) {
            arrayFirstNumber.push(button.innerText);
            outputNode.innerHTML = arrayFirstNumber.join('');
            console.log(arrayFirstNumber);
        } else { 
            
            arraySecondNumber.push(button.innerText);
           outputNode.innerHTML = arraySecondNumber.join('');
            console.log(arraySecondNumber);
        }
    });
});
}
const choseOperation = () => {
    // Добавляем числа в массив при нажатии на кнопки с классом .operation
document.querySelectorAll('.js-select-operation').forEach(button => {
    button.addEventListener('click', function() {
        operationSymbol = button.innerText;
        outputNode.innerHTML = operationSymbol;
        operationClicked = true;
        if(operationSymbol == 'del'){
            arrayFirstNumber.pop(-1);
            outputNode.innerHTML = arrayFirstNumber.join('');
        }
    });
});
}
const withDrawResult = () => {
    const btnResultNode = document.querySelector('.btn-output');
btnResultNode.addEventListener('click', function() {
    const number1 = parseFloat(arrayFirstNumber.join(''));
    console.log(typeof(number1))
    number2 = parseFloat(arraySecondNumber.join(''));
    const operation = operationSymbol;
    const result = calculate( number1 , number2 , operation )
    if (result.toString().length > 12) {
        const elements = document.getElementsByClassName("js-output");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = "35px";
        }
        return outputNode.innerHTML = '= ' + result.toExponential();
    } 
    else {
        return outputNode.innerHTML = '= ' + result;
        
    }
})
const resetProgram = () => {
    
    arrayFirstNumber = [];
    arraySecondNumber = [];
    arrayOfOperation = [];
    operationClicked = false;
    operationSymbol = undefined;
    outputNode.innerHTML = '';
    result = undefined;
    number1 = 0;
    number2 = 0;
    number1 = parseFloat(result,10);
    choseOperation();
    console.log(arraySecondNumber)
    startProgram();
    
}
document.querySelector('.reset-button').addEventListener('click', resetProgram());
}
const startProgram = () => {
    pushNum();
    choseOperation();
    withDrawResult();
}
startProgram();
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let background = document.querySelector('.background');
    let buttonscard = document.querySelector('.buttons-card');
  
    background.style.transform = 'translateY(' + scrollPosition + 'px)';
    buttonscard.style.transform = 'translateY(' + scrollPosition + 'px)';
  });
  


