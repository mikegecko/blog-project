const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

// GET comments by post id
router.get('/:postId/comments',);

// POST comment
router.post('/:postId/comments',);

// Update comment
router.put('/:postId/comments/:id',);

// Delete comment
router.delete('/:postId/comments/:id',);

module.exports = router;