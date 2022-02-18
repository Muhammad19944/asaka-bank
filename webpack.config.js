// webpack.config.js
const webpack = require('webpack');

module.exports = {
	output: {
		filename: '[name].[hash].bundle.js'
	},
	rules: [
		{
			test: /\.s(c|a)ss$/,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				"vue-style-loader",
				"css-loader",
				"postcss-loader",
				"sass-loader",
				{
					loader: "sass-loader",
					// Requires sass-loader@^7.0.0
					options: {
						implementation: require("sass"),
						fiber: require("fibers"),
						indentedSyntax: true // optional
					},
					// Requires sass-loader@^8.0.0
					options: {
						implementation: require("sass"),
						sassOptions: {
							fiber: require("fibers"),
							indentedSyntax: true // optional
						}
					}
				}
			]
		}
	],
	resolve: { alias: { "@": require("path").resolve(__dirname, "src") } },
	presets: ["@vue/cli-plugin-babel/preset"],
	plugins: [
		new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
		new webpack.optimize.UglifyJsPlugin(),
		new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
		new HtmlWebpackPlugin(),
		new PreloadWebpackPlugin({
			rel: 'preload',
			include: 'all',
			as(entry) {
				if (/\.css$/.test(entry)) return 'style';
				if (/\.woff2$/.test(entry)) return 'font';
				if (/\.png$/.test(entry)) return 'image';
				return 'script';
			}
		})
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	chainWebpack: config => {
		// remove the prefetch plugin
		config.plugins.delete('prefetch')
		config.plugins.assign('preload')

		// or:
		// modify its options:
		// config.plugin('prefetch').tap(options => {
		// 	options[0].fileBlacklist = options[0].fileBlacklist || []
		// 	options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
		// 	return options
		// })
	}
};
