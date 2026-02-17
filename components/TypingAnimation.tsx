"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  gradientSpan?: boolean;
  speed?: number;
  sound?: boolean;
  onComplete?: () => void;
}

export default function TypingAnimation({
  text,
  className = "",
  gradientSpan = false,
  speed = 80,
  sound = true,
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        // Play typing sound only if enabled
        if (sound) {
          playTypingSound();
        }
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  const playTypingSound = () => {
    // Create a simple typing sound using Web Audio API
    try {
      const AudioContextClass = (typeof window !== 'undefined' && 
        (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)) || null;
      
      if (!AudioContextClass) return;
      
      const audioContext = new AudioContextClass();
      const now = audioContext.currentTime;

      // Create oscillator for the typing sound
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.connect(gain);
      gain.connect(audioContext.destination);

      // Random pitch variation for natural typing sound
      osc.frequency.setValueAtTime(
        Math.random() * 2000 + 3000,
        now
      );
      osc.type = "square";

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Silently fail if audio context is not available
      // This won't break the animation
    }
  };

  const displayContent =
    displayedText || <span className="opacity-50">▌</span>;

  if (gradientSpan) {
    return (
      <>
        {displayedText.split(/(?=\s)|(?<=\s)/)[0]}{" "}
        <span className={`bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent ${className}`}>
          {displayedText.includes(" ")
            ? displayedText.split(/\s+/).slice(1).join(" ")
            : ""}
        </span>
        {!isComplete && <span className="animate-pulse">▌</span>}
      </>
    );
  }

  return (
    <span className={className}>
      {displayContent}
      {!isComplete && <span className="animate-pulse">▌</span>}
    </span>
  );
}
