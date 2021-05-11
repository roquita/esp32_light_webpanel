const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/build",
        publicPath: "/build",
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: false,
        })
    ],
    devServer: {
        contentBase: __dirname + "/build",
        compress: false,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ],
            }
        ],
    },
}