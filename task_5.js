// Task 5 :  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

// Case 0:
const num1 = 201;
const operator = "/";
const num2 = 3;

// function definition

function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero.";
            }
            return num1 / num2;
        default:
            return "Invalid operator. Please use one of the following: +, -, *, /";
    }
}

// function invoking
const result = calculator(num1, operator, num2);
console.log("Result:", result);
