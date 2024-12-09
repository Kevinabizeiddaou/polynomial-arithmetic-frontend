function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`nav a[href="#${tabId}"]`).classList.add('active');
}

function performOperation(operation) {
    const m = document.getElementById('select-m').value;
    const poly1 = document.getElementById('poly1').value;
    const poly2 = document.getElementById('poly2').value;

    if (!poly1) {
        document.getElementById('result-text').textContent = "Please enter Polynomial 1.";
        return;
    }

    if (!poly2 && operation !== 'inverse' && operation !== 'mod') {
        document.getElementById('result-text').textContent = "Please enter Polynomial 2 for this operation.";
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = `Adding ${poly1} and ${poly2} in GF(2^${m}).`;
            break;
        case 'subtract':
            result = `Subtracting ${poly2} from ${poly1} in GF(2^${m}).`;
            break;
        case 'multiply':
            result = `Multiplying ${poly1} and ${poly2} in GF(2^${m}).`;
            break;
        case 'divide':
            result = `Dividing ${poly1} by ${poly2} in GF(2^${m}).`;
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
}


