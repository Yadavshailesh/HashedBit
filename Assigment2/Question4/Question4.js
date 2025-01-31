const calculateBtn = document.getElementById('calculate-btn');
const n1Input = document.getElementById('n1');
const n2Input = document.getElementById('n2');
const resultParagraph = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const n1 = n1Input.value;
    const n2 = n2Input.value;
    const result = sumOfProducts(n1, n2);
    resultParagraph.innerText = `Result: ${result}`;
});

function sumOfProducts(n1, n2) {
    let sum = 0;
    const len1 = n1.length;
    const len2 = n2.length;
    const maxLen = Math.max(len1, len2);

    for (let i = 0; i < maxLen; i++) {
        const digit1 = len1 > i ? parseInt(n1[len1 - 1 - i]) : 0;
        const digit2 = len2 > i ? parseInt(n2[len2 - 1 - i]) : 0;
        sum += digit1 * digit2;
    }

    return sum;
}