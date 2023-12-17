'use client';

import Image from 'next/image';
import listData from './listData';
import { useEffect, useState } from 'react';
import { ArrowFatLeft, ArrowFatRight } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import useStore from '@/context/store';

const Header = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const router = useRouter();
	const setData = useStore((state) => state.setData);
	const setIndex = useStore((state) => state.setIndex);

	const handleButton = (event) => {
		event.preventDefault();
		router.push(`/news/${listData[currentIndex].id}`);
		setData(listData);
		setIndex(currentIndex);
	};

	const handleNext = (event) => {
		event.preventDefault();

		if (currentIndex === listData.length - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	const handlePrev = (event) => {
		event.preventDefault();

		if (currentIndex === 0) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex((prev) => prev - 1);
		}
	};

	useEffect(() => {
		const intervalBanner = setInterval(() => {
			setCurrentIndex((prev) => (prev === listData.length - 1 ? 0 : prev + 1));
		}, 3000);

		return () => {
			clearInterval(intervalBanner);
		};
	});

	return (
		<div className="border-red-400 relative overflow-hidden">
			<div className="duration-500 ">
				<Image
					src={listData[currentIndex].url}
					alt="gambar"
					className="w-full object-cover h-[600px] bg-cover"
				/>
			</div>

			<div className="absolute bottom-20 text-[#ffff] text-5xl font-extrabold left-0 p-2 flex justify-start">
				<h1 className="w-2/4">{listData[currentIndex].leftText}</h1>
			</div>
			<div className="absolute top-0 bottom-0 flex text-white w-full justify-between p-2">
				<button onClick={handlePrev} className="">
					<ArrowFatLeft size={50} />
				</button>
				<button onClick={handleNext}>
					<ArrowFatRight size={50} />
				</button>
			</div>
			<div className="absolute top-24 text-[#ffff] text-5xl font-extrabold right-5 p-2 flex justify-end">
				<h1 className="w-2/4 text-right">{listData[currentIndex].rightText}</h1>
			</div>
			<button
				className="bottom-10 absolute p-2 bg-[#ffff] rounded-lg ml-2 text-[#2D2D2F]"
				onClick={handleButton}
			>
				Read More
			</button>
		</div>
	);
};

export default Header;
