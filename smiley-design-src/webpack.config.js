module.exports = {
    module: {
      loaders: [
        { test: /\.css$/, 
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
       },
      ]
    }
  };

  // module.exports = {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         loader: 'css-loader',
  //         options: {
  //           camelCase: true,
  //         },
  //       },
  //     ],
  //   },
  // };