import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { GaneshMotif, GoldCorner } from './RoyalMotifs';
import { Calendar, MapPin, Heart, ChevronDown } from 'lucide-react';

export const HeroSection = ({ data }) => {
  const { couple, venue, datesSummary } = data;
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);
  const groomCardRef = useRef(null);
  const brideCardRef = useRef(null);
  const titlesRef = useRef(null);
  const badgesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Snappy and reliable initial entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
      .fromTo(cardRef.current,
        { opacity: 0, scale: 0.96, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo([groomCardRef.current, brideCardRef.current],
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.5 },
        '-=0.4'
      )
      .fromTo(titlesRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(badgesRef.current,
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
      particleCount: 45,
      spread: 60,
      origin: { y: 0.45 },
      colors: ['#D4AF37', '#C47B78', '#FAF6F0', '#E8C5B8'],
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
      className="relative min-h-screen flex flex-col justify-between items-center text-center px-4 pt-16 pb-8 overflow-hidden"
    >
      {/* Background Subtle Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-[500px] h-[500px] rounded-full border-[12px] border-[#D4AF37] border-double animate-spin-slow"></div>
      </div>

      {/* Top Auspicious Header */}
      <div ref={headerRef} className="relative z-10 w-full max-w-md mx-auto pt-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
          <GaneshMotif className="w-12 h-12 text-[#D4AF37] drop-shadow-sm animate-pulse" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
        </div>

        <p className="text-[#997A15] text-xs font-semibold tracking-[0.2em] uppercase font-sans-body mb-1">
          {couple.invocation}
        </p>

        <p className="text-[#7D8E74] text-[11px] font-sans-body tracking-wider italic max-w-xs mx-auto leading-relaxed">
          {couple.shloka}
        </p>
      </div>

      {/* Main Wedding Card Center Frame - Always solid and visible */}
      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-md mx-auto my-6 p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-[0_12px_40px_rgba(212,175,55,0.16)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(212,175,55,0.25)]"
      >
        {/* Four Golden Corner Flourishes */}
        <div className="absolute top-2 left-2 pointer-events-none">
          <GoldCorner className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none rotate-90">
          <GoldCorner className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none -rotate-90">
          <GoldCorner className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none rotate-180">
          <GoldCorner className="w-6 h-6 text-[#D4AF37]" />
        </div>

        <p className="text-[#C47B78] font-script text-2xl mb-1">
          Save the Auspicious Dates
        </p>

        <p className="text-[#4A1521]/70 text-xs tracking-wider uppercase font-sans-body mb-4">
          Together with their families
        </p>

        {/* Bride & Groom Portraits in Royal Arches with Interactive Hover */}
        <div className="grid grid-cols-2 gap-4 my-5 items-center justify-center relative">
          {/* Groom: Pawan */}
          <div ref={groomCardRef} className="flex flex-col items-center group">
            <div className="relative w-28 h-36 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md p-1 bg-[#FAF6F0] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <img
                src={couple.groomPhoto}
                alt="Groom Pawan"
                className="w-full h-full object-cover rounded-t-full rounded-b-xl transition-transform duration-500 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#4A1521]/90 to-transparent p-1">
                <span className="text-[10px] text-white tracking-widest font-sans-body uppercase font-bold">
                  Groom
                </span>
              </div>
            </div>
            <h3 className="font-royal-title text-lg text-[#4A1521] mt-2 font-bold tracking-wide">
              {couple.groom}
            </h3>
            <p className="text-[10px] text-[#4A1521]/60 font-sans-body max-w-[120px] leading-tight">
              S/o {couple.groomParents}
            </p>
          </div>

          {/* Center Interactive Heart Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-12 z-20">
            <button
              onClick={triggerHeartConfetti}
              aria-label="Shower Love"
              title="Tap to shower blessings!"
              className="w-10 h-10 rounded-full bg-[#FAF6F0] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg text-[#C47B78] hover:scale-115 active:scale-95 transition-all duration-300 cursor-pointer pulse-gold group"
            >
              <Heart className="w-5 h-5 fill-[#C47B78] group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Bride: Deepika */}
          <div ref={brideCardRef} className="flex flex-col items-center group">
            <div className="relative w-28 h-36 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md p-1 bg-[#FAF6F0] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <img
                src={couple.bridePhoto}
                alt="Bride Deepika"
                className="w-full h-full object-cover rounded-t-full rounded-b-xl transition-transform duration-500 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#4A1521]/90 to-transparent p-1">
                <span className="text-[10px] text-white tracking-widest font-sans-body uppercase font-bold">
                  Bride
                </span>
              </div>
            </div>
            <h3 className="font-royal-title text-lg text-[#4A1521] mt-2 font-bold tracking-wide">
              {couple.bride}
            </h3>
            <p className="text-[10px] text-[#4A1521]/60 font-sans-body max-w-[120px] leading-tight">
              D/o {couple.brideParents}
            </p>
          </div>
        </div>

        {/* Grand Wedding Announcement Title */}
        <div ref={titlesRef} className="my-4">
          <p className="font-script text-3xl text-[#C47B78] mb-0 leading-none">
            cordially invite you to the wedding of
          </p>
          <h1 className="text-3xl font-royal-title text-[#4A1521] tracking-wider font-extrabold my-2">
            <span className="text-[#997A15]">{couple.groom}</span>
            <span className="text-[#C47B78] mx-2 font-script text-3xl font-normal">&</span>
            <span className="text-[#997A15]">{couple.bride}</span>
          </h1>
          <p className="text-[#4A1521]/75 text-xs font-sans-body max-w-xs mx-auto leading-relaxed mt-2">
            {couple.invitationQuote}
          </p>
        </div>

        {/* Date and Location Badges */}
        <div ref={badgesRef} className="mt-5 pt-4 border-t border-[#D4AF37]/25 flex flex-col gap-2">
          <div className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/45 text-[#4A1521] shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider font-sans-body">
              {datesSummary}
            </span>
          </div>

          <div className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/45 text-[#4A1521] shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#C47B78]" />
            <span className="text-xs font-medium tracking-wide font-sans-body">
              {venue.name}, {venue.city}
            </span>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <button
        onClick={scrollToNext}
        className="relative z-10 flex flex-col items-center gap-1 text-[#997A15] hover:text-[#4A1521] transition-colors mt-2 cursor-pointer group"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold font-sans-body">
          Auspicious Mahurat
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
};
