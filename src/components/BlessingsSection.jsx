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
    const shareUrl = window.location.hostname === 'localhost' ? 'https://invitation-blue-ten.vercel.app/' : window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Pawan Weds Deepika | शाही विवाह निमंत्रण',
        text: 'आप सादर आमंत्रित हैं: चि० पवन संग आयु० दीपिका के शाही विवाह समारोह में। दिनांक: 19 एवं 20 नवम्बर 2026, विवाह स्थल: पुष्कर फोर्ट रिसॉर्ट, पुष्कर, राजस्थान।',
        url: shareUrl
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(shareUrl);
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

          {/* Minimal & Stylish Developer Credit (No container border) */}
          <div className="mt-7 pt-4 flex flex-col items-center justify-center gap-2 text-center select-none">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent mb-0.5"></div>
            
            <p className="text-[11px] text-[#FAF6F0]/70 font-sans-body tracking-wide flex items-center justify-center gap-1.5 flex-wrap">
              <span>Made by</span>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFE58F] via-[#FCEFC7] to-[#D4AF37] tracking-wider font-playfair text-xs">
                Tushar Verma
              </span>
              <span className="text-[#D4AF37]/50">•</span>
              <span className="text-[#FAF6F0]/65 text-[10.5px]">Contact me</span>
            </p>

            <div className="flex items-center justify-center gap-4 mt-0.5">
              {/* WhatsApp Link & Icon */}
              <a
                href="https://wa.me/919182574094?text=Hi%20Tushar,%20loved%20your%20wedding%20invitation%20website!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Tushar Verma on WhatsApp (9182574094)"
                className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[#F7E7B4]/85 hover:text-[#25D366] transition-all duration-300 hover:scale-105"
              >
                <span className="p-1.5 rounded-full bg-white/[0.06] group-hover:bg-[#25D366]/20 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 fill-current group-hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.835 11.835 0 005.712 1.465h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.483-8.413Z" />
                  </svg>
                </span>
                <span className="text-[11px] font-mono tracking-wider opacity-90 group-hover:opacity-100">
                  9182574094
                </span>
              </a>

              <span className="text-white/20 select-none">•</span>

              {/* Instagram Link & Icon */}
              <a
                href="https://www.instagram.com/tusharverma_99?srtk=YmsxbWI2ODhlMnlh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tushar Verma on Instagram (@tusharverma_99)"
                className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[#F7E7B4]/85 hover:text-[#E1306C] transition-all duration-300 hover:scale-105"
              >
                <span className="p-1.5 rounded-full bg-white/[0.06] group-hover:bg-[#E1306C]/20 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 group-hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.8)]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.5" />
                  </svg>
                </span>
                <span className="text-[11px] font-sans-body tracking-wider opacity-90 group-hover:opacity-100">
                  @tusharverma_99
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
