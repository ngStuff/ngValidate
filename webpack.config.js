const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildName = 'validator.js';
const buildDir = 'dist';
const buildPath = `${buildDir}/${buildName}`;

const docsBuildName = 'bundle.js';
const docsBuildDir = 'docs/assets/js';
const docsBuildPath = `${docsBuildDir}/${docsBuildName}`;

module.exports = [
  {
    name: 'Minified Output',
    entry: './src/index.js',
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
      new CleanWebpackPlugin([buildPath]),
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
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  },
  {
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
      new CleanWebpackPlugin([docsBuildPath]),
      new UglifyJSPlugin({
        sourceMap: true
      }),
      // new ExtractTextPlugin({
      //   filename: "bundle.css",
      //   allChunks: true
      // })
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
          use: [
            'style-loader',
            'css-loader'
          ]
          // use: ExtractTextPlugin.extract({
          //   use: [
          //     'style-loader',
          //     'css-loader'
          //   ]
          // })
        }
      ]
    }
  }
];
