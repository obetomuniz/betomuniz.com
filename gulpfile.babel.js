import del from 'del';
import fs from 'fs';
import { exec } from 'child_process';
import { src, dest, series, watch } from 'gulp';
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

const cleanOldBuild = function(cb) {
  del.sync([path.join('public/**/*')]);
  cb();
};

const metalsmith = function() {
  return src(path.join('source/content/**/*.md'))
    .pipe(
      gulpMetalsmith({
        use: metalsmithConfigs(),
        metadata: {
          projects: JSON.parse(fs.readFileSync(path.join(__dirname, 'source/data/projects.json')).toString()),
          talks: JSON.parse(fs.readFileSync(path.join(__dirname, 'source/data/talks.json')).toString())
        }
      })
    )
    .pipe(dest(path.join('public')))
    .pipe(gulpLivereload());
};

const shell = function(cb) {
  const cmds = [
    'mv ./public/blog/feed/index.html ./public/blog/feed.xml && rm -rf ./public/blog/feed/',
    'mv ./public/sitemap/index.html ./public/sitemap.xml && rm -rf ./public/sitemap/',
    'cp ./source/static/robots.txt ./public/robots.txt',
    'cp ./source/static/site.webmanifest ./public/site.webmanifest',
    'cp ./source/static/googleac7fd0fa4feb55aa.html ./public/googleac7fd0fa4feb55aa.html'
  ];

  for (let index = 0; index < cmds.length; index++) {
    const element = exec(cmds[index]);
  }

  cb();
};

const scripts = function() {
  return src(path.join('source/scripts/index.js'))
    .pipe(
      gulpWebpack(
        {
          devtool: 'inline-source-map',
          mode: 'production',
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
    .pipe(dest(path.join('public/assets/scripts')))
    .pipe(gulpLivereload());
};

const styles = function() {
  return src(path.join('source/styles/**/*.scss'))
    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass({ outputStyle: 'compressed' }))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(dest(path.join('public/assets/styles')))
    .pipe(gulpLivereload());
};

const autoprefix = function() {
  return src(path.join('public/assets/styles/**/*.css'))
    .pipe(gulpSourcemaps.init())
    .pipe(gulpAutoprefixer())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(dest(path.join('public/assets/styles')))
    .pipe(gulpLivereload());
};

const csso = function() {
  return src(path.join('public/assets/styles/**/*.css'))
    .pipe(gulpSourcemaps.init())
    .pipe(
      gulpCSSO({
        restructure: false,
        sourceMap: true,
        debug: true
      })
    )
    .pipe(gulpSourcemaps.write('.'))
    .pipe(dest(path.join('public/assets/styles')))
    .pipe(gulpLivereload());
};

const images = function() {
  return src(path.join('source/images/**/*'))
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
    .pipe(dest(path.join('public/assets/images')))
    .pipe(gulpLivereload());
};

const development = function(cb) {
  gulpLivereload.listen();

  watch([path.join('source/content/**'), path.join('source/layouts/**/*.hbs'), path.join('source/data/**')], series(metalsmith, shell));
  watch(path.join('source/scripts/**/*.js'), scripts);
  watch(path.join('source/styles/**/*.scss'), series(styles, autoprefix, csso));
  watch(path.join('source/images/**/*'), images);

  cb();
};

export const build = series(cleanOldBuild, metalsmith, shell, scripts, styles, autoprefix, csso, images);

export default series(series(cleanOldBuild, metalsmith, shell, scripts, styles, autoprefix, csso, images), development);
