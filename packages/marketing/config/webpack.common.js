module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};

/* Webpack rules helps to declare loader which helps to process your files for the transformation.
 ex: babel-loader is used for transforming your es6 & above code to es5 so that js code
 can on older browsers

 */
