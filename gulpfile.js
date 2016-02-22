var gulp       = require('gulp');
var concat     = require('gulp-concat');
var del        = require('del');
var filelog    = require('gulp-filelog');
var uglify     = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

//require('require-dir')('./gulps/');


var jsSrc     = ['app/src/**/*.module.js', 'app/src/**/*.js'];
var indexSrc  = ['app/src/index.html'];
var destDir   = 'app/dist/';
var jsVendors = [
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-animate/angular-animate.js',
  'app/bower_components/angular-aria/angular-aria.js',
  'app/bower_components/angular-messages/angular-messages.js',
  'app/bower_components/angular-material/angular-material.js',
  'app/bower_components/lodash/dist/lodash.js'
];

gulp.task('default', ['clean', 'build']);

gulp.task('build', ['js', 'index.html']);

gulp.task('js', function () {
  gulp
    .src(jsVendors.concat(jsSrc))
    .pipe(filelog())
    .pipe(ngAnnotate())
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(filelog())
    .pipe(gulp.dest(destDir));
});

gulp.task('index.html', function () {
  gulp
    .src(indexSrc)
    .pipe(gulp.dest(destDir));
});

gulp.task('clean', function () {
  //del([destDir + "**"]);
});


gulp.on('err', handleError);

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}