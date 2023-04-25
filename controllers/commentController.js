const Comment = require('../models/comment');

module.exports = {
    getCommentsByPostId: async (req, res, next) => {
        try{
            const comments = await Comment.find({postId: req.params.postId});
            res.json(comments);
        }
        catch(err){
            return next(err);
        }
    },
    getAllComments: async (req, res, next) => {
        try {
            const comments  = await Comment.find();
            res.json(comments);
        } catch (error) {
            return next(error);
        }
    },
    getCommentById: async (req, res, next) => {
        try {
            const comment = await Comment.findById(req.params.id);
        } catch (error) {
            return next(error);
        }
    },
    createComment: async (req, res, next) => {
        try {
            const comment = await new Comment(req.body).save();
            res.json(comment);
        } catch (error) {
            return next(error);
        }
    },
    updateComment: async (req, res, next) => {
        try {
            const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json(comment);
        } catch (error) {
            return next(error);
        }
    },
    deleteComment: async (req, res, next) => {
        try {
            const comment = await Comment.findByIdAndDelete(req.params.id);
            res.json(comment);
        } catch (error) {
            return next(error);
        }
    }
};

