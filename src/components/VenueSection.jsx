import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Compass,
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Train,
  Plane,
  Car,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import pushkarFortImg from '../assets/pushkarfort.png';
import { LotusMotif } from './RoyalMotifs';

gsap.registerPlugin(ScrollTrigger);

export const VenueSection = ({ venue }) => {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const infoRef = useRef(null);

  const englishAddress =
    venue.fullAddressEnglish ||
    'Pushkar Fort Resort, Motisar Road, Ganahera, Pushkar, Rajasthan 305022';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mediaRef.current,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mediaRef.current,
            start: 'top 90%',
            once: true
          }
        }
      );

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 92%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEnglishAddress = () => {
    navigator.clipboard.writeText(englishAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#FAF6F0', '#ECC870', '#E5A93C'],
      shapes: ['circle'],
      scalar: 0.85
    });
  };

  return (
    <section
      ref={sectionRef}
      id="venue-section"
      className="relative py-20 px-3 md:px-4"
    >
      <div className="w-full max-w-md mx-auto text-center space-y-7">
        {/* 1. Modern Regal Section Header */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A0E1D] to-[#25040B] border border-[#D4AF37]/50 flex items-center justify-center mb-3 shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
            <Compass className="w-6 h-6 text-[#D4AF37] animate-spin-slow" />
          </div>

          <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase font-sans-body">
            ॥ पावन विवाह स्थल ॥
          </p>

          <h2 className="text-3xl font-royal-title text-[#FAF6F0] font-bold mt-1 tracking-wide">
            {venue.name}
          </h2>

          <p className="text-[#F7E7B4]/85 text-xs font-marcellus tracking-wider mt-0.5">
            {venue.nameEnglish} • {venue.cityEnglish}
          </p>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2.5"></div>

          <p className="text-[#FAF6F0]/80 text-xs font-devanagari max-w-xs mx-auto leading-relaxed">
            पवित्र तीर्थ नगरी पुष्कर की अरावली पहाड़ियों की सुरम्य वादियों में स्थित भव्य हेरिटेज रिसॉर्ट।
          </p>
        </div>

        {/* 2. Modern Cinematic Venue Hero (Aerial View of Pushkar Fort Resort) */}
        <div
          ref={mediaRef}
          className="relative w-full rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.2)] group"
        >
          {/* Main Resort Photo */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1A0307]">
            <img
              src={pushkarFortImg}
              alt={venue.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient Overlays for Cinematic Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F040A] via-transparent to-black/40"></div>
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#1F040A]/60"></div>

            {/* Floating Top Badge */}
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A0307]/80 border border-[#D4AF37]/60 backdrop-blur-md text-[#F7E7B4] text-[10.5px] font-semibold tracking-wider font-sans-body uppercase shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span>हेरिटेज रॉयल रिसॉर्ट</span>
              </span>
            </div>

            {/* Floating Quick Navigation Pill */}
            <div className="absolute top-3.5 right-3.5 z-10">
              <a
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4AF37] text-[#24050E] text-[10.5px] font-bold tracking-wider font-sans-body uppercase shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <Navigation className="w-3 h-3 fill-current" />
                <span>मैप्स</span>
              </a>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 left-4 right-4 text-left z-10">
              <p className="text-[10px] tracking-widest uppercase font-bold text-[#D4AF37] font-sans-body drop-shadow">
                Heritage Fort & Resort • Pushkar
              </p>
              <h3 className="text-xl md:text-2xl font-yatra font-bold text-[#FAF6F0] tracking-wide drop-shadow-md">
                {venue.name}
              </h3>
            </div>
          </div>

          {/* Quick Highlight Chips Below Photo */}
          <div className="bg-gradient-to-r from-[#2B050E] via-[#380814] to-[#2B050E] px-4 py-2.5 flex items-center justify-around text-[#F7E7B4] text-[11px] font-devanagari border-t border-[#D4AF37]/30">
            <span className="inline-flex items-center gap-1">
              <span className="text-[#D4AF37]">🏰</span>
              <span>शाही प्रांगण</span>
            </span>
            <span className="text-[#D4AF37]/40">•</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-[#D4AF37]">🌴</span>
              <span>विशाल लॉन</span>
            </span>
            <span className="text-[#D4AF37]/40">•</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-[#D4AF37]">🏊</span>
              <span>स्विमिंग पूल</span>
            </span>
            <span className="text-[#D4AF37]/40">•</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-[#D4AF37]">⛰️</span>
              <span>अरावली दृश्य</span>
            </span>
          </div>
        </div>

        {/* 3. Modern Glassmorphic Address & Navigation Hub */}
        <div
          ref={infoRef}
          className="relative rounded-3xl bg-gradient-to-b from-[#2D0712]/90 via-[#23050E]/90 to-[#1A0307]/90 border border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.5)] p-5 text-left backdrop-blur-md space-y-4"
        >
          {/* Address Display */}
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#BF8C2C] text-[#24050E] shadow-[0_0_15px_rgba(212,175,55,0.4)] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] font-sans-body">
                Official Venue Address
              </span>
              <p className="text-sm md:text-[15px] font-bold text-[#FAF6F0] leading-snug mt-0.5 font-sans-body">
                {englishAddress}
              </p>
              <p className="text-xs text-[#F7E7B4]/75 font-devanagari mt-1">
                मोतीसर रोड, गनाहेड़ा • पुष्कर, राजस्थान 305022
              </p>
            </div>
          </div>

          {/* Action Buttons: Copy English Address & Google Maps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {/* Copy English Address Button */}
            <button
              onClick={handleCopyEnglishAddress}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer shadow-md ${copied
                ? 'bg-emerald-800/90 text-white border border-emerald-400'
                : 'bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 text-[#FAF6F0] border border-[#D4AF37]/60 hover:border-[#D4AF37]'
                }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span className="font-sans-body">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-sans-body">Copy Address</span>
                </>
              )}
            </button>

            {/* 1-Tap Google Maps Directions */}
            <a
              href={venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#ECC870] to-[#BF8C2C] text-[#24050E] font-bold text-xs hover:brightness-110 active:scale-98 transition-all shadow-[0_4px_18px_rgba(212,175,55,0.4)] cursor-pointer group"
            >
              <Navigation className="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* 4. Connectivity & Travel Distance Grid */}
          <div className="pt-2 border-t border-[#D4AF37]/25 space-y-2">
            <span className="text-[10.5px] font-semibold text-[#D4AF37] tracking-wider font-devanagari uppercase">
              मार्ग एवं आवागमन सुविधा (How to Reach):
            </span>

            <div className="grid grid-cols-1 gap-2 text-xs">
              {/* Railway */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF6F0]/5 border border-[#D4AF37]/20 text-[#FAF6F0]">
                <div className="p-1.5 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] shrink-0">
                  <Train className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[11.5px] text-[#F7E7B4] font-devanagari">
                    निकटतम रेलवे स्टेशन:
                  </span>
                  <p className="text-[11px] text-[#FAF6F0]/85 font-sans-body truncate">
                    Ajmer Junction (AII) — ~14 km (25-30 mins drive)
                  </p>
                </div>
              </div>

              {/* Airport */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF6F0]/5 border border-[#D4AF37]/20 text-[#FAF6F0]">
                <div className="p-1.5 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] shrink-0">
                  <Plane className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-[11.5px] text-[#F7E7B4] font-devanagari">
                    निकटतम हवाई अड्डा:
                  </span>
                  <p className="text-[11px] text-[#FAF6F0]/85 font-sans-body truncate">
                    Kishangarh (~40 km) / Jaipur Airport (~145 km)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
