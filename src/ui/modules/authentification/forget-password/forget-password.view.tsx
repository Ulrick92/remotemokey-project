import Link from "next/link";
import Image from "next/image";
import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import { ForgetPasswordForm } from "./forget-password-form";
import { FormType } from "@/types/form";

type ForgetPasswordViewProps = {
	form: FormType;
};

export const ForgetPasswordView = ({ form }: ForgetPasswordViewProps) => {
	return (
		<Container className="grid grid-cols-2 gap-20 mb-32">
			<div className="flex items-center">
				<div className="relative w-full h-[531px]">
					<Image
						fill
						src="/assets/images/character-3.png"
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
							Mot de passe perdu ?
						</Typography>
						<Typography variant="caption4" component="span" theme="primary">
							<Link href="/connexion">Connexion</Link>
						</Typography>
					</div>
					<ForgetPasswordForm form={form} />
				</Box>
			</div>
		</Container>
	);
};
