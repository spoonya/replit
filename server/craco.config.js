const path = require('path');

const tsconfig = path.resolve(__dirname, 'tsconfig.backend.json');
const entry = path.resolve(__dirname, 'backend', 'index.ts');

module.exports = {
  entry,
  output: {
    path: __dirname,
    filename: 'server.js'
  },
  mode: 'development',
  target: 'node',
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
