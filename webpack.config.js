var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ManifestPlugin = require('webpack-manifest-plugin');
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss       = require('postcss');
var mqpacker =  require('css-mqpacker');
var postcss_scss = require('postcss-scss');

module.exports = {
  devtool: 'source-map',
  entry: ['./web/static/js/app.js'],
  output: {
    path: './priv/static',
    filename: 'js/app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [ 'node_modules', __dirname + "/web/static/js" ],
    alias: {
      phoenix_html: __dirname + "/deps/phoenix_html/web/static/js/phoenix_html.js",
      phoenix: __dirname + "/deps/phoenix/web/static/js/phoenix.js"
    }
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.scss$/,
        // loader: 'style-loader!css-loader!sass-loader!postcss-loader'
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass?includePaths[]=' + __dirname +  '/node_modules/bootstrap-sass/assets/stylesheets&includePaths[]=' + __dirname +  '/web/static/css',
          'postcss'
        )
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=application/octet-stream&name=../fonts/[name].[ext]' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=application/octet-stream&name=../fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=image/svg+xml&name=../fonts/[name].[ext]' }
    ]
  },
  // postcss: function () {
  //   return [autoprefixer, precss, mqpacker];
  // },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new webpack.optimize.CommonsChunkPlugin("js/common.bundle.js"),
    new CopyWebpackPlugin([
      { from: "./web/static/assets" }
    ]),
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: '/priv/static'
    })
  ]
};
