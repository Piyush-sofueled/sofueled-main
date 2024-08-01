import React from "react";
import { Fade } from "react-awesome-reveal";

const licenseContent = [
  {
    heading: "Images",
    text: "All graphical assets in this template are licensed for personal and commercial use. If you’d like to use a specific asset, please check the license below.",
  },
  ...Array(10).fill({
    heading: "Font",
    text: "You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details. (from Google Fonts website)",
  }),
];

const LicenseBody = () => {
  return (
    <div className="licensing-font">
      <div className="w-layout-blockcontainer container-wrapper w-container">
        {licenseContent.map((item, index) => (
          <Fade key={index} delay={200} triggerOnce>
            <div key={index} className="licensing-title">
              <h2
                data-w-id={`heading-${index}`}
                style={{
                  transform:
                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  opacity: 1,
                  transformStyle: "preserve-3d",
                }}
                className="licensing-secrtion-heading"
              >
                {item.heading}
              </h2>
              <p
                data-w-id={`paragraph-${index}`}
                style={{
                  transform:
                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  opacity: 1,
                  transformStyle: "preserve-3d",
                }}
                className="license-details"
              >
                {item.text}
              </p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default LicenseBody;
