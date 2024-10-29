import React from "react";

export interface BaseComponentProps {
	getCurrentStep: () => OnboardingStepsListInterface | undefined;
	next: () => void;
	prev: () => void;
	isFirstStep: () => boolean;
	isFinalStep: () => boolean;
	stepsList: OnboardingStepsListInterface[];
}

export interface OnboardingStepsListInterface {
	id: number;
	label: string;
	component: {
		step: React.ComponentType<BaseComponentProps>;
	};
}
