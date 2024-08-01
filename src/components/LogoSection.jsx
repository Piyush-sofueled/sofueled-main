import React from "react";
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const logos = [
  { src: "/images/amdocs.webp", alt: "Amdocs", width: 100, height: 50 },
  { src: "/images/Automata-pi logo.webp", alt: "Automata", width: 100, height: 50 },
  { src: "/images/epay-later.png", alt: "Epay", width: 100, height: 50 },
  { src: "/images/IFB-logo.png", alt: "IFB", width: 100, height: 50 },
  { src: "/images/netzsch.webp", alt: "Netzsch", width: 100, height: 50 },
  { src: "/images/putzmeister.webp", alt: "Putzmeister", width: 100, height: 50 },
  { src: "/images/upgrad.webp", alt: "Upgrad", width: 100, height: 50 },
  { src: "/images/Yes-bank.webp", alt: "Yes Bank", width: 100, height: 50 },
];

const LogoSection = () => {
  return (
    <div className="logo-sedtion about-page">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="top-line-wrapper">
          <div
            id="w-node-_17d942c8-0c77-257b-33fa-7ae2e9756f4a-451b1e00"
            className="top-line"
          ></div>
          <div id="w-node-_713c8dea-f23c-5523-9906-c87e216a1526-451b1e00">
            <div className="top-line-text">Over 3k+ Satisfied clients</div>
          </div>
          <div
            id="w-node-_60b96a0e-845f-2dcb-f1d0-338e8c72784e-451b1e00"
            className="top-line"
          ></div>
        </div>
        <div className="client-logo-section boder-section">
          <div className="w-layout-blockcontainer large-container w-container">
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                padding: "20px 0",
                backgroundColor: "#fff",
              }}
            >
              <Marquee speed={60} pauseOnHover={false}>
                {logos.map((logo, index) => (
                  <div key={index} className="logo-block">
                    <Image
                    className={`client-logo ${logo.alt}`}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                  />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
        <div className="bottom-border-line"></div>
      </div>
    </div>
  );
};

export default LogoSection;
