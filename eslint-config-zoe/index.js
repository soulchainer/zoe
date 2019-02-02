module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true
	},
	extends: [
		'react-app',
		'plugin:unicorn/recommended',
		'plugin:jest/recommended',
		'prettier',
		'prettier/react'
	],
	plugins: [
		'no-use-extend-native',
		'prettier',
		'unicorn',
		'jest',
		'react-hooks'
	],
	settings: {
		react: {
			version: '16.8.0'
		}
	},
	rules: {
		'prettier/prettier': 'error',
		'no-use-extend-native/no-use-extend-native': 'error',
		'unicorn/filename-case': 'off',
		'unicorn/no-abusive-eslint-disable': 'off',
		'react-hooks/rules-of-hooks': 'error'
	}
};
