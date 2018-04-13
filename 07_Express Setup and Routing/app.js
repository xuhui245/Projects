var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var port=3000;

var app = express();

app.use(function(req,res,next){
    
    next();
});

app.use(bodyparser.json());  //middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.send('Hello world');
})

app.get('/about', function(req, res){
    res.send('About page');
})

app.listen(port);
console.log("Port: " + port);
module.exports = app;