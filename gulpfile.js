'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf');
    //browserSync = require("browser-sync"),
    //reload = browserSync.reload;

var path = {
    build: {
        html: 'build/views',
        js: 'build/views/js/',
        css: 'build/views/css/',
        img: 'build/views/img/',
        fonts: 'build/views/fonts/',
        templates: 'build/views/templates/',
        server: 'build/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        templates: 'src/templates/*.html',
        server: 'src/server.js'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        server: 'src/server.js'
    },
    clean: './build'
};

// var config = {
//     server: {
//         baseDir: "./build"
//     },
//     tunnel: true,
//     host: 'localhost',
//     port: 9000,
//     logPrefix: "Frontend_Test"
// };

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
        //.pipe(reload({stream: true}));
});

gulp.task('templates:build', function () {
    gulp.src(path.src.templates)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.templates));
        //.pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js));
        // .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css));
        // .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img));
        // .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('server:build', function () {
    gulp.src(path.src.server)
        .pipe(gulp.dest(path.build.server));
        // .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'templates:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build',
    'server:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
        gulp.start('templates:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
    watch([path.watch.server], function(event, cb) {
        gulp.start('server:build');
    });
});

// gulp.task('webserver', function () {
//     browserSync(config);
// });

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'watch']);


// var mysql = require('mysql');
//
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '0707',
//     database : 'mysql'
// });
//
//  connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//
//     console.log('connected as id ' + connection.threadId);
// });
//
//
//
// connection.query("SELECT * FROM Comments", function(err, rows, fields){
//     if(err) return console.log(err);
//     // Действие с результатом
//     console.log(rows);
//     console.log(fields);
// });
//
// src/js/main.js