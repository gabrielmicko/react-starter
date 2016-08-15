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
	devtool: 'cheap-module-source-map',
	entry: [
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
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
  		mangle: false,
	    compress: {
	        warnings: false
	    }
		}),
		new ExtractTextPlugin('css/bundle.css', { allChunks: false }),
		new HtmlWebpackPlugin({
			'filename': 'index.html',
			'template': templatePath
		})
	],
	resolve: {
		alias: {
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
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader'),
				exclude: [
					nodeModulesPath
				],
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

//
// var environment = 'production';
//
// var path = require('path');
// var webpack = require('webpack');
// var reactHotLoader = require('react-hot-loader');
// var cssTextPlugin = {};
// var plugins = [
// 	new webpack.HotModuleReplacementPlugin(),
// 	new webpack.DefinePlugin({
// 		'process.env': {
// 			'NODE_ENV': JSON.stringify(environment)
// 		}
// 	})
// ];
// if (environment === 'production') {
// 	var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 	var extractCSS = new ExtractTextPlugin('build/style/[name].less');
// 	var extractLESS = new ExtractTextPlugin('build/style/[name].less');
// 	plugins.push(new ExtractTextPlugin('css/style.css', {
// 		publicPath: '/css/',
// 		allChunks: true
// 	}));
// }
// module.exports = {
// 	devtool: (environment === 'development') ? 'source-map' : 'cheap-module-source-map',
// 	entry: ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './src/index.js'],
// 	output: {
// 		path: path.join(__dirname, '/build'),
// 		filename: 'js/app.js',
// 		publicPath: '/build/'
// 	},
// 	plugins: plugins,
// 	resolve: {
// 		alias: {
// 			'redux-devtools/lib': path.join(__dirname, 'redux-devtools'),
// 			'redux-devtools': path.join(__dirname, 'redux-devtools'),
// 			'react': path.join(__dirname, 'node_modules', 'react')
// 		},
// 		extensions: ['', '.js']
// 	},
// 	resolveLoader: {
// 		'fallback': path.join(__dirname, 'node_modules')
// 	},
// 	module: {
// 		loaders: [{
// 			test: /\.js$/,
// 			loaders: ['babel'],
// 			exclude: /node_modules/,
// 			include: path.join(__dirname, 'src')
// 		}, {
// 			test: /\.js$/,
// 			loaders: ['babel'],
// 			exclude: /node_modules/,
// 			include: path.join(__dirname, 'redux-devtools')
// 		}, {
// 			test: /\.less$/i,
// 			loader: (environment === 'development') ? 'style-loader!css-loader!less-loader?sourceMap' : ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader'),
// 			include: path.join(__dirname, 'build/css')
// 		}, {
// 			test: /\.css$/,
// 			loader: (environment === 'development') ? 'style-loader!css-loader?sourceMap' : ExtractTextPlugin.extract('style-loader', 'css-loader'),
// 			include: path.join(__dirname, 'build/css')
// 		}, {
// 			test: /\.(png|jpg|svg)$/,
// 			loader: 'url-loader?limit=1&name=img/[name].[ext]',
// 			include: path.join(__dirname, 'build/img')
// 		}, {
// 			test: /\.(png|jpg|svg)$/,
// 			loader: 'url-loader?limit=1&name=img/[name].[ext]',
// 			include: path.join(__dirname, 'build/img')
// 		}, {
// 			test: /\.(woff|woff2|eot|ttf|otf)$/,
// 			loader: 'url-loader?limit=1&name=fonts/[name].[ext]',
// 			include: path.join(__dirname, 'build/fonts')
// 		}]
// 	}
// };
