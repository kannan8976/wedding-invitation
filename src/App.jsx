import { useState, useRef, useEffect } from "react";

import Welcome from "./pages/Welcome";
import CoupleReveal from "./pages/CoupleReveal";
import FlowerPage from "./pages/FlowerPage";
import WeddingDetails from "./pages/WeddingDetails";
import LocationPage from "./pages/LocationPage";

function App() {
  const [page, setPage] = useState(0);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const musicFiles = {
    welcome: "/music/welcome-music.mp3",
    flower: "/music/flower-music.mp3",
    wedding: "/music/wedding-music.mp3",
  };

  const currentMusic =
    page === 0 || page === 1
      ? musicFiles.welcome
      : page === 2
      ? musicFiles.flower
      : musicFiles.wedding;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !musicOn) return;

    audio.src = currentMusic;
    audio.load();
    audio.volume = 0.7;

    audio.play().catch((error) => {
      console.log("Music playback:", error);
    });
  }, [page, musicOn]);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
    } else {
      setMusicOn(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          top: "15px",
          right: "15px",
          zIndex: 9999,
          padding: "12px 18px",
          border: "2px solid #d5ad63",
          borderRadius: "30px",
          background: "#6b2035",
          color: "white",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        {musicOn ? "🔊 Music ON" : "🔇 Music OFF"}
      </button>

      {page === 0 && (
        <Welcome onNext={() => setPage(1)} />
      )}

      {page === 1 && (
        <CoupleReveal onNext={() => setPage(2)} />
      )}

      {page === 2 && (
        <FlowerPage onNext={() => setPage(3)} />
      )}

      {page === 3 && (
        <WeddingDetails onNext={() => setPage(4)} />
      )}

      {page === 4 && (
        <div style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #3b101d, #9b4658)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#ffe6b0",
          padding: "20px"
        }}>
          <h1>நன்றி! ❤️</h1>
          <h2>K. தினேஷ் ❤️ B. நிஷாந்தி</h2>
          <p>உங்கள் வருகையை அன்புடன் எதிர்பார்க்கிறோம்.</p>
          <button
            onClick={() => setPage(5)}
            style={{
              padding: "14px 30px",
              border: "none",
              borderRadius: "30px",
              background: "#d2a653",
              color: "#481a24",
              fontSize: "17px",
              cursor: "pointer"
            }}
          >
            View Wedding Location →
          </button>
        </div>
      )}

      {page === 5 && <LocationPage />}
    </>
  );
}

export default App;