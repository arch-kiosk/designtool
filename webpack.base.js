const HtmlWebPackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
const path = require("path");
module.exports = {
    entry: {
        main: "./index.js"
    },
    plugins: [
        new HtmlWebPackPlugin(
                {
                    template: './index.html'
                },
        ),
        new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }
        )
    ],
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     use: 'ts-loader',
            // },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /favicon.ico$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "favicon.ico",
                        outputPath: "."
                    }
                }
            },
            {
                test: /\.svg|png|jpg|gif$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
}