const Post = require('../models/Post');

module.exports = {
    getAllPosts: async (req, res, next) => {
        Post.find().then((posts) => res.json(posts)).catch((err) => res.json(err));
    },
    getPostById: async (req, res, next) => {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) {
                return res.status(404).json({
                    message: 'Post not found',
                });
            };
            res.json(post);
        } catch (error) {
            return next(error);
        }
    },
    createPost: async (req, res, next) => {
        const newPost = new Post(req.body);
        newPost.save().then((post) => res.json(post)).catch((err) => next(err));
    },
    updatePost: async (req, res, next) => {
        Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((post) => res.json(post)).catch((err) => next(err));
    },
    deletePost: async (req, res, next) => {
        Post.findByIdAndDelete(req.params.id).then((post) => res.json(post)).catch((err) => next(err));
    },
};