import del from "del";
import gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";
import packageJson from "./package.json";
import runSequence from "run-sequence";
import webpack from "webpack";
import webpackConfig from "./webpack.config";
import WebpackDevServer from "webpack-dev-server";


const ENVIRONMENT = process.env.NODE_ENV
const DEBUG = ENVIRONMENT !== "production";
const PORT = process.env.PORT || 3000;
const WEBPACK_CONFIG = webpackConfig(DEBUG, PORT);
const $ = gulpLoadPlugins({camelize: true});


// Run when no task is supplied to gulp, i.e. plain ol' `gulp`
gulp.task('default', () => runSequence('clean', 'serve'));

// Remove all built files
gulp.task('clean', () => del('build', {dot: true}));

// Copy static files to our `build` directory
gulp.task('static', () => 
  gulp.src([
    'src/static/**'
  ])
    .pipe($.changed('build'))
    .pipe(gulp.dest('build'))
    .pipe($.size({title: 'static'}))
);

// Start a livereloading server
gulp.task('serve', ['static'], () => 
  new WebpackDevServer(webpack(WEBPACK_CONFIG), {
    contentBase: 'build',
    publicPath: WEBPACK_CONFIG.output.publicPath,
    hot: true,
    watchDelay: 100
  })
    .listen(PORT, '0.0.0.0', (err) => {
      if (err) throw new $.util.PluginError('webpack-dev-server', err);

      $.util.log(`[${packageJson.name} serve]`, `Listening at 0.0.0.0:${PORT}`);
    })
);
