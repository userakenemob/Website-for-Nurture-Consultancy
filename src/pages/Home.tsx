import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { ApproachSection } from '../components/home/ApproachSection';
import { PartnersSection } from '../components/home/PartnersSection';

export function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <PartnersSection />
    </div>
  );
}
