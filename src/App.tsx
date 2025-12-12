import { Ear, FaceSmile, Gear } from "@gravity-ui/icons";
import {
	AsideHeader,
	type DrawerItemProps,
	FooterItem,
	type MenuItem,
	MobileHeader,
	MobileHeaderFooterItem,
	type MobileMenuItem,
} from "@gravity-ui/navigation";
import { Sheet } from "@gravity-ui/uikit";
import { useState } from "react";
import { Outlet } from "react-router";
import { QueryParamProvider } from "use-query-params";

import { useIsMobile } from "@/shared/hooks";
import { Settings } from "@/widgets/Settings";

import { ReactRouter7Adapter } from "./ReactRouter7Adapter";

export const App = () => {
	const isMobile = useIsMobile();

	const [isCompact, setIsCompact] = useState(false);
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	const menuItems = [
		{
			icon: FaceSmile,
			id: "kek",
			title: "Kek",
		},
	] satisfies MenuItem[] | MobileMenuItem[];

	const panelItems = [{ children: <Settings />, id: "1", visible: isSettingsOpen }] satisfies DrawerItemProps[];

	const toggleSettings = () => {
		setIsSettingsOpen(prev => !prev);
	};

	const renderContent = () => <Outlet />;

	const onSheetClose = () => {
		setIsSettingsOpen(false);
	};

	if (isMobile) {
		return (
			<>
				<MobileHeader
					burgerMenu={{
						items: menuItems,
						renderFooter: () => <MobileHeaderFooterItem icon={Gear} onClick={toggleSettings} />,
					}}
					logo={{ text: "template-spa-react" }}
					renderContent={renderContent}
				/>
				<Sheet onClose={onSheetClose} visible={isSettingsOpen}>
					<Settings />
				</Sheet>
			</>
		);
	}

	return (
		<QueryParamProvider adapter={ReactRouter7Adapter}>
			<AsideHeader
				compact={isCompact}
				logo={{ icon: Ear, text: "template-spa-react" }}
				menuItems={menuItems}
				onChangeCompact={setIsCompact}
				onClosePanel={() => {
					setIsSettingsOpen(false);
				}}
				panelItems={panelItems}
				renderContent={() => <Outlet />}
				renderFooter={() => (
					<FooterItem
						compact={isCompact}
						item={{
							icon: Gear,
							id: "1",
							onItemClick: () => {
								setIsSettingsOpen(prev => !prev);
							},
							title: "Settings",
						}}
					/>
				)}
			/>
		</QueryParamProvider>
	);
};
