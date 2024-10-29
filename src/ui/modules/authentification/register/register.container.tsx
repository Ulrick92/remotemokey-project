"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormFieldsType } from "@/types/form";
import { RegisterView } from "./register.view";
import { useToggle } from "@/hooks/use-toggle";

export const RegisterContainer = () => {
	const { value: isLoading, setValue: setIsLoading } = useToggle();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
	} = useForm<RegisterFormFieldsType>();

	// const handleCreateUserAuthentication = ({
	// 	email,
	// 	how_did_hear,
	// 	password,
	// }: RegisterFormFieldsType) => {
	// 	const {error, data} = await directusCreateUser(email,password)
	// 	if (error) {
	// 		setIsLoading(false)
	// 		toast.error(error.message)
	// 		return
	// 	}

	// 	toast.success("Bienvenue sur l'app codres monkeys")
	// 	setIsLoading(false)
	// 	reset()
	// };

	const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
		// console.log("formData =>", formData);
		const { password } = formData;

		if (password.length <= 5) {
			setError("password", {
				type: "manual",
				message: "Ton mot de passe doit comporter au minimum 6 caractères",
			});
			return;
		}

		// handleCreateUserAuthentication(formData)
	};

	return (
		<RegisterView
			form={{ errors, register, handleSubmit, onSubmit, isLoading }}
		/>
	);
};
