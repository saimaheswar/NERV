import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollSection = ({ children, className = '', id }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-10'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default ScrollSection;