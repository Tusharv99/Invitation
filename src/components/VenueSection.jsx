import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoldCorner, RoyalElephantMotif, LotusMotif } from './RoyalMotifs';
import { MapPin, Navigation, ExternalLink, Compass, Copy, Check, Car, Train, Plane } from 'lucide-react';
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
    <section ref={sectionRef} id="venue-section" className="relative py-20 px-3 md:px-4">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-6">
          <div ref={compassRef}>
            <Compass className="w-10 h-10 text-[#D4AF37] mb-2 animate-spin-slow" />
          </div>
          <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase font-sans-body">
            ॥ पावन विवाह स्थल ॥
          </p>
          <h2 className="text-3xl font-royal-title text-[#FAF6F0] font-bold mt-1 tracking-wide">
            {venue.name}
          </h2>
          <p className="text-[#F7E7B4]/80 text-xs font-marcellus tracking-wider mt-0.5">
            {venue.nameEnglish} • {venue.cityEnglish}
          </p>
          <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2"></div>
          <p className="text-[#FAF6F0]/80 text-xs font-devanagari max-w-xs mx-auto leading-relaxed">
            पवित्र तीर्थ नगरी पुष्कर की अरावली पहाड़ियों की गोद में स्थित भव्य राजसी रिसॉर्ट।
          </p>
        </div>

        {/* Venue Card */}
        <div
          ref={cardRef}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5EBE1] border-2 border-[#D4AF37]/65 shadow-[0_15px_45px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.2)] text-left transition-all duration-300 hover:shadow-2xl"
        >
          {/* Ornamental Corners */}
          <div className="absolute top-2 left-2 z-10 pointer-events-none">
            <GoldCorner className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div className="absolute top-2 right-2 z-10 pointer-events-none rotate-90">
            <GoldCorner className="w-6 h-6 text-[#D4AF37]" />
          </div>

          {/* Venue Image with Gradient Overlay */}
          <div className="relative h-52 w-full overflow-hidden group">
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E0A16] via-transparent to-black/30"></div>
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#F7E7B4] font-sans-body">
                {venue.subTitle}
              </span>
              <h3 className="text-2xl font-yatra font-bold text-white tracking-wide">
                {venue.name}
              </h3>
            </div>
          </div>

          {/* Venue Content & Address */}
          <div className="p-5 text-[#3E0A16]">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#540D1F] text-[#D4AF37] shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#4A0E1A] font-devanagari leading-snug">
                  {venue.fullAddress}
                </p>
                <p className="text-xs text-[#996515] font-semibold mt-1 font-devanagari">
                  मोतीसर रोड, गनाहेड़ा • पुष्कर (राजस्थान)
                </p>
              </div>
            </div>

            {/* Copy Address Button */}
            <button
              onClick={handleCopyAddress}
              className="w-full mb-4 py-2.5 px-3 rounded-xl bg-white border border-[#D4AF37]/50 text-xs font-bold text-[#540D1F] flex items-center justify-center gap-1.5 hover:bg-[#FAF4E8] transition-colors cursor-pointer shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-700" />
                  <span className="text-green-800 font-bold">पता कॉपी हो गया (नेविगेशन के लिए तैयार)!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B8870A]" />
                  <span>पता कॉपी करें (Ola / Uber / Maps के लिए)</span>
                </>
              )}
            </button>

            {/* Travel Guidance */}
            <div className="p-3 rounded-2xl bg-white/80 border border-[#D4AF37]/25 text-xs text-[#4A0E1A]/85 mb-5 font-devanagari space-y-1.5">
              <p className="flex items-center gap-1.5">
                <Train className="w-3.5 h-3.5 text-[#B8870A] shrink-0" />
                <span><strong>निकटतम रेलवे स्टेशन:</strong> अजमेर जंक्शन (~14 किमी)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-[#72122A] shrink-0" />
                <span><strong>निकटतम हवाई अड्डा:</strong> किशनगढ़ (~40 किमी) / जयपुर (~145 किमी)</span>
              </p>
            </div>

            {/* 1-Tap Google Maps Button */}
            <a
              href={venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#540D1F] via-[#72122A] to-[#540D1F] text-[#FAF6F0] hover:brightness-110 shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
              <span className="font-devanagari font-bold text-xs tracking-wider">
                गूगल मैप्स पर रास्ता देखें (Get Directions)
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FAF6F0]/70 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
