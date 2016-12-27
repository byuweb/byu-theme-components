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
const cached    = require('gulp-cached');
const fuse      = require('gulp-fuse');
const gulp      = require('gulp');
const sass      = require('gulp-sass');
const minifyCss = require('gulp-minify-css'); //minifies css
   

gulp.task('build', ['fuse'], function() {
    // put closure code in here
});

gulp.task('fuse', ['sass'], function() {
    return gulp.src('./components/**/*')
        .pipe(cached('fuse'))
        .pipe(fuse())
        .pipe(gulp.dest('./components'));
});

gulp.task('sass', function() {
    return gulp.src('./components/**/*.scss')
        .pipe(cached('sass'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./components'));
});

gulp.task('sitecss', function() {
  gulp.src('./css/*.scss')                          //reads all the SASS files
    .pipe(sass().on('error', sass.logError))  //compiles SASS to CSS and logs errors
    .pipe(minifyCss())                        //minifies the CSS files 
    .pipe(gulp.dest('./css')) //writes the renamed file to the destination
});

gulp.task('watch', function () {
    gulp.watch('./components/**/*', ['fuse']);
});

gulp.task('default', ['watch']);