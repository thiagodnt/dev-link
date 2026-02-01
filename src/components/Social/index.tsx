import type { ReactNode } from 'react';

interface SocialProps {
	url: string;
	children: ReactNode;
}

export default function Social({ url, children }: SocialProps) {
	return (
		<a
			href={url}
			rel="noopener noreferrer"
			target="_blank"
			className="transition-transform hover:scale-105"
		>
			{children}
		</a>
	);
}
