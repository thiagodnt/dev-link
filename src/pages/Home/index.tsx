import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Social from '../../components/Social';

export default function Home() {
	return (
		<div className="flex flex-col w-full py-4 items-center justify-center">
			<h1 className="text-3xl md:text-4xl font-bold text-white mt-20">
				Th14g0d
			</h1>
			<span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

			<main className="flex flex-col w-11/12 max-w-xl text-center">
				<section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
					<a>
						<p className="text-base md:text-lg">Canal no Youtube</p>
					</a>
				</section>
				<footer className="flex justify-center gap-3 my-4">
					<Social url="https://linkedin.com/in/thiago-donato-904950280">
						<FaLinkedin size={35} color="#FFF" />
					</Social>
					<Social url="https://www.facebook.com/thiago.donato.71">
						<FaFacebook size={35} color="#FFF" />
					</Social>
					<Social url="https://www.instagram.com/th14g0d_/">
						<FaInstagram size={35} color="#FFF" />
					</Social>
				</footer>
			</main>
		</div>
	);
}
