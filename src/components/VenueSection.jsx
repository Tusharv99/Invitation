import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoldCorner } from './RoyalMotifs';
import { MapPin, Navigation, ExternalLink, Compass, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

export const VenueSection = ({ venue }) => {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const compassRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(compassRef.current,
        { scale: 0.85, rotate: -45, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            once: true
          }
        }
      );

      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 25, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 95%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);

    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#FAF6F0'],
      shapes: ['circle'],
      scalar: 0.8
    });
  };

  return (
    <section ref={sectionRef} id="venue-section" className="relative py-20 px-4">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-6">
          <div ref={compassRef}>
            <Compass className="w-10 h-10 text-[#D4AF37] mb-2 animate-spin-slow" />
          </div>
          <p className="text-[#997A15] text-xs font-semibold tracking-[0.25em] uppercase font-sans-body">
            शुभ स्थल
          </p>
          <h2 className="text-3xl font-royal-title text-[#4A1521] font-bold mt-1">
            The Wedding Destination
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2"></div>
          <p className="text-[#4A1521]/70 text-xs font-sans-body max-w-xs mx-auto leading-relaxed">
            Surrounded by the serene Aravalli hills in the sacred town of Pushkar, Rajasthan.
          </p>
        </div>

        {/* Venue Card */}
        <div
          ref={cardRef}
          className="relative rounded-3xl overflow-hidden bg-white/80 border border-[#D4AF37]/40 shadow-[0_12px_35px_rgba(212,175,55,0.15)] text-left transition-all duration-300 hover:shadow-2xl"
        >
          {/* Ornamental Corners */}
          <div className="absolute top-2 left-2 z-10 pointer-events-none">
            <GoldCorner className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div className="absolute top-2 right-2 z-10 pointer-events-none rotate-90">
            <GoldCorner className="w-6 h-6 text-[#D4AF37]" />
          </div>

          {/* Venue Image with Gradient Overlay */}
          <div className="relative h-48 w-full overflow-hidden group">
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A1521] via-transparent to-black/20"></div>
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#F4E8C1] font-sans-body">
                {venue.subTitle}
              </span>
              <h3 className="text-2xl font-royal-title font-bold text-white tracking-wide">
                {venue.name}
              </h3>
            </div>
          </div>

          {/* Venue Content & Address */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/30 text-[#C47B78] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#4A1521] font-sans-body">
                    {venue.fullAddress}
                  </p>
                  <p className="text-xs text-[#7D8E74] font-medium mt-1 font-sans-body">
                    Pushkar Bypass Road • Rajasthan
                  </p>
                </div>
              </div>
            </div>

            {/* Copy Address Button */}
            <button
              onClick={handleCopyAddress}
              className="w-full mb-4 py-2 px-3 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/30 text-xs font-semibold text-[#4A1521] flex items-center justify-center gap-1.5 hover:bg-white transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700 font-bold">Address Copied for Uber / Ola!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Copy Address for Navigation</span>
                </>
              )}
            </button>

            {/* Travel Guidance */}
            <div className="p-3 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/20 text-xs text-[#4A1521]/75 mb-5 font-sans-body space-y-1">
              <p>🚆 <strong>Nearest Station:</strong> Ajmer Junction (~14 km)</p>
              <p>✈️ <strong>Nearest Airport:</strong> Kishangarh Airport (~40 km) / Jaipur (~145 km)</p>
            </div>

            {/* 1-Tap Google Maps Button */}
            <a
              href={venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#4A1521] text-[#FAF6F0] hover:bg-[#381019] shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
              <span className="font-sans-body font-semibold text-xs tracking-wider uppercase">
                Get Directions on Google Maps
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FAF6F0]/70 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
