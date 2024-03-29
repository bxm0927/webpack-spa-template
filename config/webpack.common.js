/*
 * Webpack Common Configuration
 * @Author: xiaoming.bai
 * @Date: 2019-05-28 18:03:12
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2019-06-23 11:32:22
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const devEnv = process.env.NODE_ENV !== 'production'
const prodEnv = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: devEnv ? 'js/[name].js' : 'js/[name].[contenthash].js',
    publicPath: prodEnv ? '/webpack-spa-template/' : '/',
  },
  optimization: {
    usedExports: true, // tree shaking
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // style
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      // images
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024, // 8K
              outputPath: 'img/',
              name: devEnv ? '[name].[ext]' : '[name].[hash:8].[ext]',
            },
          },
          'image-webpack-loader',
        ],
      },
      // svg
      {
        test: /\.(svg)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'img/',
            name: devEnv ? '[name].[ext]' : '[name].[hash:8].[ext]',
          },
        },
      },
      // fonts
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024, // 8K
            outputPath: 'fonts/',
            name: devEnv ? '[name].[ext]' : '[name].[hash:8].[ext]',
          },
        },
      },
      // media
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024, // 8K
            outputPath: 'media/',
            name: devEnv ? '[name].[ext]' : '[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      favicon: path.resolve(__dirname, '../static/favicon.ico'),
    }),
    // Copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist'),
      },
    ]),
    // Extract css
    new MiniCssExtractPlugin({
      filename: devEnv ? 'css/[name].css' : 'css/[name].[contenthash].css',
      chunkFilename: devEnv ? 'css/[id].css' : 'css/[id].[contenthash].css',
    }),
  ],
}
