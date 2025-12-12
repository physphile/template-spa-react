import type { PartialLocation, QueryParamAdapterComponent } from "use-query-params";

import { useLocation, useNavigate } from "react-router";

export const ReactRouter7Adapter = (({ children }) => {
	const navigate = useNavigate();
	const location = useLocation();

	return children({
		location,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		push: ({ search, state }: PartialLocation) => void navigate({ search }, { state }),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		replace: ({ search, state }: PartialLocation) => void navigate({ search }, { replace: true, state }),
	});
}) satisfies QueryParamAdapterComponent;
