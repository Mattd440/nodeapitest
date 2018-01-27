var mongoose = require('mongoose');
//sets to use default promise library
mongoose.Promise=global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://mattd440:Mmd44035@ds047612.mlab.com:47612/nodetodoapp81711');

module.exports = {
    mongoose
};