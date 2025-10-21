import { useWindowWidth } from "./useWindowWidth";

export const useIsMobile = () => {
	const width = useWindowWidth();

	return width < 768;
};
