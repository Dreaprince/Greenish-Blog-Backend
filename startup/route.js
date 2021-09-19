const error = require('../middleware/error');
const comments = require('../routes/comments');
const posts = require('../routes/posts');
const users = require('../routes/users');
const express = require('express');


module.exports = function(app) {
    app.use(express.json());
    app.use('/api/posts', posts);
    app.use('/api/users', users);
    app.use('/api/comments', comments);
    app.use(error);
    
}