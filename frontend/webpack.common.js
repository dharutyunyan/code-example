const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {GenerateSW} = require('workbox-webpack-plugin');


module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './dist/[name].bundle.js'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, 'src', 'js')
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
              test: /\.vue$/,
              loader: 'vue-loader'
          },
          {
              test: /\.s[ac]ss$/i,
              use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
              ],
          },
          {
              test: /\.(png|jpg|gif|svg)$/,
              use: [{
                  loader: 'file-loader',
                  options: {}
              }]
          }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new GenerateSW({
            cacheId: 'dg-pwa',
           clientsClaim: true,
           skipWaiting: true,
           maximumFileSizeToCacheInBytes: 30*1024*1024,
         }),
    ],

};
