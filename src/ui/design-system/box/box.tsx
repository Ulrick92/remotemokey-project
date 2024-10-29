import clsx from "clsx";
import { ReactNode } from "react";

type BoxProps = {
	children: ReactNode;
	className?: string;
	padding_x?: string;
	padding_y?: string;
};

export const Box = ({
	children,
	className,
	padding_x = "px-9",
	padding_y = "py-9",
}: BoxProps) => {
	return (
		<div
			className={clsx(
				"w-full border border-gray-400 bg-white rounded",
				padding_x,
				padding_y,
				className
			)}
		>
			{children}
		</div>
	);
};
