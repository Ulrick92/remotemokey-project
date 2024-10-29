import Link from "next/link";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Typography } from "@/ui/design-system/typography/typography";

export const AccoutAvatarNavigationLink = () => {
	return (
		<Link href="/mon-espace" className="flex items-center gap-2">
			<Avatar src="" alt="" size="large" />
			<div className="max-w-[160px]">
				<Typography variant="caption2" weight="medium" className="truncate">
					Arnaud Desportes
				</Typography>
				<Typography
					variant="caption4"
					weight="medium"
					theme="gray"
					className="truncate"
				>
					Mon compte
				</Typography>
			</div>
		</Link>
	);
};
