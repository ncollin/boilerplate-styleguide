const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./app",
            routes: {
                "/bower_components": "./bower_components"
            }
        },
        port: 90,
        ui: {
            port: 9090
        }
    });

    gulp.watch("./app/**/*.html", ['reload']);
    gulp.watch("./app/**/*.js", ['reload']);
});

gulp.task('vulcanize', function () {
    return gulp.src('./app/index.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false
        }))
        .pipe(gulp.dest('dest'));
});