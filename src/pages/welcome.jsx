import React from "react";
import "../styles/Welcome.css";

function Welcome({ onNext }) {
  return (
    <div className="welcome-container">

      <div className="welcome-card">

        <div className="top-decoration">❀ ❀ ❀</div>

        <p className="welcome-small">
          ஸ்ரீ கணேஷாய நம:
        </p>

        <h1>திருமண அழைப்பிதழ்</h1>

        <div className="gold-line"></div>

        <p className="welcome-text">
          அன்பும் ஆசீர்வாதமும் நிறைந்த
          <br />
          எங்கள் இல்லத் திருமண விழாவிற்கு
          <br />
          தங்களை அன்புடன் வரவேற்கிறோம்.
        </p>

        <div className="names">
          <h2>K. தினேஷ்</h2>
          <span>❤️</span>
          <h2>B. நிஷாந்தி</h2>
        </div>

        <div className="date-box">
          <p>நவம்பர் 20, 2026</p>
          <p>வெள்ளிக்கிழமை | காலை 4:00 – 6:00</p>
        </div>

        <div className="bottom-decoration">✿ ❀ ✿</div>

        <button className="open-button" onClick={onNext}>
          Open Invitation →
        </button>

      </div>

    </div>
  );
}

export default Welcome;