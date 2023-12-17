'use client';

import Image from 'next/image';
import logo from '@/img/Suka Musik.webp';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [scroll, setScroll] = useState(false);
	const router = useRouter();
	const handleButton = () => {
		router.push('/');
	};

	const scrollHeader = () => {
		if (window.scrollY >= 300) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollHeader);

		return () => {
			window.addEventListener('scroll', scrollHeader);
		};
	}, []);

	return (
		<nav
			className={scroll ? 'bg-[#2d2d2f] fixed z-20 w-full' : 'bg-transparent'}
		>
			<div className="p-2 w-full">
				<div className="flex items-center w-full z-10">
					<Image
						src={logo}
						alt="logo"
						className="w-40 z-30 cursor-pointer"
						onClick={handleButton}
					/>

					<div className="flex gap-5 w-full justify-end text-xl px-10 font-semibold z-20 ">
						<Link href="/topcharts">
							<h2>Top Charts</h2>
						</Link>

						<Link href="/gigs">
							<h2>Jadwal Gigsmu</h2>
						</Link>

						<Link href="/musicnews">
							<h2>Musik Baru Nich</h2>
						</Link>

						<Link href="/alat">
							<h2>Alat Idolamu</h2>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
