var config = {
   entry: './app/main.js', // entry point
   output: {
         filename: 'index.js', // place where bundled app will be served
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080 // development port server
      },
   module: {
         loaders: [{
           test: /\.less$/,
          loader: "style-loader!css-loader!less-loader"
            },
            {
               test: /\.jsx?$/, // search for js files
               exclude: /node_modules/,
               loader: 'babel-loader',
   query: {
               presets: ['es2015', 'react'] // use es2015 and react
            }
         }
      ]
   }
}

module.exports = config;
