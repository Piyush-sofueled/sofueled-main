import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Image from 'next/image';
import Link from "next/link";

const HeroSection = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
   
    setTimeout(() => {
      setAnimationStarted(true);
    }, 100); 
  }, []);
  return (
    <section>
      <div
        data-w-id="b338aba8-da84-25cb-0733-1138239cfdb3"
        className="hero-section home-page"
      >
        <div className="w-layout-blockcontainer large-container w-container">
          <div
            data-w-id="b338aba8-da84-25cb-0733-1138239cfdb5"
            className="w-layout-grid hero-grid"
          >
            <Fade direction="up" triggerOnce>
              <div
                id="w-node-b338aba8-da84-25cb-0733-1138239cfdb6-5f88be17"
                className="hero-content-wrapper"
              >
                <h1
                  data-w-id="b338aba8-da84-25cb-0733-1138239cfdb7"
                  className="hero-content-heading"
                >
                  Empower, Scale, Impact
                </h1>
                <p
                  data-w-id="b338aba8-da84-25cb-0733-1138239cfdbd"
                  className="hero-description"
                >
                  We deliver enterprise-grade systems and accountable
                  partnerships for fast results, bespoke strategies and
                  industry-defining solutions.
                </p>
                <Fade
                  direction="up"
                  triggerOnce
                  delay={1000}
                  duration={2000}
                  style={{
                    opacity: 0,
                    transform: "translate3d(0, 10px, 0)",
                  }}
                  cascade
                >
                  <Link
                    href="/contact-us"
                    data-w-id="b338aba8-da84-25cb-0733-1138239cfdbf"
                    className="primary-button w-button"
                  >
                    Book a free Strategy Call
                  </Link>
                </Fade>
                
              </div>
            </Fade>
            <div
              id="w-node-b338aba8-da84-25cb-0733-1138239cfdc5-5f88be17"
              className="hero-image-wrapper"
            >
              <Fade direction="right" triggerOnce>
              <Image
                  className="hero-image"
                  src="/images/header.webp"
                  alt="Hero Image"
                  width={1200}
                  height={800}
                  priority
                  data-w-id="b338aba8-da84-25cb-0733-1138239cfdc6"
                />
              </Fade>
              <div
                data-w-id="b338aba8-da84-25cb-0733-1138239cfdc7"
                className={`small-image ${animationStarted ? "animate" : ""}`}
              >
                <Image
                  src="/images/headpoint.webp"
                  loading="lazy"
                  alt="Small Image"
                  width={150}
                  height={150}
                />
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
