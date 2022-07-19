const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist-webpack'),
    filename: 'webpack.bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist-webpack'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
