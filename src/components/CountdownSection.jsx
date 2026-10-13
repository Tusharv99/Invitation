import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KalashMotif, GoldCorner, ShehnaiNagadaMotif } from './RoyalMotifs';
import { Clock, CalendarPlus } from 'lucide-react';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

export const CountdownSection = ({ targetDateIso = "2026-11-20T19:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  const sectionRef = useRef(null);
  const kalashRef = useRef(null);
  const cardRef = useRef(null);
  const digitsRef = useRef([]);

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDateIso).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDateIso]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(kalashRef.current,
        { scale: 0.85, opacity: 0, y: 15 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
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
        { opacity: 0, y: 20, scale: 0.97 },
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

      gsap.fromTo(digitsRef.current,
        { scale: 0.9, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.4,
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

  const triggerDigitSparkle = () => {
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.55 },
      colors: ['#D4AF37', '#FAF6F0', '#E5A93C'],
      shapes: ['circle'],
      scalar: 0.9
    });
  };

  const createGoogleCalendarLink = () => {
    const title = encodeURIComponent("शाही विवाह: चि० पवन संग आयु० दीपिका");
    const details = encodeURIComponent("शाही विवाह समारोह: चि० पवन संग आयु० दीपिका, पुष्कर फोर्ट रिसॉर्ट, पुष्कर, राजस्थान।");
    const location = encodeURIComponent("Pushkar Fort Resort, Motisar Road, Ganahera, Pushkar, Rajasthan 305022");
    const dates = "20261119T063000Z/20261121T020000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const timeCards = [
    { label: 'Days', hindi: 'दिन', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', hindi: 'घंटे', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Mins', hindi: 'मिनट', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Secs', hindi: 'सेकंड', value: String(timeLeft.seconds).padStart(2, '0') }
  ];

  return (
    <section
      ref={sectionRef}
      id="countdown-section"
      className="relative py-20 px-3 md:px-4 flex flex-col justify-center items-center text-center"
    >
      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Sacred Kalash Top */}
        <div ref={kalashRef} className="flex flex-col items-center mb-4">
          <KalashMotif className="w-14 h-14 text-[#D4AF37] drop-shadow-sm mb-2" />
          <p className="text-[#D4AF37] text-xs tracking-[0.3em] font-semibold uppercase font-sans-body">
            शुभ लग्न मुहूर्त
          </p>
          <h2 className="text-2xl md:text-3xl font-royal-title text-[#FAF6F0] font-bold mt-1 tracking-wide">
            मांगलिक समय की प्रतीक्षा
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2"></div>
          <p className="text-[#FAF6F0]/80 text-xs font-devanagari max-w-xs mx-auto leading-relaxed">
            प्रत्येक बीतता क्षण हमें पुष्कर फोर्ट रिसॉर्ट में संपन्न होने वाले पावन सात फेरों के निकट ले जा रहा है।
          </p>
        </div>

        {/* Royal Framed Countdown Clock Card */}
        <div
          ref={cardRef}
          className="relative p-5 rounded-3xl bg-gradient-to-b from-[#4A0E1D] via-[#360812] to-[#20030A] border-2 border-[#D4AF37]/60 shadow-[0_15px_45px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.25)] my-6 text-[#FAF6F0] transition-transform duration-300 hover:scale-[1.01]"
        >
          {/* Ornamental Corners */}
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

          <div className="flex items-center justify-center gap-2 mb-4 text-[#F7E7B4] text-xs tracking-wider uppercase font-devanagari font-bold">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-slow" />
            <span>पाणिग्रहण संस्कार एवं सात फेरे मुहूर्त</span>
          </div>

          {/* Time digits grid with interactive touch bounce */}
          <div className="grid grid-cols-4 gap-2 my-2">
            {timeCards.map((unit, idx) => (
              <div
                key={unit.label}
                ref={(el) => (digitsRef.current[idx] = el)}
                onClick={() => triggerDigitSparkle(idx)}
                className="flex flex-col items-center justify-center py-3 px-1 rounded-2xl bg-white/10 border border-[#D4AF37]/40 backdrop-blur-sm shadow-inner transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer hover:bg-white/20 group"
                title="Tap to celebrate!"
              >
                <span className="font-royal-title text-2xl font-extrabold gold-gradient-text tracking-tight group-hover:scale-110 transition-transform">
                  {unit.value}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#F7E7B4] mt-1 font-sans-body">
                  {unit.label}
                </span>
                <span className="text-[9.5px] text-[#F7E7B4]/70 font-devanagari">
                  {unit.hindi}
                </span>
              </div>
            ))}
          </div>

          {/* Sanskrit Vivah Shloka snippet */}
          <p className="text-[11px] text-[#F7E7B4]/85 italic mt-5 leading-relaxed font-devanagari border-t border-[#D4AF37]/30 pt-3">
            "तदेव लग्नं सुदिनं तदेव, ताराबलं चन्द्रबलं तदेव। विद्याबलं दैवबलं तदेव, लक्ष्मीपते तेऽङ्घ्रियुगं स्मरामि॥"
          </p>
        </div>

        {/* Add to Calendar Button */}
        <a
          href={createGoogleCalendarLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#BF8C2C] text-[#2D0A14] font-bold shadow-lg hover:brightness-110 transition-all duration-300 hover:scale-105 active:scale-95 group font-devanagari cursor-pointer"
        >
          <CalendarPlus className="w-4 h-4 text-[#2D0A14] group-hover:rotate-12 transition-transform" />
          <span className="text-xs tracking-wider">
            गूगल कैलेंडर में जोड़ें (Add to Calendar)
          </span>
        </a>
      </div>
    </section>
  );
};
