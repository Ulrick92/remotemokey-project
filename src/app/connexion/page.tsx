import { LoginContainer } from "@/ui/modules/authentification/login/login.container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Connexion",
	description: "Page de connexion de Coders Monkeys",
};

export default function Connexion() {
	return <LoginContainer />;
}
