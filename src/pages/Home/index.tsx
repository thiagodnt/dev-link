import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { db } from '../../services/firebaseConnection';
import {
	getDoc,
	getDocs,
	collection,
	query,
	doc,
	orderBy,
} from 'firebase/firestore';
import Social from '../../components/Social';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
import { BiLogIn } from 'react-icons/bi';

interface LinkProps {
	id: string;
	name: string;
	url: string;
	text_color: string;
	background_color: string;
}

interface SocialProps {
	facebook: string;
	instagram: string;
	linkedin: string;
}

export default function Home() {
	const [links, setLinks] = useState<LinkProps[]>([]);
	const [socials, setSocials] = useState<SocialProps>();

	useEffect(() => {
		function getLinks() {
			const linksRef = collection(db, 'links');
			const queryRef = query(linksRef, orderBy('created_at', 'asc'));

			getDocs(queryRef)
				.then((snapshot) => {
					let lista = [] as LinkProps[];

					snapshot.forEach((doc) => {
						lista.push({
							id: doc.id,
							name: doc.data().name,
							url: doc.data().url,
							text_color: doc.data().text_color,
							background_color: doc.data().background_color,
						});
					});

					setLinks(lista);
				})
				.catch(() => {
					toast.error('Não foi possível obter os seus links');
				});
		}

		getLinks();
	}, []);

	useEffect(() => {
		function getSocials() {
			const docRef = doc(db, 'social', 'link');

			getDoc(docRef)
				.then((snapshot) => {
					if (!snapshot.data()) {
						return;
					}

					setSocials({
						facebook: snapshot.data()?.facebook,
						instagram: snapshot.data()?.instagram,
						linkedin: snapshot.data()?.linkedin,
					});
				})
				.catch(() => {
					toast.error('Não foi possível obter as suas redes sociais');
				});
		}

		getSocials();
	}, []);

	return (
		<div className="flex flex-col w-full pb-7 px-2 items-center justify-center">
			<header className="w-full max-w-2xl mt-4 px-1">
				<nav className="w-full bg-white h-12 flex items-center justify-between rounded-lg px-3">
					<div className="flex gap-4 font-medium">
						<Link to="/">
							<h1 className="text-blue-950 font-bold text-3xl">
								Dev
								<span className="bg-linear-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
									Link
								</span>
							</h1>
						</Link>
					</div>
					<Link
						to="/login"
						className="cursor-pointer transition-transform hover:scale-105"
					>
						<BiLogIn size={28} color="#db2629" />
					</Link>
				</nav>
			</header>
			<h1 className="text-3xl md:text-4xl font-bold text-white mt-8">
				Th14g0d
			</h1>
			<span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

			<main className="flex flex-col w-11/12 max-w-xl text-center">
				{links.map((link) => (
					<section
						key={link.id}
						className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
						style={{ backgroundColor: link.background_color }}
					>
						<a href={link.url} target="_blank" rel="noopener noreferrer">
							<p
								className="text-base md:text-lg"
								style={{ color: link.text_color }}
							>
								{link.name}
							</p>
						</a>
					</section>
				))}
				{socials && Object.keys(socials).length > 0 && (
					<footer className="flex justify-center gap-3 my-4">
						<Social url={socials?.linkedin}>
							<FaLinkedin size={35} color="#FFF" />
						</Social>
						<Social url={socials?.facebook}>
							<FaFacebook size={35} color="#FFF" />
						</Social>
						<Social url={socials?.instagram}>
							<FaInstagram size={35} color="#FFF" />
						</Social>
					</footer>
				)}
			</main>
		</div>
	);
}
