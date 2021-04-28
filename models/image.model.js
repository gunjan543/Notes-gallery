const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
      },
    userId:{
        type:String,
        trim:true,
        required:true
    }  ,
    role:{
        type: String,
        trim: true,
        required: true
    }  ,
    year:{
        type: String,
        trim: true,
        required: true
    },
    type:
    {
        type: String,
        trim: true,
        required: true
    },
    subject:{
        type: String,
        trim: true,
        required: true
    },
    unit:{
        type: String,
        trim: true,
        required: true
    },
    semester:{
        type: String,
        trim: true,
        required: true
    },
    branch:{
        type: String,
        trim: true,
        required: true
    },
    filename: {
        required: true,
        type: String,
    },
    fileId: {
        required: true,
        type: String,
    },
    createdAt: {
        default: Date.now(),
        type: Date,
    },
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;