import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const AboutServiceSection = () => {
  return (
    <section>
      <div className="service-section about-page">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="service-top-block">
            <div className="service-top-left-block">
              <Fade direction="up" triggerOnce>
                <div
                  data-w-id="4e204ee2-f635-cdf6-fed8-a3ef6cb6f06d"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="title"
                >
                  What we do
                </div>
              </Fade>
              <Fade direction="up" delay={100} triggerOnce>
                <h2
                  data-w-id="4e204ee2-f635-cdf6-fed8-a3ef6cb6f06f"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="service-heading about-page"
                >
                  Our services
                </h2>
              </Fade>
              <Fade direction="up" delay={200} triggerOnce>
                <p
                  data-w-id="4e204ee2-f635-cdf6-fed8-a3ef6cb6f071"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="service-description about-page"
                >
                  We partner with ambitious brands, fueling their growth and
                  connecting them with passionate individuals who share their
                  vision for positive impact.
                </p>
              </Fade>
            </div>
            <Fade direction="up" delay={500} triggerOnce>
              <div
                data-w-id="4e204ee2-f635-cdf6-fed8-a3ef6cb6f073"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="service-top-right-block about-page"
              >
                <a href="#" className="primary-button w-button">
                  Discover More
                </a>
              </div>
            </Fade>
          </div>
          <div className="w-layout-grid service-column-grid">
            <Fade direction="left" triggerOnce>
              <div
                id="w-node-_4e204ee2-f635-cdf6-fed8-a3ef6cb6f077-451b1e00"
                data-w-id="4e204ee2-f635-cdf6-fed8-a3ef6cb6f077"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="service-card"
              >
                <div className="service-card-content-wrapper">
                  <div className="service-icon-block">
                    <div className="service-icon">
                    <Image
                            src="/images/UI_UX.png"
                            loading="lazy"
                            alt="uiicon"
                             layout="responsive"
                            width={110}
                            height={70}
                          />
                    </div>
                  </div>
                </div>
                <div className="service-block-title about-page">
                  UX/UI Design Consultancy
                </div>
                <a
                  href="#"
                  className="service-arow-image about-page w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f6850c6c7db01c712481a7_Arrow.svg"
                    loading="lazy"
                    alt="aro image"
                  />
                </a>
                <p className="service-block-description about-page">
                  We understand the critical importance of design and systems,
                  and we believe in delivering both.
                </p>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div
                id="w-node-_4e204ee2-f635-cdf6-fed8-a3ef6cb6f081-451b1e00"
                data-w-id="4e204ee2-f635-cdf6-fed8-a3ef6cb6f081"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="service-card"
              >
                <div className="service-card-content-wrapper">
                  <div className="service-icon-block">
                    <div className="service-icon">
                    <Image
                            src="/images/Web.png"
                            loading="lazy"
                            alt="uiicon"
                             layout="responsive"
                            width={60}
                            height={50}
                          />
                    </div>
                  </div>
                </div>
                <div
                  className="service-block-title about-page"
                  style={{ color: "rgb(0, 0, 0)" }}
                >
                  Web App Development
                </div>
                <a
                  href="#"
                  className="service-arow-image about-page w-inline-block"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f6850c6c7db01c712481a7_Arrow.svg"
                    loading="lazy"
                    alt="aro image"
                  />
                </a>
                <p className="service-block-description about-page">
                  We know the importance of building a rare blend of technology,
                  design, development and experience.
                </p>
              </div>
            </Fade>
            <Fade direction="left" triggerOnce>
              <div
                id="w-node-_4e204ee2-f635-cdf6-fed8-a3ef6cb6f08b-451b1e00"
                data-w-id="4e204ee2-f635-cdf6-fed8-a3ef6cb6f08b"
                className="service-card"
              >
                <div className="service-card-content-wrapper">
                  <div className="service-icon-block">
                    <div className="service-icon marketing">
                    <Image
                            src="/images/Mobile-dev.png"
                            loading="lazy"
                            alt="uiicon"
                             layout="responsive"
                            width={70}
                            height={69}
                          />
                    </div>
                  </div>
                </div>
                <div className="service-block-title about-page">
                  Mobile App Development
                </div>
                <a
                  href="#"
                  className="service-arow-image about-page w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f6850c6c7db01c712481a7_Arrow.svg"
                    loading="lazy"
                    alt="aro image"
                  />
                </a>
                <p className="service-block-description about-page">
                  Bespoke, Native and Hybrid mobile app development to build a
                  seamless experience.
                </p>
              </div>
            </Fade>
            <Fade direction="right" triggerOnce>
              <div
                id="w-node-_4e204ee2-f635-cdf6-fed8-a3ef6cb6f095-451b1e00"
                data-w-id="4e204ee2-f635-cdf6-fed8-a3ef6cb6f095"
                className="service-card"
              >
                <div className="service-card-content-wrapper">
                  <div className="service-icon-block">
                    <div className="service-icon digital">
                    <Image
                            src="/images/Testing.png"
                            loading="lazy"
                            alt="uiicon"
                             layout="responsive"
                            width={62}
                            height={63}
                          />
                    </div>
                  </div>
                </div>
                <div className="service-block-title about-page">Testing</div>
                <p className="service-block-description about-page">
                  If your product is buggy, it can have the bags packing. Our
                  testing is a crux of the product journey.
                </p>
                <a
                  href="#"
                  className="service-arow-image about-page w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f6850c6c7db01c712481a7_Arrow.svg"
                    loading="lazy"
                    alt="aro image"
                  />
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServiceSection;
