import React from 'react';

/**
 * RajasthaniJharokhaCard
 * Renders a photo inside a multi-cusped Rajasthani palace arch (Jharokha)
 * window, traced from the reference artwork, surrounded by a minimal
 * double-line rectangular frame.
 */
export const RajasthaniJharokhaCard = ({
  clipId,
  photo,
  name,
  nameEnglish,
  role,
  roleEnglish,
  grandparents,
  parents,
  residence,
  themeColor = 'gold',
  widthClass = 'max-w-[210px]'
}) => {
  // Exact multifoil arch outline traced from the reference image (208 x 280 space)
  const archPath = `
    M 104 29 L 103 31 L 101 33 L 95 35 L 82 37 L 78 39 L 76 41
    L 75 43 L 74 45 L 66 47 L 62 49 L 60 51 L 59 53 L 58 55 L 57 57
    L 56 59 L 56 61 L 50 63 L 48 65 L 46 67 L 45 69 L 45 71 L 45 73
    L 44 75 L 44 77 L 43 79 L 41 81 L 40 83 L 39 85 L 39 87 L 39 89
    L 39 91 L 39 93 L 40 95 L 40 97 L 41 99 L 41 101 L 42 103 L 42 105
    L 43 107 L 44 109 L 44 111 L 44 113 L 44 115 L 41 117 L 42 119
    L 42 121 L 39 123 L 37 125 L 36 127 L 36 129 L 36 131 L 36 133
    L 33 135 L 33 236 L 174 236 L 174 134 L 171 132 L 171 130 L 171 128
    L 170 126 L 169 124 L 167 122 L 165 120 L 165 118 L 165 116 L 163 114
    L 163 112 L 163 110 L 163 108 L 164 106 L 165 104 L 166 102 L 166 100
    L 167 98 L 167 96 L 168 94 L 168 92 L 168 90 L 168 88 L 168 86 L 167 84
    L 167 82 L 165 80 L 163 78 L 163 76 L 163 74 L 162 72 L 162 70 L 161 68
    L 160 66 L 158 64 L 155 62 L 151 60 L 150 58 L 150 56 L 149 54 L 148 52
    L 146 50 L 143 48 L 134 46 L 133 44 L 132 42 L 130 40 L 128 38 L 113 36
    L 109 34 L 105 32 L 104 30 L 104 29 Z
  `;

  return (
    <div className={`flex flex-col items-center group w-full ${widthClass} mx-auto`}>
      {/* THE ARCH PHOTO FRAME (double-line border with arched window) */}
      <div className="relative w-full aspect-[184/248] drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.03]">
        <svg
          viewBox="12 6 184 248"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id={clipId}>
              <path d={archPath} />
            </clipPath>

            {/* Antique Gold Gradient for the thin border */}
            <linearGradient id={`goldGrad-${clipId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ECC870" />
              <stop offset="35%" stopColor="#FFF2B2" />
              <stop offset="60%" stopColor="#D4AF37" />
              <stop offset="85%" stopColor="#FAF2BD" />
              <stop offset="100%" stopColor="#AA771C" />
            </linearGradient>
          </defs>

          {/* THE PHOTOGRAPH CLIPPED INSIDE THE MULTIFOIL ARCH */}
          <image
            href={photo}
            x="30"
            y="24"
            width="150"
            height="216"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#${clipId})`}
            className="transition-transform duration-700 group-hover:scale-105 origin-center"
          />

          {/* INNER ARCH OUTLINE */}
          <path
            d={archPath}
            fill="none"
            stroke={`url(#goldGrad-${clipId})`}
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* DOUBLE-LINE RECTANGULAR FRAME */}
          <rect
            x="19.5"
            y="10.5"
            width="168"
            height="238"
            fill="none"
            stroke={`url(#goldGrad-${clipId})`}
            strokeWidth="1.8"
          />
          <rect
            x="23.5"
            y="14.5"
            width="160"
            height="230"
            fill="none"
            stroke={`url(#goldGrad-${clipId})`}
            strokeWidth="1.8"
          />
        </svg>
      </div>

      {name && (
        <div className="mt-3 text-center w-full px-1">
          {/* Role label */}
          {role && (
            <p className="text-[10px] font-devanagari text-[#D4AF37] font-bold tracking-widest mb-1">
              {role} • {roleEnglish}
            </p>
          )}

          {/* Name in Regal Script & English */}
          <h3 className="font-yatra text-xl md:text-2xl text-[#FAF6F0] font-bold tracking-wide drop-shadow-sm">
            {name}
          </h3>
          <p className="text-[10px] font-sans-body text-[#D4AF37] font-semibold uppercase tracking-widest -mt-0.5 mb-2">
            {nameEnglish}
          </p>

          {/* Clean, Elegant Lineage Details */}
          {(grandparents || parents || residence) && (
            <div className="space-y-1 text-center font-devanagari text-[11px] leading-relaxed text-[#F7E7B4]/90 border-t border-[#D4AF37]/25 pt-2 max-w-[190px] mx-auto">
              {grandparents && (
                <p className="text-[10.5px]">
                  <span className="text-[#D4AF37] font-semibold">सुपौत्र/सुपौत्री: </span>
                  <span>{grandparents}</span>
                </p>
              )}
              {parents && (
                <p className="text-[10.5px]">
                  <span className="text-[#D4AF37] font-semibold">सुपुत्र/सुपुत्री: </span>
                  <span className="font-medium text-[#FAF6F0]">{parents}</span>
                </p>
              )}
              {residence && (
                <p className="text-[10px] text-[#D4AF37]/90 font-medium pt-0.5">
                  {residence}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
