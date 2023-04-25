const Post = require('../models/Post');

module.exports = {
    getAllPosts: async (req, res) => {
        Post.find().then((posts) => res.json(posts)).catch((err) => res.json(err));
    },
    getPostById: async (req, res) => {
        Post.findById(req.params.id).exec((err, post) => {
            if(err){
                return next(err);
            }
            if(!post){
                return res.status(404).json({
                    message: "Post not found",
                });
            }
            res.json(post);
        })
    },
    createPost: async (req, res) => {
        const newPost = new Post(req.body);
        newPost.save().then((post) => res.json(post)).catch((err) => next(err));
    },
    updatePost: async (req, res) => {
        Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((post) => res.json(post)).catch((err) => next(err));
    },
    deletePost: async (req, res) => {
        Post.findByIdAndDelete(req.params.id).then((post) => res.json(post)).catch((err) => next(err));
    },
};