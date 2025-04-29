import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate = '2025-05-01T00:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    const total = Math.max(0, new Date(targetDate) - new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  }

  const colors = [
    "bg-red-400/70 backdrop-blur-md", 
    "bg-blue-400/70 backdrop-blur-md",   
    "bg-green-400/70 backdrop-blur-md",
    "bg-yellow-300/70 backdrop-blur-md"  
  ];

  const TimeBox = ({ label, value, colorClass }) => (
    <div className={`w-24 h-24 flex flex-col justify-center items-center rounded-xl ${colorClass} border border-white/20 shadow-lg mx-2`}>
      <div className="text-3xl font-bold text-black">{value.toString().padStart(2, '0')}</div>
      <div className="text-sm uppercase tracking-wide text-black mt-1">{label}</div>
    </div>
  );

  return (
      <>
        <div className="flex justify-center items-center p-6 gap-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl">
            <TimeBox label="Days" value={timeLeft.days} colorClass={colors[0]} />
            <TimeBox label="Hours" value={timeLeft.hours} colorClass={colors[1]} />
            <TimeBox label="Minutes" value={timeLeft.minutes} colorClass={colors[2]} />
            <TimeBox label="Seconds" value={timeLeft.seconds} colorClass={colors[3]} />
          </div>
          <div
        className="m-2.5 text-center text-[4em] leading-[1em] relative font-bold font-[ICA Rubrik] text-[#25283B]"
        data-content="CHOOSE ANY AURA FROM THE SLIDER BELOW AND PITCH A STARTUP BASED ON THAT. ALL THE BEST!!!"
      >
        CHOOSE ANY AURA FROM THE SLIDER BELOW AND PITCH A STARTUP BASED ON THAT. ALL THE BEST!!!
      </div>


      <style>{`
        div[data-content]::after {
          content: attr(data-content);
          position: absolute;
          inset: 0;
          color: transparent;
          -webkit-text-stroke: 1px #d2d2d2;
          z-index: 2;
          pointer-events: none;
        }
      `}</style>
      </>
  );
};

export default CountdownTimer;