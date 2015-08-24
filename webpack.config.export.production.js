module.exports = {

  entry: './examples/export/app.js',

  output: {
    filename: 'build/react-with-canvas.min.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader!transform/cacheable?envify' },
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
