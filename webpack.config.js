const path = require('path');
//var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  //target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  node: {
    //"aws-sdk": "empty",
  //  "child_process": "empty",
    //"fs": "empty",
    //"module": "empty",
   // "tls": "empty",
   // "net": "empty"
  },
  externals: [
//  nodeExternals(),
//'aws-sdk',
    //'child_process',
  //  'fs',
    //'module',
    //'tls',
    //'net'
  ]
};
