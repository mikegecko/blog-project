const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// GET all posts
router.get('/', postController.getAllPosts);

//GET a single post
router.get('/:id', postController.getPostById);

//Create a new post
router.post('/', postController.createPost);

//Update a post
router.put('/:id', postController.updatePost);

//Delete a post
router.delete('/:id', postController.deletePost);

module.exports = router;