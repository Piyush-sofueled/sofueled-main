// pages/_app.js
import '../public/css/App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../src/components/Navbar';
import FooterSection from '../src/components/FooterSection';

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Head>
        <link rel="icon" href="/images/targetLogo.webp" />
        <link rel="apple-touch-icon" href="/images/targetLogo.webp" />
        {/* <link rel="preload" as="image" href="/images/header.webp" /> */}
          {/* <link rel="preload" href="/fonts/Gordita-Font/Gordita-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" /> */}
      </Head>
      <Script
        src="//code.tidio.co/lwefldopvsrzwasskyarc0njzktzkuvh.js"
        strategy="worker"
        defer
      />
      <Navbar />
      <Component {...pageProps} />
      <FooterSection />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
