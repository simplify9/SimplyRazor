/// <reference path="node_modules/bootstrap.native/dist/bootstrap-native-v4.js" />
/// <reference path="components/simplyeditor/simplyeditorinterop.js" />
/// <reference path="components/simplytags/simplytagsinterop.js" />
/// <reference path="components/simplytypeahead/simplytypeaheadinterop.js" />
/// <reference path="components/simplyupload/simplyuploadinterop.js" />
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
        'node_modules/@yaireo/tagify/dist/tagify.js',
        'node_modules/bs-custom-file-input/dist/bs-custom-file-input.js',
        'node_modules/@tarekraafat/autocomplete.js/dist/js/autocomplete.js',
        'node_modules/bootstrap.native/dist/bootstrap-native-v4.js',

        'components/simplyeditor/simplyeditorinterop.js',
        'components/simplytags/simplytagsinterop.js',
        'components/simplytypeahead/simplytypeaheadinterop.js',
        'components/simplyupload/simplyuploadinterop.js',
        'components/simplymodal/SimplyModalInterop.js',

    ])
        .pipe(concat('simply.razor.js'))
        .pipe(minify())
        .pipe(gulp.dest('wwwroot'));
});

gulp.task('css', function () {
    return gulp.src([
        'node_modules/quill/dist/quill.snow.css',
        'node_modules/@yaireo/tagify/dist/tagify.css',
        'components/simplytypeahead/simplytypeahead.css'
    ])
        .pipe(concat('simply.razor.css'))
        .pipe(gulp.dest('wwwroot'));
});