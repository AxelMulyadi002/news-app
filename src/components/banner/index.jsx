'use client';
import Image from 'next/image';
import noah from '@/img/noah.webp';
import { useRouter } from 'next/navigation';
import useStore from '@/context/store.js';

const Banner = () => {
	const router = useRouter();
	const setData = useStore((state) => state.setData);
	const setIndex = useStore((state) => state.setIndex);

	const data = [
		{
			image: noah,
			title: 'Ariel Noah dkk Segera Vakum Lama',
			source: 'youtube kreswan musik',
			text: 'TANGSEL-sukamusik.com kabar kurang mengenakan datang dari grup band tanah air yang legendaris yaitu NOAH . NOAH band yang kalau di total sudah 20 tahun berkiprah di dunia musik tanah air menyatakan akan vakum mulai januari 2024 nanti . Vokalis sekaligus front man dari grup band NOAH yaitu Ariel mengatakan bahwa dirinya dan band akan vakum untuk sementara waktu dalam waktu yang cukup Panjang saat menggelar konser intimate bersama krating deng di pacific place Jakarta beberapa waktu lalu.',
			textkedua:
				'“kita mau info ke semua bahwa sebentar lagi kita akan vakum untuk waktu yang cukup lama dan mungkin ini akan menjadi konser terakhir kita bersama kratingdeng“',
			textketiga:
				'Mendengar berita tersebut banyak fans yang dikenal dengan nama “ sahabat noah “ menjadi sedih akibat keputusan yang dibuat ariel ,dkk.  Namun ariel juga menuturkan bahwa Langkah nya ini bukan semata-mata tanpa alasan , melainkan ingin beristirahat karena sudah cukup Panjang berkarya selama 20 tahun lebih, dan nantinya di harapkan akan  Kembali lagi dengan sentuhan musik dan karya yang lebih fresh.',
			textkeempat:
				'Sampai sekarang belum ada kepastian akan selama apa band NOAH vakum dari industri music Indonesia , namun sang vokalis memberikan sedikit harapan berapa lama akan berhenti aktif dalam dunia music "Mungkin 2 tahun atau 3 tahun terus habis itu kumpul lagi, nggak tahu deh. Nggak lama kok yang pasti," kata Ariel.',
		},
	];

	const handleButton = (event) => {
		event.preventDefault();
		router.push(`/news/1`);
		setData(data);
		setIndex(0);
	};

	return (
		<div className="relative">
			<div className="">
				<div className="">
					<Image
						src={noah}
						alt="...."
						width={1000}
						height={500}
						className="w-full h-[500px] object-contain"
					/>
				</div>
			</div>
			<div className="top-0 w-full text-white flex items-center bottom-0 justify-center flex-col absolute">
				<button
					className="rounded-lg bg-[#2d2d2f] p-4 hover:bg-red-500"
					onClick={handleButton}
				>
					Read More
				</button>
			</div>
		</div>
	);
};

export default Banner;
