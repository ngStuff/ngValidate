const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const buildName = 'ngValidate.js';
const buildDir = 'dist';
const buildPath = `${buildDir}/${buildName}`;

module.exports = [
  {
    name: 'Minified Output',
    entry: './src/index.js',
    output: {
      filename: buildName,
      path: path.resolve(__dirname, buildDir)
    },
    plugins: [
      new CleanWebpackPlugin([buildPath]),
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
