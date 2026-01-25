import { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';

export default function Admin() {
	const [linkNameInput, setLinkNameInput] = useState('');
	const [urlInput, setUrlInput] = useState('');
	const [textColorInput, setTextColorInput] = useState('#f1f1f1');
	const [bgColorInput, setBgColorInput] = useState('#595959');

	return (
		<div className="flex items-center flex-col min-h-screen pb-7 px-2">
			<Header />

			<form className="w-full max-w-xl flex flex-col mt-8 mb-4">
				<label className="text-white font-medium my-2">Nome do link</label>
				<Input
					type="text"
					placeholder="Digite o nome do link..."
					value={linkNameInput}
					onChange={(e) => setLinkNameInput(e.target.value)}
				/>
				<label className="text-white font-medium my-2">URL</label>
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
						<p className="font-medium" style={{ color: textColorInput }}>
							{linkNameInput === '' ? 'Exemplo' : linkNameInput}
						</p>
					</article>
				</div>
			</form>
		</div>
	);
}
