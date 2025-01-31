let calculateBtn = document.getElementById('calculate-btn');
let salaryInput = document.getElementById('salary');
let resultParagraph = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const salary = parseFloat(salaryInput.value);
    const taxAmount = findTax(salary);
    resultParagraph.innerText = `Tax Amount: ${taxAmount}`;
});

function findTax(salary) {
    let taxAmount;

    switch (true) {
        case (salary <= 500000):
            taxAmount = salary * 0 / 100;
            break;
        case (salary <= 1000000):
            taxAmount = salary * 10 / 100;
            break;
        case (salary <= 1500000):
            taxAmount = salary * 20 / 100;
            break;
        default:
            taxAmount = salary * 30 / 100;
    }

    return taxAmount;
}