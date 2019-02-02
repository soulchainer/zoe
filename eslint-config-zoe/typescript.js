const path = require('path');

module.exports = {
	extends: [
		path.join(__dirname, 'index.js'),
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off'
	}
};
