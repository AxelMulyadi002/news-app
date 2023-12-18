import Card from '@/components/cardBottom';
import listData from './listData';

const monthlyListeners = () => {
	return (
		<div className="absolute w-full">
			<div className="mt-28 p-2">
				<h1 className="text-4xl font-bold text-center p-2">
					Jadwal Gigs Untuk Mu
				</h1>
				<Card props={listData} />
			</div>
			<div className="p-2 mb-40">
				<h1>Sumber</h1>
				<p>@infokonser</p>
				<p>
					https://disway.id/amp/749584/konser-musik-gratis-di-acara-discover-the-new-bintaro-jaya-xchange-mall-2-hari-ini-ada-afgan-hingga-andien
				</p>
				<p>
					https://tangselife.com/event/konser-gratis-pembukaan-bintaro-jaya-xchange-mall-2-ada-afgan-gac-andien-hingga-eva-celia/amp
				</p>
				<p>
					https://www.goersapp.com/blog/jadwal-event-jakarta-di-desember-2023/
				</p>
				<p>
					https://seleb.tempo.co/amp/1809604/5-daftar-konser-natal-dan-tahun-baru-di-jakarta-bekasi-dan-banten
				</p>
				<p>
					https://www.insertlive.com/hot-gossip/20231215105045-7-326469/saksikan-hut-transmedia-ke-22-malam-ini-ada-super-junior-lss-hingga-raisa/amp
				</p>
				<p>
					https://www.cnnindonesia.com/hiburan/20231215184445-227-1037900/aksi-penuh-energi-putri-ariani-buka-hut-transmedia-22-power-up/amp{' '}
				</p>
			</div>
		</div>
	);
};

export default monthlyListeners;
