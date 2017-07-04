var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var stylus = require('stylus');
var inlineNg2Template = require('gulp-inline-ng2-template');
var browserify = require('gulp-browserify');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function() {
  var tsResult = tsProject.src().pipe(inlineNg2Template({
    'base': 'src/app',
    'styleProcessor': (path, extension, file, callback) => {
      callback(null, stylus.render(file));
    }
  })).pipe(tsProject());
  return tsResult.pipe(gulp.dest('build'));
});

gulp.task('browserify', ['build'], () => {
  gulp.src('build/src/main.js').pipe(browserify({
    insertGlobals : true,
    debug : !gulp.env.production
  })).pipe(gulp.dest('dist'));
});


gulp.task('compile', ['browserify'], () => {
  console.log('done');
});

gulp.task('watch', function() {
  return watch([
    "*.ts", "**/*.ts", "*.html", "**/*.html", "**/*.css", "**/*.styl",
    "!./node_modules"],
    () => gulp.start('compile'));
});
