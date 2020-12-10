const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    performance: {
        hints: false,
        maxAssetSize: 512000
    },
    output: {
        filename: './dist/[name].bundle.js'
    },
});
