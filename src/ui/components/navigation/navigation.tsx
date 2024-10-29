import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";
import { AccoutAvatarNavigationLink } from "./account-avatar-navigation-link";

type NavigationProps = {};

export const Navigation = () => {
	const authUser = true;

	const authentificationSystem = (
		<div className="flex items-center gap-2">
			<Button baseUrl="/connexion" size="small">
				Connexion
			</Button>
			<Button baseUrl="/connexion/inscription" size="small" variant="secondary">
				Rejoindre
			</Button>
		</div>
	);

	return (
		<header className="border-b-2 border-gray-400">
			<Container className="flex items-center justify-between py-1.5 gap-7">
				<Link href="/">
					<div className="flex items-center gap-2.5">
						<Logo size="small" />
						<div className="flex flex-col">
							<div className="text-gray font-extrabold text-[24px]">
								Coders Monkeys
							</div>
							<Typography variant="caption4" theme="gray" component="span">
								Trouve de l'inspiration & reçois des feedbacks !
							</Typography>
						</div>
					</div>
				</Link>

				<div className="flex items-center gap-7">
					<nav role="navigation">
						<Typography
							variant="caption3"
							component="ul"
							className="flex items-center gap-7"
						>
							<li>
								<ActiveLink href="/projets">Projets</ActiveLink>
							</li>
							<li>
								<ActiveLink href="/formations">Formations</ActiveLink>
							</li>
							<li>
								<ActiveLink href="/contacts">Contacts</ActiveLink>
							</li>
						</Typography>
					</nav>
					{!authUser ? authentificationSystem : <AccoutAvatarNavigationLink />}
				</div>
			</Container>
		</header>
	);
};
