import { Ear, FaceSmile, Gear } from "@gravity-ui/icons";
import {
	AsideHeader,
	type DrawerItemProps,
	FooterItem,
	MobileHeader,
	MobileHeaderFooterItem,
} from "@gravity-ui/navigation";
import { Sheet } from "@gravity-ui/uikit";
import { useMemo, useState } from "react";
import { Outlet } from "react-router";

import { useIsMobile } from "@/shared/hooks";
import { Settings } from "@/widgets/Settings";

export const App = () => {
	const isMobile = useIsMobile();

	const [isCompact, setIsCompact] = useState(false);
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	const menuItems = useMemo(
		() => [
			{
				icon: FaceSmile,
				id: "kek",
				title: "Kek",
			},
		],
		[]
	);

	const panelItems = useMemo<DrawerItemProps[]>(
		() => [{ children: <Settings />, id: "1", visible: isSettingsOpen }],
		[isSettingsOpen]
	);

	if (isMobile) {
		return (
			<>
				<MobileHeader
					burgerMenu={{
						items: menuItems,
						renderFooter: () => <MobileHeaderFooterItem icon={Gear} onClick={() => setIsSettingsOpen(prev => !prev)} />,
					}}
					logo={{ text: "template-spa-react" }}
					renderContent={() => <Outlet />}
				/>
				<Sheet onClose={() => setIsSettingsOpen(false)} visible={isSettingsOpen}>
					<Settings />
				</Sheet>
			</>
		);
	}

	return (
		<AsideHeader
			compact={isCompact}
			logo={{ icon: Ear, text: "template-spa-react" }}
			menuItems={menuItems}
			onChangeCompact={setIsCompact}
			onClosePanel={() => setIsSettingsOpen(false)}
			panelItems={panelItems}
			renderContent={() => <Outlet />}
			renderFooter={() => (
				<>
					<FooterItem
						compact={isCompact}
						item={{
							icon: Gear,
							id: "1",
							onItemClick: () => setIsSettingsOpen(prev => !prev),
							title: "Settings",
						}}
					/>
				</>
			)}
		/>
	);
};
