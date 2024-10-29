import { FormType } from "@/types/form";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/form/input";

type LoginFormProps = {
	form: FormType;
};

export const LoginForm = ({ form }: LoginFormProps) => {
	const { errors, handleSubmit, isLoading, onSubmit, register } = form;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
			<Input
				isLoading={isLoading}
				placeholder="johndoe@gmail.com"
				type="email"
				register={register}
				errors={errors}
				id="email"
			/>
			<Input
				isLoading={isLoading}
				placeholder="Mot de passe"
				type="password"
				register={register}
				errors={errors}
				id="password"
			/>
			<Button isLoading={isLoading} type="submit" fullWidth>
				Connexion
			</Button>
		</form>
	);
};