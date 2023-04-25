const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    likes: { type:  Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment'}],
    published: { type: Boolean, default: false },
}, {collection: 'posts'});

module.exports = mongoose.model('post', PostSchema);