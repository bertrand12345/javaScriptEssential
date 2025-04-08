function performOperation() {
    // Get user input from input fields
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform operations
        let additionResult = add(num1, num2);
        let multiplicationResult = multiply(num1, num2);
        let divisionResult = divide(num1, num2);

        // Display all results
        let output = `
            Addition : ${additionResult} <br>
            Multiplication : ${multiplicationResult} <br>
            Division : ${divisionResult}
        `;
        displayResult(output);
    } else {
        displayResult('Veuillez entrer deux nombres valides.');
    }
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    // debugger; // Tu peux activer le débogueur si nécessaire
    debugger;
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Division par zéro impossible';
    }
    return a / b;
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Le résultat est : <br>${result}`;
}
