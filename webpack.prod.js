var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
var pathsToClean = ['public/css', 'public/js', 'public/index.html'];
var cleanOptions = {
  root: __dirname,
  verbose: true
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
      'prop-types'
    ]
  },
  output: {
    path: BUILD_DIR, //Path where the bundle should be exported
    filename: 'js/[name].[chunkhash:8].js', //Filename
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: '/' //Where the js gets loaded from
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: 'url-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'url-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.[hash].css',
      chunkFilename: 'css/style.[id].[hash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/Template/template.prod.html',
      inject: 'body',
      hash: true,
      cache: true,
      showErrors: false
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  ]
};
module.exports = config;
