import React, { useState, useEffect } from 'react';
import '../App.css';

const PolarBear = ({ onClick, isSpeaking }) => {
  const [blink, setBlink] = useState(false);

  // Blinking logic
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="polar-bear-container" onClick={onClick}>
      <svg
        viewBox="0 0 200 220"
        xmlns="http://www.w3.org/2000/svg"
        className={`polar-bear-svg ${isSpeaking ? 'speaking' : ''}`}
      >
        {/* Shadow */}
        <ellipse cx="100" cy="205" rx="70" ry="10" fill="#a4b8c4" opacity="0.3" />

        {/* Body */}
        <path
          d="M60 180 C40 180 30 140 45 110 C60 80 140 80 155 110 C170 140 160 180 140 180 Z"
          fill="#ffffff"
          stroke="#e8f4f8"
          strokeWidth="3"
        />
        
        {/* Legs - Back */}
        <ellipse cx="60" cy="180" rx="15" ry="12" fill="#fff" stroke="#e8f4f8" strokeWidth="2" />
        <ellipse cx="140" cy="180" rx="15" ry="12" fill="#fff" stroke="#e8f4f8" strokeWidth="2" />

        {/* Head */}
        <circle cx="100" cy="80" r="45" fill="#ffffff" stroke="#e8f4f8" strokeWidth="3" />

        {/* Ears */}
        <circle cx="65" cy="55" r="12" fill="#ffffff" stroke="#e8f4f8" strokeWidth="2" />
        <circle cx="135" cy="55" r="12" fill="#ffffff" stroke="#e8f4f8" strokeWidth="2" />
        {/* Inner Ears */}
        <circle cx="65" cy="55" r="7" fill="#ffc2d1" opacity="0.6" />
        <circle cx="135" cy="55" r="7" fill="#ffc2d1" opacity="0.6" />

        {/* Face Muzzle */}
        <ellipse cx="100" cy="90" rx="18" ry="14" fill="#f8fdff" />
        <ellipse cx="100" cy="86" rx="10" ry="6" fill="#333" opacity="0.8" /> {/* Nose */}
        
        {/* Eyes */}
        {blink ? (
          <>
            <path d="M85 80 Q90 82 95 80" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M105 80 Q110 82 115 80" stroke="#333" strokeWidth="2" fill="none" />
          </>
        ) : (
          <>
            <circle cx="90" cy="80" r="3" fill="#333" />
            <circle cx="110" cy="80" r="3" fill="#333" />
          </>
        )}

        {/* Blush */}
        <circle cx="75" cy="95" r="6" fill="#ff8fab" opacity="0.4" />
        <circle cx="125" cy="95" r="6" fill="#ff8fab" opacity="0.4" />

        {/* Heart held by bear */}
        <g className="beating-heart">
          <path
            d="M128 128 C128 118 118 110 111 110 C101 110 94 120 94 128 C94 145 128 162 128 162 C128 162 162 145 162 128 C162 120 155 110 145 110 C138 110 128 118 128 128 Z"
            fill="#ff6b9d"
          />
        </g>
        
      </svg>
    </div>
  );
};

export default PolarBear;
