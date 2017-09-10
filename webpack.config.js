const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  {
    name: 'Raw Output',
    entry: './src/index.js',
    output: {
      filename: 'ngValidate.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(['dist/ngValidate.js'])
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  },
  {
    name: 'Minified Output',
    entry: './src/index.js',
    output: {
      filename: 'ngValidate.min.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(['dist/ngValidate.min.js']),
      new UglifyJSPlugin()
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  }
];
