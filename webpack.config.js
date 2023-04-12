//webpack.config.js
const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		main: './src/index.ts',
	},
	output: {
		path: path.resolve(__dirname, './lib'),
		filename: 'main-bundle.js', // <--- Will be compiled to this single file
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
		],
	},
};
