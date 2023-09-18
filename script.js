let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        // Use a safe way to evaluate the input.
        currentInput = new Function('return ' + currentInput)();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Error';
    }
}
