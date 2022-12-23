const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/',
        clean: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpeg|png)$/, type: 'asset/resource' },
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        proxy: {
            '/api': 'http://127.0.0.1:3333'
        },
        historyApiFallback: true
    }
};