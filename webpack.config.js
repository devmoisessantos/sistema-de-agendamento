const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',

    entry: path.resolve(__dirname, 'src', 'js', 'main.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'), // Ajustado para a pasta 'public'
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'), // Alterado para 'public'
        },
        port: 1111,
        open: true,
        liveReload: true,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            favicon: path.resolve('src', 'assets', 'scissors.svg'),
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Configurado para gerar 'styles.css' na pasta 'public'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'assets'),
                    to: path.resolve(__dirname, 'public', 'assets'), // Alterado para 'public/assets'
                },
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
