import { performAddition } from './apiServiceAddition.js';
import { performDivision } from './apiServiceDivision.js';
import { performMultiplication } from './apiServiceMultiplication.js';
import { performInverse } from './apiServiceInverse.js';
import { performModulo } from './apiServiceModulo.js';
import { performSubtraction } from './apiServiceSubtraction.js';

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`nav a[href="#${tabId}"]`).classList.add('active');
}

async function performOperation(operation) {
    const m = document.getElementById('select-m').value;
    const poly1 = document.getElementById('poly1').value.trim();
    const poly2 = document.getElementById('poly2').value.trim();
    const inputType = document.getElementById('input-type').value;
    const outputType = document.getElementById('output-type').value;

    // Validate input
    if (!poly1) {
        document.getElementById('result-text').textContent = "Please enter Polynomial 1.";
        return;
    }
    if (!poly2 && operation !== 'inverse' && operation !== 'mod') {
        document.getElementById('result-text').textContent = "Please enter Polynomial 2 for this operation.";
        return;
    }

    // Construct payload
    const payload = {
        poly1,
        poly2: operation === 'inverse' || operation === 'mod' ? null : poly2,
        input_type: inputType,
        output_type: outputType,
        m: parseInt(m, 10),
    };

    // try {
        // Perform the operation
        const result = await executeOperation(operation, payload);

        // Update the result text
        document.getElementById('result-text').textContent = `Result: ${result}`;
        console.log("Operation triggered:", operation);
        console.log("Payload sent:", payload);
        console.log("Result received:", result);

    // } catch (error) {
    //     // Handle errors and display the message
    //     document.getElementById('result-text').textContent = `Error: ${error.message}`;
    //     console.error(`Error during ${operation}:`, error);
    // }
}

// Helper function to execute the operation
async function executeOperation(operation, payload) {
    switch (operation) {
        case 'add':
            return (await performAddition(payload)).result;
        case 'subtract':
            return (await performSubtraction(payload)).result;
        case 'multiply':
            return (await performMultiplication(payload)).result;
        case 'divide':
            return (await performDivision(payload)).result;
        case 'mod':
            return (await performModulo(payload)).result;
        case 'inverse':
            return (await performInverse(payload)).result;
        default:
            throw new Error("Invalid operation.");
    }
}


window.performOperation = performOperation;

// Add event listeners to operation buttons
document.getElementById('add-btn').addEventListener('click', () => performOperation('add'));
document.getElementById('subtract-btn').addEventListener('click', () => performOperation('subtract'));
document.getElementById('multiply-btn').addEventListener('click', () => performOperation('multiply'));
document.getElementById('divide-btn').addEventListener('click', () => performOperation('divide'));
document.getElementById('mod-btn').addEventListener('click', () => performOperation('mod'));
document.getElementById('inverse-btn').addEventListener('click', () => performOperation('inverse'));

