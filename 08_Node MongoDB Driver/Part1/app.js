const MongoClient = require('mongodb').MongoClient;

//Connection URL
const url="mongodb://localhost:27017/myproject";

//Connect
MongoClient.connect(url, function(err,db){
    
    if(err){
        return console.dir(err);
    }
    console.log('Connected to mongodb');
    
   /*InsertDocument(db,function(){
      db.close(); 
   });*/
    
    FindDocuments(db,function(){
        db.close();
    });
});

const InsertDocument = function(db, callback){
    
    //Get Collection
    const collection = db.collection('users');
    //Insert
    collection.insert({
        name: 'Brad Traversy',
		email: 'brad@test.com'
    }, function(err,result){
        if(err){
            return console.dir(err);
        }
        console.log("Insert Successfully");
        console.log(result);
        callback(result);
    });
}

const FindDocuments = function(db, callback){
    
    var collection = db.collection('users');
    collection.find({}).toArray(function(err, result){
        if(err){
            console.dir(err);
        }
        console.log(result);
        console.log(result.length);
        callback(result);
    });
}