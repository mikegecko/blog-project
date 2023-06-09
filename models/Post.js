const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    topic:{
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
        required: true,
    },
    edited: {
        type: Date,
        default: Date.now,
        required: false,
    },
    publishDate: {
        type: Date,
        default: Date.now,
        required: false,
    },
    coverImage:{
        type: String,
        required: false,
    },
    likes: { type:  Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment'}],
    published: { type: Boolean, default: false },
}, {collection: 'posts'});

module.exports = mongoose.model('post', PostSchema);