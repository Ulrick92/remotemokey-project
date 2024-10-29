import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spinner";
import { ReactNode } from "react";

type SessionProps = {
	children: ReactNode;
};

export const Session = ({ children }: SessionProps) => {
	const authUserIsLoading = false;

	if (!authUserIsLoading) {
		return <>{children}</>;
	}

	return <ScreenSpinner />;
};
