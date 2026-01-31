import { useState, type FormEvent } from 'react';
import { FaCheck, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { db } from '../../services/firebaseConnection';
import { doc, setDoc } from 'firebase/firestore';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { toast } from 'react-toastify';

export default function Socials() {
	const [facebook, setFacebook] = useState('');
	const [instagram, setInstagram] = useState('');
	const [linkedin, setLinkedin] = useState('');

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		setDoc(doc(db, 'social', 'link'), {
			facebook: facebook,
			instagram: instagram,
			linkedin: linkedin,
		})
			.then(() => {
				toast.success('Links da redes sociais atualizados com sucesso');
			})
			.catch(() => {
				toast.error('Erro ao atualizar os links');
			});
	}

	return (
		<div className="flex items-center flex-col min-h-screen pb-7 px-2">
			<Header />

			<form
				className="w-full max-w-xl flex flex-col mt-8 mb-4"
				onSubmit={handleSubmit}
			>
				<label className="text-white font-medium my-2 flex items-center gap-1">
					<FaFacebook size={16} color="#FFF" />
					Facebook
				</label>
				<Input
					type="url"
					placeholder="Digite a url do facebook..."
					value={facebook}
					onChange={(e) => setFacebook(e.target.value)}
				/>
				<label className="text-white font-medium my-2 flex items-center gap-1">
					<FaInstagram size={16} color="#FFF" />
					Instagram
				</label>
				<Input
					type="url"
					placeholder="Digite a url do instagram..."
					value={instagram}
					onChange={(e) => setInstagram(e.target.value)}
				/>
				<label className="text-white font-medium my-2 flex items-center gap-1">
					<FaLinkedin size={16} color="#FFF" />
					LinkedIn
				</label>
				<Input
					type="url"
					placeholder="Digite a url do linkedin..."
					value={linkedin}
					onChange={(e) => setLinkedin(e.target.value)}
				/>

				<div className="my-4">
					<button
						type="submit"
						className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white flex items-center justify-center gap-2 rounded-md font-medium cursor-pointer"
					>
						Cadastrar
						<FaCheck size={16} color="#FFF" />
					</button>
				</div>
			</form>
		</div>
	);
}
