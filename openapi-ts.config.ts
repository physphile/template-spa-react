import { defaultPlugins } from "@hey-api/openapi-ts";

export default {
	input: "https://uray.ruslixag.com/openapi.json",
	output: "src/shared/api/uray",
	plugins: [...defaultPlugins, "@tanstack/react-query"],
};
