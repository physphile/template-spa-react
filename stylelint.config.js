/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-config-recommended", "stylelint-config-recess-order"],
	plugins: [
		"@stylistic/stylelint-plugin",
		"stylelint-high-performance-animation",
		"stylelint-use-nesting",
		"stylelint-plugin-logical-css",
		"stylelint-plugin-use-baseline",
	],
	rules: {
		"@stylistic/color-hex-case": "lower",
		"@stylistic/number-leading-zero": "always",
		"@stylistic/unit-case": "lower",
		"color-function-notation": "modern",
		"csstools/use-nesting": "always",
		"plugin/no-low-performance-animation-properties": true,
		"plugin/use-baseline": [true, { available: "newly" }],
		"plugin/use-logical-properties-and-values": [true, { severity: "error" }],
		"plugin/use-logical-units": [true, { severity: "error" }],
		"selector-max-compound-selectors": 1,
	},
	ignoreFiles: ["dist/**"],
};
