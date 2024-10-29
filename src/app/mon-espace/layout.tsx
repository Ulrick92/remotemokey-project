import { Container } from "@/ui/components/container/container";
import { UserAccountNavigation } from "@/ui/components/navigation/user-account-navigation";
import { ReactNode } from "react";

type MySPaceLayoutProps = {
	children: ReactNode;
};

export default function MySPaceLayout({ children }: MySPaceLayoutProps) {
	return (
		<Container className="mb-14">
			<div className="grid grid-cols-12 gap-7">
				<div className="col-span-3">
					<UserAccountNavigation />
				</div>
				<div className="col-span-9">{children}</div>
			</div>
		</Container>
	);
}
