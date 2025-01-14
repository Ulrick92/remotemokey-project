import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
	{
		label: "Accueil",
		baseUrl: "/",
		type: "internal",
	},
	{
		label: "Projets",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Coders Monkeys",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Formations",
		baseUrl: "/#",
		type: "internal",
	},
];

const footerUsersLinks: AppLinks[] = [
	{
		label: "Mon espace",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Connexion",
		baseUrl: "/connexion",
		type: "internal",
	},
	{
		label: "Inscription",
		baseUrl: "/connexion/inscription",
		type: "internal",
	},
	{
		label: "Mot de passe oublié",
		baseUrl: "/connexion/mot-de-passe-perdu",
		type: "internal",
	},
];

const footerInformationLinks: AppLinks[] = [
	{
		label: "CGU",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Confidentialité",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "A propos",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Contact",
		baseUrl: "/#",
		type: "internal",
	},
];

export const footerSocialNetworksLinks: AppLinks[] = [
	{
		label: "Youtube",
		baseUrl: "/#",
		type: "external",
		icon: RiYoutubeFill,
	},
	{
		label: "Linkedin",
		baseUrl: "/#",
		type: "external",
		icon: RiLinkedinFill,
	},
	{
		label: "Slack",
		baseUrl: "/#",
		type: "external",
		icon: RiSlackFill,
	},
];

export const footerLinks = [
	{
		label: "App",
		links: footerApplicationLinks,
	},
	{
		label: "Utilisateurs",
		links: footerUsersLinks,
	},
	{
		label: "Informations",
		links: footerInformationLinks,
	},
	{
		label: "Réseaux",
		links: footerSocialNetworksLinks,
	},
];
