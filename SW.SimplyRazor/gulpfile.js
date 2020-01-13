/// <reference path="node_modules/bootstrap.native/dist/bootstrap-native-v4.js" />
/// <reference path="components/simplyeditor/simplyeditorinterop.js" />
/// <reference path="components/simplychoices/simplychoicesinterop.js" />
/// <reference path="components/simplyupload/simplyuploadinterop.js" />
/// <reference path="components/simplyalert/simplyalertinterop.js" />

/// <reference path="node_modules/choices.js/public/assets/scripts/choices.js" />
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
        //'node_modules/@yaireo/tagify/dist/tagify.js',
        'node_modules/bs-custom-file-input/dist/bs-custom-file-input.js',
        'node_modules/choices.js/public/assets/scripts/choices.js',
        //'node_modules/bootstrap.native/dist/bootstrap-native-v4.js',
        //'node_modules/tabulator-tables/dist/js/tabulator.min.js',

        'components/simplyeditor/simplyeditorinterop.js',
        //'components/simplytags/simplytagsinterop.js',
        'components/simplychoices/simplychoicesinterop.js',
        'components/simplyupload/simplyuploadinterop.js',
        //'components/simplymodal/SimplyModalInterop.js',
        //'components/simplyalert/simplyalertinterop.js',
        //'components/simplysearch/simplysearchinterop.js',

    ])
        .pipe(concat('simply.razor.js'))
        .pipe(minify())
        .pipe(gulp.dest('wwwroot'));
});

gulp.task('css', function () {
    return gulp.src([

        'node_modules/quill/dist/quill.snow.css',
        //'node_modules/tabulator-tables/dist/css/bootstrap/tabulator_bootstrap.min.css',
        'node_modules/choices.js/public/assets/styles/choices.css',

    ])
        .pipe(concat('simply.razor.css'))
        .pipe(gulp.dest('wwwroot'));
});