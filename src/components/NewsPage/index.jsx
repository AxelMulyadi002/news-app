'use client';

import Image from 'next/image';
import foto from '@/img/foto-5.webp';
import useStore from '@/context/store.js';
import ReactPlayer from 'react-player';

const NewsPage = () => {
	const data = useStore((state) => state.data);
	const index = useStore((state) => state.index);
	console.log(data);

	return (
		<div className="absolute w-full ">
			<div className="mt-36  p-2">
				<h1 className="text-4xl font-bold text-center">{data[index].title}</h1>
				<Image
					src={data[index].image.src}
					alt="foto"
					className="m-auto p-4"
					width={800}
					height={800}
				/>
				<div className="mb-80 w-[900px] m-auto text-lg">
					<div className="text-justify p-4 ">
						Diliput oleh: {data[index].source}
					</div>
					<p className="text-justify p-4 ">{data[index].text}</p>
					<p className="text-justify p-4 ">{data[index].textkedua}</p>
					<p className="text-justify p-4 ">
						{data[index].textketiga}
						<a href={data[index].link} className="underline">
							{data[index].alt}
						</a>
					</p>

					<p className="text-justify p-4 ">{data[index].textkeempat}</p>
					<p className="text-justify p-4 ">{data[index].textkelima}</p>
					<div className="flex justify-center">
						<ReactPlayer url={data[index].video} controls />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsPage;
