// Gulpfile!

var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );

// Set up a simple default task.
// The default task is run whenever the dev executes `gulp` in the project directory.
gulp.task( 'default', function() {
	return gutil.log( 'Gulp is running!' );
});
