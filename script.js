function clearDisplay() {
    document.querySelector('#display').innerText = '';
}

function appendToDisplay(value) {
    document.querySelector('#display').textContent += value;
}

function calculate() {
    let display = document.querySelector('#display');
    display.textContent = eval(display.textContent);
}
