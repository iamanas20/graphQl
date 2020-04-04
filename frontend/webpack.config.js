const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, '/app/js/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },
  module:{
    rules:[
		  {
		    test: /\.(js|jsx)$/,
		    exclude: /node_modules/,
		    loader: "babel-loader"
		  },
	    {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
	      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
	      loader: 'url-loader?limit=100000',
	    },
	    {
	      test: /\.css$/,  
	      include: /node_modules/,  
	      loaders: ['style-loader', 'css-loader'],
	 		},
	 		{
			  test: /\.css$/,
			  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			},
			{
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },
  resolve: {
  	alias: {
      variables: path.resolve(__dirname, 'shared/variables.scss'),
      layouts: path.resolve(__dirname, 'assets/js/layouts/index.js'),
      pages: path.resolve(__dirname, 'assets/js/pages/index.js'),
      Assets: path.resolve(__dirname, 'assets/assets'),
    }
  },
	plugins:[
		new HWP(
		  {
		  	template: path.join(__dirname,'/index.html'),
		  }
	  ),
	]
}