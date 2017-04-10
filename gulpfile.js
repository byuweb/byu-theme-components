/**
 *  @license
 *    Copyright 2016 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';
const browserSync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const ignore = require('gulp-ignore');
const initWcBuild = require('byu-web-component-build').gulp;

gulp.task('build', ['docs', 'wc:build', 'temp:copy-files'], function() {
    browserSync.reload();
});

initWcBuild(gulp, {
    componentName: 'byu-theme-components',
    js: {
        input: './components/bundle.js',
        polyfillUrl: 'https://cdn.byu.edu/web-component-polyfills/latest/web-component-polyfills.min.js'
    },
    css: {
        input: './css/site.scss'
    }
});

/*
 * This needs to go away once we've confirmed that everyone has moved from 2017-core-components to byu-theme-components.
 * NOTE: This breaks sourcemaps support.
 */
gulp.task('temp:copy-files', ['wc:build'], function() {
    gulp.src(['dist/*.js', 'dist/*.css'])
        .pipe(rename(function(path) {
            path.basename = path.basename.replace(/byu-theme-components/, '2017-core-components')
        }))
        .pipe(gulp.dest('dist'));
});
// END: Stuff that needs to go away

gulp.task('watch', ['build'], function (done) {

    browserSync.init({
        server: {
            baseDir: './',
        },
        startPath: '/every-feature.html',
        notify: false
    }, done);

    gulp.watch(['index.html', './components/**', './css/*.scss'], ['build']);
});

// copy the demo.html files to the docs folder, rename them as 'comonent-name.html'
gulp.task('docs',['docs:copy-libs'], function()
{
    return gulp.src('./components/*/demo.html')
    .pipe(rename(function(path) {
        path.basename = path.dirname;
        path.dirname = '';
        path.extname = '.html';
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('docs:clean-libs', function () {
    return del([
        './docs/lib/**'
    ]);
});

gulp.task('docs:copy-libs', ['docs:clean-libs'], function () {
    const ignoredExtensions = [
        '.json',
        '.md',
        '.txt',
        '.png'
    ];
    const ignoredFiles = [
        'gulpfile.js',
        'index.html',
        'hero.svg'
    ];
    const ignoredDirectories = [
        'test',
        'tests',
        'demo',
        'examples',
        'src',
        'entrypoints',
        'externs'
    ];
    const ignoredLibs = ['webcomponentsjs'];
    return gulp.src('./bower_components/**')
        .pipe(ignore(function(file) {
            let info = path.parse(file.path);
            if (ignoredExtensions.includes(info.ext)) {
                return true;
            }
            if (ignoredFiles.includes(info.base)) {
                return true;
            }
            let split = file.relative.split(path.sep);
            if (split.length >= 2 && ignoredDirectories.includes(split[1])) {
                return true;
            }
            if (ignoredLibs.includes(split[0])) {
                return true;
            }
            return false;
        }))
        .pipe(gulp.dest('./docs/lib'));
});

gulp.task('default', ['watch']);


