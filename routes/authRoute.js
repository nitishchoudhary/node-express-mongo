const express = require('express');
const User = require('../models/userModel');
const {getUser,createUser} = require('../controllers/authController');

const routes = express.Router();

routes.get('/login', getUser);

routes.post('/register', createUser);

module.exports = routes;