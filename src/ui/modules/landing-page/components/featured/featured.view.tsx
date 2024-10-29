"use client";

import { Container } from "@/ui/components/container/container";
import { SocialNetworksButton } from "@/ui/components/navigation/social-networks-button";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

type FeaturedViewProps = {
	imagePath: string;
	imageAlt: string;
	title: string;
	description: string;
};

const FeaturedData: FeaturedViewProps[] = [
	{
		imagePath: "/assets/svg/diskette.svg",
		imageAlt: "Consulte et partage des ressources pour les devs",
		title: "Ressources",
		description: "Consulte et partage des ressources pour les devs",
	},
	{
		imagePath: "/assets/svg/gamepad.svg",
		imageAlt: "Entraîne-toi à devenir meilleur et trouve de l'inspiration",
		title: "Entrainement",
		description: "Entraîne-toi à devenir meilleur et trouve de l'inspiration",
	},
	{
		imagePath: "/assets/svg/speaker.svg",
		imageAlt: "Expose tes projets et crée toi des opportunités !",
		title: "Visibilité",
		description: "Expose tes projets et crée toi des opportunités !",
	},
	{
		imagePath: "/assets/svg/compass.svg",
		imageAlt: "Connecte-toi avec des devs web et booste ta carrière !",
		title: "Relations",
		description: "Connecte-toi avec des devs web et booste ta carrière !",
	},
];

export const FeaturedView = () => {
	const featuredList = FeaturedData.map((feature) => (
		<div
			key={uuidv4()}
			className="flex flex-col items-center justify-center bg-white rounded p-7"
		>
			<div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
				<Image
					fill
					src={feature.imagePath}
					alt={feature.imageAlt}
					className="object-scale-down blur-2xl"
				/>
				<Image
					fill
					src={feature.imagePath}
					alt={feature.imageAlt}
					className="object-scale-down"
				/>
			</div>
			<Typography
				variant="lead"
				component="h3"
				weight="medium"
				className="text-center mb-2.5"
			>
				{feature.title}
			</Typography>
			<Typography
				variant="body-base"
				component="p"
				theme="gray"
				className="text-center"
			>
				{feature.description}
			</Typography>
		</div>
	));

	return (
		<section className="bg-gray-300">
			<Container className="grid grid-cols-12 gap-24 py-24">
				<div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
				<div className="flex flex-col justify-between col-span-5 gap-10">
					<div>
						<Typography variant="h2" component="h2" className="mb-5">
							L'endroit le plus cool pour devenir développeur
						</Typography>
						<Typography
							variant="body-lg"
							theme="gray"
							component="p"
							className="mb-8"
						>
							Du partage, des connexions et des formations notre app gère tout
							ça pour toi. Rejoins la communauté et grimpe en grade. Let's go !
						</Typography>
						<Button
							variant="secondary"
							baseUrl="/#"
							icon={{ icon: RiArrowRightLine }}
							iconPosition="right"
						>
							Commencer
						</Button>
					</div>
					<div>
						<Typography variant="caption3" theme="gray" className="mb-4">
							Nos réseaux sociaux
						</Typography>
						<SocialNetworksButton />
					</div>
				</div>
			</Container>
		</section>
	);
};
