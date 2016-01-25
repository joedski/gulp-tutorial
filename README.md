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
