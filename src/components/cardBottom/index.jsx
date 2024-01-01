'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import foto from '@/img/foto-4.webp';
import Link from 'next/link';
import useStore from '@/context/store';

const Card = ({ props }) => {
	const router = useRouter();
	const setData = useStore((state) => state.setData);
	const setIndex = useStore((state) => state.setIndex);

	const handleButton = (index) => {
		router.push(`/news/${props[index].id}`);
		setData(props);
		setIndex(index);
	};

	return (
		<div>
			<div className="flex justify-around gap-2 m-auto">
				{props.map((data, index) => {
					return (
						<div
							key={index}
							className="text-left cursor-pointer"
							// onClick={handleButton(index)}
							onClick={() => handleButton(index)}
						>
							<Image
								src={data.url}
								alt="..."
								className="m-auto h-[200px] w-[300px]"
							/>
							<h1 className="py-2 font-semibold w-[300px]">
								{/* Lorem ipsum dolor sit amet consectetur adipisicing. */}
								{data.headline}
							</h1>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
