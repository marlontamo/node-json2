// controllers/userController.js
import * as userModel from '../models/userModel.js';

const getUsers = (req, res) => {
    const users = userModel.getUsers();
    res.json(users);
};

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = userModel.getUserById(userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found.');
    }
};

export { getUsers, getUserById };
