import { performAddition } from './apiServiceAddition.js';
import { performDivision } from './apiServiceDivision.js';
import { performMultiplication } from './apiServiceMultiplication.js';
import { performInverse } from './apiServiceInverse.js';
import { performModulo } from './apiServiceModulo.js';
import { performSubtraction } from './apiServiceSubtraction.js';



async function performOperation(operation) {
    
    //Added line here
    togglePolynomial2Box(operation);

    const m = document.getElementById('select-m').value;
    const poly1 = document.getElementById('poly1').value.trim();
    const poly2 = document.getElementById('poly2').value.trim();
    const inputType = document.getElementById('input-type').value;
    const outputType = document.getElementById('output-type').value;

    // Validate inputs
    if (!poly1) {
        document.getElementById('result-text').textContent = "Please enter Polynomial 1.";
        return;
    }
    if (!poly2 && operation !== 'inverse' && operation !== 'mod') {
        document.getElementById('result-text').textContent = "Please enter Polynomial 2.";
        return;
    }

    const payload = { poly1, poly2, input_type: inputType, output_type: outputType, m: parseInt(m, 10) };

    try {
        let result;
        switch (operation) {
            case 'add':
                const additionResult = await performAddition(payload);
                result = additionResult.result; // Extract 'result' from the response
                break;
            case 'subtract':
                const subtractionResult = await performSubtraction(payload);
                result = subtractionResult.result; // Extract 'result' from the response
                break;
            case 'multiply':
                const multiplicationResult = await performMultiplication(payload);
                result = multiplicationResult.result; // Extract 'result' from the response
                break;
            case 'divide':
                const divisionResult = await performDivision(payload);
                result = divisionResult.result; // Extract 'result' from the response
                break;
            case 'mod':
                const modResult = await performModulo(payload);
                result = modResult.result; // Extract 'result' from the response
                break;
            case 'inverse':
                const inverseResult = await performInverse(payload);
                result = inverseResult.result; // Extract 'result' from the response
                break;
            default:
                result = "Invalid operation.";
        }

        if (!result) {
            throw new Error("No result returned from the operation.");
        }

        document.getElementById('result-text').textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result-text').textContent = `Error: ${error.message}`;
        console.error("Error during operation:", error);
    }
}


window.performOperation = performOperation;

// Toggle visibility of Polynomial 2 box
function togglePolynomial2Box(operation) {
    const poly2Label = document.getElementById('poly2-label');
    const poly2Input = document.getElementById('poly2');

    if (operation === 'inverse') {
        // Hide Polynomial 2 when finding the inverse
        poly2Label.style.display = 'none';
        poly2Input.style.display = 'none';
    } else {
        // Show Polynomial 2 for all other operations
        poly2Label.style.display = 'block';
        poly2Input.style.display = 'block';
    }
}


// Add event listeners to operation buttons
document.getElementById('add-btn').addEventListener('click', () => performOperation('add'));
document.getElementById('subtract-btn').addEventListener('click', () => performOperation('subtract'));
document.getElementById('multiply-btn').addEventListener('click', () => performOperation('multiply'));
document.getElementById('divide-btn').addEventListener('click', () => performOperation('divide'));
document.getElementById('mod-btn').addEventListener('click', () => performOperation('mod'));
document.getElementById('inverse-btn').addEventListener('click', () => performOperation('inverse'));

