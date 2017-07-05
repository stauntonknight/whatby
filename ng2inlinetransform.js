var ng2TemplateParser = require('gulp-inline-ng2-template/parser');
var through = require('through2');
var stylus = require('stylus');
 
var options = {target: 'es5', base:'src/app'};

module.exports = function (file) {
  return through(function (buf, enc, next) {
    ng2TemplateParser({
      'contents': buf,
      'path': file,
      'styleProcessor': (path, extension, file, callback) => {
        callback(null, stylus.render(file));
      }
    }, options)(
      (err, result) => {
        this.push(result);
        process.nextTick(next);
      });
  });
}
