var webpack = require('webpack');

module.exports = {

  entry: './examples/export/app.js',

  output: {
    filename: 'build/react-with-canvas.min.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
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
