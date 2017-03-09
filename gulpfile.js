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
const gulp = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const initWcBuild = require('byu-web-component-build').gulp;

gulp.task('build', ['docs', 'wc:build']);

initWcBuild(gulp, {
    componentName: '2017-core-components',
    js: {
        input: './components/bundle.js'
    },
    css: {
        input: './css/site.scss'
    }
});

gulp.task('watch', ['build'], function (done) {
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    }, done);

    gulp.watch(['index.html', './components/**', './css/*.scss'], ['build']);
});

// copy the demo.html files to the docs folder, rename them as 'comonent-name.html'
gulp.task('docs', function()
{
    return gulp.src('./components/*/demo.html')
    .pipe(rename(function(path) {
        path.basename = path.dirname;
        path.dirname = '';
        path.extname = '.html';
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('default', ['watch']);


