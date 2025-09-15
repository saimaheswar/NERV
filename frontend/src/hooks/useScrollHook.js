import { useState, useEffect, useRef } from 'react';

export const useScrollHook = (bottleRef) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [bottlePosition, setBottlePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      setScrollProgress(scrollPercent);

      // Calculate which section we're in
      const sections = document.querySelectorAll('[data-section]');
      let newSection = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          newSection = index;
        }
      });
      
      setCurrentSection(newSection);

      // Update bottle position to stay centered as user scrolls
      if (bottleRef.current) {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        // Keep bottle centered horizontally and vertically
        const centerX = viewportWidth / 2 - 144; // 144 is half bottle width (288px/2)
        const centerY = viewportHeight / 2 - 192; // 192 is half bottle height (384px/2)
        
        setBottlePosition({ x: centerX, y: centerY });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [bottleRef]);

  return {
    scrollProgress,
    currentSection,
    bottlePosition
  };
};