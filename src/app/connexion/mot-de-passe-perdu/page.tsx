import { ForgerPasswordContainer } from "@/ui/modules/authentification/forget-password/forget-password.container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mot de passe perdu",
	description: "Page de récupération de mot de passe perdu de Coders Monkeys",
};

export default function ForgetPassword() {
	return <ForgerPasswordContainer />;
}
