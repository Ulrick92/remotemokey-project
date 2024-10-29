import { ContainerBreadcrumbs } from "@/ui/components/breadcrumbs/container-breadcrumbs";
import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Flip, ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Session } from "@/ui/components/session/session";

export const metadata: Metadata = {
	title: {
		template: "%s | Coders Monkeys",
		default: "Coders Monkeys",
	},
	description: "Description...",
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className={`${inter.variable}`}>
			<body>
				<ToastContainer
					position="top-center"
					autoClose={8000}
					transition={Flip}
				/>
				<Session>
					<Navigation />
					<ContainerBreadcrumbs />
					<main role="main">{children}</main>
					<Footer />
				</Session>
			</body>
		</html>
	);
}
