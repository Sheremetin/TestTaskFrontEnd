
const SRC_PATH = './src/';
const ASSETS_PATH = './dist/';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    prettify = require('gulp-prettify'),
    cache = require('gulp-cache'),
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    rimraf = require('gulp-rimraf'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    cleancss = require('gulp-clean-css'),
    batch = require('gulp-batch');

gulp.task('build', ['clean', 'watch'], function () {
    gulp.start('scripts', 'pug', 'img', 'sass');
});

/**
 * Compile pug templates
 */
gulp.task('pug', function () {
    var YOUR_LOCALS = {};

    return gulp.src(SRC_PATH + 'pug/**/*.pug')
        .pipe(plumber())
        .pipe(pug({locals: YOUR_LOCALS}))
        .pipe(prettify({indent_size: 4}))
        .pipe(gulp.dest(ASSETS_PATH));
});

/**
 * Compile all sass
 */
gulp.task('sass', function () {
    return gulp.src(SRC_PATH + 'sass/**/*.{sass,scss,css}')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(rename({suffix: '.min'}))
        .pipe((gulp.dest(ASSETS_PATH + 'css')));
});

/**
 * Optimize all images
 */
gulp.task('img', function () {
    return gulp.src(SRC_PATH + 'img/**/*')
        .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
        .pipe(gulp.dest(ASSETS_PATH + 'images'))
});

/**
 * Compile all js
 */
gulp.task('jshint', function () {
    return gulp.src(SRC_PATH + 'scripts/**/*.js')
});

gulp.task('scripts', ['jshint'], function () {
    return gulp.src(SRC_PATH + 'scripts/**/*.js')
        .pipe(plumber())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest(ASSETS_PATH + 'js'));
});

/**
 * Cleanup all dirs
 */
gulp.task('clean', function () {
    return gulp.src([ASSETS_PATH] + '*', {read: false})
        .pipe(plumber())
        .pipe(rimraf({force: true}));
});

/**
 * Watch all files
 */
gulp.task('watch',
    [
        'watch.img',
        'watch.pug',
        'watch.sass',
        'watch.scripts'
    ]
);

/**;
 * Watch pug
 */
gulp.task('watch.pug', function () {
    watch(SRC_PATH + 'pug/**/*.pug', batch(function (events, done) {
        gulp.start('pug', done);
    }));
});

/**
 * Watch img
 */
gulp.task('watch.img', function () {
    watch(SRC_PATH + 'img/**/*', batch(function (events, done) {
        gulp.start('img', done);
    }));
});

/**
 * Watch sass
 */
gulp.task('watch.sass', function () {
    watch(SRC_PATH + 'sass/**/*.{sass,scss}', batch(function (events, done) {
        gulp.start('sass', done);
    }));
});

/**
 * Watch scripts
 */
gulp.task('watch.scripts', function () {
    watch(SRC_PATH + 'scripts/**/*', batch(function (events, done) {
        gulp.start('scripts', done);
    }));
});

