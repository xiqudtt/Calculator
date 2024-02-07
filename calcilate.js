const OPERATIONS = {
    sum: '+',
    substract:'-',
    multiply:'*',
    devison:'/',
    procent:'%',
}
function calculate(a, b, operation) {
    console.log(b);
    if (isNaN(a) || isNaN(b)) {
        console.log('Error: a or b is not a number');
        return;
    }
    let result = null;
    let num1 = parseFloat(a);
    console.log(num1);
    let num2 = parseFloat(b);
    console.log(num2);
    switch (operation) {
        case OPERATIONS.sum:
            result = num1 + num2;
            break;
        case OPERATIONS.substract:
            result = num1 - num2;
            break;
        case OPERATIONS.multiply:
            result = num1 * num2;
            break;
        case OPERATIONS.devison:
            if (b !== 0) {
                result = num1 / num2;
            } else {
                console.log('Error: Division by zero');
            }
            break;
        case OPERATIONS.procent:
            result = num1 + num2;
            break;
        default:
            console.log('Error: Invalid operation');
            break;
    }
    return result;
}
