const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const TextPlugin = require('extract-text-webpack-plugin');


const plugins = [
  new webpack.ProvidePlugin({ React: 'react', $: 'jquery', PropTypes: 'prop-types' }),
  new HtmlPlugin({ template: 'index.html' }),
  new webpack
    .optimize
    .CommonsChunkPlugin({ name: 'vendor' }),
  new webpack.HotModuleReplacementPlugin(),
  new TextPlugin({ filename: 'main-[contenthash].css', allChunks: true })
];

module.exports = {
  entry: {
    main: './app.js',
    vendor: ['react', 'react-dom']
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env', 'react'
            ],
            plugins: ['transform-class-properties']
          }
        }
      }, {
        test: /\.s?css$/,
        use: TextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader', {
              loader: 'sass-loader',
              options: {
                includePaths: ['src']
              }
            }
          ]
        })
      }, {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      }
    ]
  },

  plugins,

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9000
  }
};
