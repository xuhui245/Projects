const MongoClient = require('mongodb').MongoClient;

//Define URL
const url = "mongodb://localhost:27017/myproject";

MongoClient.connect(url, function(err, db){
    
    if(err){
        console.dir(err);
    }
    console.log("connect successfully!");
    
  /*  QueryDocument(db, function(){
        db.close();
    })*/
     /*UpdateDocument(db,function(){
         db.close();
     })*/
    DeleteDocument(db,function(){
        db.close();
    })
});


//Query 
const QueryDocument = function(db, callback){
    
    const collection = db.collection('users');
    collection.find({'name':'Brad Traversy'}).toArray(function(err,doc){
        if(err){
            console.dir(err);
        }
        console.log(doc);
        callback(doc);
    });
}

//UpdateOne
const UpdateDocument = function(db, callback){
    
    const collection = db.collection('users');
    collection.updateOne({name:'Brad Traversy'},
                         {$set:{email:'text@something.com'}},
                         function(err,result){
        if(err){
            console.dir(err);
        }
        console.log("update successfully");
        callback(result);
    });
}

const DeleteDocument = function(db,callback){
    
    const collection = db.collection('users');
    collection.deleteOne({name:'Brad Traversy'},function(err,result){
        if(err){
            console.dir(err);
        }
        console.log("Delete Successfully");
        callback(result);
    })
}

