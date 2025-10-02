console.log("Hello, World!");


function add (a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}   

function multiplyTwoNumber(a, b) {
    return a * b;
}

function divideTwoNumber(a, b) {
    if (b === 0) {
        console.error("Division by zero is not allowed.");
        return null;
    }
    console.log("Dividing", a, "by", b);
    return a / b;
}

console.log(add(2, 3));