const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const textPlugin = require('extract-text-webpack-plugin');
const args = require('yargs').argv;

let styleLoader = ['style-loader', 'css-loader', 'sass-loader'];

const plugins = [
    new webpack.ProvidePlugin({
        React: 'react',
        jquery: 'jquery',
        PropTypes: 'prop-types'
    }),
    new htmlPlugin({template: 'index.html'}),
    new webpack
        .optimize
        .CommonsChunkPlugin({name: 'vendor'}),
    new webpack.HotModuleReplacementPlugin(),
    new textPlugin({filename: 'main-[contenthash].css', allChunks: true})
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
                        presets: ['env', 'react'],
                        plugins: ['transform-class-properties']
                    }
                }
            }, {
                test: /\.s?css$/,
                use: textPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })

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