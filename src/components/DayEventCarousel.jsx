import React, { useState, useRef } from 'react';
import {
  JharokhaArchHeader,
  JharokhaBaseRailing,
  GoldCorner
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
  ChevronLeft,
  ChevronRight,
  Calendar
} from 'lucide-react';

const iconMap = {
  Gift,
  Sparkles,
  HeartHandshake,
  Music,
  UtensilsCrossed,
  Crown,
  Drum,
  Flame
};

const ceremonyShortLabels = {
  mayra: { emoji: '🎁', label: 'मायरा' },
  'haldi-mehendi': { emoji: '✨', label: 'हल्दी/मेंहदी' },
  sagai: { emoji: '💍', label: 'सगाई' },
  'mahila-sangeet': { emoji: '🎵', label: 'संगीत' },
  'ratri-bhoj-19': { emoji: '🍽️', label: 'प्रीतिभोज' },
  'sehra-bandi': { emoji: '👑', label: 'सेहरा बंदी' },
  nikaasi: { emoji: '🥁', label: 'शाही बारात' },
  phere: { emoji: '🔥', label: 'सात फेरे' },
  'ratri-bhoj-20': { emoji: '🍽️', label: 'महाभोज' }
};

const themeStyles = {
  'royal-amber': {
    badgeBg: 'bg-[#FDF3E2]',
    badgeText: 'text-[#9A5B00]',
    accentColor: 'text-[#D97706]',
    iconBg: 'bg-amber-100/90 text-amber-800 border-amber-300/60'
  },
  'royal-gold': {
    badgeBg: 'bg-[#FBF4DE]',
    badgeText: 'text-[#876505]',
    accentColor: 'text-[#B8870A]',
    iconBg: 'bg-yellow-100/90 text-yellow-900 border-yellow-300/60'
  },
  'royal-crimson': {
    badgeBg: 'bg-[#FDECEF]',
    badgeText: 'text-[#8C162E]',
    accentColor: 'text-[#A31636]',
    iconBg: 'bg-rose-100/90 text-rose-900 border-rose-300/60'
  },
  'royal-peacock': {
    badgeBg: 'bg-[#E3F4F5]',
    badgeText: 'text-[#0B4F57]',
    accentColor: 'text-[#126975]',
    iconBg: 'bg-cyan-100/90 text-cyan-900 border-cyan-300/60'
  },
  'royal-ruby': {
    badgeBg: 'bg-[#F9E8EC]',
    badgeText: 'text-[#6C0F23]',
    accentColor: 'text-[#7D112A]',
    iconBg: 'bg-red-100/90 text-red-900 border-red-300/60'
  }
};

export const DayEventCarousel = ({ dayGroup, dayIndex }) => {
  const { dayTitle, dayTitleEnglish, ceremonies = [] } = dayGroup;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Drag / Swipe handling
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startXRef = useRef(0);
  const hasMovedRef = useRef(false);
  const containerRef = useRef(null);

  const total = ceremonies.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1 < total ? prev + 1 : 0));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : total - 1));
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    hasMovedRef.current = false;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startXRef.current;
    if (Math.abs(diff) > 5) {
      hasMovedRef.current = true;
    }
    // Dampen drag slightly at boundaries
    let dampened = diff;
    if ((currentIndex === 0 && diff > 0) || (currentIndex === total - 1 && diff < 0)) {
      dampened = diff * 0.35;
    }
    setDragOffset(dampened);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -45) {
      goToNext();
    } else if (dragOffset > 45) {
      goToPrev();
    }
    setDragOffset(0);
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 50);
  };

  // Mouse drag handlers (for desktop swipe / drag)
  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
    hasMovedRef.current = false;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startXRef.current;
    if (Math.abs(diff) > 5) {
      hasMovedRef.current = true;
    }
    let dampened = diff;
    if ((currentIndex === 0 && diff > 0) || (currentIndex === total - 1 && diff < 0)) {
      dampened = diff * 0.35;
    }
    setDragOffset(dampened);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -45) {
      goToNext();
    } else if (dragOffset > 45) {
      goToPrev();
    }
    setDragOffset(0);
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 50);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  return (
    <div className="relative w-full space-y-4">
      {/* 1. Day Header Banner */}
      <div className="relative inline-flex flex-col items-center justify-center px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#4E0E1D] via-[#5E1225] to-[#4E0E1D] border border-[#D4AF37]/65 shadow-[0_6px_25px_rgba(212,175,55,0.3)]">
        <span className="text-[#FAF6F0] font-bold text-sm md:text-base font-devanagari tracking-wide flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span>{dayTitle}</span>
        </span>
        <span className="text-[#F7E7B4] text-[10px] font-sans-body tracking-widest uppercase mt-0.5">
          {dayTitleEnglish} • {total} मांगलिक प्रसंग
        </span>
      </div>

      {/* 2. Interactive Ceremony Quick Selector Chips */}
      <div className="w-full flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1">
        {ceremonies.map((c, idx) => {
          const short = ceremonyShortLabels[c.id] || { emoji: '✨', label: c.name.split(' ')[0] };
          const isActive = idx === currentIndex;
          return (
            <button
              key={c.id}
              onClick={() => setCurrentIndex(idx)}
              className={`shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-devanagari font-semibold transition-all duration-300 cursor-pointer ${isActive
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#BF8C2C] text-[#2B050E] font-bold shadow-[0_0_12px_rgba(212,175,55,0.5)] scale-105'
                  : 'bg-[#2B050E]/60 text-[#F7E7B4]/80 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 hover:text-[#FAF6F0]'
                }`}
            >
              <span className="text-xs">{short.emoji}</span>
              <span>{short.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Modern Carousel Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden py-3 select-none touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Floating Prev / Next Buttons */}
        <button
          onClick={goToPrev}
          aria-label="Previous Ceremony"
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#20040A]/85 border-2 border-[#D4AF37]/70 text-[#F7E7B4] flex items-center justify-center shadow-[0_4px_18px_rgba(0,0,0,0.6)] backdrop-blur-md hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={goToNext}
          aria-label="Next Ceremony"
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#20040A]/85 border-2 border-[#D4AF37]/70 text-[#F7E7B4] flex items-center justify-center shadow-[0_4px_18px_rgba(0,0,0,0.6)] backdrop-blur-md hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Carousel Slider Track */}
        <div
          className="flex items-start"
          style={{
            transform: `translateX(calc(6% - ${currentIndex * 88}% + ${dragOffset}px))`,
            transition: isDragging ? 'none' : 'transform 450ms cubic-bezier(0.2, 0.9, 0.3, 1)'
          }}
        >
          {ceremonies.map((ceremony, idx) => {
            const Icon = iconMap[ceremony.icon] || Sparkles;
            const theme = themeStyles[ceremony.theme] || themeStyles['royal-gold'];
            const isActive = idx === currentIndex;

            return (
              <div
                key={ceremony.id}
                className="w-[88%] shrink-0 px-2 transition-all duration-400"
                style={{
                  transform: isActive ? 'scale(1)' : 'scale(0.93)',
                  opacity: isActive ? 1 : 0.45,
                  filter: isActive ? 'none' : 'blur(0.3px)'
                }}
              >
                {/* RAJASTHANI MAHAL JHAROKHA EVENT CARD */}
                <div
                  className={`relative rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5EBE1] border-2 border-[#D4AF37]/70 text-[#3E0A16] overflow-hidden transition-all duration-300 ${isActive
                      ? 'shadow-[0_16px_40px_rgba(0,0,0,0.45),0_0_25px_rgba(212,175,55,0.35)] ring-1 ring-[#D4AF37]/50'
                      : 'shadow-md'
                    }`}
                >
                  {/* TOP ORNATE JHAROKHA ARCH MEHRAB */}
                  <div className="relative bg-gradient-to-b from-[#3B0813] to-[#540D1F] pt-2 pb-0 px-2 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-jaali-pattern opacity-20 pointer-events-none"></div>

                    {/* Decorative Jharokha Arch SVG */}
                    <JharokhaArchHeader className="w-full text-[#D4AF37]" />

                    {/* Timing Badges */}
                    <div className="relative z-10 flex items-center justify-between px-3 pb-2 -mt-1 text-xs">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF6F0]/15 border border-[#D4AF37]/50 text-[#F7E7B4] text-[11px] font-semibold font-devanagari shadow-xs">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{ceremony.time}</span>
                      </span>

                      <span className="text-[10px] text-[#F7E7B4]/85 tracking-wider font-sans-body uppercase font-bold bg-black/25 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
                        {ceremony.timeEnglish}
                      </span>
                    </div>
                  </div>

                  {/* INNER CHAMBER CONTENT */}
                  <div className="relative p-5 pt-4 text-[#3E0A16]">
                    {/* Golden Ornamental Corner Accents */}
                    <div className="absolute top-2 left-2 pointer-events-none opacity-40">
                      <GoldCorner className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div className="absolute top-2 right-2 pointer-events-none rotate-90 opacity-40">
                      <GoldCorner className="w-4 h-4 text-[#D4AF37]" />
                    </div>

                    {/* Ceremony Title & Glowing Icon */}
                    <div className="flex items-start gap-3.5 my-1">
                      <div
                        className={`p-3 rounded-2xl ${theme.iconBg} border shadow-sm shrink-0 transition-transform duration-300 ${isActive ? 'scale-105 rotate-1' : ''
                          }`}
                      >
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

                    {/* Venue Location Pill */}
                    <div className="flex items-center gap-2 mt-3 text-xs text-[#540D1F] font-devanagari font-medium bg-[#FAF6F0] p-2 rounded-xl border border-[#D4AF37]/30">
                      <MapPin className="w-3.5 h-3.5 text-[#B8870A] shrink-0" />
                      <span className="truncate">{ceremony.subLocation}</span>
                    </div>

                    {/* Poetic Description */}
                    <p className="text-xs text-[#4A0E1A]/90 mt-2.5 leading-relaxed font-devanagari">
                      {ceremony.description}
                    </p>
                  </div>

                  {/* JHAROKHA BASE BALCONY BALUSTRADE */}
                  <div className="bg-gradient-to-t from-[#3B0813] to-[#4E0E1D] pt-1 pb-1">
                    <JharokhaBaseRailing className="w-full text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Modern Carousel Indicator & Progress Dots */}
      <div className="flex flex-col items-center justify-center gap-2 pt-1">
        {/* Animated Dots */}
        <div className="flex items-center justify-center gap-2">
          {ceremonies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${idx === currentIndex
                  ? 'w-7 h-2.5 rounded-full bg-gradient-to-r from-[#ECC870] via-[#D4AF37] to-[#BF8C2C] shadow-[0_0_8px_rgba(212,175,55,0.7)]'
                  : 'w-2.5 h-2.5 rounded-full bg-[#FAF6F0]/25 border border-[#D4AF37]/40 hover:bg-[#FAF6F0]/50'
                }`}
            />
          ))}
        </div>

        {/* Counter Pill */}
        <span className="text-[10px] font-sans-body tracking-widest text-[#F7E7B4]/80 uppercase">
          रस्म {currentIndex + 1} / {total} :{' '}
          <strong className="text-[#D4AF37] font-devanagari">
            {ceremonies[currentIndex]?.name}
          </strong>
        </span>
      </div>
    </div>
  );
};
