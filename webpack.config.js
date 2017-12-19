var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: ['./index.js'],
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
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 12000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    },
                    'image-webpack-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        publicPath: '/build/'
    }
}
