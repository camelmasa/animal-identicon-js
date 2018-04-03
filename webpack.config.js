const config = {
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    library: 'animalIdenticon',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            plugins: [ "add-module-exports"]
          }
        }
      }
    ]
  },
  resolve: { extensions: ['.js'] },
}

module.exports = config
