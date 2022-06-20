'use strict';

const common = require('./webpack.config.common');

module.exports = {
    ...common,

    mode: 'development',

    devtool: 'source-map',
};
