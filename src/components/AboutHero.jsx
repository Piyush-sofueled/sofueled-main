import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section>
      <div className="about-us-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="about-us-top-block">
            <div
              data-w-id="b5da0959-8d3a-d3c9-ea15-04964f17bc96"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="about-us-heading-wrapper"
            >
              <Fade direction="up" triggerOnce>
                <h1 className="about-us-heading">
                  We power Ambitious Brands to Build Scalable Growth and Build
                  Relationships with People who Desire to Make{" "}
                  <span style={{ whiteSpace: "nowrap" }}> an Impact</span>
                </h1>
              </Fade>
            </div>
            <Fade
              className="smallAnimation"
              delay={500}
              direction="right"
              triggerOnce
            >
              <div
                data-w-id="19fd004d-fe36-8c50-7e6a-e8323fcc1bab"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(93.2976deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
                className="small-image about-page"
              >
                <Image
                  src="/images/headpoint.webp"
                  loading="lazy"
                  alt="Small Image"
                  width={150}
                  height={150}
                />
              </div>
            </Fade>
          </div>
          <div
            data-w-id="b5da0959-8d3a-d3c9-ea15-04964f17bc9c"
            style={{ opacity: 1 }}
            className="about-image-wrapper"
          >
            <Fade delay={800} triggerOnce>
              <Image
                src="/images/about.webp"
                loading="lazy"
                alt="About Image"
                className="about-image"
                 layout="responsive"
                width={1282}
                height={602}

              />
            </Fade>
          </div>
          <div className="about-us-content-wrapper">
            <div className="about-text-wrapper">
              <Fade direction="up" triggerOnce>
                <div
                  data-w-id="b5da0959-8d3a-d3c9-ea15-04964f17bca2"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="about-content-block-title"
                >
                  Our Story & Vision
                </div>
              </Fade>
              <Fade direction="up" delay={100} triggerOnce>
                <div
                  data-w-id="b5da0959-8d3a-d3c9-ea15-04964f17bca4"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="about-content-block-text"
                >
                  <div style={{ marginBottom: "10px" }}>
                    For over 12 years, we&apos;ve been trailblazers in the IT
                    industry, delivering comprehensive solutions to empower your
                    digital transformation. Our expertise spans from crafting
                    high-performance websites and applications to developing
                    intelligent bots and innovative designs that set new
                    benchmarks.
                  </div>
                  {/* <br /> */}
                  {/* <br /> */}
                  We collaborate closely with your team, combining our technical
                  prowess with your business objectives to create tailor-made
                  digital experiences that drive growth and success.
                </div>
              </Fade>
              <div className="about-fact-block">
                <Fade direction="up" delay={200} triggerOnce>
                  <div
                    data-w-id="b5da0959-8d3a-d3c9-ea15-04964f17bcaf"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="about-fact-wrapper"
                  >
                    <div className="about-fact-title">3k+</div>
                    <p className="about-fact-name">Satisfied Customers</p>
                  </div>
                </Fade>
                <Fade direction="up" delay={300} triggerOnce>
                  <div
                    data-w-id="5da4cdad-7fcf-03f7-008d-2010cc12c36e"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="about-fact-wrapper"
                  >
                    <div className="about-fact-title">3k+</div>
                    <p className="about-fact-name">Products Delivered</p>
                  </div>
                </Fade>
                <Fade direction="up" delay={400} triggerOnce>
                  <div
                    data-w-id="fe311276-7551-03d7-a882-8d8206d306a8"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="about-fact-wrapper"
                  >
                    <div className="about-fact-title">50M+</div>
                    <p className="about-fact-name">Product Users</p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
