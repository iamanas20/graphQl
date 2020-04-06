const path = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs'); // to check if the file exists

module.exports = (env) => {

  // Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);
  
  // Create the fallback path (the production .env)
  const basePath = currentPath + '/.env';

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + '.' + env.ENVIRONMENT;

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = envPath;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  
  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
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
      new webpack.DefinePlugin(envKeys)
  	]
  }
}