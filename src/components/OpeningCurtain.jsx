import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { GaneshMotif, GoldCorner, ShehnaiNagadaMotif, RoyalElephantMotif } from './RoyalMotifs';
import { Sparkles } from 'lucide-react';

export const OpeningCurtain = ({ onOpenComplete, onMusicTrigger }) => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const sealRef = useRef(null);
  const contentRef = useRef(null);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger golden and rose festive confetti shower
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F7E7B4', '#C47B78', '#FAF6F0', '#E5A93C'],
      shapes: ['circle'],
      scalar: 1.2
    });

    if (onMusicTrigger) {
      onMusicTrigger();
    }

    // GSAP Royal Gate & Envelope Opening Animation
    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpenComplete) onOpenComplete();
      }
    });

    tl.to(sealRef.current, {
      scale: 1.4,
      rotation: 180,
      opacity: 0,
      duration: 0.7,
      ease: 'back.in(1.7)'
    })
      .to(contentRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      }, '-=0.3')
      .to(leftDoorRef.current, {
        xPercent: -100,
        duration: 1.2,
        ease: 'power3.inOut'
      }, '-=0.2')
      .to(rightDoorRef.current, {
        xPercent: 100,
        duration: 1.2,
        ease: 'power3.inOut'
      }, '<')
      .to(containerRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4
      });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#1F040A]"
    >
      {/* Left Royal Door / Curtain */}
      <div
        ref={leftDoorRef}
        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-[#4A0E1D] via-[#330510] to-[#1F040A] border-r-2 border-[#D4AF37]/50 shadow-2xl z-10 flex flex-col justify-between p-4"
      >
        {/* Top-Left Corner */}
        <GoldCorner className="w-10 h-10 text-[#D4AF37]/60" />
        <div className="my-auto opacity-10 flex justify-center">
          <div className="w-64 h-64 rounded-full border-2 border-[#D4AF37] border-dashed"></div>
        </div>
        {/* Bottom-Left Corner */}
        <GoldCorner className="w-10 h-10 text-[#D4AF37]/60 -scale-y-100" />
      </div>

      {/* Right Royal Door / Curtain */}
      <div
        ref={rightDoorRef}
        className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-[#4A0E1D] via-[#330510] to-[#1F040A] border-l-2 border-[#D4AF37]/50 shadow-2xl z-10 flex flex-col justify-between p-4 items-end"
      >
        {/* Top-Right Corner */}
        <GoldCorner className="w-10 h-10 text-[#D4AF37]/60 -scale-x-100" />
        <div className="my-auto opacity-10 flex justify-center">
          <div className="w-64 h-64 rounded-full border-2 border-[#D4AF37] border-dashed"></div>
        </div>
        {/* Bottom-Right Corner */}
        <GoldCorner className="w-10 h-10 text-[#D4AF37]/60 rotate-180" />
      </div>

      {/* Center Invitation Card Seal & Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-sm mx-auto"
      >
        {/* Lord Ganesha with Shehnai Motifs */}
        <div className="flex items-center justify-center gap-2 mb-2 animate-pulse">
          <ShehnaiNagadaMotif className="w-8 h-7 text-[#D4AF37]" />
          <GaneshMotif className="w-16 h-16 text-[#D4AF37] drop-shadow-[0_2px_14px_rgba(212,175,55,0.5)]" />
          <ShehnaiNagadaMotif className="w-8 h-7 text-[#D4AF37]" flip={true} />
        </div>

        <p className="text-[#F7E7B4] text-sm sm:text-base tracking-[0.25em] font-bold uppercase font-devanagari mb-1.5">
          ॥ श्री गणेशाय नमः ॥
        </p>

        <h2 className="text-[#FAF6F0] font-yatra text-2xl sm:text-3xl font-bold tracking-wide my-1">
          शाही विवाह निमंत्रण पत्र
        </h2>

        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2"></div>

        <p className="text-[#F7E7B4] text-base sm:text-lg font-playfair italic mb-1">
          The Royal Wedding of
        </p>

        <h1 className="text-4xl sm:text-5xl font-yatra gold-gradient-text tracking-wide mb-1 font-extrabold drop-shadow-[0_2px_16px_rgba(212,175,55,0.45)]">
          पवन संग दीपिका
        </h1>

        <p className="text-[#F7E7B4] text-xs sm:text-sm font-marcellus tracking-widest uppercase mb-2 font-medium">
          (Pawan & Deepika)
        </p>

        {/* Wedding Hashtag Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#FAF6F0]/12 border border-[#D4AF37]/60 text-[#F7E7B4] text-xs sm:text-sm font-bold tracking-wider my-1.5 shadow-[0_2px_12px_rgba(212,175,55,0.25)] font-sans-body">
          #Pawandeepikasaatphere
        </div>

        <p className="text-[#FAF6F0] text-xs sm:text-sm tracking-wider font-devanagari font-medium mt-1 mb-5">
          19 एवं 20 नवम्बर 2026 • पुष्कर फोर्ट रिसॉर्ट, पुष्कर
        </p>

        {/* Golden Wax Seal Interactive Button */}
        <div ref={sealRef} className="relative mt-1">
          <button
            onClick={handleOpen}
            disabled={isOpening}
            className="group relative flex flex-col items-center justify-center w-28 h-28 rounded-full gold-gradient-bg shadow-[0_0_35px_rgba(212,175,55,0.6)] border-2 border-[#FAF6F0] transition-transform duration-300 hover:scale-105 active:scale-95 pulse-gold cursor-pointer"
          >
            <div className="absolute inset-1 rounded-full border border-[#4A0E1A]/40 flex flex-col items-center justify-center p-2 text-center">
              <span className="text-[#4A0E1A] text-xs font-bold tracking-widest uppercase font-devanagari">
                खोलिए
              </span>
              <Sparkles className="w-5 h-5 text-[#4A0E1A] my-0.5 group-hover:rotate-12 transition-transform" />
              <span className="text-[#4A0E1A] text-[9.5px] font-bold tracking-wider uppercase font-sans-body">
                Open Invite
              </span>
            </div>
          </button>
        </div>

        <p className="text-[#F7E7B4]/80 text-[11px] tracking-widest mt-5 font-devanagari">
          शाही निमंत्रण खोलने हेतु स्पर्श करें
        </p>
      </div>
    </div>
  );
};
