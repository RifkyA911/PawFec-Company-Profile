import { useEffect, useRef } from 'react';
import { PawPrint } from 'lucide-react';
import gsap from 'gsap';

export default function PawAnimation() {
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStarfallAnimation = (container: HTMLElement | null, direction: 'left' | 'right') => {
      if (!container) return;
      
      const paws = container.querySelectorAll('.paw-icon');
      const containerHeight = window.innerHeight;

      paws.forEach((paw, index) => {
        if (!(paw instanceof HTMLElement)) return;

        const startY = -100 - Math.random() * 200;
        const endY = containerHeight + 100;
        const duration = 12 + Math.random() * 6;
        const delay = index * 0.8;

        gsap.set(paw, {
          y: startY,
          rotation: Math.random() * 360,
          opacity: 0.15
        });

        const tl = gsap.timeline({
          repeat: -1,
          delay: delay
        });

        tl.to(paw, {
          y: endY,
          rotation: Math.random() * 360 + 180,
          x: direction === 'left' ? -20 - Math.random() * 20 : 20 + Math.random() * 20,
          opacity: 0.25,
          duration: duration,
          ease: 'none'
        });

        tl.to(paw, {
          opacity: 0,
          duration: 1,
          ease: 'power2.in'
        }, '-=1');

        tl.set(paw, {
          y: startY,
          rotation: Math.random() * 360,
          opacity: 0.15
        });
      });
    };

    if (leftContainerRef.current) {
      createStarfallAnimation(leftContainerRef.current, 'left');
    }

    if (rightContainerRef.current) {
      createStarfallAnimation(rightContainerRef.current, 'right');
    }
  }, []);

  return (
    <>
      {/* Left Side */}
      <div className="fixed left-0 top-0 bottom-0 w-32 lg:w-64 overflow-hidden pointer-events-none z-0 hidden lg:block">
        <svg className="absolute inset-0 w-full h-full" width="100%" height="100%">
          <defs>
            <pattern id="grid-left" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-left)" />
        </svg>
        <div ref={leftContainerRef} className="paw-container-left">
          <div className="paw-icon text-orange-300 opacity-15" style={{ left: '10%' }}>
            <PawPrint size={48} />
          </div>
          <div className="paw-icon text-orange-400 opacity-15" style={{ left: '30%' }}>
            <PawPrint size={36} />
          </div>
          <div className="paw-icon text-amber-300 opacity-15" style={{ left: '50%' }}>
            <PawPrint size={42} />
          </div>
          <div className="paw-icon text-orange-300 opacity-15" style={{ left: '70%' }}>
            <PawPrint size={30} />
          </div>
          <div className="paw-icon text-amber-400 opacity-15" style={{ left: '90%' }}>
            <PawPrint size={54} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="fixed right-0 top-0 bottom-0 w-32 lg:w-64 overflow-hidden pointer-events-none z-0 hidden lg:block">
        <svg className="absolute inset-0 w-full h-full" width="100%" height="100%">
          <defs>
            <pattern id="grid-right" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-right)" />
        </svg>
        <div ref={rightContainerRef} className="paw-container-right">
          <div className="paw-icon text-amber-300 opacity-15" style={{ right: '10%' }}>
            <PawPrint size={42} />
          </div>
          <div className="paw-icon text-orange-400 opacity-15" style={{ right: '30%' }}>
            <PawPrint size={30} />
          </div>
          <div className="paw-icon text-amber-300 opacity-15" style={{ right: '50%' }}>
            <PawPrint size={48} />
          </div>
          <div className="paw-icon text-orange-300 opacity-15" style={{ right: '70%' }}>
            <PawPrint size={36} />
          </div>
          <div className="paw-icon text-amber-400 opacity-15" style={{ right: '90%' }}>
            <PawPrint size={54} />
          </div>
        </div>
      </div>

      <style>{`
        .paw-icon {
          position: absolute;
          top: -100px;
        }
      `}</style>
    </>
  );
}
