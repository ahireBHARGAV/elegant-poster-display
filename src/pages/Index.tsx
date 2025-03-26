
import React, { useEffect, useState } from 'react';

const PosterImage = "/placeholder.svg";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-luxury p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl w-full">
        {/* Decorative background elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className={`flex flex-col items-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Title */}
          <div className="mb-8 sm:mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-luxury-champagne font-montserrat text-sm sm:text-base uppercase tracking-[0.3em] text-center mb-3 opacity-80">
              Exclusive Announcement
            </p>
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight tracking-tight">
              <span className="block text-gradient animate-shimmer">Prize Pool Up to</span>
              <span className="block mt-2 text-gradient animate-shimmer" style={{ animationDelay: '0.2s' }}>2 Lakh - Register Now!</span>
            </h1>
          </div>
          
          {/* Poster Container */}
          <div 
            className="w-full max-w-2xl rounded-xl overflow-hidden opacity-0 animate-blur-in poster-shadow transform transition-all duration-700 hover:scale-[1.02]"
            style={{ animationDelay: '0.6s' }}
          >
            {/* Poster Frame */}
            <div className="p-1 bg-gradient-to-br from-luxury-gold/40 via-luxury-gold/20 to-luxury-gold/40 rounded-xl">
              {/* Poster Image */}
              <div className="relative bg-black rounded-lg overflow-hidden aspect-[3/4]">
                <img
                  src={PosterImage}
                  alt="Prize Pool Announcement"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                />
                
                {/* Glass overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 glass-effect p-6 sm:p-8">
                  <div className="flex flex-col items-center">
                    <span className="font-montserrat text-xs sm:text-sm uppercase tracking-widest text-luxury-champagne/80 mb-2">Limited Time Offer</span>
                    <button className="mt-3 px-6 py-2 sm:px-8 sm:py-3 bg-luxury-gold text-black font-montserrat font-medium rounded-full text-sm sm:text-base transition-all duration-300 hover:bg-luxury-champagne hover:scale-105 active:scale-95">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer text */}
          <p className="mt-8 text-luxury-champagne/60 text-xs sm:text-sm text-center max-w-lg font-light opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            Don't miss this exclusive opportunity to win amazing prizes. Limited spots available for this premium event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
