const asyncMiddleware = require('../middleware/async');
const {Post, validate} = require('../models/post'); 
const { User } = require('../models/user');
const { Comment } = require('../models/comment');
const express = require('express');
const router = express.Router();


// Get all blog Post
router.get('/', asyncMiddleware(async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
}));


//Get blog Post with Pagination
router.get('/paginate', asyncMiddleware(async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const skipIndex = (page - 1) * limit;

  const paginatePosts = await Post.find()
      .sort({_id: 1})
      .limit(limit)
      .skip(skipIndex)
      .exec();
  res.send(paginatePosts);
}));


// Get post by ID
router.get('/:id', asyncMiddleware(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (!post) return res.status(404).send('The Post with the given ID was not found.');

  res.send(post);
}));


// create blog Post
router.post('/', asyncMiddleware(async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findById(req.body.userId);
  if (!user) return res.status(400).send('Invalid userId.');

  let post = new Post({
    user: {
      _id: user._id,
      name: user.name
    },  
    title: req.body.title,
    img: req.body.img,
    desc: req.body.desc
  });
  await post.save();
  
  res.send(post);
}));


// Update blog Post
router.put('/:id', asyncMiddleware(async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findById(req.body.userId);
  if (!user) return res.status(400).send('Invalid userId.');

  const post = await Post.findByIdAndUpdate(req.params.id,{ 
        user: {
          _id: user._id,
          name: user.name
        }, 
        title: req.body.title,
        img: req.body.img,
        desc: req.body.desc,
    }, { new: true });

  if (!post) return res.status(404).send('The post with the given ID was not found.');
  
  res.send(post);
}));

// Delete blog Post
router.delete('/:id', asyncMiddleware(async (req, res) => {

  const post = await Post.findByIdAndRemove(req.params.id);

  await Comment.remove({post: req.params.id})
    
  if (!post) return res.status(404).send('The post with the given ID was not found.');
  
  res.send(post);
}));


// Like blog post
router.put('/:id/like', asyncMiddleware(async (req, res) => {
  
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).send('The post has been liked');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json('The post has been disliked');
    }
}));



module.exports = router; 