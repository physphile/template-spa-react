import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";

const shouldAnalyze = process.env.ANALYZE === "true";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			// babel: {
			// 	plugins: [["babel-plugin-react-compiler"]],
			// },
		}),
		shouldAnalyze ? analyzer() : undefined,
	],
	resolve: {
		alias: {
			"@": "/src",
		},
	},
});
