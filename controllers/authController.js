const User =  require('../models/user');

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
            const newUser = await new User(req.body).save();
            res.json(newUser);
        }catch(error){
            return next(error);
        }
    },
    updateUser: async (req, res, next) => {
        try {
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

