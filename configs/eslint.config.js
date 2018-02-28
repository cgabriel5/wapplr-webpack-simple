// [https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99]
module.exports = {
	// [https://eslint.org/docs/user-guide/configuring#specifying-parser-options]
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: false
		}
	},
	env: { es6: true },
	// [https://eslint.org/docs/user-guide/configuring#specifying-globals]
	// [https://stackoverflow.com/a/34820916]
	globals: {
		module: true
	},
	// Extending recommended configuration and configuration derived from
	// eslint-config-prettier.
	// eslint:recommended: [https://eslint.org/docs/rules/]
	extends: ["eslint:recommended", "prettier"],
	plugins: ["prettier"], // Activating esling-plugin-prettier (--fix stuff).
	rules: {
		"prettier/prettier": [
			// Customizing prettier rules (unfortunately not many of them
			// are customizable).
			"error",
			{
				bracketSpacing: true,
				jsxBracketSameLine: false,
				parser: "babylon",
				printWidth: 80,
				semi: true,
				singleQuote: false,
				tabWidth: 4,
				trailingComma: "none",
				useTabs: true
			}
		],
		eqeqeq: ["error", "always"], // Adding some custom ESLint rules.
		parser: "babel-eslint"
	}
};
