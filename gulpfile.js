var gulp = require("gulp");
var sass = require("gulp-sass");
var jade = require("gulp-jade");
var livereload = require("gulp-livereload");
var nodemon = require("gulp-nodemon");

//Scripts
gulp.task("scripts", function()
{
	gulp.src("src/js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(livereload());
});

//Sass
gulp.task("sass", function()
{
	gulp.src("src/sass/*.sass")
	.pipe(sass({indentedSyntax: true, errLogToConsole: true}))
	.pipe(gulp.dest("dist/css"))
	.pipe(livereload());
});

//Jade
gulp.task("jade", function()
{
	gulp.src("src/jade/*.jade")
	.pipe(jade({pretty: true}))//pretty: true will not minify the output
	.pipe(gulp.dest("dist"))
	.pipe(livereload());
});

//Watchers
gulp.task("watch", function()
{
	gulp.watch("src/js/*.js", ["scripts"]);
	gulp.watch("src/sass/*.sass", ["sass"]);
	gulp.watch("src/jade/*.jade", ["jade"]);
	livereload.listen();
	gulp.watch(['dist/**']).on('change', livereload.changed);
});

//Start
gulp.task("start", function()
{
	nodemon(
	{
		script: 'app.js'
	});
});

//Default task
gulp.task("default", ["scripts", "sass", "jade", "watch", "start"]);