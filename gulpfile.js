/**
 * Created by Ken on 2017/12/07.
 */

'use strict';
const gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    runSequence = require('run-sequence'),
    plugins = gulpLoadPlugins();

// eslint
gulp.task('eslint', () => {
    return gulp.src('tests/*.js')
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format());
});

// Downloads the selenium webdriver if protractor version is compatible
gulp.task('webdriver_update', function (done) {
    return require('gulp-protractor').webdriver_update(done);
});

// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('webdriver_standalone', function (done) {
    return require('gulp-protractor').webdriver_standalone(done);
});
// Protractor test runner task
gulp.task('protractor', function () {
    var protractor = require('gulp-protractor').protractor;
    gulp.src([])
        .pipe(protractor({
            configFile: 'protractor.conf.js'
        }))
        .on('end', function () {
            console.log('E2E Testing complete');
            // exit with success.
            process.exit(0);
        })
        .on('error', function (err) {
            console.error('E2E Tests failed:');
            console.error(err);
            process.exit(1);
        });
});

// Run the project in development mode
gulp.task('default', (done) => {
    runSequence('eslint', 'protractor', done);
});
