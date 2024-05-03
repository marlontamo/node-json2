// routes/userRoutes.js
import express from 'express';
import * as userController from '../controllers/userController.js';
import * as calculatorController from '../controllers/calculatorController.js';

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

// Add routes for calculations
router.get('/calculate/add', calculatorController.add);
router.get('/calculate/subtract', calculatorController.subtract);
router.get('/calculate/multiply', calculatorController.multiply);
router.get('/calculate/divide', calculatorController.divide);

export default router;

