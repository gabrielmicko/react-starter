var path = require('path');
var webpack = require('webpack');
var reactHotLoader = require('react-hot-loader');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'static');
var imagePath = path.resolve(__dirname, 'static', 'img');
var fontsPath = path.resolve(__dirname, 'static', 'fonts');
var cssPath = path.resolve(__dirname, 'src', 'css');
var mainPath = path.resolve(__dirname, 'src', 'index.js');
var templatePath = path.resolve(__dirname, 'src', 'template', 'index.html');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
  	'webpack/hot/only-dev-server',
  	'react-hot-loader/patch',
  	mainPath
	],
	output: {
		path: buildPath,
		filename: 'js/bundle.js',
		// Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new HtmlWebpackPlugin({
			'filename': 'index.html',
			'template': templatePath
		})
	],
	resolve: {
		alias: {
			'redux-devtools/lib': path.join(__dirname, 'redux-devtools'),
			'redux-devtools': path.join(__dirname, 'redux-devtools'),
			'react': path.join(__dirname, 'node_modules', 'react')
		},
		extensions: ['', '.js']
	},
	resolveLoader: {
		'fallback': path.join(__dirname, 'node_modules')
	},
	module: {
		loaders: [
      {
  			test: /\.js$/,
  			loaders: ['babel'],
  			exclude: [nodeModulesPath],
  			include: [
  				path.join(__dirname, 'src'),
  				path.join(__dirname, 'redux-devtools')
  			]
  		},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=img/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
				exclude: [nodeModulesPath],
        include: [
  				imagePath,
  			]
      },
			{
				test: /\.less$/i,
				loader: 'style-loader!css-loader!less-loader?sourceMap',
				exclude: [nodeModulesPath],
				include: [
					cssPath
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'url-loader?limit=1&name=fonts/[name].[ext]',
				exclude: [nodeModulesPath],
				include: [
					fontsPath
				]
			}
  ]
	}
};
