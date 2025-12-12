import { Settings as GravitySettings } from "@gravity-ui/navigation";
import { Switch } from "@gravity-ui/uikit";

import { useIsMobile } from "@/shared/hooks";

export const Settings = () => {
	const isMobile = useIsMobile();

	return (
		<GravitySettings view={isMobile ? "mobile" : "normal"}>
			<GravitySettings.Page title="Основные">
				<GravitySettings.Section title="Отображение">
					<GravitySettings.Item title="Всегда скрывать">
						{/* eslint-disable-next-line react/jsx-max-depth */}
						<Switch />
					</GravitySettings.Item>
				</GravitySettings.Section>
			</GravitySettings.Page>
		</GravitySettings>
	);
};
