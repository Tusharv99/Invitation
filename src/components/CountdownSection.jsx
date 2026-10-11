import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KalashMotif, GoldCorner } from './RoyalMotifs';
import { Clock, CalendarPlus } from 'lucide-react';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

export const CountdownSection = ({ targetDateIso = "2026-11-20T20:30:00" }) => {
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

  // Fast, instant ScrollTrigger animation - triggers immediately and stays visible
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

  const triggerDigitSparkle = (index) => {
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.55 },
      colors: ['#D4AF37', '#FAF6F0', '#E8C5B8'],
      shapes: ['circle'],
      scalar: 0.9
    });
  };

  const createGoogleCalendarLink = () => {
    const title = encodeURIComponent("Royal Wedding of Pawan & Deepika");
    const details = encodeURIComponent("Grand Royal Wedding Celebration of Pawan & Deepika at Pratap Mahal, Pushkar, Rajasthan.");
    const location = encodeURIComponent("Pratap Mahal - Pushkar Bypass Road, Pushkar, Rajasthan 305022");
    const dates = "20261119T100000Z/20261121T060000Z";
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
      className="relative py-20 px-4 flex flex-col justify-center items-center text-center"
    >
      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Sacred Kalash Top */}
        <div ref={kalashRef} className="flex flex-col items-center mb-4">
          <KalashMotif className="w-14 h-14 text-[#D4AF37] drop-shadow-sm mb-2" />
          <p className="text-[#997A15] text-xs tracking-[0.25em] font-semibold uppercase font-sans-body">
            शुभ लग्न मुहूर्त
          </p>
          <h2 className="text-2xl md:text-3xl font-royal-title text-[#4A1521] font-bold mt-1">
            Counting Down to Forever
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2"></div>
          <p className="text-[#4A1521]/75 text-xs font-sans-body max-w-xs mx-auto leading-relaxed">
            Every passing moment brings us closer to the sacred vows of holy matrimony at Pratap Mahal, Pushkar.
          </p>
        </div>

        {/* Royal Framed Countdown Clock Card */}
        <div
          ref={cardRef}
          className="relative p-5 rounded-3xl bg-gradient-to-b from-[#4A1521] via-[#381019] to-[#2B0B13] border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(74,21,33,0.35)] my-6 text-[#FAF6F0] transition-transform duration-300 hover:scale-[1.01]"
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

          <div className="flex items-center justify-center gap-2 mb-4 text-[#F4E8C1]/90 text-xs tracking-wider uppercase font-sans-body">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-slow" />
            <span>Hasta Milap & Phere Mahurat</span>
          </div>

          {/* Time digits grid with interactive touch bounce */}
          <div className="grid grid-cols-4 gap-2 my-2">
            {timeCards.map((unit, idx) => (
              <div
                key={unit.label}
                ref={(el) => (digitsRef.current[idx] = el)}
                onClick={() => triggerDigitSparkle(idx)}
                className="flex flex-col items-center justify-center py-3 px-1 rounded-2xl bg-[#FAF6F0]/10 border border-[#D4AF37]/35 backdrop-blur-sm shadow-inner transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer hover:bg-[#FAF6F0]/20 group"
                title="Tap to celebrate!"
              >
                <span className="font-royal-title text-2xl font-extrabold gold-gradient-text tracking-tight group-hover:scale-110 transition-transform">
                  {unit.value}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#F4E8C1] mt-1 font-sans-body">
                  {unit.label}
                </span>
                <span className="text-[9px] text-[#F4E8C1]/60 font-sans-body">
                  {unit.hindi}
                </span>
              </div>
            ))}
          </div>

          {/* Sanskrit Vivah Shloka snippet */}
          <p className="text-[11px] text-[#F4E8C1]/80 italic mt-5 leading-relaxed font-sans-body border-t border-[#D4AF37]/25 pt-3">
            "तदेव लग्नं सुदिनं तदेव, ताराबलं चन्द्रबलं तदेव..."
          </p>
        </div>

        {/* Add to Calendar Button */}
        <a
          href={createGoogleCalendarLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF6F0] border border-[#D4AF37] text-[#4A1521] shadow-md hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 group font-sans-body cursor-pointer"
        >
          <CalendarPlus className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-semibold tracking-wider uppercase">
            Add to Google Calendar
          </span>
        </a>
      </div>
    </section>
  );
};
