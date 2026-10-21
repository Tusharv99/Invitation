import React, { useRef } from 'react';
import {
  ShehnaiNagadaMotif,
  LotusMotif,
  KalashMotif
} from './RoyalMotifs';
import { Sparkles } from 'lucide-react';
import { DayEventCarousel } from './DayEventCarousel';

export const EventsSection = ({ eventsSchedule }) => {
  const sectionRef = useRef(null);

  if (!eventsSchedule || eventsSchedule.length === 0) return null;

  const thursdayEvents = eventsSchedule.find((d) => d.dateKey === '19th') || eventsSchedule[0];
  const fridayEvents = eventsSchedule.find((d) => d.dateKey === '20th') || eventsSchedule[1];

  return (
    <section ref={sectionRef} id="events-section" className="relative py-20 px-3 md:px-4">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        {/* Section Header with Authentic Rajasthani Motifs */}
        <div className="flex flex-col items-center">
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

        {/* Swipe Hint Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24050E]/60 border border-[#D4AF37]/30 text-[10.5px] text-[#F7E7B4]/80 font-devanagari mx-auto">
          <Sparkles className="w-3 h-3 text-[#D4AF37] animate-spin-slow" />
          <span>कार्ड को बाएँ-दाएँ स्वाइप करके सभी रस्में देखें</span>
        </div>

        {/* 1. THURSDAY (19th Nov) CAROUSEL */}
        {thursdayEvents && (
          <div className="pt-2 animate-fadeIn">
            <DayEventCarousel dayGroup={thursdayEvents} dayIndex={0} />
          </div>
        )}

        {/* ELEGANT ROYAL DIVIDER BETWEEN DAYS */}
        {thursdayEvents && fridayEvents && (
          <div className="flex items-center justify-center gap-3 py-6 my-2">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#D4AF37]/60"></div>
            <div className="flex items-center gap-1.5 text-[#D4AF37]">
              <LotusMotif className="w-5 h-5 text-[#D4AF37]" />
              <KalashMotif className="w-6 h-6 text-[#D4AF37]" />
              <LotusMotif className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/60"></div>
          </div>
        )}

        {/* 2. FRIDAY (20th Nov) CAROUSEL */}
        {fridayEvents && (
          <div className="pt-2 animate-fadeIn">
            <DayEventCarousel dayGroup={fridayEvents} dayIndex={1} />
          </div>
        )}
      </div>
    </section>
  );
};
