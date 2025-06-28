
import Header from '../components/Header';
import PromoBannerInauguration from '../components/PromoBannerInauguration';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      <Header />
      <PromoBannerInauguration />
      <Hero />
      <Catalog />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
