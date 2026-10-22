import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const BackgroundMusic = ({ autoStart = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const intervalRef = useRef(null);
  const isMutedRef = useRef(true);

  // Procedural Indian Classical Raag Yaman Tanpura & Flute Harmonic Sound Generator
  const startIndianMelody = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      isMutedRef.current = false;
      setIsPlaying(true);

      // Tanpura Root Frequencies (Sa: C#3 / 138.59 Hz, Pa: G#3 / 207.65 Hz)
      const baseFreqs = [138.59, 207.65, 277.18];
      
      const playTanpuraPluck = (freq, delay = 0, gainLevel = 0.08) => {
        if (isMutedRef.current || !audioContextRef.current) return;
        const now = ctx.currentTime + delay;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm harmonic overtone (sawtooth + soft lowpass filter)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(gainLevel, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 3.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.5);
      };

      // Play soft flute accent notes in Raag Yaman: Sa, Re, Ga, Ma(tivra), Pa, Dha, Ni
      const fluteNotes = [277.18, 311.13, 349.23, 392.00, 415.30, 466.16, 554.37];
      const playFluteChime = () => {
        if (isMutedRef.current || !audioContextRef.current) return;
        const now = ctx.currentTime;
        const randomNote = fluteNotes[Math.floor(Math.random() * fluteNotes.length)];
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(randomNote, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.04, now + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.0);
      };

      // Loop Tanpura strum pattern
      const loopTanpura = () => {
        if (isMutedRef.current) return;
        playTanpuraPluck(baseFreqs[1], 0, 0.06);     // Pa
        playTanpuraPluck(baseFreqs[2], 0.8, 0.05);   // High Sa
        playTanpuraPluck(baseFreqs[2], 1.6, 0.05);   // High Sa
        playTanpuraPluck(baseFreqs[0], 2.4, 0.08);   // Low Sa
        
        if (Math.random() > 0.3) {
          playFluteChime();
        }
      };

      loopTanpura();
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(loopTanpura, 3600);
    } catch (e) {
      console.warn("Audio playback notice:", e);
    }
  };

  const stopMusic = () => {
    isMutedRef.current = true;
    setIsPlaying(false);
    clearInterval(intervalRef.current);
    if (audioContextRef.current && audioContextRef.current.state === 'running') {
      audioContextRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startIndianMelody();
    }
  };

  useEffect(() => {
    if (autoStart) {
      startIndianMelody();
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [autoStart]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        aria-label="Toggle Royal Music"
        className="flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md bg-[#FAF6F0]/90 border border-[#D4AF37]/40 shadow-lg text-[#4A1521] hover:bg-[#FAF6F0] transition-all duration-300 hover:scale-105 group cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-[#D4AF37]' : 'bg-gray-400'}`}></span>
        </span>
        
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#D4AF37] animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#4A1521]/60" />
        )}
        
        <span className="text-xs font-medium tracking-wide uppercase font-sans-body">
          {isPlaying ? 'Shehnai ON' : 'Play Music'}
        </span>
      </button>
    </div>
  );
};
