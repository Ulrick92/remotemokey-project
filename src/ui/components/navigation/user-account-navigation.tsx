"use client";

import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { ActiveLink } from "./active-link";

export const UserAccountNavigation = () => {
	return (
		<Box className="flex flex-col gap-7">
			<Typography component="ul" className="space-y-4">
				<li>
					<Typography variant="caption2" weight="medium">
						<ActiveLink href="/mon-espace">Mon compte</ActiveLink>
					</Typography>
				</li>
				<li>
					<Typography variant="caption2" weight="medium">
						<ActiveLink href="/mon-compte/mes-projets">Mes projets</ActiveLink>
					</Typography>
				</li>
			</Typography>
			<Button action={() => console.log("test")} variant="danger">
				Déconnexion
			</Button>
		</Box>
	);
};
