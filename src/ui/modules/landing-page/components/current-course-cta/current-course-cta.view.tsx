import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export const CurrentCourseCtaView = () => {
	return (
		<section className="bg-gray-300">
			<Container className="py-24 text-center">
				<Typography variant="h2" component="h2" className="mb-2.5">
					Formations React.js gratuite
				</Typography>
				<Typography variant="lead" component="h3" className="mb-5">
					Apprends à coder l'app des singes codeurs
				</Typography>
				<Typography
					variant="caption3"
					theme="gray"
					component="p"
					className="mb-16"
				>
					Si tu veux un CV plus sexy que ton ex, suis cette formation complète !
				</Typography>
				<a href="/#" target="_blank" rel="noopener noreferrer">
					<div className="relative bg-gray-400 rounded overflow-hidden h-[626px]">
						<div className="flex flex-col justify-center items-center gap-2 relative h-full bg-gray z-10 rounded opacity-0 hover:opacity-95 text-white animate">
							<RiPlayCircleLine size={42} />
							<Typography
								variant="caption2"
								theme="white"
								className="uppercase"
								weight="medium"
							>
								Lire la formation
							</Typography>
						</div>
						<Image
							fill
							src="/assets/images/coders-monkeys-course-cta.jpg"
							alt=""
							className="object-cover object-center"
							priority
						/>
					</div>
				</a>
			</Container>
		</section>
	);
};
