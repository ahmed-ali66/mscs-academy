/**
 * MSCS Academy — 3D Visual Toolkit
 *
 * Subject-specific 3D-feel visuals using pure CSS 3D transforms,
 * layered SVGs, and parallax. No external libraries — keeps the
 * platform self-sufficient per spec.
 *
 * Each subject has a distinctive visual motif tied to its content:
 *  - History (S1)      → Ancient scroll / hourglass / column
 *  - Civics (S2)        → Majlis / pillars / scales of justice
 *  - Geography (S3)     → Astrolabe / compass / globe
 *  - Sociology (S4)     → Interconnected nodes / community web
 *  - Economics (S5)     → Balance scale / dhow ship with goods
 *  - Info Literacy (S6) → Open book with floating letters
 *  - Research (S7)      → Magnifier over documents
 *  - Ethics (S8)        → Olive branch / lantern
 *  - UAE Heritage (S9)  → Falcon / Burj Al Arab silhouette
 */

import React, { useRef, useEffect, useState } from 'react';

// ═══════════════════════════════════════════════════════════════
// 3D HERO — Layered parallax with depth
// ═══════════════════════════════════════════════════════════════

export type Subject = 'history' | 'civics' | 'geography' | 'sociology' | 'economics' | 'ethics' | 'uae_heritage' | 'general';

interface Hero3DProps {
  subject: Subject;
  title: string;
  eyebrow?: string;
  accentColor?: string;
  children?: React.ReactNode;
}

export function Hero3D({ subject, title, eyebrow, accentColor = '#0F5C5E', children }: Hero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 8, y: -y * 8 });
    };
    const handleLeave = () => setTilt({ x: 0, y: 0 });
    const node = containerRef.current;
    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative rounded-2xl overflow-hidden" style={{ perspective: '1200px', minHeight: '320px' }}>
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          background: 'linear-gradient(135deg, #0A4042 0%, #0F5C5E 50%, #0A4042 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: 'translateZ(-80px) scale(1.2)',
            background: `radial-gradient(ellipse at 20% 30%, ${accentColor}33 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, #7C5B2E33 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, #B5532A22 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-40" style={{ transform: 'translateZ(-40px) scale(1.1)' }}>
          <SubjectMotif subject={subject} size={300} color={accentColor} />
        </div>
        <div className="absolute inset-0" style={{ transform: 'translateZ(-20px)' }}>
          {STARS.map((s, i) => (
            <div key={i} className="absolute anim-twinkle" style={{ top: s.top, left: s.left, animationDelay: s.delay, transform: `translateZ(${20 + i * 5}px)` }}>
              <svg width="6" height="6" viewBox="0 0 6 6"><path d="M3 0 L3.6 2.4 L6 3 L3.6 3.6 L3 6 L2.4 3.6 L0 3 L2.4 2.4 Z" fill="#B08D3C" opacity="0.7" /></svg>
            </div>
          ))}
        </div>
        <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-center items-center text-center min-h-[320px]" style={{ transform: 'translateZ(40px)' }}>
          {eyebrow && (
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: `linear-gradient(to right, transparent, ${accentColor})` }} />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ color: accentColor }}>{eyebrow}</span>
              <div className="w-8 h-px" style={{ background: `linear-gradient(to left, transparent, ${accentColor})` }} />
            </div>
          )}
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F6EFDD] mb-3 max-w-2xl" style={{ fontFamily: 'var(--font-serif)', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>{title}</h2>
          {children && <div className="text-[#E8DCC0] text-sm sm:text-base max-w-xl">{children}</div>}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10, 64, 66, 0.6), transparent)' }} />
      </div>
    </div>
  );
}

const STARS = [
  { top: '15%', left: '10%', delay: '0s' },
  { top: '25%', left: '85%', delay: '1.2s' },
  { top: '60%', left: '5%', delay: '2.4s' },
  { top: '75%', left: '90%', delay: '0.8s' },
  { top: '40%', left: '50%', delay: '1.8s' },
  { top: '20%', left: '30%', delay: '0.4s' },
  { top: '80%', left: '70%', delay: '2.8s' },
];

// ═══════════════════════════════════════════════════════════════
// SUBJECT MOTIF — Large SVG per subject area
// ═══════════════════════════════════════════════════════════════

interface SubjectMotifProps {
  subject: Subject;
  size: number;
  color: string;
}

export function SubjectMotif({ subject, size, color }: SubjectMotifProps) {
  const common = { width: size, height: size, viewBox: '0 0 200 200', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' } as const;

  switch (subject) {
    case 'history':
      return (
        <svg {...common} aria-hidden="true">
          <defs><linearGradient id="hist-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.8" /><stop offset="100%" stopColor="#B08D3C" stopOpacity="0.4" /></linearGradient></defs>
          <path d="M60 30 L140 30 L140 50 L100 100 L140 150 L140 170 L60 170 L60 150 L100 100 L60 50 Z" fill="none" stroke="url(#hist-grad)" strokeWidth="1.5" />
          <circle cx="100" cy="105" r="2" fill={color} opacity="0.6" />
          <circle cx="100" cy="115" r="1.5" fill={color} opacity="0.4" />
          <path d="M75 160 Q100 145 125 160 L125 165 L75 165 Z" fill={color} opacity="0.3" />
          <circle cx="60" cy="30" r="3" fill={color} /><circle cx="140" cy="30" r="3" fill={color} />
          <circle cx="60" cy="170" r="3" fill={color} /><circle cx="140" cy="170" r="3" fill={color} />
          <line x1="30" y1="100" x2="55" y2="100" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="145" y1="100" x2="170" y2="100" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <circle cx="25" cy="100" r="2" fill={color} opacity="0.6" /><circle cx="175" cy="100" r="2" fill={color} opacity="0.6" />
        </svg>
      );

    case 'civics':
      return (
        <svg {...common} aria-hidden="true">
          <defs><linearGradient id="civ-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.9" /><stop offset="100%" stopColor="#7C5B2E" stopOpacity="0.4" /></linearGradient></defs>
          <line x1="100" y1="40" x2="100" y2="160" stroke="url(#civ-grad)" strokeWidth="2" />
          <line x1="50" y1="50" x2="150" y2="50" stroke="url(#civ-grad)" strokeWidth="2" />
          <line x1="60" y1="50" x2="60" y2="75" stroke={color} strokeWidth="1" />
          <line x1="140" y1="50" x2="140" y2="75" stroke={color} strokeWidth="1" />
          <path d="M45 75 Q60 95 75 75" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M45 75 L60 90 L75 75" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
          <path d="M125 75 Q140 95 155 75" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M125 75 L140 90 L155 75" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
          <line x1="70" y1="160" x2="130" y2="160" stroke="url(#civ-grad)" strokeWidth="3" />
          <circle cx="100" cy="40" r="4" fill={color} />
          <circle cx="100" cy="32" r="2" fill={color} opacity="0.6" />
          <line x1="30" y1="80" x2="30" y2="160" stroke={color} strokeWidth="1" opacity="0.5" />
          <line x1="170" y1="80" x2="170" y2="160" stroke={color} strokeWidth="1" opacity="0.5" />
          <circle cx="30" cy="78" r="2" fill={color} opacity="0.5" /><circle cx="170" cy="78" r="2" fill={color} opacity="0.5" />
        </svg>
      );

    case 'geography':
      return (
        <svg {...common} aria-hidden="true">
          <defs><radialGradient id="geo-grad"><stop offset="0%" stopColor={color} stopOpacity="0.9" /><stop offset="100%" stopColor="#0A4042" stopOpacity="0.3" /></radialGradient></defs>
          <circle cx="100" cy="100" r="80" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="100" cy="100" r="65" fill="none" stroke={color} strokeWidth="0.8" strokeDasharray="3 2" />
          <circle cx="100" cy="100" r="50" fill="none" stroke={color} strokeWidth="0.6" />
          <circle cx="100" cy="100" r="35" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M100 25 L108 95 L100 100 L92 95 Z" fill={color} opacity="0.8" />
          <path d="M100 175 L108 105 L100 100 L92 105 Z" fill={color} opacity="0.5" />
          <path d="M25 100 L95 92 L100 100 L95 108 Z" fill={color} opacity="0.6" />
          <path d="M175 100 L105 92 L100 100 L105 108 Z" fill={color} opacity="0.6" />
          <path d="M47 47 L95 95 L100 100 L95 105 Z" fill={color} opacity="0.3" />
          <path d="M153 47 L105 95 L100 100 L105 105 Z" fill={color} opacity="0.3" />
          <path d="M47 153 L95 105 L100 100 L95 95 Z" fill={color} opacity="0.3" />
          <path d="M153 153 L105 105 L100 100 L105 95 Z" fill={color} opacity="0.3" />
          <circle cx="100" cy="100" r="6" fill="url(#geo-grad)" />
          <circle cx="100" cy="100" r="2" fill="#1F2419" />
          <text x="100" y="20" textAnchor="middle" fontSize="10" fill={color} fontFamily="serif">N</text>
          <text x="100" y="190" textAnchor="middle" fontSize="10" fill={color} fontFamily="serif">S</text>
          <text x="15" y="104" textAnchor="middle" fontSize="10" fill={color} fontFamily="serif">W</text>
          <text x="185" y="104" textAnchor="middle" fontSize="10" fill={color} fontFamily="serif">E</text>
        </svg>
      );

    case 'sociology':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="100" cy="100" r="70" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5" />
          <line x1="100" y1="40" x2="60" y2="80" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="100" y1="40" x2="140" y2="80" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="60" y1="80" x2="60" y2="140" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="140" y1="80" x2="140" y2="140" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="60" y1="140" x2="100" y2="170" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="140" y1="140" x2="100" y2="170" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="100" y1="40" x2="100" y2="170" stroke={color} strokeWidth="0.5" opacity="0.3" />
          <line x1="60" y1="80" x2="140" y2="140" stroke={color} strokeWidth="0.5" opacity="0.3" />
          <line x1="140" y1="80" x2="60" y2="140" stroke={color} strokeWidth="0.5" opacity="0.3" />
          {[{x:100,y:40,r:8},{x:60,y:80,r:6},{x:140,y:80,r:6},{x:60,y:140,r:6},{x:140,y:140,r:6},{x:100,y:170,r:8}].map((n,i)=>(
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={n.r} fill={color} opacity="0.7" />
              <circle cx={n.x} cy={n.y} r={n.r+2} fill="none" stroke={color} strokeWidth="0.5" opacity="0.4" />
            </g>
          ))}
          <path d="M100 100 m-6 -3 a6 6 0 1 1 -6 6 a6 6 0 1 1 6 -6 M100 100 m0 -6 a6 6 0 1 0 6 6 a6 6 0 1 0 -6 -6" fill={color} opacity="0.8" transform="translate(0 -3) scale(0.9)" />
        </svg>
      );

    case 'economics':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M20 130 Q40 125 60 130 T100 130 T140 130 T180 130" fill="none" stroke={color} strokeWidth="0.8" opacity="0.6" />
          <path d="M20 140 Q40 135 60 140 T100 140 T140 140 T180 140" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4" />
          <path d="M20 150 Q40 145 60 150 T100 150 T140 150 T180 150" fill="none" stroke={color} strokeWidth="0.4" opacity="0.3" />
          <path d="M40 120 Q100 140 160 120 L150 130 Q100 145 50 130 Z" fill={color} opacity="0.6" stroke={color} strokeWidth="1" />
          <line x1="100" y1="40" x2="100" y2="120" stroke={color} strokeWidth="1.5" />
          <path d="M100 45 L100 110 L140 100 Z" fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
          <path d="M100 45 L100 110 L60 100 Z" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
          <rect x="70" y="105" width="10" height="10" fill={color} opacity="0.7" stroke={color} strokeWidth="0.5" />
          <rect x="120" y="105" width="10" height="10" fill={color} opacity="0.7" stroke={color} strokeWidth="0.5" />
          <rect x="95" y="105" width="10" height="10" fill={color} opacity="0.5" stroke={color} strokeWidth="0.5" />
          <circle cx="160" cy="40" r="8" fill={color} opacity="0.4" />
          <circle cx="160" cy="40" r="4" fill={color} opacity="0.8" />
          <circle cx="40" cy="80" r="3" fill={color} opacity="0.5" />
          <circle cx="170" cy="85" r="3" fill={color} opacity="0.5" />
        </svg>
      );

    case 'ethics':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M80 70 L120 70 L115 110 L85 110 Z" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M85 110 Q100 130 115 110" fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
          <line x1="100" y1="40" x2="100" y2="70" stroke={color} strokeWidth="1" />
          <path d="M85 70 L115 70 L110 60 L90 60 Z" fill={color} opacity="0.4" stroke={color} strokeWidth="1" />
          <path d="M100 80 Q95 90 100 100 Q105 90 100 80 Z" fill={color} opacity="0.9" />
          <circle cx="100" cy="90" r="3" fill={color} opacity="0.6" />
          <path d="M50 100 Q60 90 70 100" fill="none" stroke={color} strokeWidth="1" />
          <ellipse cx="55" cy="93" rx="3" ry="1.5" fill={color} opacity="0.7" transform="rotate(-30 55 93)" />
          <ellipse cx="62" cy="91" rx="3" ry="1.5" fill={color} opacity="0.7" transform="rotate(-30 62 91)" />
          <ellipse cx="68" cy="93" rx="3" ry="1.5" fill={color} opacity="0.7" transform="rotate(-30 68 93)" />
          <path d="M150 100 Q140 90 130 100" fill="none" stroke={color} strokeWidth="1" />
          <ellipse cx="145" cy="93" rx="3" ry="1.5" fill={color} opacity="0.7" transform="rotate(30 145 93)" />
          <ellipse cx="138" cy="91" rx="3" ry="1.5" fill={color} opacity="0.7" transform="rotate(30 138 91)" />
          <ellipse cx="132" cy="93" rx="3" ry="1.5" fill={color} opacity="0.7" transform="rotate(30 132 93)" />
          <line x1="100" y1="35" x2="100" y2="25" stroke={color} strokeWidth="0.8" opacity="0.6" />
          <line x1="85" y1="40" x2="78" y2="32" stroke={color} strokeWidth="0.5" opacity="0.4" />
          <line x1="115" y1="40" x2="122" y2="32" stroke={color} strokeWidth="0.5" opacity="0.4" />
          <circle cx="100" cy="22" r="2" fill={color} />
        </svg>
      );

    case 'uae_heritage':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="100" cy="80" r="15" fill={color} opacity="0.5" />
          <circle cx="100" cy="80" r="10" fill={color} opacity="0.8" />
          <path d="M100 100 Q70 90 50 100 Q60 95 70 100 Q60 105 50 110 Q70 105 100 110 Z" fill={color} opacity="0.6" stroke={color} strokeWidth="0.5" />
          <path d="M100 100 Q130 90 150 100 Q140 95 130 100 Q140 105 150 110 Q130 105 100 110 Z" fill={color} opacity="0.6" stroke={color} strokeWidth="0.5" />
          <ellipse cx="100" cy="105" rx="6" ry="10" fill={color} opacity="0.8" />
          <circle cx="100" cy="95" r="4" fill={color} opacity="0.9" />
          <path d="M100 92 L103 89 L100 91 Z" fill={color} />
          <rect x="30" y="140" width="6" height="30" fill={color} opacity="0.5" />
          <rect x="40" y="125" width="8" height="45" fill={color} opacity="0.6" />
          <rect x="52" y="135" width="5" height="35" fill={color} opacity="0.5" />
          <rect x="140" y="130" width="7" height="40" fill={color} opacity="0.6" />
          <rect x="152" y="145" width="5" height="25" fill={color} opacity="0.5" />
          <rect x="160" y="125" width="9" height="45" fill={color} opacity="0.7" />
          <path d="M164 125 L168 115 L172 125" fill={color} opacity="0.7" />
          <line x1="20" y1="170" x2="180" y2="170" stroke={color} strokeWidth="1" opacity="0.7" />
          <circle cx="40" cy="40" r="1.5" fill={color} opacity="0.7" />
          <circle cx="160" cy="50" r="1.5" fill={color} opacity="0.7" />
          <circle cx="180" cy="30" r="1" fill={color} opacity="0.5" />
        </svg>
      );

    case 'general':
    default:
      return (
        <svg {...common} aria-hidden="true">
          <defs><linearGradient id="gen-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.8" /><stop offset="100%" stopColor="#B08D3C" stopOpacity="0.3" /></linearGradient></defs>
          <line x1="100" y1="50" x2="100" y2="160" stroke="url(#gen-grad)" strokeWidth="2" />
          <path d="M100 50 Q70 55 50 70 L50 160 Q70 145 100 150 Z" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
          <path d="M100 50 Q130 55 150 70 L150 160 Q130 145 100 150 Z" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
          <line x1="60" y1="80" x2="92" y2="80" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="60" y1="90" x2="90" y2="90" stroke={color} strokeWidth="0.5" opacity="0.4" />
          <line x1="60" y1="100" x2="92" y2="100" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="60" y1="110" x2="85" y2="110" stroke={color} strokeWidth="0.5" opacity="0.4" />
          <line x1="60" y1="120" x2="92" y2="120" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="108" y1="80" x2="140" y2="80" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="108" y1="90" x2="140" y2="90" stroke={color} strokeWidth="0.5" opacity="0.4" />
          <line x1="108" y1="100" x2="138" y2="100" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <line x1="108" y1="110" x2="135" y2="110" stroke={color} strokeWidth="0.5" opacity="0.4" />
          <line x1="108" y1="120" x2="140" y2="120" stroke={color} strokeWidth="0.5" opacity="0.5" />
          <text x="40" y="50" fontSize="14" fill={color} opacity="0.4" fontFamily="serif">α</text>
          <text x="155" y="55" fontSize="14" fill={color} opacity="0.4" fontFamily="serif">Ω</text>
          <text x="30" y="170" fontSize="10" fill={color} opacity="0.3" fontFamily="serif">∑</text>
          <text x="165" y="170" fontSize="10" fill={color} opacity="0.3" fontFamily="serif">π</text>
          <path d="M100 30 L102 38 L110 38 L104 43 L106 51 L100 46 L94 51 L96 43 L90 38 L98 38 Z" fill={color} opacity="0.6" />
        </svg>
      );
  }
}

// ═══════════════════════════════════════════════════════════════
// 3D CARD — Floating card with depth on hover
// ═══════════════════════════════════════════════════════════════

interface Card3DProps {
  children: React.ReactNode;
  lift?: number;
  tiltAmount?: number;
  className?: string;
  onClick?: () => void;
}

export function Card3D({ children, lift = 8, tiltAmount = 4, className = '', onClick }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>('');

  useEffect(() => {
    if (!ref.current) return;
    const handleMove = (e: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTransform(`perspective(1000px) rotateY(${x * tiltAmount}deg) rotateX(${-y * tiltAmount}deg) translateZ(${lift}px)`);
    };
    const handleLeave = () => setTransform('');
    const node = ref.current;
    if (onClick) {
      node.addEventListener('mousemove', handleMove);
      node.addEventListener('mouseleave', handleLeave);
    }
    return () => {
      if (onClick) {
        node.removeEventListener('mousemove', handleMove);
        node.removeEventListener('mouseleave', handleLeave);
      }
    };
  }, [lift, tiltAmount, onClick]);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`transition-transform duration-200 ease-out ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{ transform: transform || undefined, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// WEEK TIMELINE — 40-week visual academic year journey
// ═══════════════════════════════════════════════════════════════

interface WeekTimelineProps {
  weeks: Array<{
    week: number;
    term: string;
    phase: string;
    topic?: string;
    isPriorityUnit?: boolean;
  }>;
  currentWeek?: number;
  onSelectWeek?: (week: number) => void;
}

export function WeekTimeline({ weeks, currentWeek, onSelectWeek }: WeekTimelineProps) {
  const terms = ['T1', 'T2', 'T3'];
  const phases = {
    'Instruction': { color: '#0F5C5E', label: 'Lesson' },
    'Mid-Term Exam': { color: '#B5532A', label: 'Mid-Exam' },
    'Mid-Term Break': { color: '#7C5B2E', label: 'Break' },
    'Final Exam': { color: '#8C2B2B', label: 'Final' },
    'Review': { color: '#4A6B3E', label: 'Review' },
  } as const;

  return (
    <div className="space-y-6">
      {terms.map((term) => {
        const termWeeks = weeks.filter((w) => w.term === term);
        if (termWeeks.length === 0) return null;
        return (
          <div key={term}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[var(--teal)] text-[#F6EFDD] flex items-center justify-center font-bold text-xs">{term}</div>
              <h4 className="text-sm font-bold text-[var(--ink)]" style={{ fontFamily: 'var(--font-serif)' }}>Term {term.slice(1)}</h4>
              <div className="flex-1 h-px bg-[var(--border)]" />
              <span className="text-xs text-[var(--muted-foreground)]">{termWeeks.length} weeks</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-14 gap-1.5">
              {termWeeks.map((w) => {
                const phase = phases[w.phase as keyof typeof phases] || phases['Instruction'];
                const isCurrent = w.week === currentWeek;
                const isPriority = w.isPriorityUnit;
                return (
                  <button
                    key={w.week}
                    onClick={() => onSelectWeek?.(w.week)}
                    title={`Week ${w.week}: ${w.topic || w.phase}`}
                    className={`relative aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold transition-all duration-200 hover:scale-110 hover:z-10 ${isCurrent ? 'ring-2 ring-[var(--bronze)] ring-offset-1 ring-offset-[var(--parchment)]' : ''} ${onSelectWeek ? 'cursor-pointer' : 'cursor-default'}`}
                    style={{
                      background: phase.color,
                      color: '#F6EFDD',
                      boxShadow: isPriority ? '0 0 0 2px #B08D3C, 0 2px 6px rgba(15, 92, 94, 0.3)' : '0 2px 6px rgba(15, 92, 94, 0.2)',
                    }}
                  >
                    {w.week}
                    {isPriority && <span className="absolute -top-1 -right-1 text-[8px]">★</span>}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="flex flex-wrap gap-3 text-[10px] pt-2 border-t border-[var(--border)]">
        {Object.entries(phases).map(([phase, info]) => (
          <div key={phase} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded" style={{ background: info.color }} />
            <span className="text-[var(--muted-foreground)]">{info.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded ring-2 ring-[#B08D3C] bg-[var(--teal)]" />
          <span className="text-[var(--muted-foreground)]">★ Priority Unit</span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DOMAIN BADGE — Maps S1-S9 to colors + icons
// ═══════════════════════════════════════════════════════════════

export const DOMAIN_META: Record<string, { name: string; color: string; icon: string; subject: Subject }> = {
  S1: { name: 'History',           color: '#7C5B2E', icon: '📜', subject: 'history' },
  S2: { name: 'Civics',            color: '#0F5C5E', icon: '⚖️', subject: 'civics' },
  S3: { name: 'Geography',         color: '#0F5C5E', icon: '🧭', subject: 'geography' },
  S4: { name: 'Sociology',         color: '#4A6B3E', icon: '👥', subject: 'sociology' },
  S5: { name: 'Economics',         color: '#B5532A', icon: '💱', subject: 'economics' },
  S6: { name: 'Info Literacy',     color: '#B08D3C', icon: '📖', subject: 'general' },
  S7: { name: 'Research',          color: '#7C5B2E', icon: '🔍', subject: 'general' },
  S8: { name: 'Moral Education',   color: '#4A6B3E', icon: '🌿', subject: 'ethics' },
  S9: { name: 'UAE Heritage',      color: '#B5532A', icon: '🦅', subject: 'uae_heritage' },
};

export function DomainBadge({ code, size = 'sm' }: { code: string; size?: 'xs' | 'sm' | 'md' }) {
  const meta = DOMAIN_META[code] || { name: code, color: '#8B7E63', icon: '•', subject: 'general' as Subject };
  const sizeClasses = {
    xs: 'text-[9px] px-1.5 py-0.5',
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium border ${sizeClasses[size]}`} style={{ backgroundColor: `${meta.color}15`, color: meta.color, borderColor: `${meta.color}40` }} title={`${code}: ${meta.name}`}>
      <span>{meta.icon}</span>
      <span>{meta.name}</span>
    </span>
  );
}

export function getDomainMeta(code: string) {
  return DOMAIN_META[code] || { name: code, color: '#8B7E63', icon: '•', subject: 'general' as Subject };
}

// ═══════════════════════════════════════════════════════════════
// DOK BADGE — Color-coded DOK level
// ═══════════════════════════════════════════════════════════════

const DOK_META: Record<string, { name: string; color: string }> = {
  'DOK 1': { name: 'Recall',              color: '#7C5B2E' },
  'DOK 2': { name: 'Skills & Concepts',   color: '#B5532A' },
  'DOK 3': { name: 'Strategic Thinking',  color: '#0F5C5E' },
  'DOK 4': { name: 'Extended Thinking',   color: '#4A6B3E' },
};

export function DokBadge({ level, size = 'sm' }: { level: string; size?: 'xs' | 'sm' | 'md' }) {
  const normalized = level.toUpperCase().startsWith('DOK') ? level.toUpperCase().replace(/\s+/g, ' ') : `DOK ${level}`;
  const meta = DOK_META[normalized] || { name: level, color: '#8B7E63' };
  const sizeClasses = {
    xs: 'text-[9px] px-1.5 py-0.5',
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium border ${sizeClasses[size]}`} style={{ backgroundColor: `${meta.color}15`, color: meta.color, borderColor: `${meta.color}40` }} title={`${normalized}: ${meta.name}`}>
      <span className="font-bold">{normalized}</span>
      <span className="opacity-70">· {meta.name}</span>
    </span>
  );
}
