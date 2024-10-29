import { RegisterContainer } from "@/ui/modules/authentification/register/register.container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Inscription",
	description: "¨Page d'inscription sur Coders Monkeys",
};

export default function Register() {
	return <RegisterContainer />;
}
