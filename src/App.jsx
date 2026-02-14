import React, { useState, useCallback, useRef } from 'react';
import PolarBear from './components/PolarBear';
import FloatingElements from './components/FloatingElements';
import './App.css';

const MESSAGES = [
  "Milujem ťa! ❤️",
  "Si moja Humenčanka ☀️",
  "Najkrajšia na svete 🌟",
  "Môj medvedík ťa ľúbi! 🐻‍❄️",
  "Bašikiiiiiiiii! 💖",
  "Malá princezná 👑",
];

let burstIdCounter = 0;

function App() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [bursts, setBursts] = useState([]);
  const lastClickPos = useRef({ x: 0, y: 0 });

  const handleBearClick = useCallback((e) => {
    const x = e.clientX;
    const y = e.clientY;
    lastClickPos.current = { x, y };

    const burstId = ++burstIdCounter;
    setBursts((prev) => [...prev, { id: burstId, x, y }]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 900);

    setIsSpeaking(true);
    setShowMessage(false);

    setTimeout(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
      setShowMessage(true);
      setTimeout(() => setIsSpeaking(false), 300);
    }, 150);
  }, []);

  return (
    <div className="app-container">
      <FloatingElements />

      {bursts.map((burst) => (
        <div key={burst.id} className="heart-burst" style={{ left: burst.x, top: burst.y }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="burst-heart" style={{ '--i': i }}>💗</span>
          ))}
        </div>
      ))}

      <main className="content">
        <header className="hero">
          <h1>Krásny Valentín, Baška</h1>
        </header>

        <div className="bear-section">
          <div className="bear-wrapper">
            <div className={`message-bubble ${showMessage ? 'visible' : ''}`}>
              {MESSAGES[messageIndex]}
            </div>
            <PolarBear onClick={handleBearClick} isSpeaking={isSpeaking} />
          </div>
          <div className="instructions">
            (Klikni na medvedíka pre prekvapenie 💝)
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
