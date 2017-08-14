const path = require('path');

module.exports = {
  entry: {
    app: './src/index.ts',
    print: './src/print.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
