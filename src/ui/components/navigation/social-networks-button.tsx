"use client";

import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { RiFacebookBoxFill } from "react-icons/ri";
import clsx from "clsx";

type SocialNetworksButtonProps = {
	className?: string;
	theme?: "gray" | "accent" | "secondary";
};

export const SocialNetworksButton = ({
	className,
	theme = "accent",
}: SocialNetworksButtonProps) => {
	const actionTest = () => {
		console.log("hello world");
	};

	const icoList = footerSocialNetworksLinks.map((socilaNetwork) => (
		<Button
			key={uuidv4()}
			variant="ico"
			iconTheme={theme}
			icon={{ icon: socilaNetwork.icon || RiFacebookBoxFill }}
			action={actionTest}
			baseUrl={socilaNetwork.baseUrl}
			linkType={socilaNetwork.type}
		/>
	));

	return (
		<div className={clsx(className, "flex items-center gap-2.5")}>
			{icoList}
		</div>
	);
};
