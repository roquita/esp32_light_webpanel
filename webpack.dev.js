const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    mode: 'development',

    devtool: 'inline-source-map',

    devServer: 
    {
        //contentBase: __dirname + "/build",
        index: 'login.html',
        compress: true,
        port: 9000,

    },

});