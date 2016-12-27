var path = require('path');
var srcPath = path.join(__dirname, 'src');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'frontend/js', 'client.js'),
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          },
          {test: /\.css$/, loader: "style-loader!css-loader"}
      ]
  }
};
