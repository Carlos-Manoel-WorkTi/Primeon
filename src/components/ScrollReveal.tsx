import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  threshold?: number;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  threshold = 0.1,
  className = '' 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    switch (direction) {
      case 'left': return 'fade-in-left';
      case 'right': return 'fade-in-right';
      default: return 'fade-in-up';
    }
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClass()} ${className}`}
      style={{ animationDelay: isVisible ? '0ms' : `${delay}ms` }}
    >
      {children}
    </div>
  );
};