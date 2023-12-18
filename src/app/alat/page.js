import Image from 'next/image';
import gitaris from '@/img/gitaris.webp';
import botak from '@/img/botak.webp';
import gitar from '@/img/gitar.webp';
import rizky from '@/img/rizky.webp';
import drum from '@/img/drum.webp';

const allGenres = () => {
	return (
		<div className="absolute w-full">
			<div className="mt-28 p-2 mb-96">
				<h1 className="text-4xl font-bold text-center p-2">Alat Idolamu</h1>
				<div className="flex flex-col">
					<div className="flex justify-center items-center gap-4 p-2 w-full ">
						<Image src={gitaris} alt="dewa19" className="w-96" />
						<h1 className="w-80 text-justify">
							Eross Candra, gitaris Sheila on 7, dapet gitar spesial dari
							Fender, merek alat musik terkenal. Gitar ini gitar signature
							pertama yang dibikin Fender buat musisi Indonesia. Eross Candra
							suka banget sama Fender dari dulu dan ikut andil dalam bikin gitar
							ini. Dia pilih warna, komponen, dan suara yang cocok sama selera
							dan cara mainnya. Gitar ini bentuknya mirip Telecaster tahun 67,
							tapi diubah-ubah biar bisa dipake buat macem-macem musik.
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full ">
						<Image src={botak} alt="dewa19" className="w-96" />
						<h1 className="w-80 text-justify">
							Ahmad Dhani, musisi dan leader Dewa 19, doyan banget sama Roland,
							merek keyboard elektrik piano. Dia bilang, Roland bisa bikin suara
							yang klasik kayak piano kayu, padahal pake teknologi digital. Dia
							juga ngaku, lagu “Bayang-Bayang” yang dia buat buat Dewa 19 itu
							spesial buat Maia Estianty, mantan istri dan mama dari
							anak-anaknya.
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full ">
						<Image src={gitar} alt="dewa19" className="w-96" />
						<h1 className="w-80 text-justify">
							Ada bass dari merek-merek terkenal seperti Yamaha, Ibanez, dan
							Fender. Dennis Novriandi, seorang bassist yang juga sound engineer
							dan music producer. Dennis Novriandi merekomendasi kepada orang
							yang mencari bass untuk kebutuhannya. Contohnya, ia merekomendasi
							Bass Schecter yang terkenal di kalangan musisi metal. Jika Anda
							bermain metal, merek ini patut masuk radar Anda. Bass merek ini
							juga digunakan oleh Johnny Christ dari Avenged Sevenfold yang
							dimana ia adalah musisi terkenal di dunia.
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full ">
						<Image src={rizky} alt="dewa19" className="w-96" />
						<h1 className="w-80 text-justify">
							Penyanyi Indonesia memiliki mic dengan harga mahal. Ada yang beli
							mic seharga 75 juta, ada yang 80 juta, bahkan ada yang 400 juta.
							Mic-mic ini bukan sembarang mic, tapi mic yang dipake sama
							penyanyi-penyanyi terkenal di dunia. Dari penyanyi terkenal dari
							Indonesia contohnya Rizky Febian. Ia membeli microphone tipe Shure
							KSM9 yang harganya mencapai 75 juta rupiah.
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full ">
						<Image src={drum} alt="dewa19" className="w-96" />
						<h1 className="w-80 text-justify">
							Menjadi drummer profesional dan mampu memberikan penampilan
							terbaiknya di atas panggung memang bukanlah hal mudah. Namun
							dengan produk drum dari Yamaha, Agung Yudha Asmara mampu
							melakukannya. Drummer gimbal yang dikenal sebagai penggebuk drum
							Dewa 19 ini selalu mempercayakan drum set-nya dengan produk
							Yamaha. Nggak heran, sih, soalnya, drum-drum dari Yamaha dikenal
							awet banget, bahannya pun solid. Sehingga tak heran, bila drum
							Yamaha mampu memproduksi suara yang stabil dan dipercaya musisi
							kece kayak Agung Yudha Asmara.
						</h1>
					</div>
					<h1>Sumber</h1>
					<p>
						https://hot.detik.com/music/d-1881092/ini-dia-gitar-fender-signature-eross-candra
						https://www.google.com/amp/s/m.tribunnews.com/amp/seleb/2023/10/12/ahmad-dhani-pilih-gunakan-keyboard-elektrik-piano-yang-bisa-hasilkan-suara-klasik
						https://www.google.com/amp/s/keepo.me/celeb/7-penyanyi-ini-punya-microphone-dengan-harga-mahal--dari-puluhan-sampai-ratusan-juta/amp
						https://m.facebook.com/YamahaMusikIndonesiaDistributor/photos/a.577796642322299/1644894492279170/?type=3
					</p>
				</div>
			</div>
		</div>
	);
};

export default allGenres;
