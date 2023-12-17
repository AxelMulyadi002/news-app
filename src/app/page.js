import Header from '@/components/Header';
import Banner from '@/components/banner';
import CardRight from '@/components/cardRight';
import WhatsNew from '@/components/new';

export default function Home() {
	return (
		<div>
			<Banner />
			<WhatsNew />
			<Header />
			<CardRight />
		</div>
	);
}
