"use client";

import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { ReactNode } from "react";
import { Spinner } from "../spinner/spinner";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

type ButtonProps = {
	size?: "small" | "medium" | "large";
	variant?:
		| "accent"
		| "secondary"
		| "outline"
		| "disabled"
		| "ico"
		| "success"
		| "danger";
	icon?: IconProps;
	iconTheme?: "accent" | "secondary" | "gray";
	iconPosition?: "left" | "right";
	disabled?: boolean;
	isLoading?: boolean;
	children?: ReactNode;
	baseUrl?: string;
	linkType?: LinkType;
	action?: Function;
	type?: "button" | "submit";
	fullWidth?: boolean;
};

export const Button = ({
	children,
	disabled,
	icon,
	iconPosition = "right",
	iconTheme = "accent",
	isLoading,
	size = "medium",
	variant = "accent",
	baseUrl,
	linkType = LinkTypes.INTERNAL,
	action = () => {},
	type = "button",
	fullWidth = false,
}: ButtonProps) => {
	let variantTyles: string = "";
	let sizeStyles: string = "";
	let icoSize: number = 0;

	switch (variant) {
		case "accent": // Default
			variantTyles = "bg-primary hover:bg-primary-400 text-white rounded";
			break;
		case "secondary":
			variantTyles =
				"bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
			break;
		case "outline":
			variantTyles =
				"bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
			break;
		case "disabled":
			variantTyles =
				"bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
			break;
		case "success":
			variantTyles = "bg-secondary hover:bg-secondary-400 text-white rounded";
			break;
		case "danger":
			variantTyles =
				"bg-alert-danger hover:bg-alert-danger/75 text-white rounded";
			break;
		case "ico":
			if (iconTheme === "accent") {
				//Default
				variantTyles =
					"bg-primary hover:bg-primary-400 text-white rounded-full";
			}
			if (iconTheme === "secondary") {
				variantTyles =
					"bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
			}
			if (iconTheme === "gray") {
				variantTyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
			}
			break;
	}

	switch (size) {
		case "small":
			sizeStyles = `text-caption3 font-medium ${
				variant === "ico"
					? "flex items-center justify-center w-[40px] h-[40px]"
					: "px-[14px] py-[12px]"
			}`;
			icoSize = 18;
			break;
		case "medium": // Default
			sizeStyles = `text-caption2 font-medium ${
				variant === "ico"
					? "flex items-center justify-center w-[50px] h-[50px]"
					: "px-[18px] py-[15px]"
			}`;
			icoSize = 20;
			break;
		case "large":
			sizeStyles = `text-caption1 font-medium ${
				variant === "ico"
					? "flex items-center justify-center w-[60px] h-[60px]"
					: "px-[22px] py-[18px]"
			}`;
			icoSize = 24;
			break;

		default:
			break;
	}

	const buttonContent = (
		<>
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center">
					{variant === "accent" ||
					(variant === "ico" && iconTheme !== "secondary") ? (
						<Spinner size="small" variant="white" />
					) : (
						<Spinner size="small" />
					)}
				</div>
			)}
			<div className={clsx(isLoading && "invisible")}>
				{icon && variant === "ico" ? (
					<icon.icon size={icoSize} />
				) : (
					<div className={clsx(icon && "flex items-center gap-2")}>
						{icon && iconPosition === "left" && <icon.icon size={icoSize} />}
						{children}
						{icon && iconPosition === "right" && <icon.icon size={icoSize} />}
					</div>
				)}
			</div>
		</>
	);

	const handleClick = () => {
		if (action) {
			action();
		}
	};

	const buttonElement = (
		<button
			className={clsx(
				variantTyles,
				icoSize,
				sizeStyles,
				isLoading && "cursor-not-allowed",
				fullWidth && "w-full",
				"relative animate"
			)}
			type={type}
			disabled={disabled || isLoading ? true : false}
			onClick={handleClick}
		>
			{buttonContent}
		</button>
	);

	if (baseUrl) {
		if (linkType === LinkTypes.EXTERNAL) {
			return (
				<a href={baseUrl} target="_blank">
					{buttonElement}
				</a>
			);
		} else {
			return <Link href={baseUrl}>{buttonElement}</Link>;
		}
	}

	return buttonElement;
};
