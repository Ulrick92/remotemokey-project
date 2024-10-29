"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";
import clsx from "clsx";

type ActiveLinkProps = {
	href: string;
	children: ReactNode;
};

export const ActiveLink = ({ children, href }: ActiveLinkProps) => {
	const pathname = usePathname();

	const isActive: boolean = useMemo(() => {
		return pathname === href;
	}, [pathname, href]);

	return (
		<Link href={href} className={clsx(isActive && "text-primary font-medium")}>
			{children}
		</Link>
	);
};
