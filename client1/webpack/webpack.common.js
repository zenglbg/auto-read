const path = require('path')

const { getEntry, resolve } = require('./util')



module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].hash.js'
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      // "@": resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve('src'),
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      },
      {
        test: /\.xml$/,
        loader: 'xml-loader',
      }
    ]
  },
  plugins: [
  ]
}