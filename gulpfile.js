/*function defaultTask(cb) {
  // place code for your default task here
  cb();
}
exports.default = defaultTask


*/
var gulp = require('gulp'); 
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function(done){
    return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    done();
});

gulp.task('watch', function(done){
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
    done(); 
});

gulp.task('browserSync', function(done) {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  });
  done(); 
});