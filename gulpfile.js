var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./src/*.ts')
    .pipe(concat('eScript.d.ts'))
    .pipe(gulp.dest('./dist/'));
});