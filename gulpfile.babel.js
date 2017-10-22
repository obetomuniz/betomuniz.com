import del from 'del';
import fs from 'fs';
import gulp from 'gulp';
import gulpAutoprefixer from 'gulp-autoprefixer';
import gulpCSSO from 'gulp-csso';
import gulpImagemin from 'gulp-imagemin';
import gulpLivereload from 'gulp-livereload';
import gulpMetalsmith from 'gulp-metalsmith';
import gulpSass from 'gulp-sass';
import gulpShell from 'gulp-shell';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpWebpack from 'webpack-stream';
import metalsmithConfigs from './metalsmith';
import path from 'path';
import webpack from 'webpack';
import webpackPluginUglifyJS from 'uglifyjs-webpack-plugin';

gulp.task('clean-old-build', () => {
  return del.sync([path.join('public/**/*')]);
});

gulp.task(
  'shell',
  ['metalsmith'],
  gulpShell.task([
    'mv ./public/blog/feed/index.html ./public/blog/feed.xml && rm -rf ./public/blog/feed/',
    'mv ./public/sitemap/index.html ./public/sitemap.xml && rm -rf ./public/sitemap/',
    'cp ./source/static/robots.txt ./public/robots.txt',
    'cp ./source/static/googleac7fd0fa4feb55aa.html ./public/googleac7fd0fa4feb55aa.html'
  ])
);

gulp.task('metalsmith', () => {
  return gulp
    .src(path.join('source/content/**/*.md'))
    .pipe(
      gulpMetalsmith({
        use: metalsmithConfigs(),
        metadata: {
          projects: JSON.parse(fs.readFileSync(path.join(__dirname, 'source/data/projects.json')).toString()),
          talks: JSON.parse(fs.readFileSync(path.join(__dirname, 'source/data/talks.json')).toString())
        }
      })
    )
    .pipe(gulp.dest(path.join('public')))
    .pipe(gulpLivereload());
});

gulp.task('styles', () => {
  return gulp
    .src(path.join('source/styles/**/*.scss'))
    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass({ outputStyle: 'compressed' }))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest(path.join('public/assets/styles')))
    .pipe(gulpLivereload());
});

gulp.task('autoprefix', ['styles'], () => {
  return gulp
    .src(path.join('public/assets/styles/**/*.css'))
    .pipe(gulpSourcemaps.init())
    .pipe(gulpAutoprefixer())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest(path.join('public/assets/styles')))
    .pipe(gulpLivereload());
});

gulp.task('csso', ['autoprefix'], () => {
  return gulp
    .src(path.join('public/assets/styles/**/*.css'))
    .pipe(gulpSourcemaps.init())
    .pipe(
      gulpCSSO({
        restructure: false,
        sourceMap: true,
        debug: true
      })
    )
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest(path.join('public/assets/styles')))
    .pipe(gulpLivereload());
});

gulp.task('scripts', () => {
  return gulp
    .src(path.join('source/scripts/index.js'))
    .pipe(
      gulpWebpack(
        {
          devtool: 'inline-source-map',
          output: {
            filename: 'index.js'
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: { presets: ['env'] }
                }
              }
            ]
          },
          plugins:
            process.env.NODE_ENV === 'development'
              ? [
                  new webpack.DefinePlugin({
                    'process.env': { NODE_ENV: JSON.stringify('development') }
                  })
                ]
              : [
                  new webpack.DefinePlugin({
                    'process.env': { NODE_ENV: JSON.stringify('production') }
                  }),
                  new webpackPluginUglifyJS()
                ]
        },
        webpack
      )
    )
    .pipe(gulp.dest(path.join('public/assets/scripts')))
    .pipe(gulpLivereload());
});

gulp.task('images', () => {
  return gulp
    .src(path.join('source/images/**/*'))
    .pipe(
      gulpImagemin(
        [
          gulpImagemin.gifsicle(),
          gulpImagemin.jpegtran(),
          gulpImagemin.optipng(),
          gulpImagemin.svgo({
            plugins: [{ cleanupIDs: false }, { removeViewBox: false }, { minifyStyles: false }, { removeUselessDefs: false }]
          })
        ],
        { verbose: true }
      )
    )
    .pipe(gulp.dest(path.join('public/assets/images')))
    .pipe(gulpLivereload());
});

gulp.task('default', ['clean-old-build', 'metalsmith', 'shell', 'scripts', 'styles', 'autoprefix', 'csso', 'images'], () => {
  gulpLivereload.listen();
  gulp.watch([path.join('source/content/**'), path.join('source/layouts/**/*.hbs'), path.join('source/data/**')], ['metalsmith', 'shell']);
  gulp.watch(path.join('source/scripts/**/*.js'), ['scripts']);
  gulp.watch(path.join('source/styles/**/*.scss'), ['styles', 'autoprefix', 'csso']);
  gulp.watch(path.join('source/images/**/*'), ['images']);
});

gulp.task('build', ['clean-old-build', 'metalsmith', 'shell', 'scripts', 'styles', 'autoprefix', 'csso', 'images']);
