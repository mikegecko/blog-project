const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

// GET comments by post id
router.get('/:postId/comments', commentController.getCommentsByPostId);

// POST comment
router.post('/:postId/comments', commentController.createComment);

// Update comment
router.put('/:postId/comments/:id', commentController.updateComment);

// Delete comment
router.delete('/:postId/comments/:id', commentController.deleteComment);

module.exports = router;