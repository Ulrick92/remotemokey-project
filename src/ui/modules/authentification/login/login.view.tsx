import Image from "next/image";
import Link from "next/link";
import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import { LoginForm } from "./longin-form";
import { FormType } from "@/types/form";

type LoginViewProps = {
	form: FormType;
};

export const LoginView = ({ form }: LoginViewProps) => {
	return (
		<Container className="grid grid-cols-2 gap-20 mb-32">
			<div className="flex items-center">
				<div className="relative w-full h-[531px]">
					<Image
						fill
						src="/assets/images/character-2.png"
						alt=""
						className="object-scale-down"
						priority={false}
					/>
				</div>
			</div>
			<div className="flex items-center">
				<Box padding_y="py-5">
					<div className="flex items-center justify-between">
						<Typography variant="h5" component="h1">
							Connexion
						</Typography>
						<div className="flex items-center gap-2">
							<Typography variant="caption4" component="span" theme="gray">
								Tu n'as pas de compte ?
							</Typography>
							<Typography variant="caption4" component="span" theme="primary">
								<Link href="/connexion/inscription">S'inscrire</Link>
							</Typography>
						</div>
					</div>
					<LoginForm form={form} />
					<Typography
						variant="caption4"
						theme="primary"
						className="max-w-md mx-auto text-center"
					>
						<Link href="/connexion/mot-de-passe-perdu">
							mot de passe perdu ?
						</Link>
					</Typography>
				</Box>
			</div>
		</Container>
	);
};
