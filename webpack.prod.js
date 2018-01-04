var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var pathsToClean = ['public/css', 'public/js', 'public/index.html'];
var cleanOptions = {
  root: __dirname,
  verbose: true,
};
var config = {
  entry: {
    base: ['./src/index.js'],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'prop-types',
    ],
  },
  output: {
    path: BUILD_DIR, //Path where the bundle should be exported
    filename: 'js/[name].[chunkhash:8].js', //Filename
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: '/', //Where the js gets loaded from
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        enforce: 'pre',
        use: 'json-loader',
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: ['babel-loader'],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader',
        }),
        include: path.join(__dirname, 'src', 'Less'),
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: 'url-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'url-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new ExtractTextPlugin('css/style.[contenthash:8].css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/Template/template.prod.html',
      inject: 'body',
      hash: true,
      cache: true,
      showErrors: false,
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ],
};
module.exports = config;
