import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GaneshMotif, GoldCorner, LotusMotif, ShehnaiNagadaMotif } from './RoyalMotifs';
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
        title: 'शाही विवाह: चि० पवन संग आयु० दीपिका',
        text: 'आप सादर आमंत्रित हैं: चि० पवन संग आयु० दीपिका के शाही विवाह समारोह में। दिनांक: 19 एवं 20 नवम्बर 2026, विवाह स्थल: पुष्कर फोर्ट रिसॉर्ट, पुष्कर, राजस्थान।',
        url: window.location.href
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('निमंत्रण लिंक कॉपी हो गया है!');
    }
  };

  const handleWhatsAppWish = () => {
    const msg = encodeURIComponent("चि० पवन एवं आयु० दीपिका के शुभ विवाह पर हार्दिक बधाई व अनंत मंगलकामनाएं! 🌸✨ पुष्कर फोर्ट रिसॉर्ट में आपके इस शाही वैवाहिक उत्सव में सम्मिलित होने के लिए हम अत्यंत उत्सुक हैं! 💐");
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  return (
    <footer ref={sectionRef} className="relative pt-12 pb-28 px-3 md:px-4 text-center">
      <div className="w-full max-w-md mx-auto">
        {/* Blessings Card */}
        <div
          ref={cardRef}
          className="relative p-6 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5EBE1] border-2 border-[#D4AF37]/65 shadow-[0_15px_45px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 hover:shadow-2xl text-[#3E0A16]"
        >
          {/* Ornamental Corners */}
          <div className="absolute top-2 left-2 pointer-events-none opacity-60">
            <GoldCorner className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none rotate-90 opacity-60">
            <GoldCorner className="w-5 h-5 text-[#D4AF37]" />
          </div>

          <LotusMotif className="w-9 h-9 text-[#D4AF37] mx-auto mb-2 animate-bounce" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#996515] font-devanagari">
            {blessings.hindiTitle}
          </p>

          <h3 className="font-yatra text-2xl font-bold text-[#540D1F] mt-1 mb-2">
            आपकी उपस्थिति ही हमारा सौभाग्य
          </h3>

          <p className="text-xs text-[#4A0E1A]/85 leading-relaxed font-devanagari max-w-xs mx-auto mb-4">
            {blessings.message}
          </p>

          {/* Wedding Hashtag & Action Buttons */}
          <div className="flex flex-col items-center gap-2.5 mt-2">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white border border-[#D4AF37]/60 text-[#540D1F] text-xs font-bold tracking-wider font-sans-body shadow-2xs">
              <span>{couple.hashtag}</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 w-full mt-2">
              <button
                onClick={handleWhatsAppWish}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/50 text-[#128C7E] text-xs font-bold tracking-wider font-devanagari hover:bg-[#25D366]/25 transition-colors cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>बधाई भेजें (WhatsApp)</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#540D1F] text-[#FAF6F0] hover:bg-[#3E0A16] text-xs font-bold tracking-wider font-devanagari transition-colors cursor-pointer shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>कार्ड शेयर करें</span>
              </button>
            </div>
          </div>
        </div>

        {/* Closing Shloka & Footer Signature */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <ShehnaiNagadaMotif className="w-6 h-5 text-[#D4AF37]/60" />
            <GaneshMotif className="w-8 h-8 text-[#D4AF37]" />
            <ShehnaiNagadaMotif className="w-6 h-5 text-[#D4AF37]/60" flip={true} />
          </div>

          <p className="text-xs text-[#F7E7B4] font-devanagari font-bold tracking-widest">
            ॥ सदा सर्वदा मंगलम् भवतु ॥
          </p>
          <p className="text-[11px] text-[#FAF6F0]/70 font-devanagari">
            विनीत : {blessings.familySignature}
          </p>
          <p className="text-[10px] text-[#FAF6F0]/50 font-sans-body mt-1">
            Made with <Heart className="w-3 h-3 inline fill-[#D4AF37] text-[#D4AF37]" /> for Pawan & Deepika
          </p>
        </div>
      </div>
    </footer>
  );
};
