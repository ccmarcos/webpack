var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use:ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader','sass-loader'],
					publicPath: "/dist"
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 3000,
		stats:"errors-only",
		open: true
	},
	plugins: [new HtmlWebpackPlugin({
    title: 'Project demostration',
    template: './src/index.html', // Load a custom template (lodash by default see the FAQ for details)
  }),
	new ExtractTextPlugin({
		filename: "app.css",
		disable: false,
		allChunks: true
	})
]
}
