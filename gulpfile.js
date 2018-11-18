const gulp = require('gulp');
const pug = require('gulp-pug');
const ts = require('gulp-typescript');
const stylus = require('gulp-stylus');

gulp.task('style', () => {
  gulp.src('./src/**/*.styl').pipe(stylus()).pipe(gulp.dest('./public'))
});

gulp.task('script', () => {
  gulp.src('./src/**/*.ts').pipe(ts()).pipe(gulp.dest('./public'))
});

gulp.task('view', () => {
  gulp.src('./src/**/*.pug').pipe(pug()).pipe(gulp.dest('./public'))
});

gulp.task('assets', () => {
  gulp.src('./src/assets/**/*').pipe(gulp.dest('./public'))
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.*', ['start'])
});

gulp.task('start', ['style', 'script', 'view', 'assets']);

gulp.task('default', ['start', 'watch']);
