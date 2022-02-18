const webpack = require("webpack");

// module.exports = {
// 	pluginOptions: {
// 		i18n: {
// 			locale: "uz",
// 			fallbackLocale: "ru",
// 			localeDir: "locales",
// 			enableInSFC: false
// 		}
// 	},
// 	productionSourceMap: false,
//
// 	// disable hashes in filenames
// 	filenameHashing: true,
// 	// delete HTML related webpack plugins
// 	chainWebpack: config => {
// 		// config.plugins.delete('html')
// 		config.plugins.delete('preload')
// 		config.plugins.delete('prefetch')
// 		config.module
// 			.rule('images')
// 			.use('url-loader')
// 			.loader('url-loader')
// 			.tap(options => Object.assign(options, { limit: 10240 }))
// 	}
// };

module.exports = {
	pwa: {
		workboxOptions: {
			skipWaiting: true
		}
	},
	pluginOptions: {
		i18n: {
			locale: "uz",
			fallbackLocale: "ru",
			localeDir: "locales",
			enableInSFC: false
		}
	},
	productionSourceMap: false,
	configureWebpack: {
		plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
		optimization: {
			runtimeChunk: "single",
			splitChunks: {
				chunks: "all",
				maxInitialRequests: Infinity,
				minSize: 0,
				maxSize: 200000,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name(module) {
							const packageName = module.context.match(
								/[\\/]node_modules[\\/](.*?)([\\/]|$)/
							)[1];
							return `npm.${packageName.replace("@", "")}`;
						}
					}
				}
			}
		}
	},
	chainWebpack: config => {
		config.module
			.rule("i18n")
			.resourceQuery(/blockType=i18n/)
			.type("javascript/auto")
			.use("i18n")
			.loader("@kazupon/vue-i18n-loader")
			.end();
		config.performance.maxEntrypointSize(400000).maxAssetSize(400000);
	}
};
