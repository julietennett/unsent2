var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('site/scss/main.scss') // Get source files with gulp.src
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('site/css')) // Outputs the file in the destination folder
});

// Gulp watch
gulp.task('watch', function(){
  gulp.watch('site/scss/**/*.scss', ['sass']);
})
