import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from 'next/image';
import Link from "next/link";

const FooterSection = () => {
  return (
    <section>
      <div className="footer-section">
        <div className="footer-top-wrapper">
          <div className="w-layout-blockcontainer base-container w-container">
            <div
              className="w-layout-grid footer-grid"
              data-w-id="1f4ff2e0-9f0c-13b1-0b75-b9a26afe3ac2"
            >
              <Fade triggerOnce>
                <div
                  className="footer-block"
                  id="w-node-_1f4ff2e0-9f0c-13b1-0b75-b9a26afe3ac3-6afe3aac"
                >
                  <Link
                    href="/"
                    aria-current="page"
                    className="footer-logo-wrapper w-inline-block w--current"
                  >
                    <Image
                      src="/images/sofueled-logo.webp"
                      alt="Footer Logo"
                      className="footer-logo"
                      width={170} // Set the appropriate width
                      height={50} // Set the appropriate height
                    />
                  </Link>
                  <div className="footer-image-wrapper">
                    <div className="footer-image-block">
                    <Image
                        src="/images/footerImage.webp"
                        alt="Footer Image"
                        className="footer-image"
                        width={486} // Set the appropriate width
                        height={253} // Set the appropriate height
                      />
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade triggerOnce>
                <div className="footer-block">
                  <div className="footer-title">Links</div>
                  <div className="footer-link-wrapper">
                    <Link
                      href="/"
                      aria-current="page"
                      className="footer-link w--current"
                    >
                      Home
                    </Link>
                    <Link href="/about-us" className="footer-link">
                      About
                    </Link>
                    <Link
                      href="blog"
                      className="footer-link"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </Fade>
              <Fade triggerOnce>
                <div className="footer-block">
                  <div className="footer-title">Help</div>
                  <Link href="/contact-us" className="footer-link">
                    Contact Us
                  </Link>
                  <Link href="tel:+0832-6638703" className="footer-link">
                    +0832-6638703
                  </Link>
                  <Link
                    href="mailto:communication@sofueled.com"
                    className="footer-link"
                  >
                    communication@sofueled.com
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="w-layout-blockcontainer base-container w-container">
          <Fade triggerOnce>
            <div
              className="footer-bottom"
              data-w-id="1f4ff2e0-9f0c-13b1-0b75-b9a26afe3aed"
            >
              {/* <div className="footer-wrapper"> */}
              <div className="footer-links-wrap">
                <Link href="/privacy-policy" className="secondary-link">
                Privacy &amp; Terms
              </Link>
              <Link href="/cookie-policy" className="secondary-link">
                Cookies policy
              </Link>
              </div>
              <div className="footer-copyright">
                Copyright@ 2013-2024 Sofueled. All rights reserved.
              </div>
              <div className="footer-wrapper">
                <Link href="#" className="social-link w-inline-block">
                  <Image
                  loading="lazy"
                  width={10}
                  height={20}
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f691152fada763e5f8c45d_facebook.svg"
                    alt="facebook"
                  />
                </Link>
                <Link href="#" className="social-link w-inline-block">
                  <Image
                  loading="lazy"
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f69144e7bc08dbe3be3d88_twitter.svg"
                    alt="twitter"
                    width={24}
                  height={20}
                  />
                </Link>
                <Link href="#" className="social-link w-inline-block">
                  <Image
                  loading="lazy"
                    src="https://assets-global.website-files.com/656ffa7e742682775f88be13/65f6917435a8b452bbc63654_linkedin.svg"
                    alt="ln"
                    width={20}
                  height={20}
                  />
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
