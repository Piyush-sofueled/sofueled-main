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

const ClientLogoSection = () => {
  return (
    <section>
      <div className="client-logo-section">
        <div className="w-layout-blockcontainer large-container w-container">
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              padding: "20px 0",
              backgroundColor: "#f4fafc",
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
    </section>
  );
};

export default ClientLogoSection;
