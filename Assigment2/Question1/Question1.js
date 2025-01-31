let numbersDiv = document.getElementById("numbers");
let evenNumbers = "";

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumbers += i + " ";
    }
}

numbersDiv.innerText = evenNumbers;
