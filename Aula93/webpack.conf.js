const path = require('path'); //CommonJs

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'public', 'asstets', 'js'),
    filename: 'bundle.js'
},

    module: {
        rules: [
            {
                exclude: /node_modulos/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@bebel/env']
                    }
                }
            }
        ]
    },
    devtool: 'source-map'
};
