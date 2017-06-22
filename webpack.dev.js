const path = require('path');
const webpack = require('webpack');
const buildPath = path.resolve(__dirname, 'public');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    /*'babel-polyfill', //Enable for IE testing */
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000/',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: buildPath, //Path where the bundle should be exported
    filename: 'js/bundle.js', //Filename
    publicPath: '/', //Where the js gets loaded from
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        include: path.join(__dirname, 'public/img'),
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.join(__dirname, 'public/fonts'),
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
              convertToAbsoluteUrls: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/Template/template.html',
      inject: 'body',
      hash: true,
      cache: true,
      showErrors: true,
    }),
  ],
};
