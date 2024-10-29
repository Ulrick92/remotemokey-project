import clsx from "clsx";
import { Typography } from "../typography/typography";

type InputProps = {
	type?: "text" | "password" | "email";
	isLoading: boolean;
	placeholder: string;
	register: any;
	errors: any;
	errorMsg?: string;
	id: string;
	required?: boolean;
	isAutocompleted?: boolean;
	label?: string;
};

export const Input = ({
	errors,
	id,
	isAutocompleted = false,
	isLoading,
	placeholder,
	register,
	errorMsg = "Tu dois renseigner ce champ",
	required = true,
	type = "text",
	label,
}: InputProps) => {
	return (
		<div className="space-y-2">
			{label && (
				<Typography
					variant="caption4"
					theme={errors[id] ? "danger" : "gray-600"}
				>
					{label}
				</Typography>
			)}
			<input
				type={type}
				placeholder={placeholder}
				className={clsx(
					isLoading && "cursor-not-allowed",
					errors[id]
						? "placeholder-alert-danger text-alert-danger"
						: "placeholder-gray-600",
					"w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
				)}
				disabled={isLoading}
				{...register(id, { required: { value: required, message: errorMsg } })}
				autoComplete={isAutocompleted ? "on" : "off"}
			/>
			{errors[id] && (
				<Typography variant="caption4" theme="danger">
					{errors[id]?.message}
				</Typography>
			)}
		</div>
	);
};
