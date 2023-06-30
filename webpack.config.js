const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [new HtmlWebpackPlugin()({
    template: path.join(__dirname, 'src', 'template.html'),
    filename: 'index.html'
  })],

  mode: 'development'
}