const path = require('path');
const webpack = require('webpack');
const config = require('./config');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:' + (config.port || 8081),
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'src')
			}
		]
	}
};
