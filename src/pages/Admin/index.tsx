import { type FormEvent, useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { FaLink } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';

import { db } from '../../services/firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Admin() {
	const [linkNameInput, setLinkNameInput] = useState('');
	const [urlInput, setUrlInput] = useState('');
	const [textColorInput, setTextColorInput] = useState('#f1f1f1');
	const [bgColorInput, setBgColorInput] = useState('#595959');

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		if (linkNameInput === '' || urlInput === '') {
			toast.info(
				'Por favor, preencha as informações do link antes de continuar',
			);
			return;
		}

		addDoc(collection(db, 'links'), {
			name: linkNameInput,
			url: urlInput,
			text_color: textColorInput,
			background_color: bgColorInput,
			created_at: new Date(),
		})
			.then(() => {
				setLinkNameInput('');
				setUrlInput('');
				setTextColorInput('#f1f1f1');
				setBgColorInput('#595959');
				toast.success('Link cadastrado com sucesso');
			})
			.catch((error) => {
				toast.error(
					'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde',
				);
				console.log('Erro ao cadastrar link ' + error);
			});
	}

	return (
		<div className="flex items-center flex-col min-h-screen pb-7 px-2">
			<Header />

			<form
				className="w-full max-w-xl flex flex-col mt-8 mb-4"
				onSubmit={handleSubmit}
			>
				<label className="text-white font-medium my-2">Nome do link</label>
				<Input
					type="text"
					placeholder="Digite o nome do link..."
					value={linkNameInput}
					onChange={(e) => setLinkNameInput(e.target.value)}
				/>
				<label className="text-white font-medium my-2 flex items-center gap-1">
					URL
					<FaLink size={16} color="#FFF" />
				</label>
				<Input
					type="url"
					placeholder="Digite a URL..."
					value={urlInput}
					onChange={(e) => setUrlInput(e.target.value)}
				/>

				<section className="flex gap-8 my-2">
					<div className="flex items-center gap-2">
						<label className="text-white font-medium my-2">
							Cor do texto:
						</label>
						<input
							type="color"
							value={textColorInput}
							onChange={(e) => setTextColorInput(e.target.value)}
						/>
					</div>

					<div className="flex items-center gap-2">
						<label className="text-white font-medium my-2">
							Cor de fundo:
						</label>
						<input
							type="color"
							value={bgColorInput}
							onChange={(e) => setBgColorInput(e.target.value)}
						/>
					</div>
				</section>

				<div className="flex flex-col items-center my-8 py-4 border border-gray-400/45 rounded-md">
					<label className="text-white font-medium">
						Veja como está ficando 👇
					</label>
					<article
						className="w-11/12 max-w-lg flex flex-col items-center justify-center mt-6 rounded px-1 py-3"
						style={{ backgroundColor: bgColorInput }}
					>
						<p
							className="font-medium select-none flex items-center gap-2"
							style={{ color: textColorInput }}
						>
							{linkNameInput !== '' ? linkNameInput : 'Exemplo'}
						</p>
					</article>
				</div>

				<button
					type="submit"
					className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white flex items-center justify-center gap-2 rounded-md font-medium cursor-pointer"
				>
					Cadastrar
					<FaLink size={16} color="#FFF" />
				</button>
			</form>

			<h1 className="text-center text-white font-bold text-2xl mt-6">
				Meus Links
			</h1>
			<article
				className="flex items-center justify-between w-11/12 max-w-xl my-4 px-3 py-4 rounded-md select-none"
				style={{ backgroundColor: '#2563EB' }}
			>
				<p style={{ color: '#FFF' }}>Canal do Youtube</p>
				<button className="border border-white border-dashed rounded-md p-1 cursor-pointer">
					<FiTrash size={16} color="#FFF" />
				</button>
			</article>
		</div>
	);
}
