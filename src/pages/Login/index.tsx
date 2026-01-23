import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import Input from '../../components/Input';
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigate('/admin', { replace: true });
			})
			.catch((error) => {
				console.log(error);
				alert('Email ou senha inválidos');
			});
	}

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen">
			<Link to="/">
				<h1 className="mt-11 mb-7 text-white font-bold text-5xl">
					Dev
					<span className="bg-linear-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
						Link
					</span>
				</h1>
			</Link>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-full max-w-xl px-2"
			>
				<Input
					type="email"
					value={email}
					placeholder="Digite o seu email..."
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					value={password}
					placeholder="********"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					type="submit"
					className="h-9 bg-blue-500 rounded-md border-0 text-lg font-medium text-white cursor-pointer"
				>
					Acessar
				</button>
			</form>
		</div>
	);
}
