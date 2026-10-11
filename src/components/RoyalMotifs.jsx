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
  <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M5 45 L5 15 C5 9.477 9.477 5 15 5 L45 5" />
    <path d="M12 45 L12 20 C12 15.58 15.58 12 20 12 L45 12" opacity="0.6" />
    <circle cx="5" cy="5" r="3" fill="currentColor" />
    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
  </svg>
);

// Auspicious Kalash / Mangal Kumbh motif
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
    {/* Center petal */}
    <path d="M25 10 C22 18 22 28 25 35 C28 28 28 18 25 10 Z" fillOpacity="0.9" />
    {/* Inner side petals */}
    <path d="M25 16 C20 22 17 28 21 34 C24 30 25 24 25 16 Z" fillOpacity="0.75" />
    <path d="M25 16 C30 22 33 28 29 34 C26 30 25 24 25 16 Z" fillOpacity="0.75" />
    {/* Outer petals */}
    <path d="M25 22 C16 26 12 32 16 36 C20 34 23 29 25 22 Z" fillOpacity="0.6" />
    <path d="M25 22 C34 26 38 32 34 36 C30 34 27 29 25 22 Z" fillOpacity="0.6" />
    {/* Base stem */}
    <path d="M18 36 C22 38 28 38 32 36 C30 39 20 39 18 36 Z" fillOpacity="0.8" />
  </svg>
);
