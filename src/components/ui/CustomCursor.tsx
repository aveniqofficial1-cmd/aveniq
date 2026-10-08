'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering interactive target with data-cursor
      const target = (e.target as HTMLElement)?.closest('[data-cursor], a, button, input, select, textarea');
      if (target) {
        setIsHovering(true);
        const customText = target.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing ring
    let frameId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      frameId = requestAnimationFrame(updateTrailing);
    };
    frameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(frameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center sharp dot */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div
          className={`rounded-full bg-cyan-400 transition-all duration-200 ${
            isHovering ? 'w-2 h-2 opacity-0' : 'w-2 h-2 opacity-100 shadow-[0_0_10px_#22d3ee]'
          }`}
        />
      </div>

      {/* Trailing glass ring / pill with text */}
      <div
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      >
        <div
          className={`flex items-center justify-center rounded-full border transition-all duration-300 ${
            isHovering
              ? cursorText
                ? 'px-3 py-1.5 bg-blue-600/40 border-cyan-400/80 backdrop-blur-md scale-110 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                : 'w-10 h-10 bg-cyan-500/15 border-cyan-400/60 backdrop-blur-xs scale-125 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
              : 'w-7 h-7 bg-transparent border-cyan-500/30'
          }`}
        >
          {cursorText && (
            <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-200 uppercase whitespace-nowrap">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
