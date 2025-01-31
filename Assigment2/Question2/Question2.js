let calculateBtn = document.getElementById('calculate-btn');
let num1Input = document.getElementById('num1');
let operationSelect = document.getElementById('operation');
let num2Input = document.getElementById('num2');
let result = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let num1 = parseFloat(num1Input.value);
    let operation = operationSelect.value;
    let num2 = parseFloat(num2Input.value);

    switch (operation) {
        case '+':
            result.innerText = `Result: ${num1 + num2}`;
            break;
        case '-':
            result.innerText = `Result: ${num1 - num2}`;
            break;
        case '*':
            result.innerText = `Result: ${num1 * num2}`;
            break;
        case '/':
            if (num2 !== 0) {
                result.innerText = `Result: ${num1 / num2}`;
            } else {
                result.innerText = 'Error: Division by zero is not allowed.';
            }
            break;
        default:
            result.innerText = 'Error: Invalid operation. Please use +, -, *, or /.';
    }
});