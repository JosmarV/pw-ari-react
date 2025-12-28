
import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    },
    { 
        rootMargin: "-20% 0px -40% 0px" ,
        threshold: 0.1
    } // Ajusta los márgenes según sea necesario
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}