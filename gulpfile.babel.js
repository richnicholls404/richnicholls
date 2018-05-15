import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import sass from 'gulp-sass';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

gulp.task('css', () => {
    gulp.src('./ui/ui.scss')
        .pipe(sass({ outputStyle: 'compressed', errLogToConsole: true }))
        .pipe(gulp.dest('./public/dist'));
});

// most helpful: https://gist.github.com/alkrauss48/a3581391f120ec1c3e03
gulp.task('js', () => {
    return browserify({ entries: './ui/ui.js' })
        .transform('babelify')
        .bundle()
        .pipe(source('ui.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('js-dev', () => {
    return browserify({ entries: './ui/ui.js' })
        .transform('babelify')
        .bundle()
        .pipe(source('ui.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('default', ['css', 'js-dev']);
gulp.task('prod', ['css', 'js']);

gulp.task('watch', () => {
    gulp.watch('./ui/**/*.scss', ['css']);
    gulp.watch('./ui/**/*.js', ['js-dev']);
});