/*
Gulp file....
*/

var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');

gulp.task('js', function () {
    return gulp.src([

        'node_modules/quill/dist/quill.js',
        'node_modules/bs-custom-file-input/dist/bs-custom-file-input.js',
        'node_modules/choices.js/public/assets/scripts/choices.js',
        'node_modules/flatpickr/dist/flatpickr.min.js',
        'components/simplydate/simplydateinterop.js',
        'components/simplyeditor/simplyeditorinterop.js',
        'components/simplychoices/simplychoicesinterop.js',
        'components/simplyupload/simplyuploadinterop.js',
        'extensions/ijsruntimeextensionsinterop.js'

    ])
        .pipe(concat('simplyrazor.js'))
        .pipe(minify())
        .pipe(gulp.dest('wwwroot'));
});

gulp.task('css', function () {
    return gulp.src([

        'node_modules/choices.js/public/assets/styles/choices.css',
        'components/simplychoices/simplychoices.css',
        'node_modules/quill/dist/quill.snow.css',
        'node_modules/flatpickr/dist/flatpickr.min.css',

    ])
        .pipe(concat('simplyrazor.css'))
        .pipe(gulp.dest('wwwroot'));
});