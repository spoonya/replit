const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist', 'docs');

module.exports = {
  mode: 'development',
  entry: {
    app: './swagger.js',
  },
  module: {
    rules: [
      {
        test: /\.yaml$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [outputPath],
    }),
    new HtmlWebpackPlugin({
      template: 'api-doc.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: outputPath,
  }
};