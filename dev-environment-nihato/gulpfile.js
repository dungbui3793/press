var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require ('browser-sync').create();
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
gulp.task('sass',function(){
    return gulp.src('press/css/sass/dashboard.scss')
    .pipe(sass())
    .pipe(gulp.dest('press/css'))
    .pipe(browserSync.reload({stream:true}));
});
gulp.task('watch',['browserSync','sass'],function(){
    gulp.watch('press/css/sass/**/*.scss', ['sass']); 
    gulp.watch('press/js/**/*.js',browserSync.reload);
    gulp.watch('press/css/**/*.css',browserSync.reload);
    gulp.watch('press/*.html',browserSync.reload);
    gulp.watch('press/*/*.html',browserSync.reload);
});
gulp.task('browserSync',function(){
    browserSync.init({
        server:{
            baseDir: 'press'    
        },    
    });    
});
