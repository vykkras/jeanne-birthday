import React, { useState } from 'react';
import './App.css';
import Confetti from 'react-confetti';
import { useEffect } from 'react';


function App() {
  const [screen, setScreen] = useState(0);
  const [candleOut, setCandleOut] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (screen === 7 && candleOut) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 8000);
      return () => clearTimeout(timer);
    }
  
    if (screen !== 6) {
      // Reset candle and confetti when leaving screen 6
      setCandleOut(false);
      setShowConfetti(false);
    }
  }, [screen, candleOut]);

  
  
  
  

  const [fadeOut, setFadeOut] = useState(false);

  const MAX_SCREEN = 8;

const handleNext = () => {
  if (screen < MAX_SCREEN) {
    setFadeOut(true);
    setTimeout(() => {
      setScreen(screen + 1);
      setFadeOut(false);
    }, 600);
  }
};


  const handleBack = () => {
    if (screen > 0) {
      setFadeOut(true);
      setTimeout(() => {
        setScreen(screen - 1);
        setFadeOut(false);
      }, 600);
    }
  };

  const className = `App fade ${fadeOut ? 'out' : ''}`;

  // 💡 Fallback screen if screen goes out of bounds
  if (screen > MAX_SCREEN || screen < 0) {

    return (
      <div className={className}>
        <div className="overlay">
          <h1>Oups ! 😅</h1>
          <p>Quelque chose s’est mal passé…</p>
          <button onClick={() => setScreen(0)}>Retour au début 🔁</button>
        </div>
      </div>
    );
  }

  // 🎉 Screen 0 — Welcome
  if (screen === 0) {
    return (
      <div className={className}>
        <div className="overlay">
          <h1>Joyeux anniversaire, Jeanne ! 🎉</h1>
          <p>tu es le soleil ☀️</p>
          <button onClick={handleNext}>Clique ici pour continuer 😽</button>
        </div>
      </div>
    );
  }

  // 🐱 Screen 1 — Sansa
  if (screen === 1) {
    return (
      <div className={className}>
        <div className="overlay">
          <h1>Tu es sansa 😸</h1>
          <img
            src="/sansa.jpeg"
            alt="Sansa le chat"
            style={{
              width: '250px',
              borderRadius: '16px',
              margin: '1rem 0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          />
          <p className="text-bubble">
            Beautiful, playful, and affectionate.
            Elle veut aussi plus de friandises 😼.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>Balles et raquettes 🎾</button>
          </div>
        </div>
      </div>
    );
  }

  // 🎾 Screen 2 — Tennis
  if (screen === 2) {
    return (
      <div className={className}>
        <div className="overlay">
          <h1>Tu es un athlète 🎾</h1>
          <img
            src="/tennis.jpg"
            alt="Jeanne joue au tennis"
            style={{
              width: '300px',
              borderRadius: '16px',
              margin: '1rem 0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          />
          <p className="text-bubble">
          La force de continuer à jouer même en perdant 💪

          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>Un jardin ☘️</button>
          </div>
        </div>
      </div>
    );
  }

    if (screen === 3) {
    return (
      <div className={className}>
        <div className="overlay">
          <h1>Tu es toutes vos plantes 🌿</h1>
          <img
            src="/mosntera.jpg"
            alt="Monstera plant"
            style={{
              width: '280px',
              borderRadius: '16px',
              margin: '1rem 0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          />
          <p className="text-bubble">
            Vert, vivant, en quête du soleil 🌱
            Pablo est ton animal de compagnie botanique 💚
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>Une vision 🧝‍♀️</button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 4) {
    return (
      <div className={className}>
        <div className="overlay">
          <h1>Les cartes parlent... 🔮</h1>
          <img
            src="/tarot.jpg"
            alt="Cartes de tarot"
            style={{
              width: '280px',
              borderRadius: '16px',
              margin: '1rem 0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          />
          <p className="text-bubble">
            L’univers t’a tirée comme la carte du Soleil ☀️  
            Lumière, amour et renouveau... ça te ressemble bien, non ?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>L'avenir 🪄</button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 5) {
    return (
      <div className={className}>
        <div className="overlay">
          <h1>Ton futur t’appelle 🐾</h1>
          <img
            src="/jeanne.jpg"
            alt="Illustration vétérinaire"
            style={{
              width: '280px',
              borderRadius: '16px',
              margin: '1rem 0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          />
          <p className="text-bubble">
          Tous les animaux seraient si heureux ! Ils savent qu'ils seront en bonne santé grâce à toi.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>L'atelier de Jeanne 🖼️</button>
          </div>
        </div>
      </div>
    );
  }
  if (screen === 6) {
    const driveLink = "https://drive.google.com/drive/folders/1-UPZC2pJPae41CClZa7J3JFCByRukfef?usp=drive_link";
  
    return (
      <div className={className}>
        <div className="overlay">
          <h1>Tu es de l'art 🎨</h1>
          <img
            src="/art.jpeg"
            alt="Jeanne joue au tennis"
            style={{
              width: '300px',
              borderRadius: '16px',
              margin: '1rem 0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          />
  
          <p className="text-bubble">
            Un monde de couleurs, d’imagination, de moments capturés...  
            Comme une fenêtre ouverte sur ton esprit 💚
          </p>
  
          <p className="text-bubble">
            Clique ici pour ouvrir ta galerie secrète 👇
          </p>
  
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={driveLink} target="_blank" rel="noopener noreferrer">
              <button>Voir la galerie 🖼️</button>
            </a>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>Un vœu à faire 🎇</button>
          </div>
        </div>
      </div>
    );
  }
  


  if (screen === 7) {
    return (
      <div className={className}>
        {showConfetti && <Confetti />}
        <div className="overlay" style={{ minHeight: '450px' }}>
          <h1>Joyeux anniversaire ! 🎂</h1>
  
          <div style={{ marginBottom: '2rem', height: '220px' }}>
  {!candleOut ? (
    <svg width="150" height="220" viewBox="0 0 150 220">
      {/* Candle base */}
      <rect x="70" y="120" width="10" height="60" fill="#ffcc99" rx="5" />

      {/* Better flame — centered, softer shape */}
      <polygon
        points="75,105 68,85 82,85"
        fill="#ff6600"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;1.05;1"
          dur="1s"
          repeatCount="indefinite"
          additive="sum"
        />
        <animate
          attributeName="opacity"
          values="1;0.6;1"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </polygon>
    </svg>
  ) : (
    <svg width="150" height="220" viewBox="0 0 150 220">
      {/* Candle base */}
      <rect x="70" y="120" width="10" height="60" fill="#ffcc99" rx="5" />

      {/* Smoke puff — appears where flame was */}
      <circle cx="75" cy="95" r="8" fill="gray" opacity="0.7">
        <animate
          attributeName="r"
          from="8"
          to="20"
          dur="2s"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="0.7"
          to="0"
          dur="2s"
          fill="freeze"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0,0"
          to="0,-20"
          dur="2s"
          fill="freeze"
        />
      </circle>
    </svg>
  )}
</div>

  
          <p className="text-bubble">
            Il te reste à souffler les bougies...  💫🎶
            
          </p>
  
          {!candleOut ? (
            <button
            onClick={() => {
              const audio = new Audio('/song.m4a');
              audio.play()
                .then(() => {
                  setTimeout(() => {
                    setCandleOut(true);
                  }, 1000); // wait a moment before blowing the candle (optional)
                })
                .catch((e) => {
                  console.log("Autoplay blocked or failed:", e);
                  setCandleOut(true); // still blow candle even if audio doesn't work
                });
            }}
          >
            Souffle les bougies 🕯️
          </button>
          
          ) : (
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
    <button onClick={handleBack}>Revoir 💚</button>
    <button onClick={handleNext}>Une dernière chose... ✨</button>
  </div>
          )}
        </div>
      </div>
    );
  }

  if (screen === 8) {
    const mailToLink = `mailto:vmkrasovsky@yahoo.com?subject=Avec%20plaisir%20!%20%3A)&body=N’oublie%20pas%20de%20me%20mettre%205%20étoiles%20%E2%AD%90%EF%B8%8F%20%F0%9F%98%9C`;

  
    return (
      <div className={className}>
        <div className="overlay">
          <h1>Alors... une dernière question 🌙</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Est-ce que tu voudrais sortir avec moi quand tu rentres ? 💚
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={mailToLink}>
              <button>Oui ☔️</button>
            </a>
            <a href={mailToLink}>
              <button>Oui, bien sûr ! ☀️</button>
            </a>
            <button onClick={() => setScreen(0)}>Recommencer depuis le début 🔁</button>
          </div>
        </div>
      </div>
    );
  }

  }

export default App;



