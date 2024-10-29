import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typography";
import { ProfileStepForm } from "./profile-step-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFieldsType } from "@/types/form";
import { useToggle } from "@/hooks/use-toggle";

export const ProfileStep = ({
	next,
	prev,
	getCurrentStep,
	stepsList,
	isFinalStep,
	isFirstStep,
}: BaseComponentProps) => {
	const { value: isLoading, setValue: setLoading } = useToggle();

	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		reset,
		setValue,
	} = useForm<OnboardingProfileFormFieldsType>();

	const handleUpdateUserDocument = async (
		formData: OnboardingProfileFormFieldsType
	) => {
		setLoading(false);
		reset();
		next();
	};

	const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (
		formData
	) => {
		setLoading(true);

		handleUpdateUserDocument(formData);
	};

	return (
		<div className="relative h-screen pb-[91px]">
			<div className="h-full overflow-auto">
				<Container className="grid h-full grid-cols-12">
					<div className="relative z-10 flex items-center h-full col-span-6 py-10">
						<div className="w-full space-y-5 pb-4.5">
							<OnboardingTabs
								getCurrentStep={getCurrentStep}
								tabs={stepsList}
							/>
							<Typography variant="h1" component="h1">
								Présente-toi !
							</Typography>
							<Typography variant="body-base" component="p" theme="gray">
								Dis-nous tout sur toi ! Remplis notre formulaire de présentation
								pour qu'on puisse mieux te connaître. On veut savoir qui tu es,
								ce que tu fais et comment t'as atterri ici. Plus on en saura sur
								toi, mieux on pourra personnaliser ton expérience sur notre
								plateforme.
							</Typography>
						</div>
					</div>
					<div className="flex items-center h-full col-span-6">
						<div className="flex justify-end w-full">
							{
								<ProfileStepForm
									form={{
										handleSubmit,
										control,
										errors,
										register,
										onSubmit,
										isLoading,
									}}
								/>
							}
						</div>
					</div>
				</Container>
			</div>
			<OnboardingFooter
				prev={prev}
				next={handleSubmit(onSubmit)}
				isFirstStep={isFirstStep}
				isFinalStep={isFinalStep}
				isLoading={isLoading}
			/>
		</div>
	);
};
