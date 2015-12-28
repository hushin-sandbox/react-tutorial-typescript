gulp = require 'gulp'
shell = require 'gulp-shell'
tslint = require 'gulp-tslint'
runSequence = require("run-sequence").use(gulp)

gulp.task 'default', (callback) -> runSequence(
    'build',
    'build:web',
    'tslint',
    callback
)


gulp.task 'build', [
    'build:ts'
]

gulp.task 'build:ts', shell.task [
    '$(npm bin)/tsc -p ./'
]

gulp.task 'build:web', shell.task [
    '$(npm bin)/browserify -o public/bundle.js lib/index.js'
]

gulp.task 'tslint', ->
    gulp.src('./src/**/*.ts')
        .pipe tslint
            config: "/tslint.json"
        .pipe tslint.report 'verbose'
