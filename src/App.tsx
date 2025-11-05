import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';
import { useLenis } from '@/hooks/useLenis';

export default function App() {
  useLenis();

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}
