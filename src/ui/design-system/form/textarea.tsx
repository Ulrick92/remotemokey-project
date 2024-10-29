import clsx from "clsx";
import { Typography } from "../typography/typography";

type TextareaProps = {
	isLoading: boolean;
	placeholder: string;
	rows?: number;
	register: any;
	errors: any;
	errorMsg?: string;
	id: string;
	required?: boolean;
	isAutocompleted?: boolean;
	label?: string;
};

export const Textarea = ({
	errors,
	id,
	isAutocompleted = false,
	isLoading,
	placeholder,
	register,
	errorMsg = "Tu dois renseigner ce champ",
	required = true,
	label,
	rows = 5,
}: TextareaProps) => {
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
			<textarea
				rows={rows}
				placeholder={placeholder}
				className={clsx(
					isLoading
						? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed"
						: "bg-white",
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
