import React from "react";
import "../styles/LocationPage.css";

function LocationPage() {
  const mapUrl = "https://maps.app.goo.gl/3GphMUusn5QQoFoy8?g_st=ac";

  return (
    <div className="location-container">
      <div className="location-card">
        <div className="location-flower">❀ ✿ ❀</div>

        <p className="location-welcome">உங்கள் வருகையை எதிர்பார்க்கிறோம்</p>

        <h1>திருமண விழா</h1>

        <div className="location-divider"></div>

        <h2>K. தினேஷ் ❤️ B. நிஷாந்தி</h2>

        <div className="location-icon">📍</div>

        <h3>திருமண மண்டபம்</h3>

        <h2 className="hall-name">
          GRH A/C. கல்யாண மண்டபம்
        </h2>

        <p className="hall-address">
          பள்ளிப்பட்டு, சித்தூர் ரோடு
        </p>

        <p className="location-date">
          20-11-2026 | வெள்ளிக்கிழமை
        </p>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          📍 Google Maps - Get Directions
        </a>

        <div className="location-footer">
          உங்கள் வருகையே எங்களுக்கு மகிழ்ச்சி!
        </div>

        <div className="location-flower">✿ ❀ ✿</div>
      </div>
    </div>
  );
}

export default LocationPage;