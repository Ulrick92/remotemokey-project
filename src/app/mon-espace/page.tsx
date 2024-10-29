import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mon espace",
	description: "Espace utilisateur sur Coders Monkeys",
};

export default function MySpace() {
	return <UserAccountContainer />;
}
