const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// GET all posts
//TODO: Protect this route
router.get('/', postController.getAllPosts);

//GET most recent posts
//TODO: Protect this route
router.get('/recent', postController.getRecentPosts);

//GET most recent published posts
router.get('/recentpublished', postController.getRecentPublishedPosts);

//GET all published posts
router.get('/allpublished', postController.getAllPublishedPosts);

//GET a single post
//TODO: Protect this route
router.get('/:id', postController.getPostById);

//Create a new post
//TODO: Protect this route
router.post('/new', postController.createPost);

//Update a post
//TODO: Protect this route
router.put('/:id', postController.updatePost);

//Delete a post
//TODO: Protect this route
router.delete('/:id', postController.deletePost);


module.exports = router;