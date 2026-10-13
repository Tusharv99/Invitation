import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import {
  GaneshMotif,
  ShehnaiNagadaMotif,
  LotusMotif
} from './RoyalMotifs';
import { RajasthaniJharokhaCard } from './RajasthaniJharokhaCard';
import { Calendar, MapPin, Heart, ChevronDown } from 'lucide-react';

export const HeroSection = ({ data }) => {
  const { couple, venue, datesSummary, datesSummaryEnglish } = data;
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const jharokhasRef = useRef(null);
  const announcementRef = useRef(null);
  const badgesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
      .fromTo(
        jharokhasRef.current,
        { opacity: 0, scale: 0.96, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7 },
        '-=0.2'
      )
      .fromTo(
        announcementRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        badgesRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.2'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const triggerHeartConfetti = (e) => {
    e.stopPropagation();
    confetti({
      particleCount: 55,
      spread: 75,
      origin: { y: 0.42 },
      colors: ['#D4AF37', '#F7E7B4', '#C47B78', '#FAF6F0', '#E5A93C', '#BF8C2C'],
      shapes: ['circle'],
      scalar: 1.2
    });
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('countdown-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between items-center text-center px-3 md:px-4 pt-14 pb-10 overflow-hidden"
    >
      {/* Subtle Rotating Mandala in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <div className="w-[540px] h-[540px] rounded-full border-[14px] border-[#D4AF37] border-double animate-spin-slow"></div>
      </div>

      {/* 1. TOP AUSPICIOUS INVOCATION & SHLOKA (Clean & Majestic) */}
      <div ref={headerRef} className="relative z-10 w-full max-w-md mx-auto pt-2">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ShehnaiNagadaMotif className="w-9 h-7 text-[#D4AF37] drop-shadow-sm" />
          <GaneshMotif className="w-13 h-13 text-[#D4AF37] drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)] animate-pulse" />
          <ShehnaiNagadaMotif className="w-9 h-7 text-[#D4AF37] drop-shadow-sm" flip={true} />
        </div>

        <p className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase font-devanagari mb-1">
          {couple.invocation}
        </p>

        <p className="text-[#F7E7B4]/90 text-[11px] font-devanagari italic max-w-xs mx-auto leading-relaxed px-3">
          "{couple.shloka}"
        </p>

        <div className="flex items-center justify-center gap-2 my-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60"></div>
          <span className="text-[10px] text-[#D4AF37] font-semibold tracking-widest font-sans-body uppercase">
            Save the Auspicious Dates
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/60"></div>
        </div>

        <p className="text-[#FAF6F0] font-yatra text-base tracking-wide">
          {couple.blessingLine}
        </p>
      </div>

      {/* 2. SINGLE RAJASTHANI MAHAL JHAROKHA (Couple Photo) */}
      <div
        ref={jharokhasRef}
        className="relative z-10 w-full max-w-md mx-auto my-4 py-2"
      >
        <div className="relative flex justify-center">
          <RajasthaniJharokhaCard
            clipId="couple-arch-clip"
            photo={couple.groomPhoto}
            themeColor="gold"
            widthClass="max-w-[260px]"
          />

          {/* CENTER INTERACTIVE BLESSING SEAL (संग / Weds) */}
          <div className="absolute left-1/2 bottom-1 -translate-x-1/2 z-30">
            <button
              onClick={triggerHeartConfetti}
              aria-label="Shower Blessings"
              title="Touch to shower blessings!"
              className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFF8E7] via-[#FCEFC7] to-[#ECC870] border-2 border-[#FAF6F0] flex flex-col items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.6)] text-[#540D1F] hover:scale-115 active:scale-95 transition-all duration-300 cursor-pointer pulse-gold group"
            >
              <Heart className="w-5 h-5 fill-[#72122A] text-[#72122A] group-hover:scale-125 transition-transform" />
              <span className="text-[8px] font-bold font-devanagari text-[#3E0A16] -mt-0.5 leading-none">
                संग
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. WEDDING INVITATION ANNOUNCEMENT (Clean, Regal, Uncluttered) */}
      <div ref={announcementRef} className="relative z-10 w-full max-w-md mx-auto my-1">
        <h1 className="text-2xl md:text-3xl font-yatra gold-gradient-text tracking-wide font-bold">
          {couple.groom} <span className="font-script text-2xl text-[#FAF6F0] font-normal mx-1">&</span> {couple.bride}
        </h1>

        <p className="text-[11px] text-[#F7E7B4]/85 font-devanagari max-w-xs mx-auto leading-relaxed mt-1 px-2">
          {couple.invitationQuote}
        </p>
      </div>

      {/* 4. DATE AND LOCATION ROYAL RIBBON BADGES */}
      <div ref={badgesRef} className="relative z-10 w-full max-w-md mx-auto mt-3 flex flex-col gap-2 items-center">
        {/* Date Badge */}
        <div className="inline-flex items-center justify-center gap-2 py-2 px-5 rounded-full bg-[#3B0A17]/85 border border-[#D4AF37]/60 text-[#FAF6F0] shadow-[0_4px_15px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs font-bold tracking-wide font-devanagari">
            {datesSummary} ({datesSummaryEnglish})
          </span>
        </div>

        {/* Venue Badge */}
        <div className="inline-flex items-center justify-center gap-2 py-2 px-5 rounded-full bg-[#3B0A17]/85 border border-[#D4AF37]/60 text-[#FAF6F0] shadow-[0_4px_15px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
          <span className="text-xs font-semibold tracking-wide font-devanagari">
            {venue.name}, {venue.city}
          </span>
        </div>
      </div>

      {/* 5. DOWN ARROW TO MAHORAT SECTION */}
      <button
        onClick={scrollToNext}
        className="relative z-10 flex flex-col items-center gap-1 text-[#D4AF37] hover:text-[#FAF6F0] transition-colors mt-4 cursor-pointer group"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold font-devanagari">
          शुभ लग्न मुहूर्त देखें
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
};
