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
            const hash = await bcrypt.hash(req.body.password, saltRounds);
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
            const saltRounds = 10;
            const hash = await bcrypt.hash(req.body.password, saltRounds);
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                ...req.body,
                password: hash,
            });
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
            const user = await User.findOne({username});
            if(!username || !password){
                res.status(401).json({success: false, message: 'Please provide username and password'});
            }
            if(!process.env.JWT_SECRET){
                res.status(500).json({success: false, message: 'Internal server error'});
            }
            if(!user){
                res.status(401).json({success: false, message: 'User not found'});
            }
            if(user && bcrypt.compareSync(password, user.password)){
                const token = jwt.sign({
                    id: user._id,
                    username: user.username,
                    isAdmin: user.isAdmin,
                    email: user.email,
                    name:  user.name,
                    date:  user.date,
                }, process.env.JWT_SECRET, {expiresIn: '1h'});
                res.json({success: true, uid:user._id, username: user.username, isAdmin: user.isAdmin, message: 'User logged in', token});
            }
            else{
                res.status(401).json({success: false, message: 'Incorrect username or password'});
            }
        } catch (error) {
            return next(error);
        }
    },
    logout: async (req, res, next) => {
        try {
            //Destroy the token
            res.json({success: true, message: 'User logged out'});
        } catch (error) {
            return next(error);
        }
    },
    verifyToken: async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if(!authHeader){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const token = authHeader.split(' ')[1];
            if(!process.env.JWT_SECRET){
                res.status(500).json({success: false, message: 'Internal server error'});
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(!decoded){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const user = await User.findById(decoded.id);
            if(!user){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            req.user = user;
            res.json({success: true, message: 'User verified'});
            
        } catch (error) {
            return next(error);
        }
    },
    verifyTokenInternal: async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if(!authHeader){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const token = authHeader.split(' ')[1];
            if(!process.env.JWT_SECRET){
                res.status(500).json({success: false, message: 'Internal server error'});
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(!decoded){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const user = await User.findById(decoded.id);
            if(!user){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            req.user = user;
            return next();
            
        } catch (error) {
            return next(error);
        }
    },
    verifyTokenAdmin: async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if(!authHeader){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const token = authHeader.split(' ')[1];
            if(!process.env.JWT_SECRET){
                res.status(500).json({success: false, message: 'Internal server error'});
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(!decoded){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            if(decoded.isAdmin === false){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const user = await User.findById(decoded.id);
            if(!user){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            req.user = user;
            res.json({success: true, message: 'User verified as admin'});
            
        } catch (error) {
            return next(error);
        }
    },
    verifyTokenAdminInternal: async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if(!authHeader){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const token = authHeader.split(' ')[1];
            if(!process.env.JWT_SECRET){
                res.status(500).json({success: false, message: 'Internal server error'});
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(!decoded){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            if(decoded.isAdmin === false){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const user = await User.findById(decoded.id);
            if(!user){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            req.user = user;
            return next();
            
        } catch (error) {
            return next(error);
        }
    },
    refreshToken: async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if(!authHeader){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const token = authHeader.split(' ')[1];
            if(!process.env.JWT_SECRET){
                res.status(500).json({success: false, message: 'Internal server error'});
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(!decoded){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const user = await User.findById(decoded.id);
            if(!user){
                res.status(401).json({success: false, message: 'Unauthorized'});
            }
            const newToken = jwt.sign({
                id: user._id,
                username: user.username,
            }, process.env.JWT_SECRET, {expiresIn: '1h'});
            res.json({success: true, message: 'Token refreshed', token: newToken});
        }
         catch (error) {
            return next(error);
        }
    },
}

