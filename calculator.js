function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function sum(array) {
    return array.reduce((total, num) => total + num);
}

module.exports = {add, subtract, sum}