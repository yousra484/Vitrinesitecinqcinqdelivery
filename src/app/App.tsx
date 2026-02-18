import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhySection } from './components/WhySection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Toaster position="top-right" />
      <Header />
      <main>
        <HeroSection onScrollToSection={scrollToSection} />
        <VideoSection />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <ApplicationsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}