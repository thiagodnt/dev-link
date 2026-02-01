import { FaHouse } from 'react-icons/fa6';
import { Link } from 'react-router';

export default function ErrorPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen pb-7 px-2 text-white">
			<h1 className="text-6xl font-medium mb-4">404</h1>
			<h1 className="text-5xl font-medium mb-4">Página não encontrada</h1>
			<Link
				to="/"
				className="flex justify-center items-center gap-1 mt-2 bg-gray-400/60 px-4 py-2 rounded-lg transition-all hover:scale-105"
			>
				<FaHouse size={18} color="#FFF" />
				Voltar para a home
			</Link>
		</div>
	);
}
