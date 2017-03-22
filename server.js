var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var config = require('./config.json');

new WebpackDevServer(webpack(webpackConfig), {
	publicPath: webpackConfig.output.publicPath
}).listen(config.port || 8081, 'localhost', function(err, result) {
	if(err) console.log(err);
	console.log('Running at http://localhost:' + (config.port || 8081));
});
