const path = require("path");
const webpack = require("webpack");
const helper = require('./helper');

module.exports = {
    entry: path.resolve('src/index'),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ]
    },
    resolve: {
        alias: helper.resolveTsconfigPathsToAlias(path.resolve('tsconfig.json'), path.resolve('')),
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    output: {
        path: path.resolve("dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve("public/"),
        port: 5000,
        publicPath: "http://localhost:5000/dist/",
        hotOnly: true,
        historyApiFallback: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
