const Joi = require('joi');
const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    user: { 
        type: new mongoose.Schema({
          name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
          }   
        }),  
        required: true
      },
     title: {
         type: String,
         required: true,
         minlength: 5,
         maxlength: 250
     },
     img: {
       type: String
     },
     desc: {
        type: String,
        required: true,
        maxlength: 250
    },
    likes: {
       type: Array,
       default: []
    }
}, {
    timestamps: true
});


const Post = mongoose.model('Post', postSchema);


const validatePost = (post) => {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        title: Joi.string().min(5).max(250).required(),
        img: Joi.string().required(),
        desc: Joi.string().max(250).required(),
        likes: Joi.array(),
        comment: Joi.array()
    })
      return schema.validate(post);
}

exports.Post = Post;
exports.validate = validatePost;
