import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { GaneshMotif, GoldCorner } from './RoyalMotifs';
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
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F4E8C1', '#C47B78', '#FAF6F0'],
      shapes: ['circle'],
      scalar: 1.1
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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#2D1318]"
    >
      {/* Left Royal Door / Curtain */}
      <div
        ref={leftDoorRef}
        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-[#4A1521] via-[#381019] to-[#240A10] border-r border-[#D4AF37]/40 shadow-2xl z-10 flex flex-col justify-between p-4"
      >
        <GoldCorner className="w-10 h-10 text-[#D4AF37]/50" />
        <div className="my-auto opacity-10 flex justify-center">
          <div className="w-64 h-64 rounded-full border border-[#D4AF37] border-dashed"></div>
        </div>
        <div className="rotate-90 origin-bottom-left">
          <GoldCorner className="w-10 h-10 text-[#D4AF37]/50" />
        </div>
      </div>

      {/* Right Royal Door / Curtain */}
      <div
        ref={rightDoorRef}
        className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-[#4A1521] via-[#381019] to-[#240A10] border-l border-[#D4AF37]/40 shadow-2xl z-10 flex flex-col justify-between p-4 items-end"
      >
        <div className="rotate-90 origin-top-right">
          <GoldCorner className="w-10 h-10 text-[#D4AF37]/50" />
        </div>
        <div className="my-auto opacity-10 flex justify-center">
          <div className="w-64 h-64 rounded-full border border-[#D4AF37] border-dashed"></div>
        </div>
        <div className="rotate-180">
          <GoldCorner className="w-10 h-10 text-[#D4AF37]/50" />
        </div>
      </div>

      {/* Center Invitation Card Seal & Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-sm mx-auto"
      >
        {/* Lord Ganesha */}
        <div className="mb-3 animate-pulse">
          <GaneshMotif className="w-16 h-16 text-[#D4AF37] drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]" />
        </div>

        <p className="text-[#F4E8C1] text-xs tracking-[0.25em] font-medium uppercase font-sans-body mb-1">
          || श्री गणेशाय नमः ||
        </p>

        <h2 className="text-[#FAF6F0] font-royal-title text-2xl tracking-wider my-2">
          शुभ विवाह निमंत्रण
        </h2>

        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2"></div>

        <p className="text-[#F4E8C1]/90 text-sm font-playfair italic mb-1">
          Royal Wedding of
        </p>
        
        <h1 className="text-3xl font-royal-title gold-gradient-text tracking-wide mb-1 font-bold">
          Deepika & Pawan
        </h1>

        <p className="text-[#FAF6F0]/80 text-xs tracking-widest font-sans-body uppercase mb-6">
          19 & 20 November 2026 • Pushkar
        </p>

        {/* Golden Wax Seal Interactive Button */}
        <div ref={sealRef} className="relative mt-2">
          <button
            onClick={handleOpen}
            disabled={isOpening}
            className="group relative flex flex-col items-center justify-center w-28 h-28 rounded-full gold-gradient-bg shadow-[0_0_30px_rgba(212,175,55,0.5)] border-2 border-[#FAF6F0] transition-transform duration-300 hover:scale-105 active:scale-95 pulse-gold cursor-pointer"
          >
            <div className="absolute inset-1 rounded-full border border-[#4A1521]/30 flex flex-col items-center justify-center p-2 text-center">
              <span className="text-[#4A1521] text-[10px] font-bold tracking-widest uppercase font-sans-body">
                खोलिए
              </span>
              <Sparkles className="w-5 h-5 text-[#4A1521] my-0.5 group-hover:rotate-12 transition-transform" />
              <span className="text-[#4A1521] text-[9px] font-semibold tracking-wider uppercase font-sans-body">
                Open Invite
              </span>
            </div>
          </button>
        </div>

        <p className="text-[#F4E8C1]/70 text-[11px] tracking-widest uppercase mt-5 font-sans-body">
          Touch to unfold the Royal Invitation
        </p>
      </div>
    </div>
  );
};
