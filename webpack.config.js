const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
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
			},
			{
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				}),
				test: /\.(css)$/
			},
			{ test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml' },
			{ test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff' },
			{ test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2' },
			{ test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream' },
			{ test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject' },
			{ test: /\.(png|jpg|gif|cur)$/, loader: 'url-loader?limit=8192' }
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	]
};
