var path = require("path")

module.exports = {
    devtool: 'source-map',
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                loaders: ['json-loader']
            }
        ]
    },
    devServer: {
        publicPath: '/build/'
    }
}