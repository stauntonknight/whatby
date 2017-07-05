var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var inlineNg2Template = require('gulp-inline-ng2-template');
var browserify = require('browserify')
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var streamify = require('gulp-streamify')
var clean = require('gulp-clean');
var source = require('vinyl-source-stream')
var util = require('gulp-util');
var tsify = require('tsify');


gulp.task('browserify', () => {
  var stream = browserify({
    entries: 'src/main.ts',
    debug: !util.env.production
  })
    .plugin(tsify, {target : 'es5'})
    .transform('./ng2inlinetransform')
    .bundle();
  var src = stream.pipe(source('client.js'));
  if (util.env.production) {
    src = src.pipe(streamify(uglify()));
  } else {
    src = src
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
  }
  src.pipe(gulp.dest('dist/'));
});

gulp.task('clean', () => {
  gulp.src('dist', {read:false}).pipe(clean());
});

gulp.task('build:server', () => {
  var tsProject = ts.createProject('tsconfig.json');
  var tsResult = gulp.src('server.ts').pipe(ts({
    noImplicitAny: true,
    skipLibCheck: true
  })).pipe(gulp.dest('dist'));
});

gulp.task('compile', ['browserify', 'build:server'], () => {
  console.log('done');
});

gulp.task('watch', () => {
  return watch([
    "*.ts", "**/*.ts", "*.html", "**/*.html", "**/*.css", "**/*.styl",
    "!./node_modules"],
    () => gulp.start('compile'));
});
