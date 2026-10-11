import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoldCorner, LotusMotif } from './RoyalMotifs';
import { Sparkles, Music, Sun, Flame, UtensilsCrossed, Clock, MapPin, Copy, Check, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Sparkles: Sparkles,
  Music: Music,
  Sun: Sun,
  Flame: Flame,
  UtensilsCrossed: UtensilsCrossed
};

const themeStyles = {
  'pastel-mint': {
    bg: 'bg-[#F2F7F2]',
    border: 'border-[#7D8E74]/40',
    accent: 'text-[#4F6348]',
    badgeBg: 'bg-[#E0EBE0]',
    badgeText: 'text-[#3E5137]'
  },
  'pastel-rose': {
    bg: 'bg-[#FDF3F3]',
    border: 'border-[#C47B78]/40',
    accent: 'text-[#A0524F]',
    badgeBg: 'bg-[#F8E2E1]',
    badgeText: 'text-[#873A37]'
  },
  'pastel-yellow': {
    bg: 'bg-[#FFFDF0]',
    border: 'border-[#E0B84C]/50',
    accent: 'text-[#946F17]',
    badgeBg: 'bg-[#FDF2D0]',
    badgeText: 'text-[#7A5A0D]'
  },
  'pastel-gold': {
    bg: 'bg-[#FAF5EC]',
    border: 'border-[#D4AF37]/50',
    accent: 'text-[#997A15]',
    badgeBg: 'bg-[#F4E8C1]',
    badgeText: 'text-[#7D620A]'
  },
  'pastel-burgundy': {
    bg: 'bg-[#FBF1F3]',
    border: 'border-[#4A1521]/30',
    accent: 'text-[#4A1521]',
    badgeBg: 'bg-[#EED5DA]',
    badgeText: 'text-[#4A1521]'
  }
};

export const EventsSection = ({ events }) => {
  const [filterDate, setFilterDate] = useState('ALL');
  const [copiedId, setCopiedId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  const filteredEvents = filterDate === 'ALL'
    ? events
    : events.filter(e => e.date.includes(filterDate));

  // Instant, snappy card entrance on scroll that stays visible permanently
  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              once: true
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filterDate]);

  const handleCopy = (event, e) => {
    e.stopPropagation();
    const text = `${event.name} (${event.hindiName})\nDate: ${event.date}\nTime: ${event.time}\nVenue: ${event.subLocation}, Pratap Mahal, Pushkar`;
    navigator.clipboard.writeText(text);
    setCopiedId(event.id);
    setTimeout(() => setCopiedId(null), 2200);

    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FAF6F0'],
      shapes: ['circle'],
      scalar: 0.8
    });
  };

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section ref={sectionRef} id="events-section" className="relative min-h-screen py-20 px-4">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-6">
          <LotusMotif className="w-10 h-10 text-[#D4AF37] mb-2" />
          <p className="text-[#997A15] text-xs font-semibold tracking-[0.25em] uppercase font-sans-body">
            मांगल्य प्रसंग
          </p>
          <h2 className="text-3xl font-royal-title text-[#4A1521] font-bold mt-1">
            Wedding Ceremonies
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-2"></div>
          <p className="text-[#4A1521]/70 text-xs font-sans-body max-w-xs mx-auto leading-relaxed">
            All auspicious celebrations scheduled between 19th & 20th November at Pratap Mahal, Pushkar.
          </p>
        </div>

        {/* Date Filter Tabs for Mobile Convenience */}
        <div className="flex items-center justify-center gap-2 mb-8 p-1.5 rounded-full bg-white/80 border border-[#D4AF37]/35 shadow-sm max-w-xs mx-auto">
          <button
            onClick={() => setFilterDate('ALL')}
            className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold tracking-wider font-sans-body transition-all cursor-pointer ${
              filterDate === 'ALL'
                ? 'bg-[#4A1521] text-[#FAF6F0] shadow-sm'
                : 'text-[#4A1521]/70 hover:text-[#4A1521]'
            }`}
          >
            All Functions
          </button>
          <button
            onClick={() => setFilterDate('19th')}
            className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold tracking-wider font-sans-body transition-all cursor-pointer ${
              filterDate === '19th'
                ? 'bg-[#4A1521] text-[#FAF6F0] shadow-sm'
                : 'text-[#4A1521]/70 hover:text-[#4A1521]'
            }`}
          >
            19 Nov
          </button>
          <button
            onClick={() => setFilterDate('20th')}
            className={`flex-1 py-1.5 px-3 rounded-full text-xs font-semibold tracking-wider font-sans-body transition-all cursor-pointer ${
              filterDate === '20th'
                ? 'bg-[#4A1521] text-[#FAF6F0] shadow-sm'
                : 'text-[#4A1521]/70 hover:text-[#4A1521]'
            }`}
          >
            20 Nov
          </button>
        </div>

        {/* Event Cards List */}
        <div ref={cardsContainerRef} className="space-y-5">
          {filteredEvents.map((event, index) => {
            const Icon = iconMap[event.icon] || Sparkles;
            const style = themeStyles[event.colorTheme] || themeStyles['pastel-gold'];
            const isExpanded = expandedId === event.id;

            return (
              <div
                key={event.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={() => toggleExpand(event.id)}
                className={`relative text-left p-5 rounded-3xl ${style.bg} border ${style.border} shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group`}
              >
                {/* Ornamental Top Corner */}
                <div className="absolute top-2 right-2 pointer-events-none opacity-60">
                  <GoldCorner className="w-5 h-5 text-[#D4AF37]" />
                </div>

                {/* Top Row: Date Badge & Hindi name */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold font-sans-body tracking-wider ${style.badgeBg} ${style.badgeText}`}>
                    {event.dayBadge}
                  </span>
                  <span className="text-xs font-semibold font-sans-body text-[#4A1521]/60">
                    {event.hindiName}
                  </span>
                </div>

                {/* Event Name */}
                <div className="flex items-start gap-3 my-2">
                  <div className={`p-2.5 rounded-2xl ${style.badgeBg} ${style.accent} shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-royal-title text-lg text-[#4A1521] font-bold leading-tight">
                      {event.name}
                    </h3>
                    <p className="text-xs font-playfair italic text-[#C47B78] mt-0.5">
                      {event.date}
                    </p>
                  </div>
                </div>

                {/* Timing and Location */}
                <div className="mt-3 pt-3 border-t border-black/5 space-y-1.5 text-xs text-[#4A1521]/80 font-sans-body">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C47B78] shrink-0" />
                    <span>{event.subLocation}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#4A1521]/70 mt-3 leading-relaxed font-sans-body bg-white/60 p-2.5 rounded-xl border border-black/5">
                  {event.description}
                </p>

                {/* Interactive Action Bar on Card */}
                <div className="mt-3 pt-2.5 flex items-center justify-between">
                  <button
                    onClick={(e) => handleCopy(event, e)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-black/10 text-[11px] font-semibold text-[#4A1521] hover:bg-white shadow-2xs transition-colors cursor-pointer"
                  >
                    {copiedId === event.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Copy Details</span>
                      </>
                    )}
                  </button>

                  <span className="text-[10px] text-[#4A1521]/50 uppercase tracking-widest font-sans-body flex items-center gap-1">
                    <span>{isExpanded ? 'Hide' : 'Tap to expand'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </span>
                </div>

                {/* Expandable Rich Highlight Details */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-black/10 text-xs text-[#4A1521]/80 space-y-1.5 animate-fadeIn">
                    <p className="font-semibold text-[#997A15]">✨ Auspicious Highlights:</p>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-[#4A1521]/75 pl-1">
                      <li>Traditional Rajasthani folk artists & music accompaniment</li>
                      <li>Family blessings and festive photography at {event.subLocation}</li>
                      <li>Royal hospitality & refreshments served throughout the ceremony</li>
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
