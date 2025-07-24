import { useEffect, useState } from 'react';

const MeteorBackground = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // Generate meteors with random properties
    const generateMeteors = () => {
      const meteorArray = [];
      for (let i = 0; i < 30; i++) { // Increased from 20 to 30
        meteorArray.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 15, // Increased delay range
          animationDuration: 6 + Math.random() * 8, // 6-14 seconds for slower movement
          size: 2 + Math.random() * 4, // 2-6px size (larger)
          opacity: 0.4 + Math.random() * 0.6, // 0.4-1.0 opacity (more visible)
        });
      }
      setMeteors(meteorArray);
    };

    generateMeteors();
  }, []);

  return (
    <div className="meteor-background">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: `${meteor.left}%`,
            animationDelay: `${meteor.animationDelay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
            opacity: meteor.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default MeteorBackground;

