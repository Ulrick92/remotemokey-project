"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb } from "./breadcrumbs";

export const ContainerBreadcrumbs = () => {
	const pathname = usePathname();

	return <>{pathname !== "/" && <Breadcrumb />}</>;
};
