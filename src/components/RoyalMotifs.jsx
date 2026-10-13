import React from 'react';

// Auspicious Ganesha SVG Motif
export const GaneshMotif = ({ className = "w-12 h-12 text-[#D4AF37]" }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 C52 15 54 13 54 11 C54 9 52 7 50 7 C48 7 46 9 46 11 C46 13 48 15 50 15 Z" />
    <path d="M50 18 C43 18 36 21 32 26 C30 28 31 31 34 31 C36 31 37 30 38 28 C41 25 45 23 50 23 C55 23 59 25 62 28 C63 30 64 31 66 31 C69 31 70 28 68 26 C64 21 57 18 50 18 Z" />
    <path d="M50 25 C47 25 45 28 45 32 L45 42 C45 44 44 46 42 46 C37 46 32 42 32 36 C32 34 30 33 28 33 C26 33 24 35 24 37 C24 46 31 53 40 54 L40 60 C40 66 44 71 50 71 C56 71 60 66 60 60 L60 52 C60 48 63 45 67 45 C73 45 78 40 78 34 C78 32 76 30 74 30 C72 30 70 32 70 34 C70 36 67 38 64 38 C60 38 58 40 58 44 L58 60 C58 64 54 67 50 67 C46 67 44 64 44 60 L44 52 C44 47 48 43 53 43 C55 43 56 41 56 39 L56 32 C56 28 53 25 50 25 Z" />
    {/* Tilak mark */}
    <path d="M48 27 L52 27 L51 35 L49 35 Z" fill="#C47B78" />
    <circle cx="50" cy="38" r="1.5" fill="#D4AF37" />
  </svg>
);

// Traditional Golden Royal Corner Flourish
export const GoldCorner = ({ className = "w-8 h-8 text-[#D4AF37]" }) => (
  <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <path d="M5 45 L5 15 C5 9.477 9.477 5 15 5 L45 5" />
    <path d="M12 45 L12 20 C12 15.58 15.58 12 20 12 L45 12" opacity="0.6" />
    <circle cx="5" cy="5" r="3" fill="currentColor" />
    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="5" cy="45" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="45" cy="5" r="2" fill="currentColor" opacity="0.5" />
  </svg>
);

// Auspicious Kalash / Mangal Kumbh motif with Coconut & Mango leaves
export const KalashMotif = ({ className = "w-10 h-10 text-[#D4AF37]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    {/* Coconut on top */}
    <ellipse cx="32" cy="18" rx="8" ry="11" fill="currentColor" fillOpacity="0.2" />
    <path d="M32 7 L32 10" />
    <path d="M25 15 C28 20 36 20 39 15" />
    {/* Mango leaves */}
    <path d="M22 22 C18 16 23 12 28 17" fill="currentColor" fillOpacity="0.3" />
    <path d="M42 22 C46 16 41 12 36 17" fill="currentColor" fillOpacity="0.3" />
    {/* Pot rim and neck */}
    <ellipse cx="32" cy="25" rx="14" ry="3" fill="currentColor" fillOpacity="0.4" />
    {/* Main body of Kumbh */}
    <path d="M20 27 C14 36 14 46 22 52 C26 55 38 55 42 52 C50 46 50 36 44 27 Z" fill="currentColor" fillOpacity="0.1" />
    {/* Swastik / Auspicious mark in center */}
    <path d="M28 36 L36 36 M32 32 L32 40" strokeWidth="1.8" />
    <path d="M36 36 L36 33 M28 36 L28 39 M32 32 L35 32 M32 40 L29 40" strokeWidth="1.2" />
    {/* Base */}
    <path d="M24 53 L40 53 L38 57 L26 57 Z" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

// Royal Lotus Flower Motif
export const LotusMotif = ({ className = "w-8 h-8 text-[#D4AF37]" }) => (
  <svg viewBox="0 0 50 50" fill="currentColor" className={className}>
    <path d="M25 10 C22 18 22 28 25 35 C28 28 28 18 25 10 Z" fillOpacity="0.9" />
    <path d="M25 16 C20 22 17 28 21 34 C24 30 25 24 25 16 Z" fillOpacity="0.75" />
    <path d="M25 16 C30 22 33 28 29 34 C26 30 25 24 25 16 Z" fillOpacity="0.75" />
    <path d="M25 22 C16 26 12 32 16 36 C20 34 23 29 25 22 Z" fillOpacity="0.6" />
    <path d="M25 22 C34 26 38 32 34 36 C30 34 27 29 25 22 Z" fillOpacity="0.6" />
    <path d="M18 36 C22 38 28 38 32 36 C30 39 20 39 18 36 Z" fillOpacity="0.8" />
  </svg>
);

// Rajasthani Mahal Jharokha Arch Header (शाही झरोखा मेहराब)
export const JharokhaArchHeader = ({ className = "w-full text-[#D4AF37]" }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 360 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
      {/* Decorative Kalash Finial at the Apex */}
      <circle cx="180" cy="5" r="3" fill="#D4AF37" />
      <path d="M180 8 L180 14" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <path d="M176 14 C176 11 184 11 184 14 L185 16 L175 16 Z" fill="#D4AF37" />

      {/* Ornate Scalloped / Multi-Cusped Rajputana Arch */}
      {/* Outer Golden Border */}
      <path
        d="M 10 82 
           L 10 50 
           C 25 50, 40 40, 55 45 
           C 70 35, 95 30, 115 32 
           C 135 22, 160 16, 180 16 
           C 200 16, 225 22, 245 32 
           C 265 30, 290 35, 305 45 
           C 320 40, 335 50, 350 50 
           L 350 82"
        stroke="#D4AF37"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Inner Delicate Arch */}
      <path
        d="M 18 82 
           L 18 53 
           C 32 53, 46 44, 60 48 
           C 74 38, 97 34, 116 36 
           C 135 26, 159 21, 180 21 
           C 201 21, 225 26, 244 36 
           C 263 34, 286 38, 300 48 
           C 314 44, 328 53, 342 53 
           L 342 82"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeOpacity="0.75"
        fill="none"
      />

      {/* Arch cusps accent dots */}
      <circle cx="60" cy="48" r="2.5" fill="#D4AF37" />
      <circle cx="116" cy="36" r="2.5" fill="#D4AF37" />
      <circle cx="180" cy="21" r="3" fill="#D4AF37" />
      <circle cx="244" cy="36" r="2.5" fill="#D4AF37" />
      <circle cx="300" cy="48" r="2.5" fill="#D4AF37" />

      {/* Side Pillar Capital Tops */}
      <rect x="6" y="70" width="12" height="12" rx="2" fill="#D4AF37" fillOpacity="0.4" stroke="#D4AF37" strokeWidth="1.2" />
      <rect x="342" y="70" width="12" height="12" rx="2" fill="#D4AF37" fillOpacity="0.4" stroke="#D4AF37" strokeWidth="1.2" />
    </svg>
  </div>
);

// Rajasthani Jharokha Base Balcony Railing (झरोखा कटघरा व कंगूरे)
export const JharokhaBaseRailing = ({ className = "w-full text-[#D4AF37]" }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 360 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Top Balcony Ledge */}
      <line x1="8" y1="6" x2="352" y2="6" stroke="#D4AF37" strokeWidth="3" />
      <line x1="12" y1="12" x2="348" y2="12" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.7" />

      {/* Carved Jaali Balustrade Pillars */}
      {[24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336].map((x, i) => (
        <g key={i}>
          <rect x={x - 4} y="13" width="8" height="18" rx="2" fill="#D4AF37" fillOpacity="0.25" stroke="#D4AF37" strokeWidth="1" />
          <circle cx={x} cy="22" r="1.5" fill="#D4AF37" />
        </g>
      ))}

      {/* Bottom Chhajja Brackets */}
      <path d="M 8 32 L 352 32" stroke="#D4AF37" strokeWidth="2.5" />
      <path d="M 30 32 Q 40 40, 50 32" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.3" />
      <path d="M 100 32 Q 110 40, 120 32" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.3" />
      <path d="M 170 32 Q 180 40, 190 32" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.3" />
      <path d="M 240 32 Q 250 40, 260 32" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.3" />
      <path d="M 310 32 Q 320 40, 330 32" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.3" />
    </svg>
  </div>
);

// Shehnai & Nagada Auspicious Wedding Instrument Motif (शहनाई व नगाड़ा - जैसा निमंत्रण पत्र पर है)
export const ShehnaiNagadaMotif = ({ className = "w-16 h-12 text-[#D4AF37]", flip = false }) => (
  <svg
    viewBox="0 0 100 70"
    fill="currentColor"
    className={`${className} ${flip ? '-scale-x-100' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Nagada / Dhol Drum Base */}
    <ellipse cx="30" cy="45" rx="22" ry="14" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
    <path d="M 10 45 Q 30 65, 50 45" stroke="currentColor" strokeWidth="2" fillOpacity="0.4" />
    {/* Drum lacing straps */}
    <line x1="14" y1="46" x2="22" y2="58" stroke="currentColor" strokeWidth="1.2" />
    <line x1="26" y1="48" x2="30" y2="60" stroke="currentColor" strokeWidth="1.2" />
    <line x1="38" y1="48" x2="38" y2="58" stroke="currentColor" strokeWidth="1.2" />
    <line x1="46" y1="46" x2="42" y2="56" stroke="currentColor" strokeWidth="1.2" />

    {/* Shehnai / Wedding Trumpet Horn crossing outwards */}
    <path
      d="M 20 40 L 75 18 L 88 10 C 92 12, 94 24, 88 28 L 73 24 Z"
      fillOpacity="0.8"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Bell of the trumpet flare */}
    <ellipse cx="88" cy="19" rx="4" ry="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* Finger holes on Shehnai */}
    <circle cx="38" cy="33" r="1.2" fill="#FAF6F0" />
    <circle cx="48" cy="29" r="1.2" fill="#FAF6F0" />
    <circle cx="58" cy="25" r="1.2" fill="#FAF6F0" />
    <circle cx="68" cy="21" r="1.2" fill="#FAF6F0" />
  </svg>
);

// Royal Elephant with Royal Howdah / Ambabari (शाही गजराज)
export const RoyalElephantMotif = ({ className = "w-16 h-14 text-[#D4AF37]", flip = false }) => (
  <svg
    viewBox="0 0 100 80"
    fill="currentColor"
    className={`${className} ${flip ? '-scale-x-100' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Royal Howdah (Seat on Elephant Back) */}
    <rect x="42" y="10" width="22" height="14" rx="2" fillOpacity="0.7" stroke="currentColor" strokeWidth="1.2" />
    <path d="M 40 10 Q 53 4, 66 10 Z" fillOpacity="0.9" />
    <circle cx="53" cy="3" r="1.5" fill="currentColor" />

    {/* Elephant Body */}
    <path
      d="M 25 36 
         C 28 26, 42 22, 60 22 
         C 75 22, 85 30, 85 45 
         C 85 52, 82 56, 80 72 
         L 72 72 L 72 58 
         L 62 58 L 62 72 
         L 54 72 L 55 52 
         L 45 52 L 44 72 
         L 36 72 L 37 54 
         C 32 54, 28 50, 24 45 
         C 18 42, 10 46, 12 36 
         C 13 32, 18 32, 22 36 
         Z"
      fillOpacity="0.85"
    />
    {/* Upcurled Trunk */}
    <path
      d="M 25 36 C 18 36, 10 32, 12 24 C 14 18, 20 20, 20 24 C 20 28, 24 32, 28 35"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Tusks (Gold) */}
    <path d="M 22 38 Q 16 38, 14 34" stroke="#FFF" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Ear */}
    <path d="M 38 28 C 34 28, 30 35, 34 42 C 38 42, 40 36, 38 28 Z" fillOpacity="0.4" />
    {/* Eye */}
    <circle cx="28" cy="28" r="1.2" fill="#FAF6F0" />
    {/* Jhool (Decorated Saddle Cloth) */}
    <rect x="42" y="26" width="22" height="20" rx="3" fill="#8B1E3F" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" />
    <circle cx="53" cy="36" r="3" fill="#D4AF37" />
  </svg>
);

// Royal Peacock Motif (शाही मयूर)
export const RoyalPeacockMotif = ({ className = "w-14 h-14 text-[#D4AF37]", flip = false }) => (
  <svg
    viewBox="0 0 80 80"
    fill="currentColor"
    className={`${className} ${flip ? '-scale-x-100' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Peacock Crest */}
    <circle cx="48" cy="10" r="1" />
    <circle cx="51" cy="9" r="1" />
    <circle cx="54" cy="11" r="1" />
    <line x1="48" y1="12" x2="48" y2="16" stroke="currentColor" strokeWidth="0.8" />
    <line x1="51" y1="11" x2="50" y2="16" stroke="currentColor" strokeWidth="0.8" />
    <line x1="53" y1="12" x2="51" y2="16" stroke="currentColor" strokeWidth="0.8" />

    {/* Head & Elegant Graceful Neck */}
    <path
      d="M 48 16 
         C 52 16, 56 19, 54 23 
         C 52 27, 44 26, 42 34 
         C 40 42, 46 48, 52 50 
         C 58 52, 60 58, 54 62 
         C 46 66, 36 60, 36 50 
         C 36 38, 44 28, 44 20 
         Z"
      fillOpacity="0.9"
    />
    {/* Beak */}
    <path d="M 54 19 L 60 21 L 54 23 Z" />

    {/* Majestic Arching Tail Feathers */}
    <path
      d="M 38 46 
         C 26 40, 16 48, 12 60 
         C 10 66, 18 72, 28 68 
         C 38 64, 44 58, 46 52 
         Z"
      fillOpacity="0.5"
    />
    {/* Feather Eye spots */}
    <circle cx="20" cy="58" r="3" fill="#0D3B2E" stroke="currentColor" strokeWidth="1" />
    <circle cx="28" cy="62" r="3" fill="#0D3B2E" stroke="currentColor" strokeWidth="1" />
    <circle cx="34" cy="54" r="2.5" fill="#0D3B2E" stroke="currentColor" strokeWidth="1" />
  </svg>
);

