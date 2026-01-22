import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
	return (
		<input
			className="border-0 outline-none px-2 h-9 mb-3 rounded-md bg-white"
			{...props}
		/>
	);
}
