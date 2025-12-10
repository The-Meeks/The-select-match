import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Process from '@/components/Process';
import Packages from '@/components/Packages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Process />
      <Packages />
      <Contact />
      <Footer />
    </main>
  );
}