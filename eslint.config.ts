import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import prettierPlugin from "eslint-plugin-prettier/recommended";
// @ts-expect-error - no types available
import promisePlugin from "eslint-plugin-promise";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
// @ts-expect-error - no types available
import securityPlugin from "eslint-plugin-security";
import unicornPlugin from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import { configs as typescriptPlugin } from "typescript-eslint";

export default defineConfig([
	{
		ignores: ["**/*.d.ts", "dist", "node_modules", "prettier.config.js", "stylelint.config.js"],
	},
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{
		extends: ["js/recommended"],
		files: ["**/*.{js,mjs,cjs,ts}"],
		plugins: { js },
	},
	typescriptPlugin.all,
	perfectionistPlugin.configs["recommended-natural"],
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	reactPlugin.configs.flat.all,
	unicornPlugin.configs.all,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	securityPlugin.configs.recommended,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	promisePlugin.configs["flat/recommended"],
	{
		plugins: {
			"react-hooks": reactHooksPlugin,
		},
		rules: { ...reactHooksPlugin.configs["recommended-latest"].rules },
	},
	prettierPlugin,
	{
		rules: {
			"@typescript-eslint/consistent-return": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/naming-convention": "off",
			"@typescript-eslint/no-magic-numbers": "off",
			"@typescript-eslint/prefer-readonly-parameter-types": "off",
			"@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					ts: "never",
					tsx: "never",
				},
			],
			"import/no-unresolved": ["error", { ignore: ["^/"] }],
			"no-restricted-imports": [
				"error",
				{
					paths: [
						{
							importNames: ["useMemo", "useCallback", "memo"],
							message: "Не используй useMemo/useCallback/memo — за это отвечает React Compiler.",
							name: "react",
						},
						{
							importNames: ["useMemoizedFn"],
							message: "Не используй useMemoizedFn — за это отвечает React Compiler.",
							name: "ahooks",
						},
					],
				},
			],
			"no-restricted-syntax": [
				"error",
				{
					message: "Не используй глобальный React.* в типах, импортируй типы из 'react'.",
					selector: "TSTypeReference[typeName.left.name='React']",
				},
			],
			"react/function-component-definition": "off",
			"react/jsx-filename-extension": "off",
			"react/jsx-no-bind": "off",
			"react/react-in-jsx-scope": "off",
			"unicorn/filename-case": "off",
			"unicorn/no-array-callback-reference": "off",
			"unicorn/no-keyword-prefix": "off",
			"unicorn/no-null": "off",
			"unicorn/no-useless-undefined": "off",
			"unicorn/prefer-at": ["error", { checkAllIndexAccess: true }],
			"unicorn/prefer-ternary": "off",
			"unicorn/prevent-abbreviations": "off",
		},
		settings: {
			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
				},
			},
			react: {
				version: "detect",
			},
		},
	},
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
]);
