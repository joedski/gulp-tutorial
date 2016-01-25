// Gulpfile!

var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );

// Set up a simple default task.
// The default task is run whenever the dev executes `gulp` in the project directory.
gulp.task( 'default', function() {
	return gutil.log( 'Gulp is running!' );
});

// Copies any HTML files directly in source/ into public/.
gulp.task( 'copy', function() {
	gulp.src( 'source/*.html' )
		.pipe( gulp.dest( 'public' ) )
		;
});

// Run another task or a function when a javascript file changes.
gulp.task( 'watch', function() {
	gulp.watch( 'source/javascript/**/*.js', [ 'shout-js' ] );
	gulp.watch( 'source/scss/**/*.scss', function shoutStyle() {
		gutil.log( 'A style file changed!' );
	});
});

gulp.task( 'shout-js', function() {
	gutil.log( 'A script file changed!' );
});
