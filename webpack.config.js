import path from "path";
import webpack from "webpack";


export default (DEBUG, PORT) => ({
  entry: [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    "webpack/hot/dev-server",
    "./src/main"
  ],

  output: {
    path: path.resolve(__dirname, "build", "generated"),
    filename: "main.js",
    publicPath: "/generated/"
  },

  cache: DEBUG,
  debug: DEBUG,

  // For options, see http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG && "inline-source-map",

  module: {
    loaders: [
      // Load ES6/JSX
      { test: /\.jsx?$/, include: path.join(__dirname, "src"), loader: "babel-loader" },

      // Load styles
      { test: /\.css$/, loader: "style!css!autoprefixer" },
      { test: /\.less$/, loader: "style!css!autoprefixer!less" },

      // Load images
      { test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=10000&mimetype=image/svg" },

      // Load fonts
      { test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)$/, loader: "file-loader" }
    ]
  },

  plugins: DEBUG
    ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
    : [],

  resolve: {
    modulesDirectories: [
      "node_modules",

      // https://github.com/webpack/webpack-dev-server/issues/60
      "web_modules"
    ],

    // Allow to omit extensions when requiring these files
    extensions: ["", ".js", ".jsx", ".es6"]
  }
});