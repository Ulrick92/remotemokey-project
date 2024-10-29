export interface FormType {
	control?: any;
	onSubmit: any;
	errors: any;
	handleSubmit: any;
	isLoading: boolean;
	register: any;
}

export interface RegisterFormFieldsType {
	email: string;
	password: string;
	how_did_hear: string;
}

export interface LoginFormFieldsType {
	email: string;
	password: string;
}

export interface ForgetPasswordFormFieldsType {
	email: string;
}

export interface OnboardingProfileFormFieldsType {
	displayName: string;
	expertise: string;
	biography: string;
}