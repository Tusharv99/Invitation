import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  KalashMotif,
  GoldCorner,
  LotusMotif,
  ShehnaiNagadaMotif,
  RoyalElephantMotif,
  RoyalPeacockMotif
} from './RoyalMotifs';
import { Users, Phone, Heart, Sparkles, Home, Building2, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

export const FamilySection = ({ familyDetails }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  const triggerBaalManuhaarSparkle = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#FFD166', '#EF476F', '#FAF6F0'],
      shapes: ['circle', 'square'],
      scalar: 1.1
    });
  };

  if (!familyDetails) return null;

  const {
    jawaiPaksha,
    nanihalPaksha,
    vinit,
    darshanabhilashi,
    baalManuhaar
  } = familyDetails;

  return (
    <section ref={sectionRef} id="family-section" className="relative py-20 px-3 md:px-4">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <RoyalPeacockMotif className="w-10 h-10 text-[#D4AF37]" />
            <KalashMotif className="w-12 h-12 text-[#D4AF37] animate-pulse" />
            <RoyalPeacockMotif className="w-10 h-10 text-[#D4AF37]" flip={true} />
          </div>

          <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase font-sans-body">
            ॥ स्नेह एवं सानिध्य ॥
          </p>

          <h2 className="text-3xl font-royal-title text-[#FAF6F0] font-bold mt-1 tracking-wide">
            स्नेही स्वजन एवं परिवार
          </h2>

          <p className="text-[#F7E7B4]/80 text-xs font-marcellus tracking-wider mt-0.5">
            Royal Family & Esteemed Kinfolk
          </p>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-3"></div>

          <p className="text-[#FAF6F0]/80 text-xs font-devanagari max-w-xs mx-auto leading-relaxed">
            जिनके शुभाशीर्वाद एवं आत्मीय स्नेह से यह पावन वैवाहिक उत्सव आलोकित हो रहा है।
          </p>
        </div>

        {/* 1. बाल मनुहार (Baal Manuhaar) - Special Heartwarming Highlight */}
        {baalManuhaar && (
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            onClick={triggerBaalManuhaarSparkle}
            className="relative p-6 rounded-3xl bg-gradient-to-br from-[#FFFBEF] via-[#FDF5E2] to-[#FCEECB] border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.25)] text-center cursor-pointer transition-transform duration-300 hover:scale-[1.02] group"
          >
            {/* Golden Ornamental Corners */}
            <div className="absolute top-2 left-2 pointer-events-none">
              <GoldCorner className="w-5 h-5 text-[#B8870A]" />
            </div>
            <div className="absolute top-2 right-2 pointer-events-none rotate-90">
              <GoldCorner className="w-5 h-5 text-[#B8870A]" />
            </div>
            <div className="absolute bottom-2 left-2 pointer-events-none -rotate-90">
              <GoldCorner className="w-5 h-5 text-[#B8870A]" />
            </div>
            <div className="absolute bottom-2 right-2 pointer-events-none rotate-180">
              <GoldCorner className="w-5 h-5 text-[#B8870A]" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#540D1F] text-[#F7E7B4] text-xs font-bold font-devanagari tracking-wider shadow-sm mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-slow" />
              <span>{baalManuhaar.title}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-slow" />
            </div>

            <p className="text-sm font-yatra text-[#72122A] font-bold my-2 tracking-wide leading-relaxed">
              "{baalManuhaar.quote}"
            </p>

            <div className="flex flex-wrap justify-center items-center gap-2 mt-3 pt-2 border-t border-[#D4AF37]/30">
              {baalManuhaar.children.map((child, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/90 border border-[#D4AF37]/50 text-xs font-semibold text-[#4A0E1A] font-devanagari shadow-2xs group-hover:bg-[#FAF4E8] transition-colors"
                >
                  🌸 {child}
                </span>
              ))}
            </div>

            <p className="text-[10px] text-[#996515] font-sans-body uppercase tracking-widest mt-3">
              (स्पर्श करें एवं बच्चों का प्यार पाएं)
            </p>
          </div>
        )}

        {/* 2. दर्शनाभिलाषी (Darshanabhilashi) */}
        {darshanabhilashi && (
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="relative p-5 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5EBE1] border-2 border-[#D4AF37]/60 shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-left"
          >
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#D4AF37]/30">
              <div className="p-2 rounded-xl bg-[#540D1F] text-[#D4AF37] shadow-sm">
                <Heart className="w-4 h-4 fill-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-yatra text-lg text-[#4A0E1A] font-bold">
                  {darshanabhilashi.title}
                </h3>
                <p className="text-[10px] font-sans-body text-[#996515] uppercase tracking-wider">
                  {darshanabhilashi.titleEnglish}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 my-3">
              {darshanabhilashi.couples.map((c, i) => (
                <div
                  key={i}
                  className="p-2 rounded-xl bg-white/80 border border-[#D4AF37]/30 text-xs font-semibold text-[#4A0E1A] font-devanagari flex items-center gap-1.5 shadow-2xs"
                >
                  <span className="text-[#B8870A]">✦</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>

            <div className="p-2.5 rounded-xl bg-[#540D1F]/10 border border-[#540D1F]/20 text-xs font-bold text-[#540D1F] text-center font-devanagari mt-2">
              {darshanabhilashi.familyLine}
            </div>
          </div>
        )}

        {/* 3. जवाई पक्ष (Jawai Paksha) */}
        {jawaiPaksha && (
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="relative p-5 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5EBE1] border-2 border-[#D4AF37]/60 shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-left"
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#0D3B2E] text-[#D4AF37] shadow-sm">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-yatra text-lg text-[#4A0E1A] font-bold">
                    {jawaiPaksha.title}
                  </h3>
                  <p className="text-[10px] font-sans-body text-[#996515] uppercase tracking-wider">
                    {jawaiPaksha.titleEnglish}
                  </p>
                </div>
              </div>
              <RoyalElephantMotif className="w-8 h-8 text-[#D4AF37]/70" />
            </div>

            <div className="space-y-2">
              {jawaiPaksha.members.map((m, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-white/85 border border-[#D4AF37]/35 flex items-center justify-between text-xs font-devanagari shadow-2xs"
                >
                  <span className="font-semibold text-[#4A0E1A]">
                    {m.names}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#FAF4E8] border border-[#D4AF37]/40 text-[11px] font-bold text-[#996515]">
                    {m.place}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ननिहाल पक्ष (Nanihal Paksha) */}
        {nanihalPaksha && (
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="relative p-5 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5EBE1] border-2 border-[#D4AF37]/60 shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-left"
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#B8870A] text-white shadow-sm">
                  <Star className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h3 className="font-yatra text-lg text-[#4A0E1A] font-bold">
                    {nanihalPaksha.title}
                  </h3>
                  <p className="text-[10px] font-sans-body text-[#996515] uppercase tracking-wider">
                    {nanihalPaksha.titleEnglish}
                  </p>
                </div>
              </div>
              <LotusMotif className="w-7 h-7 text-[#D4AF37]" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {nanihalPaksha.members.map((m, i) => (
                <div
                  key={i}
                  className="p-2 rounded-xl bg-white/85 border border-[#D4AF37]/35 text-xs font-semibold text-[#4A0E1A] font-devanagari flex items-center gap-1.5 shadow-2xs"
                >
                  <span className="text-[#B8870A]">✤</span>
                  <span>{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. विनीत (Vinit - Enterprises & Direct Contact) */}
        {vinit && (
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="relative p-5 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5EBE1] border-2 border-[#D4AF37]/60 shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-left"
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#540D1F] text-[#F7E7B4] shadow-sm">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-yatra text-lg text-[#4A0E1A] font-bold">
                    {vinit.title}
                  </h3>
                  <p className="text-[10px] font-sans-body text-[#996515] uppercase tracking-wider">
                    {vinit.titleEnglish}
                  </p>
                </div>
              </div>
            </div>

            {/* Organizations / Firms */}
            <div className="space-y-2 mb-4">
              {vinit.organizations.map((org, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-white/85 border border-[#D4AF37]/35 flex items-center justify-between text-xs font-devanagari shadow-2xs"
                >
                  <span className="font-semibold text-[#4A0E1A]">
                    {org.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#FAF4E8] border border-[#D4AF37]/40 text-[11px] font-bold text-[#996515]">
                    {org.place}
                  </span>
                </div>
              ))}
            </div>

            {/* Tap to Call Phone Numbers */}
            <div className="pt-3 border-t border-[#D4AF37]/30">
              <p className="text-[11px] font-bold text-[#540D1F] font-devanagari mb-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#B8870A]" />
                <span>संपर्क सूत्र (Tap to Call) :</span>
              </p>

              <div className="grid grid-cols-2 gap-2">
                {vinit.contactNumbers.map((num, i) => (
                  <a
                    key={i}
                    href={`tel:${num}`}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#540D1F] text-[#FAF6F0] hover:bg-[#3E0A16] transition-colors text-xs font-bold tracking-wider font-sans-body shadow-xs group"
                  >
                    <Phone className="w-3 h-3 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                    <span>{num}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
