module.exports = {
    entry:['babel-polyfill', './src/client.js'],
    output: {
        path: './public',
        filename: 'index.js',
    },
    devServer:{
       inline:true,
       contentBase:'./public',
       port:3000
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                cacheDirectory: true,
                presets:['es2015','react']
            }
        }]
    }
}