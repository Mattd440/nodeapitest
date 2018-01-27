var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

//POST
app.post('/todos',(req,res) => {
   var todo = new Todo({
       text :req.body.text,
       completed:req.body.completed,
       completedAt:req.body.completedAt
   });

   todo.save().then((doc)=>{
       res.send(doc);
   }).catch((err)=>{
       res.status(400).send(err);
   });
});

//GET
app.get('/todos',(req,res) =>{
    Todo.find().then((todos) => {
        res.send({todos})
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id.toString();

    if(!ObjectID.isValid(id)){
        res.status(404).send();
    }


    Todo.findById(id).then((todo)=>{
        if(!todo){
            res.status(404).send();
        }
        //console.log(todo);
        res.send({todo});
    }).catch((err)=>{
        //console.log(err);
    });

});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log( `running on port ${port}`);
});



module.exports = {app};






//
// var newTodo = new Todo({text:'Poopy', completed:true});
// newTodo.save().then((doc)=>{
//     console.log('Saved TOdo' + doc);
// }).catch((err)=>{
//     console.log(err.stack);
// });