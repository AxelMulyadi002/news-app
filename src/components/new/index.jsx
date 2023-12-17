import Image from 'next/image';
import logo from '@/img/SM.webp';
import Card from '../cardBottom';
import listData from './listData';

const WhatsNew = () => {
	return (
		<div className="p-2">
			<div className="text-center w-full flex flex-col gap-2 p-2">
				<Image
					src={logo}
					alt="logo"
					width={100}
					height={100}
					className="m-auto"
				/>
				<h1 className="text-5xl font-bold p-2">What&rsquo;s New</h1>
				<Card props={listData} />
			</div>
		</div>
	);
};

export default WhatsNew;
