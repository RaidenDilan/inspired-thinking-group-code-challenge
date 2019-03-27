const gulp               = require('gulp');
const sass               = require('gulp-sass');
const autoprefixer       = require('gulp-autoprefixer');
const stripCssComments   = require('gulp-strip-css-comments');
const cleanCSS           = require('gulp-clean-css');
const bowerFiles         = require('main-bower-files');
const concat             = require('gulp-concat');
const eventStream        = require('event-stream');
const order              = require('gulp-order');
const sourcemaps         = require('gulp-sourcemaps');
const rename             = require('gulp-rename');
const gulpIf             = require('gulp-if');
const browserSync        = require('browser-sync');
const stylelint          = require('gulp-stylelint');
const stylelintFormatter = require('stylelint-formatter-pretty');
const config             = require('../package').gulp;

const fetchVendorCss = () => {
  return gulp
    .src(bowerFiles(config.selectors.css))
    .pipe(stripCssComments()) // Removing the sourcemaps
    .pipe(concat(config.vendor.css));
};

const fetchLocalCss = () => {
  return gulp
    .src(`${config.src.scss}${config.main.scss}`)
    .pipe(stylelint({ reporters: [{ formatter: stylelintFormatter, console: true }] })) // , { maxWarnings: 0, foundWarnings: 12 }
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    // .pipe(autoprefixer({ browsers: ['last 2 version', 'safari >= 10', 'ie 8', 'ie 9', 'opera 12.1', 'ios 10', 'android 4'], cascade: true, flexbox: true }))
    .pipe(concat(config.output.css));
};

const buildCss = () => {
  const vendorCss = fetchVendorCss();
  const localCss  = fetchLocalCss();

  return eventStream.merge(vendorCss, localCss)
    .pipe(order([config.vendor.css,config.output.css]))
    .pipe(concat(config.output.css))
    .pipe(sourcemaps.init())
    .pipe(gulpIf(global.production, cleanCSS()))
    .pipe(gulpIf(global.production, rename({suffix: '.min'})))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest.css))
    .pipe(gulpIf(!global.production, browserSync.stream()));
};

gulp.task('build-css', buildCss);
module.exports = buildCss;
