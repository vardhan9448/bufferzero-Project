const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',

        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use:
                ['style-loader', 'css-loader'],

      },
    ],
   
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
  })],
  devServer: {
    historyApiFallback: true,
  },
};

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'Sachin.js',
//   },
// module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           },
//       },
//     ],
//   },
//   plugins: [new HtmlWebpackPlugin({
//       template: './public/index.html',
//       filename: 'Sachin.html',
//   })],

// };
