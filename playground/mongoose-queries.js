const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {ObjectId} = require('mongodb');
var id = "5a6bbb74a8006429e409d4fc" ;
var badid ="5a6bbb74a8006429e409d4fc11";

if(!ObjectId.isValid(badid)){
    console.log('ID not valid');
}


// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos: ' + todos);
// });
//
// Todo.findOne({_id:id}).then((todo)=>{
//    console.log('todo: ' +  todo) ;
// });

Todo.findById(badid).then((todobyid) => {
    console.log('todobyid:' + todobyid);
}).catch((err)=>{
    console.log(err);
});