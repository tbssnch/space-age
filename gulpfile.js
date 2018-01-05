var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;

gulp.task('concatInterface', function() {
  return gulp.src(['./src/js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'] function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function() {
  return gulp.src('./dist/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', function() {
  if(buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
