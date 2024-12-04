
'use client'
import { useState, useEffect, useRef } from "react";

interface LazyLoadProps {
  children: React.ReactNode;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ children }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return <div ref={observerRef}>{isIntersecting ? children : <div className=" bg-gray-300 " />} </div>;
};

export default LazyLoad;
