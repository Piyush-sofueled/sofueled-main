import React from 'react';
import dynamic from 'next/dynamic';
import Head from "next/head";

// Static imports for components in the upper fold
import AboutHero from "../src/components/AboutHero";

// Dynamic imports for other components
const AboutServiceSection = dynamic(() => import('../src/components/AboutServiceSection'), { 
  ssr: false // Disable server-side rendering for this component
});
const Technology = dynamic(() => import('../src/components/Technology'), { 
  ssr: false
});
const AboutChooseSection = dynamic(() => import('../src/components/AboutChooseSection'), { 
  ssr: false
});
const LogoSection = dynamic(() => import('../src/components/LogoSection'), { 
  ssr: false
});

// This function runs at build time to pre-render the page
export async function getStaticProps() {
  // Fetch data if needed; otherwise, return an empty object
  return {
    props: {}, // No props to pass
  };
}

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Sofueled - About Us</title>
        <meta name="description" content="Learn more about Sofueled" />
        <meta property="twitter:title" content="Sofueled - About Us" />
      </Head>
      <AboutHero />
      {/* Lazy-loaded components */}
      <AboutServiceSection />
      <Technology />
      <AboutChooseSection />
      <LogoSection />
    </div>
  );
};

export default AboutPage;
