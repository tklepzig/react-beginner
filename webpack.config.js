var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('./package.json');
var outputFileTemplateSuffix = '-' + pkg.version;

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle' + outputFileTemplateSuffix + '.js',
        chunkFilename: '[id]' + outputFileTemplateSuffix + '.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('app.bundle' + outputFileTemplateSuffix + '.css', {
            allChunks: true
        })
    ],

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }, {
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract('style?sourceMap', [
                    'css?sourceMap',
                    // 'postcss',
                    'sass?sourceMap'
                ])
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
