const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
    watchFiles: ['src'],
    hot: true,
  },
};
