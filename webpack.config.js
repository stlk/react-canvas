var webpack = require('webpack');

module.exports = {
  cache: true,

  watch: true,

  entry: {
    'listview': ['./examples/listview/app.js'],
    'timeline': ['./examples/timeline/app.js'],
    'css-layout': ['./examples/css-layout/app.js'],
    'gradient': ['./examples/gradient/app.js'],
    'react-with-canvas': ['./examples/export/app.js'],
  },

  output: {
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' },
    ],
    postLoaders: [
      { loader: "transform?brfs" }
    ]
  },

  resolve: {
    root: __dirname,
    alias: {
      'react-canvas': 'lib/ReactCanvas.js'
    }
  }
};
