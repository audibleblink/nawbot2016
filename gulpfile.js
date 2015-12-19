const gulp  = require('gulp')
const mocha = require('gulp-mocha')
const watch = require('gulp-watch')
const babel = require('gulp-babel')


gulp.task('test', () => {
  return gulp.src('spec/*', {read: false})
    .pipe(mocha({reporter: 'spec'}))
})

gulp.task('babel', () => {
  return gulp.src('src/**/*.js')
    .pipe(watch('src/**/*.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('dist'))
})


gulp.task('default', ['babel'])
