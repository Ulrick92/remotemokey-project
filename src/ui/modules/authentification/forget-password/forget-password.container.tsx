"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFieldsType } from "@/types/form";
import { ForgetPasswordView } from "./forget-password.view";
import { useToggle } from "@/hooks/use-toggle";

export const ForgerPasswordContainer = () => {
	const { value: isLoading, setValue: setIsLoading } = useToggle();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
	} = useForm<ForgetPasswordFormFieldsType>();

	const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = async (
		formData
	) => {
		console.log("formData =>", formData);
	};

	return (
		<ForgetPasswordView
			form={{ errors, register, handleSubmit, onSubmit, isLoading }}
		/>
	);
};
