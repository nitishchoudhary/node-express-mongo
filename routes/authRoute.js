const express = require('express');
const User = require('../models/userModel');
const {getUser, createUser, getUsers} = require('../controllers/authController');

const routes = express.Router();

routes.get('/login', getUser);

routes.post('/register', createUser);

routes.get('/content', getUsers);

module.exports = routes;