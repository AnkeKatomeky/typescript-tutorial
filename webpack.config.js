const path = require("path");

module.exports = {
    devtool: "eval-source-map",
    entry: "./src/app.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: "/",
        filename: "app.js",
        path: path.resolve(__dirname, "public")
    },
    mode: "development"
    // mode: "production"
    // mode: "none"
}
