import Image from 'next/image';
import dewa19 from '@/img/dewa19.webp';
import noah from '@/img/ariel.webp';
import sheila from '@/img/sheila.webp';
import padi from '@/img/padi.webp';
import kangen from '@/img/kangen.webp';
import slank from '@/img/slank.webp';
import hindia from '@/img/hindia.webp';
import reality from '@/img/reality.webp';
import armada from '@/img/armada.webp';
import hivi from '@/img/hivi.webp';

const topcharts = () => {
	return (
		<div className="absolute w-full">
			<div className="mt-28 p-2">
				<h1 className="text-4xl font-bold text-center p-2">Top Charts</h1>
				<div className="flex flex-col">
					<div className="flex justify-center items-center gap-4 p-2 w-full ">
						<Image src={dewa19} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							1. Dewa 19 Total listeners: 7.2 M monthly listeners
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full  ">
						<Image src={noah} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							2. Noah 19 Total listeners: 4.5 M monthly listeners
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full  ">
						<Image src={sheila} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							3. Sheila on 7 Total listeners: 5.5 M monthly listeners
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full  ">
						<Image src={padi} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							4. Padi Total listeners: 2.6 M monthly listeners
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full  ">
						<Image src={kangen} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							5. Kangen Band Total listeners: 1.7 M monthly listeners
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full  ">
						<Image src={slank} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							6. Slank Total listeners: 1.1 M monthly listeners
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full  ">
						<Image src={hindia} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							7. Hindia Total listeners: 8.1 M monthly listeners
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full  ">
						<Image src={reality} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							8. Reality Club Total listeners: 3.2 M monthly listeners
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full  ">
						<Image src={armada} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							9. Armada Total listeners: 4.4 monthly listeners
						</h1>
					</div>
					<div className="flex justify-center items-center gap-4 p-2 w-full  ">
						<Image src={hivi} alt="dewa19" className="w-60" />
						<h1 className="w-72 ">
							10. Hivi! Total listeners: 4.9 monthly listeners
						</h1>
					</div>
				</div>
				<h1>Sumber:</h1>
				<p>pophariini.com</p>
				<p>spotify</p>
				<p>joylandfest.com/lineup/reality-club/</p>
				<p>medcom.id</p>
				<p>music.fandom.com/wiki/Slank</p>
				<p>Resso</p>
				<p>YouTube</p>
			</div>
		</div>
	);
};

export default topcharts;
