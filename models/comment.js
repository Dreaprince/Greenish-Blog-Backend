const Joi = require('joi');
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  commentBody: {
    type: String,
    required: true,
    maxlength: 250
  },
  likes: {
    type: Array,
    default: []
 },
 replies: [
  {
      body: {
          type: String,
          required: true,
      },
      name: {
          type: String,
          required: true
      }
  }
]
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

const validateComment = (comment) => {
  const schema = Joi.object({
      postId: Joi.objectId().required(),
      name: Joi.string().min(5).max(60).required(),
      commentBody: Joi.string().max(250).required(),
      likes: Joi.array(),
      replies: Joi.array()
  });
  return schema.validate(comment);
}

exports.Comment = Comment; 
exports.validate = validateComment;
