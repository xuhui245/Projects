var mongoose = require('mongoose');

var MovieSchema = mongoose.schema({

	title:{
		type: String
	},
	plot: {
		type: String
	},
	cover: {
		type: String
	},
	genre: {
		type: String
	},
	actors: {
		type: Array
	},
	releaseDate: {
		type: Date
	}
});

var Movie = module.exports = mongoose.model('Movie', MovieSchema);

module.exports.getMovies = function(callback, limit){
   Movie.find(callback).limit(limit);
};
