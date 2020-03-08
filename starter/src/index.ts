document.addEventListener('DOMContentLoaded', function() {
    //zad 1
    let inputs = document.querySelectorAll('.text-input');
    for(let input of inputs) {
        input.addEventListener('keyup', () => calculateFunction());
    }
    //zad 2
    let countInput = document.querySelector('#inputs-count');
    countInput.addEventListener('change', function() {
        let leftBox = document.querySelector('.left');
        leftBox.innerHTML = '';
        for(let i = 0; i < parseInt((this as HTMLInputElement).value); i++) {
            leftBox.appendChild(generateInput(0));
        }
    })
})

function generateInput(value: number): HTMLInputElement {
    let input = document.createElement('INPUT') as HTMLInputElement;
    input.setAttribute('type', 'text');
    input.value = (0 as number).toString();
    input.classList.add('text-input');
    input.addEventListener('keyup', () => calculateFunction());
    return input;
}

function calculateFunction(): void {
    let inputs = document.querySelectorAll('.text-input');
    let sumElement = document.querySelector('#sum') as HTMLInputElement;
    let avgElement = document.querySelector('#avg') as HTMLInputElement;
    let maxElement = document.querySelector('#max') as HTMLInputElement;
    let minElement = document.querySelector('#min') as HTMLInputElement;
    let sum: number = 0;
    let max: number = parseInt((inputs[0] as HTMLInputElement).value);
    let min: number = parseInt((inputs[0] as HTMLInputElement).value);
    for(let element of inputs) {
        let inputElement = element as HTMLInputElement;
        if(inputElement.value === '' || parseInt(inputElement.value) === NaN) {
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
