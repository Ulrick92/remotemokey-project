import clsx from "clsx";
import Image from "next/image";
import { Spinner } from "../spinner/spinner";

type AvatarProps = {
	size?: "small" | "medium" | "large" | "extra-large";
	src: string;
	alt: string;
	isLoading?: boolean;
};

export const Avatar = ({
	size = "medium",
	src,
	alt,
	isLoading,
}: AvatarProps) => {
	let sizeStyle: string = "";

	switch (size) {
		case "small":
			sizeStyle = "w-[24px] h-[24px]";
			break;
		case "medium": // Default
			sizeStyle = "w-[34px] h-[34px]";
			break;
		case "large":
			sizeStyle = "w-[50px] h-[50px]";
			break;
		case "extra-large":
			sizeStyle = "w-[130px] h-[130px]";
			break;
	}

	return (
		<div
			className={clsx(
				sizeStyle,
				isLoading && "flex items-center justify-center",
				"bg-gray-300 rounded-full relative overflow-hidden"
			)}
		>
			<div
				className={clsx(
					isLoading ? "opacity-40" : "opacity-0",
					"absolute z-10 w-full h-full bg-white animate"
				)}
			/>
			<Image
				src={src ? src : "/assets/svg/barrel.svg"}
				alt={alt}
				fill
				sizes="100wh"
				className={clsx(
					isLoading && "blur-[2px]",
					"rounded-full object-cover object-center"
				)}
			/>
			{isLoading && <Spinner className="relative z-20" />}
		</div>
	);
};
