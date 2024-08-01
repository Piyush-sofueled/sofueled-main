import React from "react";
import { Fade } from "react-awesome-reveal";

const CookieTitle = () => {
  return (
    <div className="licensing-hero-section">
      <div className="licensing-inner-container">
        <Fade delay={200} triggerOnce>
          <h1
            data-w-id="58c4c899-4d24-9073-e97c-ff1cb61ea834"
            style={{
              transform:
                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              opacity: 1,
              transformStyle: "preserve-3d",
            }}
            className="licensing-heading"
          >
            Cookie Policy
          </h1>
          <p
            data-w-id="58c4c899-4d24-9073-e97c-ff1cb61ea836"
            style={{
              transform:
                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              opacity: 1,
              transformStyle: "preserve-3d",
            }}
            className="licensing-description"
          >
            <strong>Effective Date:</strong> 15th July 2023
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default CookieTitle;
