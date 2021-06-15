const path = require('path');

module.exports = {
  entry: './js/scripts.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /none_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
}