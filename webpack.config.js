/**
  Set the environment variable
  development or production
*/
var environment = 'production';

/**
  Imports
*/
var path = require('path');
var webpack = require('webpack');
var reactHotLoader = require('react-hot-loader');
var cssTextPlugin = {};
var plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(environment)
        }
    })
];


if (environment === 'production') {
    var ExtractTextPlugin = require('extract-text-webpack-plugin');
    var extractCSS = new ExtractTextPlugin('build/style/[name].less');
    var extractLESS = new ExtractTextPlugin('build/style/[name].less');

    plugins.push(new ExtractTextPlugin('css/style.css', {
        publicPath: '/css/',
        allChunks: true
    }));
}

module.exports = {
    devtool: (environment === 'development') ? 'source-map' : 'cheap-module-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'js/app.js',
        publicPath: '/build/'
    },
    plugins: plugins,
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
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }, {
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'redux-devtools')
        }, {
            test: /\.less$/i,
            loader: (environment === 'development') ? 'style-loader!css-loader!less-loader?sourceMap' : ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader'),
            include: path.join(__dirname, 'build/css')
        }, {
            test: /\.css$/,
            loader: (environment === 'development') ? 'style-loader!css-loader?sourceMap' : ExtractTextPlugin.extract('style-loader', 'css-loader'),
            include: path.join(__dirname, 'build/css')
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'url-loader?limit=1&name=img/[name].[ext]',
            include: path.join(__dirname, 'build/img')
        }]
    }
};
