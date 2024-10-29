import { Button } from "@/ui/design-system/button/button";
import clsx from "clsx";

type OnboardingFooterProps = {
	next?: () => void;
	prev?: () => void;
	isFinalStep?: () => boolean;
	isFirstStep?: () => boolean;
	isLoading?: boolean;
};

export const OnboardingFooter = ({
	isFinalStep,
	isFirstStep,
	next,
	prev,
	isLoading,
}: OnboardingFooterProps) => {
	let actionButtonTitle: string;

	if (isFirstStep && isFirstStep()) {
		actionButtonTitle = "Démarrer";
	} else if (isFinalStep && isFinalStep()) {
		actionButtonTitle = "Terminer";
	} else {
		actionButtonTitle = "Continuer";
	}

	return (
		<div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400 z-20">
			<div
				className={clsx(
					prev && !next && "justify-start",
					!prev && next && "justify-end",
					prev && next && "justify-between",
					"flex items-center gap-5"
				)}
			>
				{prev && (
					<Button
						disabled={isLoading}
						variant={!isLoading ? "outline" : "disabled"}
						action={prev}
					>
						Retour
					</Button>
				)}
				{next && (
					<Button isLoading={isLoading} action={next}>
						{actionButtonTitle}
					</Button>
				)}
			</div>
		</div>
	);
};
