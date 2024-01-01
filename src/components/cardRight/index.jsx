'use client';

import Image from 'next/image';
import listData from './listData';
import { useRouter } from 'next/navigation';
import useStore from '@/context/store';

const CardRight = () => {
	const router = useRouter();
	const setData = useStore((state) => state.setData);
	const setIndex = useStore((state) => state.setIndex);

	const handleButton = (index) => {
		router.push(`/news/${listData[index].id}`);
		setData(listData);
		setIndex(index);
	};

	return (
		<div className="p-4 bg-[#2D2D2F]">
			<div className="gap-4 w-full grid grid-cols-2 content-center p-2 m-auto">
				{listData.map((data, index) => {
					return (
						<div
							key={index}
							className="flex justify-center items-center text-[#ffff] cursor-pointer"
							onClick={() => handleButton(index)}
						>
							<Image
								src={data.url}
								alt="..."
								width={300}
								height={200}
								className="p-2 h-[200px] w-[300px]"
							/>
							<h1 className="p-2 font-semibold w-[300px]">{data.headline}</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CardRight;
