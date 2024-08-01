import Image from "next/image";
import React, { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";

const ChooseUsSection = () => {
  const contentRef = useRef(null);
  const contentRefOne = useRef(null);
  const contentRefTwo = useRef(null);
  const [openIndices, setOpenIndices] = useState([]);

  const toggleAnswer = (index) => {
    setOpenIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <section>
      <div className="choose-us-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="choose-top-block">
            <div
              id="w-node-bab429f6-f13e-a1d7-fe73-3fc4705eaee5-5f88be17"
              className="choose-left-block"
            >
              <Fade direction="up" triggerOnce>
                <div
                  data-w-id="bab429f6-f13e-a1d7-fe73-3fc4705eaee6"
                  className="title"
                >
                  Why Partner with Us
                </div>
              </Fade>
              <Fade delay={100} direction="up" triggerOnce>
                <h2
                  data-w-id="bab429f6-f13e-a1d7-fe73-3fc4705eaee8"
                  className="choose-heading"
                >
                  We&apos;ve empowered businesses worldwide with innovative IT
                  solutions tailored to their unique needs and challenges. Our
                  proven track record speaks for itself.
                </h2>
              </Fade>
            </div>
            <div
              id="w-node-_021e5695-8f61-0fc2-3931-a37bc958dd70-5f88be17"
              className="choose-right-block"
            >
              <div className="faq-block">
                <div className="toogle">
                  <Fade direction="right" triggerOnce>
                    <div
                      data-w-id="021e5695-8f61-0fc2-3931-a37bc958dd73"
                      className="toogle-wrapper"
                    >
                      <div
                        className="toogle-questions"
                        onClick={() => toggleAnswer(0)}
                      >
                        <h2 className="toogle-title">Unparalleled Expertise</h2>
                        <div
                          className={`toogle-icon-wrapper ${
                            openIndices.includes(0) ? "rotate" : ""
                          }`}
                        >
                          <div className="toogle-icon">
                            <Image
                              src="https://assets-global.website-files.com/656ffa7e742682775f88be13/6573f00cad80988a4db0f637_Faq%20Icon.png"
                              loading="lazy"
                              alt="icon"
                              width={15}
                              height={15}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          height: openIndices.includes(0)
                            ? `${contentRef.current.scrollHeight}px`
                            : "0px",
                        }}
                        ref={contentRef}
                        className={`toogle-answer ${
                          openIndices.includes(0) ? "open" : ""
                        }`}
                      >
                        <div className="toogle-info">
                          <p>
                            Our team of seasoned IT professionals brings a
                            wealth of knowledge and experience to every project.
                            We stay ahead of the curve, constantly updating our
                            skills to leverage the latest technologies and
                            methodologies. This ensures that your solutions are
                            not only cutting-edge but also future-proof.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade delay={100} direction="right" triggerOnce>
                    <div
                      data-w-id="021e5695-8f61-0fc2-3931-a37bc958dd7e"
                      className="toogle-wrapper"
                    >
                      <div
                        className="toogle-questions"
                        onClick={() => toggleAnswer(1)}
                      >
                        <h2 className="toogle-title">
                          Client-Centric Approach
                        </h2>
                        <div
                          className={`toogle-icon-wrapper ${
                            openIndices.includes(1) ? "rotate" : ""
                          }`}
                        >
                          <div className="toogle-icon">
                            <Image
                              src="https://assets-global.website-files.com/656ffa7e742682775f88be13/6573f00cad80988a4db0f637_Faq%20Icon.png"
                              loading="lazy"
                              alt="icon"
                              width={15}
                              height={15}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          height: openIndices.includes(1)
                            ? `${contentRefOne.current.scrollHeight}px`
                            : "0px",
                        }}
                        ref={contentRefOne}
                        className={`toogle-answer ${
                          openIndices.includes(1) ? "open" : ""
                        }`}
                      >
                        <div className="toogle-info">
                          <p>
                            Your success is our priority. We take the time to
                            understand your unique business goals and
                            challenges, tailoring our solutions to meet your
                            specific needs. We believe in open communication and
                            collaboration, ensuring you&apos;re involved every step
                            of the way.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade delay={200} direction="right" triggerOnce>
                    <div
                      data-w-id="021e5695-8f61-0fc2-3931-a37bc958dd89"
                      className="toogle-wrapper"
                    >
                      <div
                        className="toogle-questions"
                        onClick={() => toggleAnswer(2)}
                      >
                        <h2 className="toogle-title">
                          Cost-Effective & Secure Solutions
                        </h2>
                        <div
                          className={`toogle-icon-wrapper ${
                            openIndices.includes(2) ? "rotate" : ""
                          }`}
                        >
                          <div className="toogle-icon">
                            <Image
                              src="https://assets-global.website-files.com/656ffa7e742682775f88be13/6573f00cad80988a4db0f637_Faq%20Icon.png"
                              loading="lazy"
                              alt="icon"
                              width={15}
                              height={15}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          height: openIndices.includes(2)
                            ? `${contentRefTwo.current.scrollHeight}px`
                            : "0px",
                        }}
                        ref={contentRefTwo}
                        className={`toogle-answer ${
                          openIndices.includes(2) ? "open" : ""
                        }`}
                      >
                        <div className="toogle-info">
                          <p>
                            We understand that budget and security are top
                            priorities for any business. That&apos;s why we offer
                            competitive pricing without compromising on the
                            highest security standards. Our transparent pricing
                            models and robust security protocols ensure you get
                            maximum value and peace of mind with your IT
                            investment. Our entire process is backed by ensuring
                            confidentiality and integrity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
