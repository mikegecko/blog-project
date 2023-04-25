const User =  require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            return next(error);
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (error) {
            return next(error);
        }
    },
    createUser: async (req, res, next) => {
        try{
            const saltRounds = 10;
            const hash = await bcrypt.has(req.body.password, saltRounds);
            const newUser = await new User({
                ...req.body,
                password: hash,
            }).save();
            res.json(newUser);
        }catch(error){
            return next(error);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            //Add bcrypt hashing for passwords
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json(updatedUser);
        } catch (error) {
            return next(error);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            res.json(deletedUser);
        } catch (error) {
            return next(error);
        }
    },
    login: async (req, res, next) => {
        try {
            const {username, password} = req.body;
            if(!username || !password){
                res.status(401).json({success: false, message: 'Please provide username and password'});
            }
            if(!process.env.JWT_SECRET){
                res.status(500).json({success: false, message: 'Internal server error'});
            }
            
        } catch (error) {
            return next(error);
        }
    },
    logout: async (req, res, next) => {
        try {
            
        } catch (error) {
            return next(error);
        }
    },
    verifyToken: async (req, res, next) => {
        try {
            
        } catch (error) {
            return next(error);
        }
    
    },
    refreshToken: async (req, res, next) => {
        try {
            
        } catch (error) {
            return next(error);
        }
    },
}

