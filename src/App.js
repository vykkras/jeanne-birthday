import React, { useState } from 'react';
import './App.css';
import Confetti from 'react-confetti';
import { useEffect } from 'react';


function App() {
  const [screen, setScreen] = useState(0);
  const [candleOut, setCandleOut] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (screen === 6 && candleOut) {
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

  const MAX_SCREEN = 7;

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
          <p>Tu es un rayon de soleil 🌻</p>
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
          <h1>Voici Sansa 😸</h1>
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
            Elle m’a demandé de te rappeler de profiter de chaque seconde aujourd’hui. 
            Elle veut aussi plus de friandises.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>Prochaine surprise 🎾</button>
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
          <h1>Sur le court... 🎾</h1>
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
            Tu pourrais me battre sans transpirer… même avec une raquette dans chaque main 😄
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>Encore un ! ☘️</button>
          </div>
        </div>
      </div>
    );
  }

    if (screen === 3) {
    return (
      <div className={className}>
        <div className="overlay">
          <h1>Voici ta plante de compagnie 🌿</h1>
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
            Elle ne demande pas de caresses, mais elle t’écoute.  
            C’est ton animal de compagnie botanique 🌱💚
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>Encore un peu 🧝‍♀️</button>
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
            <button onClick={handleNext}>Une dernière vision 🪄</button>
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
            src="/vet.jpg"
            alt="Illustration vétérinaire"
            style={{
              width: '280px',
              borderRadius: '16px',
              margin: '1rem 0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          />
          <p className="text-bubble">
            Des animaux heureux, des familles reconnaissantes, et toi au centre de tout ça.  
            C’est là que tu vas, Jeanne… et c’est magnifique.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={handleBack}>Retour ⬅️</button>
            <button onClick={handleNext}>Un vœu à faire 🎇</button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 6) {
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
            Il te reste à souffler les bougies...  
            (et penser très fort à ce que tu veux 💫)
          </p>
  
          {!candleOut ? (
            <button onClick={() => setCandleOut(true)}>Souffle les bougies 🕯️</button>
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

  if (screen === 7) {
    const mailToLink = `mailto:vmkrasovsky@yahoo.com?subject=Je%20veux%20sortir%20avec%20toi%20❤️&body=Oui%2C%20j’aimerais%20beaucoup%20qu’on%20sorte%20ensemble%20quand%20je%20reviens.%20`;
  
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
              <button>Oui, bien sûr ! 🌟</button>
            </a>
            <button onClick={() => setScreen(0)}>Recommencer depuis le début 🔁</button>
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  
  
  
  
  
  
  

}

export default App;



