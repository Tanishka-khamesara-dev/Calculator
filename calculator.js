var currentDisplayValue = "";

function clearDisplay() {
    currentDisplayValue = ``;
    document.querySelector('#display').value = currentDisplayValue;
}

oneVal = () => {
    currentDisplayValue += 1;
    document.querySelector('#display').value = currentDisplayValue;
}

twoVal = () => {
    currentDisplayValue += 2;
    document.querySelector('#display').value = currentDisplayValue;
}

plusVal = () => {
    currentDisplayValue += `+`;
    document.querySelector('#display').value = currentDisplayValue;
}

threeVal = () => {
    currentDisplayValue += 3;
    document.querySelector('#display').value = currentDisplayValue;
}

fourVal = () => {
    currentDisplayValue += 4;
    document.querySelector('#display').value = currentDisplayValue;
}

subVal = () => {
    currentDisplayValue += `-`;
    document.querySelector('#display').value = currentDisplayValue;
}

fiveVal = () => {
    currentDisplayValue += 5;
    document.querySelector('#display').value = currentDisplayValue
}

sixVal = () => {
    currentDisplayValue += 6;
    document.querySelector('#display').value = currentDisplayValue
}

multiplyVal = () => {
    currentDisplayValue += `*`;
    document.querySelector('#display').value = currentDisplayValue;
}
sevenVal = () => {
    currentDisplayValue += 7;
    document.querySelector('#display').value = currentDisplayValue;
}
eightVal = () => {
    currentDisplayValue += 8;
    document.querySelector('#display').value = currentDisplayValue;
}
divideVal = () => {
    currentDisplayValue += `/`;
    document.querySelector('#display').value = currentDisplayValue;
}
nineVal = () => {
    currentDisplayValue += 9;
    document.querySelector('#display').value = currentDisplayValue;
}
zeroVal = () => {
    currentDisplayValue += 0;
    document.querySelector('#display').value = currentDisplayValue;
}
moduloVal = () => {
    currentDisplayValue += '%';
    document.querySelector('#display').value = currentDisplayValue;
}
decimalVal = () => {
    currentDisplayValue += `.`;
    document.querySelector('#display').value = currentDisplayValue
}
equalVal = () => {
    let result = eval(currentDisplayValue);
    document.querySelector('#display').value = result;
}
