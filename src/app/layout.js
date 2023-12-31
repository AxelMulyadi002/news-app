import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'SukaMusik',
	description: 'Created By Suka Musik',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[#2D2D2F] text-white`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
