'use strict';

const path = require('path');
const root = path.join(__dirname, '..');

module.exports = {
    entry: {
        main: path.join(root, 'src', 'main'),
    },

    output: {
        filename: 'bundle.js',
        path: path.join(root, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ],
    },
};
