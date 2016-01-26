// Gulpfile!

var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var jshint = require( 'gulp-jshint' );
var sass = require( 'gulp-sass' );
var sourcemaps = require( 'gulp-sourcemaps' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );

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
	gulp.watch( 'source/javascript/**/*.js', [ 'jshint', 'build-js' ] );
	gulp.watch( 'source/scss/**/*.scss', [ 'build-css' ] );
});

gulp.task( 'jshint', function() {
	return gulp.src( 'source/javascript/**/*.js' )
		.pipe( jshint() )
		.pipe( jshint.reporter( 'jshint-stylish' ) )
		;
});

gulp.task( 'build-js', function() {
	return gulp.src( 'source/javascript/**/*.js' )
		.pipe( sourcemaps.init() )
			.pipe( concat( 'bundle.js' ) )
			.pipe( gutil.env.type == 'production' ? uglify() : gutil.noop() )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( gulp.dest( 'public/assets/javascript' ) )
		;
});

gulp.task( 'build-css', function() {
	return gulp.src( 'source/scss/**/*.scss' )
		.pipe( sourcemaps.init() )
			.pipe( sass() )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( gulp.dest( 'public/assets/stylesheets' ) )
		;
});
