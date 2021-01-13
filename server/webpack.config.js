const path = require('path');

const tsconfig = path.resolve(__dirname, 'tsconfig.json');
const entry = path.resolve(__dirname, 'index.ts');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry,
  output: {
    path: dist,
    filename: 'server.js'
  },
  mode: 'development',
  target: 'node',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: tsconfig
        },
        exclude: '/node_modules/'
      }
    ]
  }
};
