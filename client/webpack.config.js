const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    // entry point for application files
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    // output point for application files
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Add the webpack plugin to generate HTML file and inject bundles
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Janet's Awesome Text Editor"
      }),

      // Custom service worker injected
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),

      // manifest.json file created
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Janet's Awesome Text Editor",
        short_name: "J.A.T.E.",
        description: "Janet's Awesome Text Editor that can be used on or offline",
        background_color: "#272822",
        theme_color: "#31a9e1",
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          }
        ]
      })
      
    ],

    module: {
      rules: [
        // include CSS loaders for webpack
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // babel added to webpack to use ES6
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
