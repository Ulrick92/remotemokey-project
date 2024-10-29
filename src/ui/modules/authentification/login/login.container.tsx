"use client";

import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";
import { LoginFormFieldsType } from "@/types/form";
import { useToggle } from "@/hooks/use-toggle";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const LoginContainer = () => {
	// const router = useRouter();
	const { value: isLoading, setValue: setIsLoading } = useToggle();

	useEffect(() => {}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
	} = useForm<LoginFormFieldsType>();

	// const handleSigninUser = async ({ email, password }: LoginFormFieldsType) => {
	// 	const { error } = await directusSigninUser(email, password);
	// 	if (error) {
	// 		setIsLoading(false);
	// 		toast.error(error.message);
	// 		return;
	// 	}
	// 	toast.success("Bienvenue sur Coders Monkeys");
	// 	setIsLoading(false);
	// 	router.push("/mon-espace");
	// };

	const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
		setIsLoading(true);
		const { password } = formData;
		if (password.length <= 5) {
			setError("password", {
				type: "manual",
				message: "Ton mot de passe doit comporter au minimum 6 caractères",
			});
			setIsLoading(false);
			return;
		}

		// handleSigninUser(formData);
	};

	return (
		<LoginView form={{ errors, register, handleSubmit, onSubmit, isLoading }} />
	);
};
