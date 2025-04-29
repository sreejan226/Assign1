import React, { useState } from "react";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="relative bg-gray-100 text-[#1a237e] pt-16 pb-6 rounded-t-3xl shadow-[0_-4px_32px_0_rgba(25,118,210,0.10)] mt-16 overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-16 z-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0,40 Q360,0 720,40 T1440,40 V60 H0 Z"
            fill="#42a5f5"
            opacity="0.13"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center gap-8">

        <div className="bg-white/80 rounded-xl px-8 py-4 shadow-md flex flex-col items-center gap-1">
          <span className="font-semibold text-lg tracking-wide mb-1">About E-cell</span>
          <p className="text-center text-base text-[#263159]">
            E-cell is a modern platform for entrepreneurial minds to connect, discuss, and grow together. 
            Join our vibrant community, participate in forums, and stay updated with the latest events and opportunities!
          </p>
        </div>

        <div className="flex gap-8 mt-3">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-[#d6249f] transition-transform duration-200 hover:scale-110"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-[#1877f3] transition-transform duration-200 hover:scale-110"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <button
            onClick={() => setShowContact((v) => !v)}
            className="text-3xl hover:text-[#43a047] transition-transform duration-200 hover:scale-110 focus:outline-none"
            aria-label="Contact"
            type="button"
          >
            <i className="fa-solid fa-envelope"></i>
          </button>
          <a
            href="https://github.com/sreejan226"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-black transition-transform duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>


        {showContact && (
          <div className="absolute top-28 md:top-32 bg-white border border-[#42a5f5] rounded-xl px-6 py-4 shadow-lg flex flex-col items-center gap-2 animate-fade-in z-20">
            <span className="font-semibold text-[#1a237e] mb-1">Contact Us</span>
            <a
              href="mailto:sreejandas226@gmail.com"
              className="flex items-center gap-2 text-[#1a237e] hover:text-[#42a5f5] underline"
            >
              <i className="fa-solid fa-envelope"></i> Email
            </a>
            <a
              href="tel:9330539813"
              className="flex items-center gap-2 text-[#1a237e] hover:text-[#42a5f5] underline"
            >
              <i className="fa-solid fa-phone"></i> +91 93305 39813
            </a>
            <button
              onClick={() => setShowContact(false)}
              className="mt-2 px-3 py-1 rounded bg-[#42a5f5] text-white text-xs hover:bg-[#1a237e] transition"
            >
              Close
            </button>
          </div>
        )}

        <div className="text-sm text-[#263159] mt-4 tracking-wide text-center">
          © {new Date().getFullYear()}  All rights reserved.
        </div>
      </div>

      <div className="absolute bottom-2 right-8 z-0">
        <svg width="80" height="30">
          <circle cx="10" cy="15" r="4" fill="#ffd600">
            <animate attributeName="cy" values="15;8;15" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="15" r="4" fill="#42a5f5">
            <animate attributeName="cy" values="15;22;15" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="15" r="4" fill="#43a047">
            <animate attributeName="cy" values="15;8;15" dur="2s" begin="0.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="15" r="4" fill="#ffb300">
            <animate attributeName="cy" values="15;22;15" dur="2s" begin="0.9s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;