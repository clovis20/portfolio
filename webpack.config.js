const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  // Outras configurações do webpack...

  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      querystring: require.resolve("querystring-es3"),
    },
  },
  plugins: [new NodePolyfillPlugin()],
}
