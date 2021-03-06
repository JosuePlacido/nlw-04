module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'prettier/standard',
		'prettier/react'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 11,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
		'eslint-plugin-import-helpers'
	],
	rules: {
		'prettier/prettier': 'error',
		'import-helpers/order-imports': [
			'warn',
			{
				// example configuration
				newlinesBetween: 'always',
				groups: [
					'/^react/',
					'module',
					'/^~/',
					['parent', 'sibling', 'index']
				],
				alphabetize: { order: 'asc', ignoreCase: true }
			}
		]
	},
	settings: {
		'import/resolver': {
			typescript: {}
		},
		react: {
			version: 'detect'
		}
	}
};
