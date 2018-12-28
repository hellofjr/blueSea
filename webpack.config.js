var webpack = require('webpack');
module.exports = {
    entry: {
        page: "./src/app.js"
    },
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
        { test: /\.less$/, loader: 'style!css!postcss!less' },
        { test: /\.css$/, loader: 'style!css!postcss' },
        { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
        { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
    }
};