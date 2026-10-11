import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GaneshMotif, GoldCorner, LotusMotif } from './RoyalMotifs';
import { Heart, Share2, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const BlessingsSection = ({ blessings, couple }) => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Royal Wedding of Pawan & Deepika',
        text: 'You are cordially invited to celebrate the royal wedding of Pawan & Deepika at Pratap Mahal, Pushkar on 19th & 20th November 2026.',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  const handleWhatsAppWish = () => {
    const msg = encodeURIComponent("Heartiest Congratulations Pawan & Deepika! Wishing you both a lifetime of love and happiness. Eagerly looking forward to celebrating your royal wedding at Pratap Mahal, Pushkar! 💐✨");
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  return (
    <footer ref={sectionRef} className="relative pt-12 pb-24 px-4 text-center">
      <div className="w-full max-w-md mx-auto">
        {/* Blessings Card */}
        <div
          ref={cardRef}
          className="relative p-6 rounded-3xl bg-white/75 backdrop-blur-md border border-[#D4AF37]/35 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          {/* Ornamental Corners */}
          <div className="absolute top-2 left-2 pointer-events-none opacity-60">
            <GoldCorner className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none rotate-90 opacity-60">
            <GoldCorner className="w-5 h-5 text-[#D4AF37]" />
          </div>

          <LotusMotif className="w-8 h-8 text-[#D4AF37] mx-auto mb-2 animate-bounce" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#997A15] font-sans-body">
            {blessings.hindiTitle}
          </p>

          <h3 className="font-royal-title text-xl font-bold text-[#4A1521] mt-1 mb-3">
            {blessings.title}
          </h3>

          <p className="text-xs text-[#4A1521]/80 leading-relaxed font-sans-body max-w-xs mx-auto mb-4">
            {blessings.message}
          </p>

          {/* Wedding Hashtag & Action Buttons */}
          <div className="flex flex-col items-center gap-2.5 mt-2">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/40 text-[#4A1521] text-xs font-bold tracking-wider font-sans-body">
              <span>{couple.hashtag}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full mt-2">
              <button
                onClick={handleWhatsAppWish}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#128C7E] text-xs font-semibold tracking-wider font-sans-body hover:bg-[#25D366]/25 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Wish on WhatsApp</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37] text-[#4A1521] text-xs font-semibold tracking-wider font-sans-body hover:bg-white transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Share Card</span>
              </button>
            </div>
          </div>
        </div>

        {/* Closing Shloka & Footer Signature */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <GaneshMotif className="w-8 h-8 text-[#D4AF37]/70" />
          <p className="text-[11px] text-[#4A1521]/60 font-sans-body tracking-wider uppercase">
            || सदा सर्वदा मंगलम् भवतु ||
          </p>
          <p className="text-[10px] text-[#4A1521]/40 font-sans-body mt-1">
            Made with <Heart className="w-3 h-3 inline fill-[#C47B78] text-[#C47B78]" /> for Pawan & Deepika
          </p>
        </div>
      </div>
    </footer>
  );
};
