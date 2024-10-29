import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworksButton } from "./social-networks-button";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	const footerNavigationLinks = footerLinks.map((columnLink) => {
		return <FooterLink key={uuidv4()} data={columnLink} />;
	});

	return (
		<footer className="bg-gray">
			<Container className="flex justify-between pt-16">
				<div className="flex flex-col items-center gap-1">
					<Typography variant="caption1" theme="white" weight="medium">
						Formations gratuites
					</Typography>
					<Typography variant="caption3" theme="gray">
						Abonne-toi à la chaine
					</Typography>
					<a href="#" target="_blank">
						<Image
							src="/assets/svg/ytb.svg"
							alt="Remotye monkey | Youtube"
							width={229}
							height={216}
							priority
						/>
					</a>
				</div>
				<div className="flex gap-7">{footerNavigationLinks}</div>
			</Container>
			<Container className="pt-9 pb-11 space-y-11">
				<hr className="text-gray-800" />
				<div className="flex items-center justify-between">
					<Typography variant="caption4" theme="gray">
						{`Copyright © ${currentYear} | Propulsed by Arnaud desportes - Remote
						monkey SASU`}
					</Typography>
					<div className="">
						<SocialNetworksButton theme="gray" />
					</div>
				</div>
			</Container>
		</footer>
	);
};

type FooterLinkProps = {
	data: FooterLinks;
};

const FooterLink = ({ data }: FooterLinkProps) => {
	const linksList = data.links.map((link) => (
		<li key={uuidv4()}>
			{link.type === LinkTypes.INTERNAL && (
				<ActiveLink key={uuidv4()} href={link.baseUrl}>
					{link.label}
				</ActiveLink>
			)}
			{link.type === LinkTypes.EXTERNAL && (
				<a href={link.baseUrl} target="_blank">
					{link.label}
				</a>
			)}
		</li>
	));

	return (
		<div className="min-w-[190px]">
			<Typography
				theme="white"
				variant="caption2"
				weight="medium"
				className="pb-5"
			>
				{data.label}
			</Typography>
			<Typography
				theme="gray"
				component="ul"
				variant="caption3"
				className="space-y-4"
			>
				{linksList}
			</Typography>
		</div>
	);
};
