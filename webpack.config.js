const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.ts',
    print: './src/print.ts'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management'
        })
  ],
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
