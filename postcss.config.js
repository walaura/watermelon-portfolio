module.exports = ctx => ({
	plugins: [
		require('postcss-import')({
			root: './css',
		}),
		require('postcss-mixins')(),
		require('postcss-nesting')(),
		require('postcss-preset-env')({
			stage: 0,
		}),
		require('cssnano'),
	],
});
