import { ChangeEvent, useState } from "react";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typography";
import { useToggle } from "@/hooks/use-toggle";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";

export const AvatarStep = ({
	next,
	prev,
	getCurrentStep,
	isFinalStep,
	stepsList,
}: BaseComponentProps) => {
	const { value: isLoding, setValue: setIsLoading } = useToggle();
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
		null
	);

	const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setSelectedImage(file);
			const reader = new FileReader();
			reader.onload = (e) => {
				let imageDataUrl: string | ArrayBuffer | null = null;

				if (e.target) {
					imageDataUrl = e.target.result;
				}
				setImagePreview(imageDataUrl);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleImageUpload = () => {
		// if (selectedImage !== null) {
		// }

		next();
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
								Dernière étape !
							</Typography>
							<Typography variant="body-base" component="p" theme="gray">
								C'est sûr t'as une tête à être sur Coders Monkeys ! Mais on a
								besoin de ta plus belle photo de profil pour que tout le monde
								puisse voir à quel point tu es incroyable. Mettre une photo
								sympa, c'est la garantie de te faire remarquer et de faire
								craquer les développeurs en quête de nouveaux contacts. Alors
								montre-nous ta belle gueule et rejoins la communauté !
							</Typography>
						</div>
					</div>
					<div className="flex items-center h-full col-span-6">
						<div className="flex justify-center w-full">
							<UploadAvatar
								handleImageSelect={handleImageSelect}
								imagePreview={imagePreview}
							/>
						</div>
					</div>
				</Container>
			</div>
			<OnboardingFooter
				prev={prev}
				next={handleImageUpload}
				isLoading={isLoding}
				isFinalStep={isFinalStep}
			/>
		</div>
	);
};
