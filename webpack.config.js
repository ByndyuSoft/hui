const path = require('path');

const config = {
    entry: {
        app: path.join(__dirname, 'src', 'index.js')
    },

    output: {
        path: path.join(__dirname, 'build', 'js'),
        filename: '[name].[hash].js',
        publicPath: '/'
    }
};

module.exports = config;