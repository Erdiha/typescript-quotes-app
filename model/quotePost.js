const express = require('express');
const router = express.Router();
const  mongoose = require('mongoose');

const Schema = mongoose.Schema;
const QuotePostSchema = new Schema({
    user:{type: 'string', required: true},
    quote:{type: 'string', required: true},
});
const QuotePost = mongoose.model('QuotePost',QuotePostSchema);
module.exports = QuotePost;

