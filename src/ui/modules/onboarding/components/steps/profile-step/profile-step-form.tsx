import { FormType } from "@/types/form";
import { Input } from "@/ui/design-system/form/input";
import { Textarea } from "@/ui/design-system/form/textarea";

type ProfileStepFormProps = {
	form: FormType;
};

export const ProfileStepForm = ({ form }: ProfileStepFormProps) => {
	const { errors, isLoading, register } = form;

	return (
		<form className="w-full max-w-md space-y-4" action="">
			<Input
				label="Pseudo"
				placeholder="Indique ton pseudo"
				isLoading={isLoading}
				type="text"
				register={register}
				errors={errors}
				errorMsg="Tu dois renseigner un pseudo"
				id="displayName"
			/>
			<Input
				label="Spécialité"
				placeholder="Développeur front-end React..."
				isLoading={isLoading}
				type="text"
				register={register}
				errors={errors}
				errorMsg="Tu dois renseigner ton expertise"
				id="expertise"
			/>
			<Textarea
				label="Biographie"
				placeholder="Indique une courte description de toi et ton parcours..."
				isLoading={isLoading}
				register={register}
				errors={errors}
				errorMsg="Tu dois renseigner une description"
				id="biography"
				required={false}
			/>
		</form>
	);
};
