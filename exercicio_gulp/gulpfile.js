const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function compressImage() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function compressJS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}


function sassCompile() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}; 


exports.default =  function() {
    gulp.watch('./src/styles/*.scss',{ignoreInitial: false}, gulp.series(sassCompile));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJS));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(compressImage));
}

