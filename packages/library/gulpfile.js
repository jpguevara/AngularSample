var gulp = require('gulp');
var inlineResources = require('./scripts/gulp/inline-resources');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var ext_replace = require('gulp-ext-replace');

gulp.task('copy-and-inline-resource', copyHtml);

function copyHtml() {
    gulp.src(['**/*.html', '!node_modules/**/*', '!release/**/*'])
        .pipe(gulp.dest('./release')).on('end', copyScss);
}

function copyAssets() {
    gulp.src(['./assets/**/*', '!node_modules/**/*', '!release/**/*'])
        .pipe(gulp.dest('./release/assets')).on('end', copyScss);
}
function copyScss() {
    gulp.src(['./**/*.scss', '!node_modules/**/*', '!release/**/*'])
        .pipe(sass().on('error', sass.logError))
        //we will keep the sass extension on the css to keep the match in the component styleUrls
        .pipe(ext_replace('.scss'))
        .pipe(gulp.dest('./release')).on('end', inlineResource);
}

function inlineResource() {
    // inlineResources('./release/components');
    inlineResources('./release/**');
}

gulp.task('default', ['copy-and-inline-resource']);