var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{
        type:String,
        required:true,
        minlength:5,
        trim:true,
        maxlength:50
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});
module.exports = {Todo};