import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProfilePage() {
	return (
		<main className="min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
			<Header />
			<section className="px-6 py-12">
				<h1 className="text-4xl font-bold mb-4">Your Profile</h1>
				<p className="text-lg">This is the profile page.</p>
			</section>
			<Footer />
		</main>
	);
}

