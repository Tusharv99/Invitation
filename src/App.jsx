import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import weddingData from './data/weddingData.json';
import couplePhoto from './assets/couple-photo.jpeg';
import { OpeningCurtain } from './components/OpeningCurtain';
import { BackgroundMusic } from './components/BackgroundMusic';
import { FloatingPetals } from './components/FloatingPetals';
import { TouchSparkles } from './components/TouchSparkles';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { EventsSection } from './components/EventsSection';
import { FamilySection } from './components/FamilySection';
import { VenueSection } from './components/VenueSection';
import { BlessingsSection } from './components/BlessingsSection';
import { Calendar, Clock, MapPin, Heart, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [autoStartMusic, setAutoStartMusic] = useState(false);
  const lenisRef = useRef(null);

  const heroData = {
    ...weddingData,
    couple: {
      ...weddingData.couple,
      groomPhoto: couplePhoto,
      bridePhoto: couplePhoto
    }
  };

  // Initialize Lenis Smooth Scrolling in sync with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleWindowLoad);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  const handleOpenComplete = () => {
    setHasOpened(true);
    setAutoStartMusic(true);
    // Refresh ScrollTrigger calculations after curtain opens
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
  };

  const handleMusicTrigger = () => {
    setAutoStartMusic(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -20 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1A0309] flex justify-center items-center selection:bg-[#D4AF37] selection:text-[#380814]">
      {/* Opening Royal Envelope Curtain (Screen 1) */}
      {!hasOpened && (
        <OpeningCurtain
          onOpenComplete={handleOpenComplete}
          onMusicTrigger={handleMusicTrigger}
        />
      )}

      {/* Floating Ambient Music Controller */}
      <BackgroundMusic autoStart={autoStartMusic} />

      {/* Falling Marigold & Rose Petals */}
      <FloatingPetals />

      {/* Interactive Golden Touch Sparkle Particle Trail */}
      <TouchSparkles />

      {/* 
        Mobile-First App Showcase Wrapper:
        - Full-width on mobile phones (< 640px)
        - Luxury framed mobile phone presentation on tablet/desktop with royal drop-shadow
      */}
      <main className="w-full max-w-md mx-auto min-h-screen bg-gradient-to-b from-[#2B0611] via-[#3B0A17] to-[#1C030A] relative shadow-[0_0_100px_rgba(0,0,0,0.85)] border-x-2 border-[#D4AF37]/45 overflow-x-hidden pb-32">
        {/* Subtle Royal Jaali Lattice Background Overlay */}
        <div className="absolute inset-0 bg-jaali-dark opacity-35 pointer-events-none"></div>

        {/* Screen 2: Eye-Catching Landing Page / Hero Section */}
        <div id="hero-section">
          <HeroSection data={heroData} />
        </div>

        {/* Screen 3: Time Counter on 3rd Page */}
        <div id="countdown-section">
          <CountdownSection targetDateIso={weddingData.weddingDateIso} />
        </div>

        {/* Screen 4: Rajasthani Mahal Window Ceremonies */}
        <div id="events-section">
          <EventsSection eventsSchedule={weddingData.eventsSchedule} />
        </div>

        {/* Screen 5: Complete Family Details from Card Image 1 */}
        <div id="family-section">
          <FamilySection familyDetails={weddingData.familyDetails} />
        </div>

        {/* Screen 6: Pushkar Fort Resort Venue & Map Link */}
        <div id="venue-section">
          <VenueSection venue={weddingData.venue} />
        </div>

        {/* Screen 7: Blessings & Family Sign-off */}
        <BlessingsSection blessings={weddingData.blessings} couple={weddingData.couple} />

        {/* Mobile Floating Bottom Bar for Quick Thumb Navigation */}
        <nav
          aria-label="Quick Navigation"
          className="fixed bottom-4 inset-x-0 mx-auto w-[94%] max-w-sm z-40 backdrop-blur-xl bg-[#26050F]/90 border border-[#D4AF37]/60 shadow-[0_8px_30px_rgba(0,0,0,0.7)] rounded-full py-2 px-3 flex items-center justify-around"
        >
          <button
            onClick={() => scrollToSection('hero-section')}
            className="flex flex-col items-center text-[#F7E7B4]/70 hover:text-[#D4AF37] transition-colors cursor-pointer group"
          >
            <Heart className="w-4 h-4 text-[#D4AF37] group-hover:scale-115 transition-transform" />
            <span className="text-[9.5px] font-bold tracking-wider font-devanagari mt-0.5">
              वर-वधू
            </span>
          </button>

          <button
            onClick={() => scrollToSection('countdown-section')}
            className="flex flex-col items-center text-[#F7E7B4]/70 hover:text-[#D4AF37] transition-colors cursor-pointer group"
          >
            <Clock className="w-4 h-4 text-[#D4AF37] group-hover:scale-115 transition-transform" />
            <span className="text-[9.5px] font-bold tracking-wider font-devanagari mt-0.5">
              मुहूर्त
            </span>
          </button>

          <button
            onClick={() => scrollToSection('events-section')}
            className="flex flex-col items-center text-[#F7E7B4]/70 hover:text-[#D4AF37] transition-colors cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37] group-hover:scale-115 transition-transform" />
            <span className="text-[9.5px] font-bold tracking-wider font-devanagari mt-0.5">
              कार्यक्रम
            </span>
          </button>

          <button
            onClick={() => scrollToSection('family-section')}
            className="flex flex-col items-center text-[#F7E7B4]/70 hover:text-[#D4AF37] transition-colors cursor-pointer group"
          >
            <Users className="w-4 h-4 text-[#D4AF37] group-hover:scale-115 transition-transform" />
            <span className="text-[9.5px] font-bold tracking-wider font-devanagari mt-0.5">
              परिवार
            </span>
          </button>

          <button
            onClick={() => scrollToSection('venue-section')}
            className="flex flex-col items-center text-[#F7E7B4]/70 hover:text-[#D4AF37] transition-colors cursor-pointer group"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37] group-hover:scale-115 transition-transform" />
            <span className="text-[9.5px] font-bold tracking-wider font-devanagari mt-0.5">
              स्थल
            </span>
          </button>
        </nav>
      </main>
    </div>
  );
}
