var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var WebpackConfig = require('./webpack.config');
var path = require('path');
var contentBasePath = path.resolve(__dirname, 'static');
var bundleStart = false;
var compiler = Webpack(WebpackConfig);

compiler.plugin('compile', function() {
  console.log('Bundling...');
  bundleStart = Date.now();
});

compiler.plugin('done', function() {
  console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});

var bundler = new WebpackDevServer(compiler, {
  'publicPath': WebpackConfig.output.publicPath,
  'contentBase': contentBasePath,
	'historyApiFallback': true,
  'hot': true,
  'quiet': false,
  'noInfo': false,
  'stats': {
    'colors': true
  }
});

bundler.listen(3000, 'localhost', function () {
  console.log('Bundling project, please wait...');
});
