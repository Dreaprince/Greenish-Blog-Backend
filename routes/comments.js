const asyncMiddleware = require('../middleware/async');
const _ = require('lodash');
const { Post } = require('../models/post');
const {Comment, validate} = require('../models/comment');
const express = require('express');
const router = express.Router();




// Get all comment on all Post
router.get('/', asyncMiddleware(async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
}));

// Get all comment on a single Post
router.get('/post/:id', asyncMiddleware(async (req, res) => {
  const comments = await Comment.find({post: req.params.id});
  res.send(comments);
}));


// Get single comment on a post
router.get('/:id', asyncMiddleware(async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) return res.status(404).send('The comment with the given ID was not found.');

  res.send(comment);
}));


// Add comment to a post
router.post('/', asyncMiddleware(async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const post = await Post.findById(req.body.postId);
  if (!post) return res.status(400).send('Invalid post.');

  const comment = new Comment({
    post: {
      _id: post._id,
      title: post.title
    },
    name: req.body.name,
    commentBody: req.body.commentBody,
    likes: [],
    replies: []
  })
  
   await comment.save();
  
  res.send(comment);
}));


// Edit blog comment
router.put('/:id', asyncMiddleware(async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const post = await Post.findById(req.body.postId);
  if (!post) return res.status(400).send('Invalid post.');

  const comment = await Comment.findByIdAndUpdate(req.params.id,
    { 
      post: {
        _id: post._id,
        title: post.title
      },
      name: req.body.name,
      commentBody: req.body.commentBody,
      likes: [],
      replies: []
    }, { new: true });

  if (!comment) return res.status(404).send('You need to register before you can comment');
  
  res.send(comment);
}));


// Delete comment
router.delete('/:id', asyncMiddleware(async (req, res) => {
  const comment = await Comment.findByIdAndRemove(req.params.id);

  if (!comment) return res.status(403).send('not Allow');

  res.send(comment);
}));


module.exports = router; 