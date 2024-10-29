import { Container } from "@/ui/components/container/container";
import { Typography } from "../typography/typography";
import { Button } from "../button/button";
import { LinkTypes } from "@/lib/link-type";
import Image from "next/image";

export const CtaView = () => {
	return (
		<section className="relative overflow-hidden bg-primary">
			<Container className="py-20">
				<div className="relative z-10 max-w-3xl space-y-5">
					<Typography variant="h2" theme="white" component="h2">
						N’attend pas pour développer tes compétences...
					</Typography>
					<div>
						<Button
							baseUrl="/#"
							variant="success"
							linkType={LinkTypes.EXTERNAL}
						>
							Formations React.js gratuite
						</Button>
					</div>
				</div>
				<div className="absolute -bottom-[480px] right-0">
					<Image
						width={1210}
						height={1210}
						src="/assets/svg/bombers.svg"
						alt=""
						priority={false}
					/>
				</div>
			</Container>
		</section>
	);
};
