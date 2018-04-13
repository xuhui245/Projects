var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

// Test Task
gulp.task('test', function(){
	console.log('Testing Task Ran...');
});

// Minify JavaScript
gulp.task('minifyjs', function(){
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// Compile Sass
gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

// JShint
gulp.task('hint', function(){
	return gulp.src('src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Default Task
gulp.task('default', ['minifyjs', 'sass', 'hint']);