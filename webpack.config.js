const { stat } = require('fs');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    target: 'web',
    mode: 'development',

    entry: path.resolve(__dirname, 'src', 'js', 'main.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 9000,
        open: true,
        liveReload: true,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            favicon: path.resolve('src', 'assets', 'scissors.svg'),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
