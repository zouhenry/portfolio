var gulp       = require('gulp');
var concat     = require('gulp-concat');
var del        = require('del');
var filelog    = require('gulp-filelog');
var uglify     = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var sass       = require('gulp-sass');
var size       = require('gulp-size');
var jade       = require('gulp-jade');

var jsSrc    = ['app/src/**/*.module.js', 'app/src/**/*.js'];
var indexSrc = ['app/src/index.html'];
var jadeSrc  = ['app/src/*.jade','app/src/**/*.jade'];
var sassSrc  = ['app/src/assets/app.scss'];

var destDir   = 'app/dist/';
var jsVendors = [
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-animate/angular-animate.js',
  'app/bower_components/angular-aria/angular-aria.js',
  'app/bower_components/angular-messages/angular-messages.js',
  'app/bower_components/angular-material/angular-material.js',
  'app/bower_components/angular-ui-router/release/angular-ui-router.js',
  'app/bower_components/lodash/dist/lodash.js'
];

gulp.task('default', ['clean', 'build']);

gulp.task('build', ['js', 'scss', 'jade', 'watch']);

gulp.task('js', function () {
  gulp
    .src(jsVendors.concat(jsSrc))
    .pipe(filelog())
    .pipe(ngAnnotate())
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(filelog())
    .pipe(gulp.dest(destDir))
    .pipe(size());
});

gulp.task('scss', function () {
  gulp
    .src(sassSrc)
    .pipe(filelog())
    .pipe(sass({ errLogToConsole: true }))
    .on('error', handleError)
    //.pipe(gulp.dest('./tmp/'))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(destDir))
    .pipe(size());
});

gulp.task('jade', function () {
  gulp
    .src(jadeSrc)
    .pipe(jade())
    .pipe(filelog())
    .pipe(gulp.dest(destDir));
});

gulp.task('index.html', function () {
  gulp
    .src(indexSrc)
    .pipe(gulp.dest(destDir));
});

gulp.task('clean', function () {
  del([destDir + "**"]);
});

gulp.task('watch', function () {
  gulp.watch(jsSrc, ['js']);
  gulp.watch(jadeSrc, ['jade']);
  gulp.watch(sassSrc, ['sass']);
});

gulp.on('err', handleError);

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}