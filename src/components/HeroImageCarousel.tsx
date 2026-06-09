import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const catImages = [
  'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=350&h=450&fit=crop',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=350&h=450&fit=crop',
  'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=350&h=450&fit=crop',
  'https://images.unsplash.com/photo-1513245543132-31f507417b26?w=350&h=450&fit=crop',
  'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=350&h=450&fit=crop'
];

export default function HeroImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const currentImageRef = useRef<HTMLImageElement>(null);
  const nextImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % catImages.length);
      setNextIndex((prev) => (prev + 1) % catImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentImageRef.current && nextImageRef.current) {
      // Fade out current image
      gsap.to(currentImageRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut'
      });

      // Fade in next image
      gsap.fromTo(nextImageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.inOut' }
      );
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full aspect-[350/450]">
      <img
        ref={currentImageRef}
        src={catImages[currentIndex]}
        alt="Cat"
        className="absolute inset-0 w-full h-full rounded-[1.5rem] shadow-lg object-cover"
        width="350"
        height="450"
        style={{ opacity: 1 }}
      />
      <img
        ref={nextImageRef}
        src={catImages[nextIndex]}
        alt="Cat"
        className="absolute inset-0 w-full h-full rounded-[1.5rem] shadow-lg object-cover"
        width="350"
        height="450"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
