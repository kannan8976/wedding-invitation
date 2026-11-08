import React from "react";
import "../styles/WeddingDetails.css";

function WeddingDetails({ onNext }) {
  return (
    <div className="details-container">
      <div className="details-card">
        <p className="details-blessing">ஸ்ரீ கணேஷாய நம:</p>

        <h1>திருமண விழா</h1>
        <div className="details-line"></div>

        <p className="details-intro">
          தங்களின் வருகையால் எங்கள் இல்லத் திருமண விழாவைச்
          சிறப்பிக்க அன்புடன் அழைக்கிறோம்.
        </p>

        <h2>K. தினேஷ்</h2>
        <span className="details-heart">❤️</span>
        <h2>B. நிஷாந்தி</h2>

        <div className="details-section">
          <h3>பெற்றோர்கள்</h3>

          <p>திரு. K. சஞ்சீவி</p>
          <p>திருமதி. K. விஜயம்மாள்</p>

          <div className="details-divider">✿</div>

          <p>திரு. K.S. பாபுஜி</p>
          <p>திருமதி. B. பத்மாவதி</p>
        </div>

        <div className="details-date">
          <h3>திருமண நாள்</h3>
          <p>20-11-2026 – வெள்ளிக்கிழமை</p>
          <p>காலை 4:00 – 6:00</p>
        </div>

        <div className="details-venue">
          <h3>திருமண மண்டபம்</h3>
          <h2>GRH A/C. கல்யாண மண்டபம்</h2>
          <p>பள்ளிப்பட்டு, சித்தூர் ரோடு</p>
        </div>

        <button className="details-button" onClick={onNext}>
          Continue →
        </button>
      </div>
    </div>
  );
}

export default WeddingDetails;