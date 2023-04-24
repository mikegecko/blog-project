const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post',
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    likes: { type:  Number, default: 0 },
});