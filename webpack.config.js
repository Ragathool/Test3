var path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

  

module.exports = {
    mode: 'development', 
    entry:  path.resolve(__dirname, "code.ts"), 
    output: {
      path: path.resolve(__dirname, "distribution"),
      filename: 'bundle.js',
      
      },
      devServer: {
        contentBase: path.resolve(__dirname, "distribution"),
        watchContentBase: true, 
        port: 9000, 
      },

      resolve: {
        extensions: ['.ts', '.js']
      },

      module: {
        rules: [
          // all files with a `.ts` extension will be handled by `ts-loader`
          { test: /\.ts$/, loader: 'ts-loader' }
        ]
      },
      
        plugins: [
          new WebpackNotifierPlugin({alwaysNotify: true}),
        ]

  };



  