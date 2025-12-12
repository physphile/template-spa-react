import { ThemeProvider } from "@gravity-ui/uikit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";

import "./index.css";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import "@gravity-ui/illustrations/styles/styles.scss";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "./router";

const root = document.querySelector("#root");

if (!root) {
	throw new Error("Root element not found");
}

const queryClient = new QueryClient();

createRoot(root).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme="system">
				{/* eslint-disable-next-line react/jsx-max-depth */}
				<RouterProvider router={router} />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
);
