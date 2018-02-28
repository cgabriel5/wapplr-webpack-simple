module.exports = {
	plugins: {
		"postcss-unprefix": {},
		"postcss-merge-longhand": {},
		autoprefixer: {
			browsers: [
				"ie >= 10",
				"ie_mob >= 10",
				"ff >= 30",
				"chrome >= 34",
				"safari >= 7",
				"opera >= 23",
				"ios >= 7",
				"android >= 4.4",
				"bb >= 10",
				"UCAndroid 11",
				"OperaMini All",
				"Samsung >= 4",
				"ChromeAndroid >= 56"
			],
			cascade: false
		},
		perfectionist: {
			cascade: true,
			colorCase: "lower",
			colorShorthand: false,
			format: "expanded",
			indentChar: "\t",
			indentSize: 1,
			maxAtRuleLength: 80,
			maxSelectorLength: false,
			maxValueLength: 80,
			sourcemap: false,
			syntax: "string",
			trimLeadingZero: false,
			trimTrailingZeros: true,
			zeroLengthNoUnit: true
		}
	}
};
