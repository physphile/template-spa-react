import { ThemeProvider } from "@gravity-ui/uikit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";

import "./index.css";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import "@gravity-ui/illustrations/styles/styles.scss";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { App } from "./App.tsx";

const root = document.querySelector("#root");

if (!root) {
	throw new Error("Root element not found");
}

const queryClient = new QueryClient();

createRoot(root).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme="system">
					<App />
				</ThemeProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>
);
