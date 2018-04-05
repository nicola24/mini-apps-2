const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/Index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    hot: true,
  },
};
