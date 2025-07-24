import { useEffect, useState } from 'react';

const StarfallBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate falling stars with more visible properties
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 50; i++) { // More stars for better effect
        starArray.push({
          id: i,
          left: Math.random() * 120, // Extend beyond viewport
          top: -Math.random() * 100, // Start above viewport
          animationDelay: Math.random() * 20, // Stagger the animation
          animationDuration: 3 + Math.random() * 6, // 3-9 seconds
          size: 1 + Math.random() * 2, // 1-3px star size
          trailLength: 80 + Math.random() * 120, // 80-200px trail
          opacity: 0.6 + Math.random() * 0.4, // 0.6-1.0 opacity
          angle: 15 + Math.random() * 30, // 15-45 degree angle
        });
      }
      setStars(starArray);
    };

    generateStars();
    
    // Regenerate stars periodically for continuous effect
    const interval = setInterval(generateStars, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="starfall-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="falling-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
            '--star-size': `${star.size}px`,
            '--trail-length': `${star.trailLength}px`,
            '--star-opacity': star.opacity,
            '--fall-angle': `${star.angle}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default StarfallBackground;

