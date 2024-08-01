import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const BlogSection = () => {
  return (
    <section>
      <div className="blog-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="block-top-block">
            <div
              id="w-node-_843ba9bc-9c78-23ee-bbe8-5b5ba4aca9aa-5f88be17"
              className="blog-left-block"
            >
              <Fade direction="up" triggerOnce>
                <h2
                  className="blog-heading"
                  data-w-id="843ba9bc-9c78-23ee-bbe8-5b5ba4aca9ab"
                >
                  Insights & Resources
                </h2>
              </Fade>
            </div>
            {/* <div id="w-node-_843ba9bc-9c78-23ee-bbe8-5b5ba4aca9ad-5f88be17" className="blog-right-block">
            <Fade delay={100} style={{width:'100%'}} direction="right" triggerOnce>
              <div className="blog-button-wrapper" data-w-id="843ba9bc-9c78-23ee-bbe8-5b5ba4aca9ae">
                <a href="/contact" className="primary-button w-button">Get in Touch</a>
              </div>
              </Fade>
            </div> */}
          </div>
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items w-row">
              <div role="listitem" className="w-dyn-item w-col w-col-6">
                <Fade delay={300} direction="up" triggerOnce>
                  <a
                    className="blog-card"
                    href="https://sofueled.com/blog/the-role-of-machine-learning-in-customer-experiences/"
                    data-w-id="da7f9ca0-da6b-623c-b539-26b77c34fff8"
                  >
                    <div
                      href="https://sofueled.com/blog/the-role-of-machine-learning-in-customer-experiences/"
                      className="blog-image-wrapper w-inline-block"
                    >
                      <Image
                        className="blog-image"
                        src="/images/ml.webp"
                        alt="Blog Image"
                        width={595} // Adjust the width and height as needed
                        height={396} // Adjust the width and height as needed
                        loading="lazy"
                      />
                      <div className="link-icon-wrapper">
                        <Image
                          src="https://assets-global.website-files.com/6629cd1d9dc0f70a2935266f/662dcfff22965ffd834e8931_Card%20Arrow.webp"
                          loading="lazy"
                          alt=""
                          width={24}
                          height={24}
                          className="service-card-arrow"
                        />
                      </div>
                    </div>
                    <div
                      className="blog-tag-wrapper"
                      data-w-id="da7f9ca0-da6b-623c-b539-26b77c34fffc"
                    >
                      <div className="blog-tag-text">
                        Featured -
                        <span className="blog-tag-span"> July 17th 2024</span>
                      </div>
                    </div>
                    <div
                      className="blog-title"
                      data-w-id="da7f9ca0-da6b-623c-b539-26b77c350000"
                    >
                      The Role of Machine Learning in Customer Experiences
                    </div>
                  </a>
                </Fade>
              </div>
              <div role="listitem" className="w-dyn-item w-col w-col-6">
                <Fade delay={500} direction="up" triggerOnce>
                  <a
                    href="https://sofueled.com/blog/cloud-computing-revolutionizing-business-operations/"
                    className="blog-card"
                    data-w-id="da7f9ca0-da6b-623c-b539-26b77c34fff8"
                  >
                    <div
                      href="https://sofueled.com/blog/cloud-computing-revolutionizing-business-operations/"
                      className="blog-image-wrapper w-inline-block"
                    >
                      <Image
                        className="blog-image"
                        src="/images/cloud.webp"
                        alt="Blog Image"
                        width={595} // Adjust the width and height as needed
                        height={396} // Adjust the width and height as needed
                        loading="lazy"
                      />
                      <div className="link-icon-wrapper">
                        <Image
                          src="https://assets-global.website-files.com/6629cd1d9dc0f70a2935266f/662dcfff22965ffd834e8931_Card%20Arrow.webp"
                          loading="lazy"
                          width={24}
                          height={24}
                          alt=""
                          className="service-card-arrow"
                        />
                      </div>
                    </div>
                    <div
                      className="blog-tag-wrapper"
                      data-w-id="da7f9ca0-da6b-623c-b539-26b77c34fffc"
                    >
                      <div className="blog-tag-text">
                        Featured -
                        <span className="blog-tag-span"> July 15th 2024</span>
                      </div>
                    </div>
                    <div
                      className="blog-title"
                      data-w-id="da7f9ca0-da6b-623c-b539-26b77c350000"
                    >
                      Cloud Computing: Revolutionizing Business Operations
                    </div>
                  </a>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
