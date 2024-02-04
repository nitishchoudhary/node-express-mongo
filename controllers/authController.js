const { error } = require('console');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { hashPassword, comparePassword } = require('../helpers/auth');



const getUser = asyncHandler(async(req, res) => {
    try {
        const userData = await User.findOne();
        res.status(200).json(userData);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const createUser = asyncHandler(async(req, res) => {
    try {
        const {name, email, password} = req.body;
        console.log(password.length);
        //check name not empty
        if(!name){
            return res.json({
                error: "name is required"
            })
        }
        //check password 
        if(!password && password.length < 8){
            return res.json({
                error: "password is required & lenght at least 8"
            })
        }
        //check email
        const emailExists = await User.findOne({email});
        if(emailExists){
            return res.json({
                error: 'email is already taken'
            })
        }

        const hashedPassword = await hashPassword(password);

        const userData = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(200).json(userData);
    } catch (error) {
        res.status(500);
        throw new Error(error);
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