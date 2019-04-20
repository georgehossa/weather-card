const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './img/[name].[ext]',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyPlugin([
      {
        from: './src/img',
        to: 'img',
      },
    ]),
    new Dotenv({
      systemvars: true,
    }),
  ],
};
