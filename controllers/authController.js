const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');


const getUser = asyncHandler(async(req, res) => {
    try {
        const userData = await User.find({});
        res.status(200).json(userData);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const createUser = asyncHandler(async(req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const getUsers = asyncHandler(async(req, res) => {
    try {
        const userData = await User.find({});
        res.status(200).json(userData);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getUser,
    createUser,
    getUsers
}