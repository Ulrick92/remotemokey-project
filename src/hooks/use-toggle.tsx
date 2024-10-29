import { useState } from "react";

type useToggleProps = {
	initial?: boolean;
};

export const useToggle = ({ initial = false }: useToggleProps = {}) => {
	const [value, setValue] = useState(initial);

	const toggle = () => {
		setValue(!value);
	};

	return {
		toggle,
		value,
		setValue,
	};
};
