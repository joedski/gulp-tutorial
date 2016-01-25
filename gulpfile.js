// Gulpfile!

var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var jshint = require( 'gulp-jshint' );

// Set up a simple default task.
// The default task is run whenever the dev executes `gulp` in the project directory.
// Note how gulp.task can also be called with just an array of other tasks to run.
gulp.task( 'default', [ 'watch' ]);

// Copies any HTML files directly in source/ into public/.
gulp.task( 'copy', function() {
	gulp.src( 'source/*.html' )
		.pipe( gulp.dest( 'public' ) )
		;
});

// Run another task or a function when a javascript file changes.
gulp.task( 'watch', function() {
	gulp.watch( 'source/javascript/**/*.js', [ 'jshint' ] );
	// gulp.watch( 'source/scss/**/*.scss', function shoutStyle() {
	// 	gutil.log( 'A style file changed!' );
	// });
});

gulp.task( 'jshint', function() {
	return gulp.src( 'source/javascript/**/*.js' )
		// Note the __call__ to the required jshint function.
		.pipe( jshint() )
		.pipe( jshint.reporter( 'jshint-stylish' ) )
		;
});
