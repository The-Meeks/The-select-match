import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Packages from '@/components/Packages';
import MembershipPreferences from '@/components/MembershipPreferences';
import PrivacySafety from '@/components/PrivacySafety';
import FAQ from '@/components/FAQ';
import PaymentOptions from '@/components/PaymentOptions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Process />
      <Packages />
      <MembershipPreferences />
      <PrivacySafety />
      <FAQ />
      <PaymentOptions />
      <Contact />
      <Footer />
    </main>
  );
}