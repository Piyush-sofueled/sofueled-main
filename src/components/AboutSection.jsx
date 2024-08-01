import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  
  const { ref: numbers1Ref, inView: numbers1InView } = useInView({ triggerOnce: true });
  const { ref: numbers2Ref, inView: numbers2InView } = useInView({ triggerOnce: true });
  const { ref: numbers3Ref, inView: numbers3InView } = useInView({ triggerOnce: true });
  return (
    <section>
      <div className="about-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="about-top-block">
            <Fade direction="up" triggerOnce>
              <div
                id="w-node-e00217b1-0acb-4b19-5674-f7050ab7900e-5f88be17"
                data-w-id="e00217b1-0acb-4b19-5674-f7050ab7900e"
                className="about-top-left-block"
              >
                <h2 className="about-heading">
                  Your partner in business expansion
                </h2>
              </div>
            </Fade>
            <div
              id="w-node-e00217b1-0acb-4b19-5674-f7050ab79011-5f88be17"
              className="about-top-right-block"
            >
              <Fade direction="right" triggerOnce>
                <p
                  data-w-id="e00217b1-0acb-4b19-5674-f7050ab79012"
                  className="about-right-block-description"
                >
                  Our innovative IT solutions have earned international
                  recognition, demonstrating our ability to deliver exceptional
                  results for clients worldwide.
                </p>
              </Fade>
              <Fade delay={100} direction="right" triggerOnce>
                <div
                  data-w-id="e00217b1-0acb-4b19-5674-f7050ab79014"
                  className="about-right-button-wrapper"
                >
                  <Fade
                    direction="right"
                    triggerOnce
                    delay={100}
                    duration={2000}
                    style={{
                      opacity: 0,
                    }}
                    cascade
                  >
                    <Link href="/about-us" className="primary-button w-button">
                      More Details
                    </Link>
                  </Fade>
                  <Link
                    href="/contact-us"
                    className="call-back-button w-inline-block"
                  >
                    <div className="call-back-button-text">
                      Request a Callback
                    </div>
                    <Image
                      src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f685ef35a8b452bbbcf277_Next%20Arrow.svg"
                      loading="lazy"
                      alt="call button icon"
                      className="call-back-icon"
                      width={25}
                      height={10}
                    />
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
          <div className="w-layout-grid about-grid">
            <Fade delay={100} direction="up" triggerOnce>
              <div
                id="w-node-e00217b1-0acb-4b19-5674-f7050ab7901c-5f88be17"
                data-w-id="e00217b1-0acb-4b19-5674-f7050ab7901c"
                className="about-card"
              >
                <div
                ref={numbers1Ref}
                className="about-number-block">
                  <div
                  
                  className={` ${numbers1InView ? "all-numbers _1" : ""}`}
                  >
                    {Array.from(
                      { length: 11 },
                      (_, index) => (index + 1) % 10
                    ).map((number,index) => (
                      <div key={`section0-${index}-${number}`} className="number-digit other-color">
                        {number}
                      </div>
                    ))}
                  </div>
                  <div
          
                  className={` ${numbers1InView ? "all-numbers _2" : ""}`}
                  >
                    {Array.from({ length: 11 }, (_, index) => index % 10).map(
                      (number,index) => (
                        <div key={`section0-${index}-${number}`} className="number-digit other-color">
                          {number}
                        </div>
                      )
                    )}
                  </div>
                  <div
            
                  className={` ${numbers1InView ? "all-numbers _3" : ""}`}
                  >
                    <div className="number-digit other-color">+</div>
                  </div>
                </div>
                <div className="about-sub-title">Years Experience</div>
                <p className="about-card-description">
                  {" "}
                  Our 10+ years of experience have honed our skills and
                  knowledge.
                  <br />
                  <span style={{ opacity: "0" }}>3,000 clients worldwide.</span>
                </p>
                <Link
                  href="#"
                  className="about-card-button w-inline-block"
                >
                  <Image
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f68642f9ed005fb389123c_Contact%20Button.svg"
                    loading="lazy"
                    alt="About button image"
                    width={54}
                      height={50}
                  />
                </Link>
              </div>
            </Fade>
            <Fade delay={200} direction="up" triggerOnce>
              <div
                id="w-node-e00217b1-0acb-4b19-5674-f7050ab79025-5f88be17"
                data-w-id="e00217b1-0acb-4b19-5674-f7050ab79025"
                className="about-card"
              >
                <div  ref={numbers2Ref} className="about-number-block">
                <div className={` ${numbers2InView ? "all-numbers _1" : ""}`}>
                    {Array.from(
                      { length: 11 },
                      (_, index) => (index + 1) % 10
                    ).map((number,index) => (
                      <div  key={`section1-${index}-${number}`} className="number-digit other-color">
                        {number}
                      </div>
                    ))}
                  </div>
                  <div className={` ${numbers2InView ? "all-numbers _2" : ""}`}>
                  {Array.from(
                      { length: 11 },
                      (_, index) => (index + 5) % 10
                    ).map((number,index) => (
                      <div  key={`section1-${index}-${number}`} className="number-digit other-color">
                        {number}
                      </div>
                    ))}
                  </div>
                  <div className={` ${numbers2InView ? "all-numbers _3" : ""}`}>
                    <div className="number-digit other-color">+</div>
                  </div>
                </div>
                <div className="about-sub-title">Global Recognitions</div>
                <p className="about-card-description">
                  Our commitment to excellence has earned us accolades from
                  prestigious industry organizations.
                </p>
                <Link
                  href="#"
                  className="about-card-button w-inline-block"
                >
                  <Image
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f68642f9ed005fb389123c_Contact%20Button.svg"
                    loading="lazy"
                    alt="About button image"
                    width={54}
                      height={50}
                  />
                </Link>
              </div>
            </Fade>
            <Fade delay={300} direction="up" triggerOnce>
              <div
                id="w-node-e00217b1-0acb-4b19-5674-f7050ab7902e-5f88be17"
                data-w-id="e00217b1-0acb-4b19-5674-f7050ab7902e"
                className="about-card"
              >
                <div  ref={numbers3Ref} className="about-number-block">
                <div className={` ${numbers3InView ? "all-numbers _1" : ""}`}>
                  {Array.from(
                      { length: 11 },
                      (_, index) => (index + 3) % 10
                    ).map((number,index) => (
                      <div  key={`section3-${index}-${number}`} className="number-digit other-color">
                        {number}
                      </div>
                    ))}
                  </div>
                  <div className={` ${numbers3InView ? "all-numbers _3" : ""}`}>
                    <div className="number-digit other-color">k</div>
                  </div>
                </div>
                <div className="about-sub-title">Satisfied Customers </div>
                <p className="about-card-description">
                  Our solutions have delighted over 3,000 clients worldwide.
                  <br />
                  <span style={{ opacity: "0" }}>3,000 clients worldwide.</span>
                </p>
                <Link
                  href="#"
                  className="about-card-button w-inline-block"
                >
                  <Image
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f68642f9ed005fb389123c_Contact%20Button.svg"
                    loading="lazy"
                    alt="About button image"
                    width={54}
                      height={50}
                  />
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
