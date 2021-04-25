const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema(
    {
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
        document:{
            type: String,
            trim: true,
            required: true
        },
        other:{
            type: String,
            trim: true,
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
        }
    }
)
module.exports = mongoose.model('Note', NotesSchema);