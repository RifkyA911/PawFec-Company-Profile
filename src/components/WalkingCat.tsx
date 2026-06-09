import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function SittingCat() {
  const catRef = useRef<SVGSVGElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!catRef.current) return;
      
      const rect = catRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const maxRotation = 30;
      const rotation = Math.max(-maxRotation, Math.min(maxRotation, angle * (180 / Math.PI)));
      
      setMousePos({ x: rotation, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!headRef.current) return;

    gsap.to(headRef.current, {
      rotation: mousePos.x,
      duration: 0.3,
      ease: 'power2.out'
    });
  }, [mousePos]);

  return (
    <svg
      ref={catRef}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="absolute -right-8 -bottom-8 z-20"
    >
      {/* Cat Body - Tabby/Fat */}
      <ellipse cx="50" cy="60" rx="35" ry="28" fill="#e8794a" />
      
      {/* Tabby Stripes */}
      <path d="M30,50 Q50,45 70,50" stroke="#c2410c" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M25,60 Q50,55 75,60" stroke="#c2410c" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M30,70 Q50,65 70,70" stroke="#c2410c" strokeWidth="2" fill="none" opacity="0.5" />
      
      {/* Cat Head */}
      <g ref={headRef} style={{ transformOrigin: '50px 35px' }}>
        <circle cx="50" cy="35" r="22" fill="#e8794a" />
        
        {/* Tabby Stripes on Head */}
        <path d="M35,25 Q50,20 65,25" stroke="#c2410c" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M30,35 Q50,30 70,35" stroke="#c2410c" strokeWidth="2" fill="none" opacity="0.5" />
        
        {/* Ears */}
        <polygon points="32,18 38,5 44,18" fill="#e8794a" />
        <polygon points="56,18 62,5 68,18" fill="#e8794a" />
        
        {/* Inner Ears */}
        <polygon points="34,16 38,8 42,16" fill="#fcd34d" />
        <polygon points="58,16 62,8 66,16" fill="#fcd34d" />
        
        {/* Eyes - Happy */}
        <ellipse cx="42" cy="33" rx="4" ry="3" fill="#1f2937" />
        <ellipse cx="58" cy="33" rx="4" ry="3" fill="#1f2937" />
        <circle cx="43" cy="32" r="1.5" fill="white" />
        <circle cx="59" cy="32" r="1.5" fill="white" />
        
        {/* Happy Smile */}
        <path d="M45,42 Q50,48 55,42" stroke="#1f2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        
        {/* Nose */}
        <polygon points="50,38 47,41 53,41" fill="#fcd34d" />
        
        {/* Whiskers */}
        <line x1="32" y1="38" x2="22" y2="35" stroke="#1f2937" strokeWidth="0.5" />
        <line x1="32" y1="40" x2="22" y2="40" stroke="#1f2937" strokeWidth="0.5" />
        <line x1="68" y1="38" x2="78" y2="35" stroke="#1f2937" strokeWidth="0.5" />
        <line x1="68" y1="40" x2="78" y2="40" stroke="#1f2937" strokeWidth="0.5" />
      </g>
      
      {/* Front Paws */}
      <ellipse cx="40" cy="82" rx="8" ry="6" fill="#e8794a" />
      <ellipse cx="60" cy="82" rx="8" ry="6" fill="#e8794a" />
      
      {/* Tail */}
      <path
        d="M15,60 Q5,50 8,40 Q10,30 20,35"
        stroke="#e8794a"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
