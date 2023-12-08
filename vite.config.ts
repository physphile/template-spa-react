import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssPresetEnv from 'postcss-preset-env';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
	plugins: [
		react(),
		stylelint({
			files: ['src/**/*.{css}'],
		}),
	],
	css: {
		postcss: {
			plugins: [
				postcssPresetEnv({
					features: {
						'nesting-rules': true,
					},
				}),
			],
		},
	},
});
