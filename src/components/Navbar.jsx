import React, { useState} from "react";
import { Fade } from "react-awesome-reveal";
import Image from 'next/image';
import Link from "next/link";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      setTimeout(() => {
        setAnimateMenu(true);
      }, 10); // Adding a small delay to ensure the class is added after the menu is set to open
    } else {
      setAnimateMenu(false);
      setTimeout(() => {
        setMenuOpen(false);
      }, 400); // Match this delay with your CSS transition duration
    }
  };




  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <Fade delay={100} triggerOnce>
        <div
          //  style={menuOpen ? { position:"relative",zIndex:"1000"} :{}}
          className="primary-container w-container"
        >
          <div className="nav-content-wrapper">
            <Link
              href="/"
              aria-current="page"
              className="brand w-nav-brand w--current"
              aria-label="home"
            >
              <Image
                 src="/images/sofueled-logo.webp"
                 priority
                 alt="Logo"
                 width={170}
                 height={50}
                className="logo"
              />
            </Link>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <Link
                href="/"
                aria-current="page"
                className="nav-link w-nav-link w--current"
                style={{ maxWidth: "1280px" }}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1280px" }}
              >
                About
              </Link>
              
              <Link
                href="/blog"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1280px" }}
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1280px" }}
              >
                Contact
              </Link>
              
            </nav>
            <div
              onClick={toggleMenu}
              className="menu-icon w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabIndex="0"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="w-icon-nav-menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24px" height="24px">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
</svg>

              </div>
            </div>
            <div className="nav-button">
              <Link
                data-w-id="44ef9563-0a29-817e-8966-8ac625fb2b6a"
                href="tel:+0832-6638703"
                className="talk-link decoration-none w-inline-block"
              >
                <div className="talk-text-block">
                  <div className="talk-text">Let&apos;s Talk</div>
                  <div className="talk-text-phone-no">
                    <div className="talk-text">+0832-6638703</div>
                  </div>
                </div>
                <div className="header-one-call-icon-div">
                  <Image
                    src="https://cdn.prod.website-files.com/6643023b4ee2922ec7688425/66443de700da19bfc8cdc480_Phone%20icon%20.svg"
                    alt="Phone Icon"
                    width="15"
                    height="15"
                    className="header-one-call-icon"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
      <div
        style={menuOpen ? { display: "block", height: "500px" } : {}}
        className={`w-nav-overlay ${menuOpen ? "overlayOpen" : ""}
        `}
        data-wf-ignore=""
        id="w-nav-overlay-0"
      >
        <nav
          role="navigation"
          className={`nav-menu w-nav-menu ${animateMenu ? "animate" : ""} ${
            menuOpen ? "menuOpen" : ""
          }`}
          data-nav-menu-open
        >
          <Link
            href="/"
            aria-current="page"
            className="nav-link w-nav-link w--current w--nav-link-open"
            style={{ maxWidth: 1690 }}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="nav-link w-nav-link w--nav-link-open"
            style={{ maxWidth: 1690 }}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="nav-link w-nav-link w--nav-link-open"
            style={{ maxWidth: 1690 }}
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className="nav-link w-nav-link w--nav-link-open"
            style={{ maxWidth: 1690 }}
          >
            Contact
          </Link>
          
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
