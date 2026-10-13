import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  JharokhaArchHeader,
  JharokhaBaseRailing,
  ShehnaiNagadaMotif,
  GoldCorner,
  KalashMotif,
  LotusMotif
} from './RoyalMotifs';
import {
  Gift,
  Sparkles,
  HeartHandshake,
  Music,
  UtensilsCrossed,
  Crown,
  Drum,
  Flame,
  Clock,
  MapPin,
  Copy,
  Check,
  ChevronDown,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Gift: Gift,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Music: Music,
  UtensilsCrossed: UtensilsCrossed,
  Crown: Crown,
  Drum: Drum,
  Flame: Flame
};

// Royal Rajasthani Theme Colors for Events
const themeStyles = {
  'royal-amber': {
    badgeBg: 'bg-[#FDF3E2]',
    badgeText: 'text-[#9A5B00]',
    accentColor: 'text-[#D97706]',
    iconBg: 'bg-amber-100/90 text-amber-800 border-amber-300/60',
    windowTrim: 'border-[#E5A93C]/50',
    highlightBorder: 'border-amber-400/40'
  },
  'royal-gold': {
    badgeBg: 'bg-[#FBF4DE]',
    badgeText: 'text-[#876505]',
    accentColor: 'text-[#B8870A]',
    iconBg: 'bg-yellow-100/90 text-yellow-900 border-yellow-300/60',
    windowTrim: 'border-[#D4AF37]/60',
    highlightBorder: 'border-yellow-400/40'
  },
  'royal-crimson': {
    badgeBg: 'bg-[#FDECEF]',
    badgeText: 'text-[#8C162E]',
    accentColor: 'text-[#A31636]',
    iconBg: 'bg-rose-100/90 text-rose-900 border-rose-300/60',
    windowTrim: 'border-[#A31636]/50',
    highlightBorder: 'border-rose-400/40'
  },
  'royal-peacock': {
    badgeBg: 'bg-[#E3F4F5]',
    badgeText: 'text-[#0B4F57]',
    accentColor: 'text-[#126975]',
    iconBg: 'bg-cyan-100/90 text-cyan-900 border-cyan-300/60',
    windowTrim: 'border-[#126975]/50',
    highlightBorder: 'border-cyan-400/40'
  },
  'royal-ruby': {
    badgeBg: 'bg-[#F9E8EC]',
    badgeText: 'text-[#6C0F23]',
    accentColor: 'text-[#7D112A]',
    iconBg: 'bg-red-100/90 text-red-900 border-red-300/60',
    windowTrim: 'border-[#7D112A]/50',
    highlightBorder: 'border-red-400/40'
  }
};

export const EventsSection = ({ eventsSchedule }) => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [copiedId, setCopiedId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Flatten ceremonies according to selected tab
  const getDisplayedDays = () => {
    if (!eventsSchedule) return [];
    if (activeTab === 'ALL') return eventsSchedule;
    return eventsSchedule.filter(day => day.dateKey === activeTab);
  };

  const displayedDays = getDisplayedDays();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [activeTab]);

  const handleCopy = (ceremony, dayTitle, e) => {
    e.stopPropagation();
    const text = `🌸 ${ceremony.name} (${ceremony.nameEnglish})\n🗓️ ${dayTitle}\n⏰ समय: ${ceremony.time}\n📍 स्थल: ${ceremony.subLocation}\nहोटल: पुष्कर फोर्ट रिसॉर्ट, पुष्कर, राजस्थान`;
    navigator.clipboard.writeText(text);
    setCopiedId(ceremony.id);
    setTimeout(() => setCopiedId(null), 2400);

    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#996515', '#C47B78', '#FAF6F0'],
      shapes: ['circle'],
      scalar: 0.85
    });
  };

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section ref={sectionRef} id="events-section" className="relative py-20 px-3 md:px-4">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Section Header with Authentic Rajasthani Motifs */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ShehnaiNagadaMotif className="w-10 h-8 text-[#D4AF37] drop-shadow" />
            <LotusMotif className="w-10 h-10 text-[#D4AF37] animate-pulse" />
            <ShehnaiNagadaMotif className="w-10 h-8 text-[#D4AF37] drop-shadow" flip={true} />
          </div>

          <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase font-sans-body">
            शुभ मांगल्य प्रसंग
          </p>

          <h2 className="text-3xl font-royal-title text-[#FAF6F0] font-bold mt-1 tracking-wide">
            वैवाहिक कार्यक्रम
          </h2>
          <p className="text-[#F7E7B4]/80 text-xs font-marcellus tracking-wider mt-0.5">
            Wedding Ceremonies Schedule
          </p>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-3"></div>

          <p className="text-[#FAF6F0]/80 text-xs font-devanagari max-w-xs mx-auto leading-relaxed">
            परमपिता परमेश्वर की कृपा से समस्त वैवाहिक रस्में पुष्कर फोर्ट रिसॉर्ट, पुष्कर के प्रांगण में संपन्न होंगी।
          </p>
        </div>

        {/* Date Filter Tabs in Royal Style */}
        <div className="flex items-center justify-center gap-1.5 mb-8 p-1.5 rounded-full bg-[#1F050C]/80 border border-[#D4AF37]/40 shadow-xl max-w-xs mx-auto backdrop-blur-md">
          <button
            onClick={() => setActiveTab('ALL')}
            className={`flex-1 py-1.5 px-2 rounded-full text-[11px] font-semibold tracking-wider font-devanagari transition-all cursor-pointer ${
              activeTab === 'ALL'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#BF8C2C] text-[#2D0A14] font-bold shadow-md'
                : 'text-[#FAF6F0]/75 hover:text-[#FAF6F0]'
            }`}
          >
            सभी कार्यक्रम
          </button>
          <button
            onClick={() => setActiveTab('19th')}
            className={`flex-1 py-1.5 px-2 rounded-full text-[11px] font-semibold tracking-wider font-devanagari transition-all cursor-pointer ${
              activeTab === '19th'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#BF8C2C] text-[#2D0A14] font-bold shadow-md'
                : 'text-[#FAF6F0]/75 hover:text-[#FAF6F0]'
            }`}
          >
            19 नवम्बर
          </button>
          <button
            onClick={() => setActiveTab('20th')}
            className={`flex-1 py-1.5 px-2 rounded-full text-[11px] font-semibold tracking-wider font-devanagari transition-all cursor-pointer ${
              activeTab === '20th'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#BF8C2C] text-[#2D0A14] font-bold shadow-md'
                : 'text-[#FAF6F0]/75 hover:text-[#FAF6F0]'
            }`}
          >
            20 नवम्बर
          </button>
        </div>

        {/* Schedule by Days */}
        <div className="space-y-12">
          {displayedDays.map((dayGroup, dayIdx) => (
            <div key={dayGroup.dateKey} className="space-y-6">
              {/* Day Header Ribbon */}
              <div className="relative inline-flex flex-col items-center justify-center px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#4E0E1D] via-[#5E1225] to-[#4E0E1D] border border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
                <span className="text-[#FAF6F0] font-bold text-sm md:text-base font-devanagari tracking-wide">
                  {dayGroup.dayTitle}
                </span>
                <span className="text-[#F7E7B4] text-[10px] font-sans-body tracking-widest uppercase mt-0.5">
                  {dayGroup.dayTitleEnglish}
                </span>
              </div>

              {/* Grid / List of Rajasthani Mahal Windows for each ceremony */}
              <div className="space-y-7">
                {dayGroup.ceremonies.map((ceremony, cIdx) => {
                  const Icon = iconMap[ceremony.icon] || Sparkles;
                  const theme = themeStyles[ceremony.theme] || themeStyles['royal-gold'];
                  const isExpanded = expandedId === ceremony.id;
                  const globalIdx = `${dayIdx}-${cIdx}`;

                  return (
                    <div
                      key={ceremony.id}
                      ref={(el) => (cardsRef.current[globalIdx] = el)}
                      onClick={() => toggleExpand(ceremony.id)}
                      className="relative text-left transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                    >
                      {/* RAJASTHANI MAHAL WINDOW (झरोखा) CONTAINER */}
                      <div className="relative rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5EBE1] border-2 border-[#D4AF37]/60 shadow-[0_12px_35px_rgba(0,0,0,0.35),0_0_15px_rgba(212,175,55,0.2)] overflow-hidden">
                        
                        {/* 1. TOP ORNATE JHAROKHA ARCH MEHRAB */}
                        <div className="relative bg-gradient-to-b from-[#3B0813] to-[#540D1F] pt-2 pb-0 px-2 text-center overflow-hidden">
                          {/* Jaali lattice background subtle overlay */}
                          <div className="absolute inset-0 bg-jaali-pattern opacity-20 pointer-events-none"></div>

                          {/* Decorative Cusped Jharokha Arch SVG */}
                          <JharokhaArchHeader className="w-full text-[#D4AF37]" />

                          {/* Top Badges & Timing Header */}
                          <div className="relative z-10 flex items-center justify-between px-3 pb-2 -mt-1 text-xs">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF6F0]/15 border border-[#D4AF37]/50 text-[#F7E7B4] text-[11px] font-semibold font-devanagari shadow-xs">
                              <Clock className="w-3 h-3 text-[#D4AF37]" />
                              <span>{ceremony.time}</span>
                            </span>

                            <span className="text-[10px] text-[#F7E7B4]/80 tracking-wider font-sans-body uppercase font-bold bg-black/20 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
                              {ceremony.timeEnglish}
                            </span>
                          </div>
                        </div>

                        {/* 2. WINDOW INNER CHAMBER (झरोखे के भीतर का दृश्य) */}
                        <div className="relative p-5 pt-4 text-[#3E0A16]">
                          {/* Four subtle ornamental corners */}
                          <div className="absolute top-2 left-2 pointer-events-none opacity-40">
                            <GoldCorner className="w-4 h-4 text-[#D4AF37]" />
                          </div>
                          <div className="absolute top-2 right-2 pointer-events-none rotate-90 opacity-40">
                            <GoldCorner className="w-4 h-4 text-[#D4AF37]" />
                          </div>

                          {/* Ceremony Title & Icon */}
                          <div className="flex items-start gap-3.5 my-1">
                            <div className={`p-3 rounded-2xl ${theme.iconBg} border shadow-sm shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                              <Icon className="w-6 h-6" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="font-yatra text-xl md:text-2xl text-[#4A0E1A] font-bold leading-tight tracking-wide">
                                {ceremony.name}
                              </h3>
                              <p className="text-xs font-marcellus text-[#9A5B00] font-semibold tracking-wider mt-0.5">
                                {ceremony.nameEnglish}
                              </p>
                            </div>
                          </div>

                          {/* Ceremony Venue Location */}
                          <div className="flex items-center gap-2 mt-3 text-xs text-[#540D1F] font-devanagari font-medium bg-[#FAF6F0] p-2 rounded-xl border border-[#D4AF37]/25">
                            <MapPin className="w-3.5 h-3.5 text-[#B8870A] shrink-0" />
                            <span className="truncate">{ceremony.subLocation}</span>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-[#4A0E1A]/85 mt-2.5 leading-relaxed font-devanagari">
                            {ceremony.description}
                          </p>

                          {/* Interactive Action Bar on Card */}
                          <div className="mt-4 pt-3 border-t border-[#D4AF37]/25 flex items-center justify-between">
                            <button
                              onClick={(e) => handleCopy(ceremony, dayGroup.dayTitle, e)}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/60 text-[11px] font-semibold text-[#4A0E1A] hover:bg-[#FAF4E8] shadow-xs transition-colors cursor-pointer"
                            >
                              {copiedId === ceremony.id ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-green-700" />
                                  <span className="text-green-800 font-bold">कॉपी हो गया!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5 text-[#B8870A]" />
                                  <span>विवरण शेयर करें</span>
                                </>
                              )}
                            </button>

                            <span className="text-[10px] text-[#78162B] font-semibold tracking-wider font-devanagari flex items-center gap-1">
                              <span>{isExpanded ? 'कम देखें' : 'विस्तार से देखें'}</span>
                              <ChevronDown className={`w-3.5 h-3.5 text-[#B8870A] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                            </span>
                          </div>

                          {/* Expandable Rich Highlight Details */}
                          {isExpanded && (
                            <div className="mt-3 pt-3 border-t border-[#D4AF37]/20 text-xs text-[#3E0A16] space-y-1.5 animate-fadeIn font-devanagari">
                              <p className="font-bold text-[#8C162E] flex items-center gap-1">
                                <span>✨ शाही आयोजन विशेषताएँ :</span>
                              </p>
                              <ul className="list-disc list-inside space-y-1 text-[11.5px] text-[#4A0E1A]/80 pl-1 leading-relaxed">
                                <li>पारंपरिक राजस्थानी मांगलिक गीत एवं ढोल-नगाड़ों की मधुर प्रस्तुति</li>
                                <li>सपरिवार मंगल तिलक, आशीर्वाद एवं उत्सव की यादगार वीडियोग्राफी</li>
                                <li>शाही पुष्कर फोर्ट रिसॉर्ट में अतिथियों के लिए स्वादिष्ट खान-पान की उत्तम व्यवस्था</li>
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* 3. JHAROKHA BASE BALCONY BALUSTRADE & RAILING */}
                        <div className="bg-gradient-to-t from-[#3B0813] to-[#4E0E1D] pt-1 pb-1">
                          <JharokhaBaseRailing className="w-full text-[#D4AF37]" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
