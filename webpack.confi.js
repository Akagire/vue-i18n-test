import module from "./build/webpack.config";

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue",
        options: {
          loaders: {
            i18n: "@kazupon/vue-i18n-loader"
          }
        }
      }
    ]
  }
};
