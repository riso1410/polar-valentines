import React, { useState, memo } from 'react';
import '../App.css';

const generateElements = () =>
  Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 15 + 10}s`,
    animationDelay: `${Math.random() * 10}s`,
    size: Math.random() * 1.5 + 0.5,
    type: Math.random() > 0.6 ? 'heart' : 'snow',
  }));

const FloatingElements = memo(() => {
  const [elements] = useState(generateElements);

  return (
    <div className="floating-container">
      {elements.map((el) => (
        <div
          key={el.id}
          className={`floating-item ${el.type}`}
          style={{
            left: el.left,
            animationDuration: el.animationDuration,
            animationDelay: el.animationDelay,
            fontSize: `${el.size}rem`,
          }}
        >
          {el.type === 'heart' ? '❤️' : '❄️'}
        </div>
      ))}
    </div>
  );
});

FloatingElements.displayName = 'FloatingElements';

export default FloatingElements;
