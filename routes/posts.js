const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// GET all posts
router.get('/',);

//GET a single post
router.get('/:id',);

//Create a new post
router.post('/',);

//Update a post
router.put('/:id',);

//Delete a post
router.delete('/:id',);

module.exports = router;