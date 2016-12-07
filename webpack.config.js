module.exports = {
    entry: {
      scroll: "./src/scroll.js",
      //dialog: "./src/components/dialog.js"
    },

    output: {
      path: __dirname + "/public",
      filename: "[name].bundle.js",
      publicPath: '/'
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ["react", "es2015"],
            cacheDirectory: false
          }
        }
      ]
    }
};
