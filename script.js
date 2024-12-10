import { performAddition } from './apiServiceAddition.js';
import { performDivision } from './apiServiceDivision.js';

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
    const poly1 = document.getElementById('poly1').value;
    const poly2 = document.getElementById('poly2').value;
    // console.log(operation, m, poly1, poly2);

    if (!poly1) {
        document.getElementById('result-text').textContent = "Please enter Polynomial 1.";
        return;
    }

    if (!poly2 && operation !== 'inverse' && operation !== 'mod') {
        document.getElementById('result-text').textContent = "Please enter Polynomial 2 for this operation.";
        return;
    }

    const payload = {
        poly1,
        poly2: operation === 'inverse' || operation === 'mod' ? null : poly2,
        input_type: document.getElementById('input-type').value,
        output_type: document.getElementById('output-type').value,
        m: parseInt(m),
    };

    try {
        let result;
        switch (operation) {
            case 'add':
                const additionResult = await performAddition(payload);
                result = `Result: ${additionResult.result}`;
                break;
            case 'subtract':
                result = `Subtracting ${poly2} from ${poly1} in GF(2^${m}).`;
                break;
            case 'multiply':
                result = `Multiplying ${poly1} and ${poly2} in GF(2^${m}).`;
                break;
            case 'divide':
                const divisionResult = await performDivision(payload);
                result = `Result: ${divisionResult.result}`;
                break;
            case 'mod':
                result = `Modulo reduction of ${poly1} in GF(2^${m}).`;
                break;
            case 'inverse':
                result = `Finding the inverse of ${poly1} in GF(2^${m}).`;
                break;
            default:
                result = "Invalid operation.";
        }

        document.getElementById('result-text').textContent = result;
    } catch (error) {
        document.getElementById('result-text').textContent = `Error: ${error.message}`;
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
