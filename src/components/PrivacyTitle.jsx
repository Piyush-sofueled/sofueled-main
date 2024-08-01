import React from "react";
import { Fade } from "react-awesome-reveal";

const LicenseTitle = () => {
  return (
    <div className="licensing-hero-section">
      <div className="licensing-inner-container">
        <Fade delay={200} triggerOnce>
          <h1
            data-w-id="58c4c899-4d24-9073-e97c-ff1cb61ea834"
            className="licensing-heading"
          >
            Privacy
          </h1>
          <p
            data-w-id="58c4c899-4d24-9073-e97c-ff1cb61ea836"
            className="licensing-description"
          >
            All graphical assets in this template are licensed for personal and
            commercial use. If you&apos;d like to use a specific asset, please check
            the license below.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default LicenseTitle;
