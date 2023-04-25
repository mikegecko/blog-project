const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
//GET most recent post
router.get('/', postController.getAllPosts);

module.exports = router;