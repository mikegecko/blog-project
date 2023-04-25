const User =  require('../models/user');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            
        } catch (error) {
            return next(error);
        }
    },
    getUserById: async (req, res, next) => {
        try {
            
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
            
        } catch (error) {
            return next(error);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            
        } catch (error) {
            return next(error);
        }
    },
    login: async (req, res, next) => {},
    logout: async (req, res, next) => {},
    verifyToken: async (req, res, next) => {},
    refreshToken: async (req, res, next) => {},
}

