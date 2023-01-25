module.exports = {
  resolve: {
    extensions: ['.ts', '.js','.jsx', '.tsx', '.json']
  },
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
