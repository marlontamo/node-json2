
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import calculatorRoutes from './routes/calculatorRoutes.js'
import {add,
     subtract,
      multiply,
       divide }
       from './functions/calculator.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4500
app.get('/',(req, res) =>{
    res.send('test app Hello')
});

app.use('/users', userRoutes);
app.use('/math',calculatorRoutes);




app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const sum = add(parseInt(num1, 10), parseInt(num2, 10));
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const result = subtract(parseInt(num1, 10), parseInt(num2, 10));
    res.send(`The result of ${num1} minus ${num2} is ${result}`);
});

app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const result = multiply(parseInt(num1, 10), parseInt(num2, 10));
    res.send(`The result of ${num1} multiplied by ${num2} is ${result}`);
});

app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    try {
        const result = divide(parseInt(num1, 10), parseInt(num2, 10));
        res.send(`The result of ${num1} divided by ${num2} is ${result}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
