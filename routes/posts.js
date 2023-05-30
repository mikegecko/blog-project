const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// GET all posts
router.get('/', postController.getAllPosts);

//GET most recent posts
router.get('/recent', postController.getRecentPosts);

//GET most recent published posts

router.get('/recentpublished', postController.getRecentPublishedPosts);

//GET all published posts
router.get('/allpublished', postController.getAllPublishedPosts);

//GET a single post
router.get('/:id', postController.getPostById);

//Create a new post
router.post('/new', postController.createPost);

//Update a post
router.put('/:id', postController.updatePost);

//Delete a post
router.delete('/:id', postController.deletePost);


module.exports = router;