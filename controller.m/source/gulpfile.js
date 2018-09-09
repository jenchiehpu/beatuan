const gulp = require("gulp");
const jade = require("gulp-jade");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const minifyCss = require("gulp-minify-css");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const minimist = require("minimist");
const gulpIf = require("gulp-if");
const clean = require("gulp-clean");
const sequence = require("gulp-sequence");
const imagemin = require("gulp-imagemin");
const data = require("gulp-data");
const concatCss = require("gulp-concat-css");
const browserSync = require('browser-sync').create();

// gulp.task('copy', function () {
//     return gulp.src('./source/**/*.html')
//     .pipe(gulp.dest('./public/'))
//     .pipe(browserSync.stream())
// });
gulp.task('js', function () {
    return gulp.src(['/js/main.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../build/js'))
    // .pipe(browserSync.stream())
});
gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers:['last 1 version']})
    ];
    return gulp.src(['css/reset.css','css/common.css', 'css/style.css'])
    .pipe(plumber())
    .pipe(postcss(plugins))
    .pipe(concatCss('bundle.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('../build/css/'))
    // .pipe(browserSync.stream())
})

gulp.task('watch', function () {
    gulp.watch('css/**/*.css', ['css']);
    gulp.watch('js/**/*.js', ['js']);
})

gulp.task('browser-sync', function () {
    browserSync.init({
        server:{
            baseDir:'../view/'
        }
    })
})
// gulp.task('imageMin', function () {
//     gulp.src('./source/img/family/*.jpg')
//     .pipe(imagemin())
//     .pipe(gulp.dest('./public/img/family'))
// })
gulp.task('default', ['css', 'js', 'watch'])