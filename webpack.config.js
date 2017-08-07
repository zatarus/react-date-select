module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    filename: process.env.NODE_ENV === 'production'
      ? 'react-date-select.min.js'
      : 'react-date-select.js'
  },

  module: {
    rules: [
      {
        test: /prop-types/,
        use: 'null-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-1'],
            plugins: [
              require('babel-plugin-transform-react-remove-prop-types').default,
            ],
          },
        },
      },
    ],
  },

  externals: [{
    jquery: 'jQuery',
    '@srph/jqt': 'jQuery'
  }]
};