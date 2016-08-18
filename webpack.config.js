var path = require('path');

module.exports = {
  entry: "./app/App.jsx",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3333,
    inline: true,
    quiet: false,
    noInfo: false,
    contentBase: './public',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
