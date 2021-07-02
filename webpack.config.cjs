const path = require("path");

module.exports = (env = { analyze: false }, options) => {
    const isEnvProduction = (options.mode || "production") === "production";

    return {
        entry: {
            main: './src/index.ts'
        },
        devtool: !isEnvProduction ? "source-map" : undefined,
        output: {
            path: path.resolve(__dirname, "./dist/js"),
            filename: "[name].js",
            chunkFilename: "[name].js",
            library: {
                type: "module"
            },
            chunkLoading: "import",
            chunkFormat: "module"
        },
        experiments: {
            outputModule: true
        },
        optimization: {
            minimize: false
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: ["ts-loader"]
                },
            ]
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },
        externals: [
            "lit-element"
        ],
        stats: {
            entrypoints: false,
            children: false
        }
    };
};
