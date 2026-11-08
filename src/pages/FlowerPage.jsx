import { useState } from "react";
import "../styles/FlowerPage.css";

function FlowerPage({ onNext }) {
  const [clicks, setClicks] = useState(0);
  const [petals, setPetals] = useState([]);

  const showerFlowers = () => {
    const newFlowers = Array.from({ length: 45 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      size: 18 + Math.random() * 20
    }));

    setPetals(newFlowers);

    const nextCount = clicks + 1;
    setClicks(nextCount);

    if (nextCount === 3) {
      setTimeout(onNext, 3500);
    }
  };

  return (
    <div className="flower-container">

      <div className="flower-card">

        <h1>🌸 மலர் தூவி வாழ்த்துங்கள் 🌸</h1>

        <p>எங்கள் இனிய திருமணத் தொடக்கத்தை
          மலர் தூவி வாழ்த்துங்கள்</p>

        <div className="flower-decoration">
          ❀ ✿ ❀ ✿ ❀
        </div>

        <h2>K. தினேஷ் ❤️ B. நிஷாந்தி</h2>

        <p className="click-count">
          {clicks} / 3
        </p>

        <button
          className="flower-button"
          onClick={showerFlowers}
          disabled={clicks >= 3}
        >
          🌸 மலர் தூவ Click செய்யவும்
        </button>

        <div className="falling-flowers">
          {petals.map((petal) => (
            <span
              key={petal.id}
              style={{
                left: `${petal.left}%`,
                animationDelay: `${petal.delay}s`,
                fontSize: `${petal.size}px`
              }}
            >
              🌸
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}

export default FlowerPage;