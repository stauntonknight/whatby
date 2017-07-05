var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var stylus = require('stylus');
var inlineNg2Template = require('gulp-inline-ng2-template');
var browserify = require('browserify')
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var streamify = require('gulp-streamify')
var clean = require('gulp-clean');
var source = require('vinyl-source-stream')

var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
  var tsResult = tsProject.src().pipe(inlineNg2Template({
    'base': 'src/app',
    'styleProcessor': (path, extension, file, callback) => {
      callback(null, stylus.render(file));
    }
  })).pipe(tsProject());
  return tsResult.pipe(gulp.dest('build'));
});

gulp.task('browserify', ['build'], () => {
  var stream = browserify('build/src/main.js').bundle();
  stream
      .pipe(source('main.js'))
      .pipe(streamify(uglify()))
      .on('error', (err) => { console.log(err);})
      .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
  gulp.src('build', {read:false}).pipe(clean());
  gulp.src('dist', {read:false}).pipe(clean());
});

gulp.task('compile', ['browserify'], () => {
  console.log('done');
});

gulp.task('watch', () => {
  return watch([
    "*.ts", "**/*.ts", "*.html", "**/*.html", "**/*.css", "**/*.styl",
    "!./node_modules"],
    () => gulp.start('compile'));
});
