import clsx from "clsx";
import { ReactNode } from "react";

type ContainerProps = {
	children: ReactNode;
	className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
	return (
		<div className={clsx(className, "w-full max-w-7xl px-5 mx-auto lg:px-10")}>
			{children}
		</div>
	);
};
