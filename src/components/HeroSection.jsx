import React from "react";
import "./HeroSection.css";

const images = Array.from({ length: 10 }, (_, i) => `public/dragon_${i + 1}.jpg`);

const HeroSection = () => {
    return (
      <div className="banner">
        <div className="slider" style={{ '--quantity': images.length }}>
          {images.map((src, index) => (
            <div className="item" style={{ '--position': index + 1 }} key={index}>
              <img src={src} alt={`dragon_${index + 1}`} />
            </div>
          ))}
        </div>
  
        <div className="content">
          <h1 data-content="STARTUP BLITZ 2.0">STARTUP BLITZ 2.0</h1>
          <div className="model">
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  