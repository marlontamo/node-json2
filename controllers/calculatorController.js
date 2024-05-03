// controllers/calculatorController.js

const add = (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseInt(num1) + parseInt(num2);
    res.send(`The sum of ${num1} and ${num2} is ${result}`);
};

const subtract = (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseInt(num1) - parseInt(num2);
    res.send(`The result of ${num1} minus ${num2} is ${result}`);
};

const multiply = (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseInt(num1) * parseInt(num2);
    res.send(`The result of ${num1} multiplied by ${num2} is ${result}`);
};

const divide = (req, res) => {
    const { num1, num2 } = req.query;
    if (parseInt(num2) === 0) {
        res.status(400).send('Cannot divide by zero.');
        return;
    }
    const result = parseInt(num1) / parseInt(num2);
    res.send(`The result of ${num1} divided by ${num2} is ${result}`);
};

export { add, subtract, multiply, divide };
