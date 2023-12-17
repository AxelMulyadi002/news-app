import Card from '@/components/cardBottom';
import listData from './listData';

const allGenres = () => {
	return (
		<div className="absolute w-full">
			<div className="mt-28 p-2">
				<h1 className="text-4xl font-bold text-center p-2">All Genres</h1>
				<Card props={listData} />
			</div>
		</div>
	);
};

export default allGenres;
