import { BaseComponentProps } from "@/types/onboarding-steps-list";

export const OnboardingView = ({
	getCurrentStep,
	isFinalStep,
	isFirstStep,
	next,
	prev,
	stepsList,
}: BaseComponentProps) => {
	if (getCurrentStep()?.component) {
		const Component = getCurrentStep()?.component.step;

		return (
			<div>
				{Component && (
					<Component
						getCurrentStep={getCurrentStep}
						isFinalStep={isFinalStep}
						isFirstStep={isFirstStep}
						next={next}
						prev={prev}
						stepsList={stepsList}
					/>
				)}
			</div>
		);
	}

	return null;
};
