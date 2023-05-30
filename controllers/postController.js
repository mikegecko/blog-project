const Post = require('../models/Post');
const firebase = require('../utils/firebase');

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
        // TODO: Use firebase to upload image and save url to post
        const file = req.body.coverImage;
        try{
            const res = await firebase.uploadImageBase64(file, req.body.id);
            console.log(res);
        }catch(error){
            console.log(error);
        }
        //const newPost = new Post(req.body);
        //newPost.save().then((post) => res.json(post)).catch((err) => next(err));
    },
    updatePost: async (req, res, next) => {
        // TODO: Use firebase to upload image and delete old image then save url to post
        Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((post) => res.json(post)).catch((err) => next(err));
    },
    deletePost: async (req, res, next) => {
        // TODO: Use firebase to delete image in cloud storage
        Post.findByIdAndDelete(req.params.id).then((post) => res.json(post)).catch((err) => next(err));
    },
    getRecentPosts: async (req, res, next) => {
        try {
            const recentPosts = await Post.find({published: false}).sort({edited: -1}).limit(1).exec();
            res.json(recentPosts[0]);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getRecentPublishedPosts: async(req, res, next) => {
        try{
            const recentPublishedPost = await Post.find({published: true}).sort({publishDate: -1}).limit(1).exec();
            res.json(recentPublishedPost[0]);
        } catch(error){
            res.status(500).json(error)
        }
    },
    getAllPublishedPosts: async(req, res, next) => {
        try{
            const allPublishedPosts = await Post.find({published: true}).sort({publishDate: -1});
            res.json(allPublishedPosts);
        } catch(error){
            res.status(500).json(error);
        }
    },
};