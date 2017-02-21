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
const pump = require('pump');
const rename = require('gulp-rename');
const through = require('through2');
const sourcemaps = require('gulp-sourcemaps');
const webpackStream = require('webpack-stream');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');

gulp.task('assemble', function () {
    return gulp.src('./components/bundle.js')
        .pipe(webpackStream(require('./webpack.config.js'), require('webpack')))
        .pipe(gulp.dest('dist/'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(through.obj(function (file, enc, cb) {
            // Dont pipe through any source map files as it will be handled
            // by gulp-sourcemaps
            var isSourceMap = /\.map$/.test(file.path);
            if (!isSourceMap) this.push(file);
            cb();
        }))
        .pipe(babel({
            presets: [
                ['env', {
                    "targets": {
                        "browsers": ["last 2 versions", "ie >= 11", "> 5% in US"]
                    }
                }]
            ]
        }))
        .pipe(rename({suffix: '.es5'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
        ;
});

gulp.task('minify', ['assemble'], function () {
    return gulp.src('dist/components*.js')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(babel({
            presets: ['babili']
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

// gulp.task('assemble', ['fuse'], function () {
//     return gulp.src('./components/**/*.js')
//     //Exclude the non-fused script files
//         .pipe(ignore(function (file) {
//             let parsed = path.parse(file.path);
//             let base = path.basename(parsed.dir);
//             return base !== 'example' && base !== parsed.name;
//         }))
//         .pipe(concat('components.js'))
//         .pipe(gulp.dest('dist'));
// });

gulp.task('assemble:minify', ['fuse:minify'], function () {
    return gulp.src('./components/**/*.js')
    //Exclude the non-fused script files
        .pipe(ignore(function (file) {
            let parsed = path.parse(file.path);
            let base = path.basename(parsed.dir);
            let minName = base + '.min';
            return base !== 'example' && minName !== parsed.name;
        }))
        .pipe(concat('components.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('fuse', ['sass'], function () {
    return gulp.src('./components/**/*')
    //.pipe(cached('fuse'))
        .pipe(fuse())
        .pipe(gulp.dest('./components'));
});

gulp.task('fuse:minify', ['sass'], function () {
    return gulp.src(['./components/**/template.html', './components/**/styles.css', './components/**/script.js'])
        .pipe(ignore(function (file) {
            let parsed = path.parse(file.path);
            let base = path.basename(parsed.dir);
            return base !== 'example' && base === parsed.name;
        }))
        .pipe(cached('minify'))
        .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
        .pipe(gulpIf('*.css', cssmin()))
        .pipe(fuse())
        .pipe(babel({
            presets: ['babili'],
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./components'));
});

gulp.task('sass', function () {
    return gulp.src('./components/**/*.scss')
    //.pipe(cached('sass'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./components'));
});

gulp.task('sitecss', function () {
    gulp.src('./css/*.scss')                        // reads all the SASS files
        .pipe(sass().on('error', sass.logError))    // compiles SASS to CSS and logs errors
        .pipe(gulp.dest('./css'))                   // gulwrites the regular css file
        .pipe(cssmin())                          // minifies the CSS files
        .pipe(concat('site.min.css'))               // renames the file
        .pipe(gulp.dest('dist'));                   // also writes it to the dist folder
});

gulp.task('watch', ['build'], function (done) {
    browserSync.init({
        proxy: {
            target: "http://localhost/template", // change to your dev url
            middleware: function (req, res, next) {
                //console.log(req.url);
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    }, done);

    gulp.watch(['index.html', './components/**/*.html', './components/**/script.js', './components/**/style.scss', './css/*.scss'], ['build']);
});

gulp.task('default', ['watch']);


