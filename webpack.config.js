'use strict';
const path = require('path');


module.exports = {
    
    devServer: {
      contentBase: "./"
    },
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "development"
        }),
      ]
};