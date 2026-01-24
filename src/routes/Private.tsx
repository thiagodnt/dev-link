import { useEffect, useState, type ReactNode } from 'react';
import { auth } from '../services/firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router';

interface PrivateProps {
	children: ReactNode;
}

export default function Private({ children }: PrivateProps): any {
	const [loading, setLoading] = useState(true);
	const [signed, setSigned] = useState(false);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			setLoading(false);
			if (!user) {
				setSigned(false);
				return;
			}

			setSigned(true);
			const userData = {
				uid: user?.uid,
				email: user?.email,
			};

			localStorage.setItem('@dev-link', JSON.stringify(userData));

			unsub();
		});
	}, []);

	if (loading) {
		return <div>Carregando...</div>;
	}

	if (!signed) {
		return <Navigate to="/login" />;
	}

	return children;
}
