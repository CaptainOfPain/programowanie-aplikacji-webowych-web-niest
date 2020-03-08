document.addEventListener('DOMContentLoaded', function () {
    let inputs = document.querySelectorAll('.text-input');
    for (let input of inputs) {
        input.addEventListener('keyup', () => calculateFunction());
    }
    let countInput = document.querySelector('#inputs-count');
    countInput.addEventListener('change', function () {
        let leftBox = document.querySelector('.left');
        leftBox.innerHTML = '';
        for (let i = 0; i < parseInt(this.value); i++) {
            leftBox.appendChild(generateInput(0));
        }
    });
});
function generateInput(value) {
    let input = document.createElement('INPUT');
    input.setAttribute('type', 'text');
    input.value = 0..toString();
    input.classList.add('text-input');
    input.addEventListener('keyup', () => calculateFunction());
    return input;
}
function calculateFunction() {
    let inputs = document.querySelectorAll('.text-input');
    let sumElement = document.querySelector('#sum');
    let avgElement = document.querySelector('#avg');
    let maxElement = document.querySelector('#max');
    let minElement = document.querySelector('#min');
    let sum = 0;
    let max = parseInt(inputs[0].value);
    let min = parseInt(inputs[0].value);
    for (let element of inputs) {
        let inputElement = element;
        if (inputElement.value === '' || parseInt(inputElement.value) === NaN) {
            sumElement.innerText = '?';
            avgElement.innerText = '?';
            minElement.innerText = '?';
            maxElement.innerText = '?';
            return;
        }
        let number = inputElement.value != '' ? parseInt(inputElement.value) : 0;
        sum += number;
        if (number > max) {
            max = number;
        }
        if (number < min) {
            min = number;
        }
    }
    sumElement.innerText = sum.toString();
    avgElement.innerText = (sum / inputs.length).toString();
    maxElement.innerText = max.toString();
    minElement.innerText = min.toString();
}
//# sourceMappingURL=index.js.map