import { useEffect, useState } from "react";
import "../styles/CoupleReveal.css";

function CoupleReveal({ onNext }) {
  const [showCouple, setShowCouple] = useState(false);
  const [showNames, setShowNames] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCouple(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="reveal-container">

      {!showCouple && (
        <>
          <h1 className="reveal-title">
            Two Hearts, One Journey
          </h1>

          <div className="couple-stage">
            <img
              className="groom-photo"
              src="/images/groom.jpeg"
              alt="Groom"
            />

            <img
              className="bride-photo"
              src="/images/bride.jpeg"
              alt="Bride"
            />
          </div>
        </>
      )}

      {showCouple && (
        <div className="final-couple">
          <img
            src="/images/couple.jpeg"
            alt="Dinesh and Nishanthi"
            className="couple-merged"
            onAnimationEnd={() => setShowNames(true)}
          />

          {showNames && (
            <div className="couple-name-reveal">
              <h1>K. தினேஷ்</h1>
              <span>❤️</span>
              <h1>B. நிஷாந்தி</h1>

              <button onClick={onNext}>
                Continue →
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

export default CoupleReveal;