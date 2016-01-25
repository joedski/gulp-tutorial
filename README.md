Gulp Tutorial
=============

This is the result of stepping through [the Tutorial about Gulp from Scotch.io][scotch.io tutorial].

[scotch.io tutorial]: https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js



Steps
-----

I followed the steps, tagging them as I went for easy playback.  All step tags are in the form of `step-{n}`, so `step-1`, `step-2`, etc.

1. __Initial Install:__ Ran the following commands:
	- `npm init` and filled in some defaulty bits.
	- `npm install -g gulp` to install Gulp globally because I didn't have it just yet.
	- `npm install --save-dev gulp` to install Gulp also as a dev dependency.
		- While technically not necessary if you've installed Gulp globally, this still allows anyone to pull down the project and just run `npm install --dev` and then run whatever npm script you have set to build it.
	- Note: A bunch of empty files were stubbed in for later.
2. __Initial gulpfile:__ Added a task that tells you you've done it.
	- A task named `default` is added, which simply logs the message "Gulp is running!"
	- To test this, the command `gulp` is executed in the current directory.
3. __Exploring Gulp Tasks:__ Building up Tasks using the basic Gulp functions of `gulp.task`, `gulp.src`, `gulp.dest`, and `gulp.watch`.
	- Gulp task `copy`: Piping a `gulp.src` call straight into `gulp.dest`.
		- Copies the HTML files right in `source/` into `public/`.
	- Gulp task `watch`: Running a certain task or function whenever files matching a blob change by using `gulp.watch`.
		- In this case, created two watches, one which watchs all the JS files, and one which watches all the SCSS files.  Changing any of either of those two will call the respective task or function.
		- Just as an initial test, the optional options object was omitted.
4. __Actually Useful Tasks:__ Running `jshint` on save.
	- The Gulp wrapper for JSHint is installed by running `npm install --save-dev gulp-jshint jshint-stylish`.
		- Note: `jshint` was installed locally in this run through, but that project recommends you install `jshint` globally rather than just locally.
	- the `default` task is rewritten to `watch`, while `watch` itself watches all the files matching `source/javascript/**/*.js` and piping them into jshint.
	- Notice of course that changing any JS file runs the `jshint` task on all matched files!
	- Also notice that the glob is copied in both places.  The glob could be different, though I'm not sure why you'd do that.
	- Lastly, notice that just starting a watch doesn't do an initial run of the task that the watch triggers; that task is only run after a watched file changes!
