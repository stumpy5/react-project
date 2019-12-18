const path = require("path");

module.exports = {
    entry: {
        main: path.join(__dirname, "", "_Dev", "index.js")
    },
    output: {
        path: path.join(__dirname, "", "_Prod"),
        filename: "[name]-bundle.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    mode: "development",
    devServer: {
        port: 3000,
        contentBase: "_Prod",
        overlay: true
    }
}