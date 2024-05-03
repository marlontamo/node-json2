// models/userModel.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//const __dirname = path.dirname(new URL(import.meta.url).pathname);
//const userFilePath = path.join(__dirname, '../data/user.json');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const userFilePath = path.join(__dirname, '../data', 'user.json');
const getUsers = () => {
    const usersData = fs.readFileSync(userFilePath, 'utf8');
    return JSON.parse(usersData);
};

const getUserById = (userId) => {
    const users = getUsers();
    return users.find(user => user.id === userId);
};

export { getUsers, getUserById };
