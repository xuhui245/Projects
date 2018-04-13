var express = require('express');
var router = express.router();

var Movies = require('../models/Movie');

router.get('/',function(req, res, next){
   Movies.getMovies(function(err,movies){
   	if(err){
   		res.send(err);
   	}
       res.json(movies);
   },10);
});

module.export = router;