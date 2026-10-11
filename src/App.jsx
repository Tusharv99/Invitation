import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import weddingData from './data/weddingData.json';
import { OpeningCurtain } from './components/OpeningCurtain';
import { BackgroundMusic } from './components/BackgroundMusic';
import { FloatingPetals } from './components/FloatingPetals';
import { TouchSparkles } from './components/TouchSparkles';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { EventsSection } from './components/EventsSection';
import { VenueSection } from './components/VenueSection';
import { BlessingsSection } from './components/BlessingsSection';
import { Calendar, Clock, MapPin, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [autoStartMusic, setAutoStartMusic] = useState(false);
  const lenisRef = useRef(null);

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
    <div className="min-h-screen bg-[#240A10] flex justify-center items-center selection:bg-[#D4AF37] selection:text-white">
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
      <main className="w-full max-w-md mx-auto min-h-screen bg-[#FAF6F0] relative shadow-[0_0_80px_rgba(0,0,0,0.6)] border-x border-[#D4AF37]/30 overflow-x-hidden pb-32">
        {/* Subtle Palace Wallpaper Texture Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#4a1521_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Screen 2: Eye-Catching Landing Page / Hero Section */}
        <div id="hero-section">
          <HeroSection data={weddingData} />
        </div>

        {/* Screen 3: Time Counter on 3rd Page */}
        <CountdownSection targetDateIso={weddingData.weddingDateIso} />

        {/* Screen 4: Haldi, Mehendi, Sangeet, Phere, Reception */}
        <EventsSection events={weddingData.events} />

        {/* Screen 5: Pratap Mahal Pushkar Venue & Map Link */}
        <VenueSection venue={weddingData.venue} />

        {/* Screen 6: Blessings & Family Sign-off */}
        <BlessingsSection blessings={weddingData.blessings} couple={weddingData.couple} />

        {/* Mobile Floating Bottom Bar for Quick Thumb Navigation */}
        <nav
          aria-label="Quick Navigation"
          className="fixed bottom-4 inset-x-0 mx-auto w-[92%] max-w-sm z-40 backdrop-blur-lg bg-white/90 border border-[#D4AF37]/50 shadow-2xl rounded-full py-2.5 px-4 flex items-center justify-around"
        >
          <button
            onClick={() => scrollToSection('hero-section')}
            className="flex flex-col items-center text-[#4A1521] hover:text-[#997A15] transition-colors cursor-pointer group"
          >
            <Heart className="w-4 h-4 text-[#C47B78] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-semibold tracking-wider font-sans-body mt-0.5">
              Couple
            </span>
          </button>

          <button
            onClick={() => scrollToSection('countdown-section')}
            className="flex flex-col items-center text-[#4A1521] hover:text-[#997A15] transition-colors cursor-pointer group"
          >
            <Clock className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-semibold tracking-wider font-sans-body mt-0.5">
              Mahurat
            </span>
          </button>

          <button
            onClick={() => scrollToSection('events-section')}
            className="flex flex-col items-center text-[#4A1521] hover:text-[#997A15] transition-colors cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-[#7D8E74] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-semibold tracking-wider font-sans-body mt-0.5">
              Ceremonies
            </span>
          </button>

          <button
            onClick={() => scrollToSection('venue-section')}
            className="flex flex-col items-center text-[#4A1521] hover:text-[#997A15] transition-colors cursor-pointer group"
          >
            <MapPin className="w-4 h-4 text-[#C47B78] group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-semibold tracking-wider font-sans-body mt-0.5">
              Venue
            </span>
          </button>
        </nav>
      </main>
    </div>
  );
}
