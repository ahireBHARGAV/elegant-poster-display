
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  // Poster image path
  const posterImage = "/lovable-uploads/871b25b0-9b6c-4b3c-83a0-d5cc07044f1b.png";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-luxury p-4 sm:p-6 md:p-8">
      <div className={`max-w-4xl w-full transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Decorative background elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-xl" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Title - responsive for mobile */}
          <div className="mb-6 sm:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-luxury-champagne font-montserrat text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-center mb-2 sm:mb-3 opacity-80">
              Exclusive Announcement
            </p>
            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight tracking-tight">
              <span className="block text-gradient animate-shimmer">Prize Pool Up to</span>
              <span className="block mt-1 sm:mt-2 text-gradient animate-shimmer" style={{ animationDelay: '0.2s' }}>2 Lakhs - Register Now!</span>
            </h1>
          </div>
          
          {/* Poster Container - adjusted aspect ratio for mobile */}
          <div 
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-xl overflow-hidden opacity-0 animate-blur-in poster-shadow transform transition-all duration-700 hover:scale-[1.02]"
            style={{ animationDelay: '0.6s' }}
          >
            {/* Poster Frame */}
            <div className="p-1 bg-gradient-to-br from-luxury-gold/40 via-luxury-gold/20 to-luxury-gold/40 rounded-xl">
              {/* Poster Image with responsive aspect ratio */}
              <div className="relative bg-black rounded-lg overflow-hidden">
                <img
                  src={posterImage}
                  alt="Technovation 2025 - IEEE Bombay Section"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                />
                
                {/* Mobile-optimized glass overlay at the bottom - REDUCED BLUR */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8" style={{ 
                  backdropFilter: "blur(4px)", 
                  backgroundColor: "rgba(255, 255, 255, 0.05)", 
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)" 
                }}>
                  <div className="flex flex-col items-center">
                    <span className="font-montserrat text-xs sm:text-sm uppercase tracking-wider text-luxury-champagne/80 mb-1 sm:mb-2">Join Now</span>
                    <button className="mt-2 px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 bg-luxury-gold text-black font-montserrat font-medium rounded-full text-xs sm:text-sm md:text-base transition-all duration-300 hover:bg-luxury-champagne hover:scale-105 active:scale-95">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer text - more compact for mobile */}
          <p className="mt-6 sm:mt-8 text-luxury-champagne/60 text-xs sm:text-sm text-center max-w-xs sm:max-w-sm lg:max-w-lg font-light opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            Don't miss this exclusive opportunity to showcase your technical project at Technovation 2025. Limited spots available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
