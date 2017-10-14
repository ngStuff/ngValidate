const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Modules Config
const buildName = 'validator.js';
const buildDir = 'dist';

let modulesConfig = {
  name: 'Minified Output',
  entry: './src/module/index.js',
  output: {
    filename: buildName,
    path: path.resolve(__dirname, buildDir)
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin([
      `${buildDir}/${buildName}`
    ]),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};


// Documentation Config
const docsBuildName = 'bundle.js';
const docsBuildDir = 'docs/assets';

let documentationConfig = {
  name: 'Documentation Output',
  entry: './src/docs/index.js',
  output: {
    filename: docsBuildName,
    path: path.resolve(__dirname, docsBuildDir)
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin([
      `${docsBuildDir}/${docsBuildName}`,
      `${docsBuildDir}/bundle.css`
    ]),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // loader: ['style-loader', 'css-loader']
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '../images/[name].[ext]'
        } 
      }
    ]
  }
};

module.exports = [
  modulesConfig,
  documentationConfig
];
