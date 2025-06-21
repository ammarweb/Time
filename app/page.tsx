// import Image from "next/image";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <GetInTouch />
      <Footer/>
    </main>
  );
}
