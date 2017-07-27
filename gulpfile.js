var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
colorFunc = require('postcss-color-function'),
browserSync = require('browser-sync');

gulp.task('default', () => {
  watch('./*.html', () => {
    browserSync.reload();
    console.log('HTML changed, browser-sync reload');
  });
});

gulp.task('watch', () => {
  watch('./*.html', () => {
    browserSync.reload();
    console.log('HTML changed, browser-sync reload');
  });

  watch('./src/*.css', () => {
    gulp.start('cssInject');
  });

  browserSync.init({
    server: './'

  });
});

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./src.css')
  .pipe(browserSync.stream());
});

gulp.task('styles', () => {
  return gulp.src('./src/src.css')
  .pipe(postcss([cssImport, cssvars, colorFunc, nested]))
  .on('error', (err) => {
    console.log(err.toString());
    this.emit('end');
  }).pipe(gulp.dest('./'));
});
