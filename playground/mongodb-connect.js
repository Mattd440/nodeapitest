const {MongoClient, ObjectID} = require('mongodb');
var ob = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, db)=>{
    if(err){
        return console.log('Unable to Connect to MongoDb Server');
    }

    console.log('Connected to MongoDb Server');
    const users = db.db('ToDoApp').collection('Users');
    users.insertOne({
       name:'matt',
       age:29
    });
    users.updateOne({name:'matt'},{
        $inc: {age:1}
    });
    users.find({name:'matt'}).toArray().then((data)=> console.log(data));
    const coll = db.db('ToDoApp').collection('Todos');

    //Query Data
    // coll.find({completed:false,text:'shit'}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }).catch((err)=>{
    //     console.log(err.stack())
    // });

    //Delete Data
    // coll.findOneAndDelete({text:'shitty titty'}).then((doc) =>{
    //     console.log(doc)
    // });

    // //Update Data
    // coll.findOneAndUpdate({text:'titty'},{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //    console.log(result);
    // });

    // Insert Data
    // coll.insertOne({
    //     text:'Some words bitch',
    //     completed: false
    // }).then((result)=>{
    //
    //     console.log(JSON.stringify(result.ops, undefined,2));
    //     })
    //     .catch((err)=>{
    //      console.log('Unable to insert todo');
    //
    // });
    //
    // coll.insertMany([
    //     {
    //         text:'shitty titty',
    //         completed:false
    //     },
    //     {
    //         text:'titty',
    //         completed:false
    //     },
    //     {
    //         text:'shitty',
    //         completed:true
    //     }
    // ]).then((res)=>{
    //     console.log(res.ops);
    //     //console.log(res.ops[0]._id.getTimestamp())
    //     console.log(ob);
    // }).catch((err)=>{
    //     console.log(err.st);
    // });

    db.close()
});