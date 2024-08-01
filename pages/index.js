import React from 'react';
import HeroSection from '../src/components/HeroSection'; // Static import for HeroSection
import dynamic from 'next/dynamic';
import Head from "next/head";
import Script from 'next/script';

// Dynamically import components to reduce initial bundle size
const ClientLogoSection = dynamic(() => import('../src/components/ClientLogoSection'), { 
  ssr: false // This disables server-side rendering for this component
});
const AboutSection = dynamic(() => import('../src/components/AboutSection'), { 
  ssr: false
});
const ServiceSection = dynamic(() => import('../src/components/ServiceSection'), { 
  ssr: false
});
const NewTestimonial = dynamic(() => import('../src/components/NewTestimonial'), { 
  ssr: false
});
const ChooseUsSection = dynamic(() => import('../src/components/ChooseUsSection'), { 
  ssr: false
});
const BlogSection = dynamic(() => import('../src/components/BlogSection'), { 
  ssr: false
});

export async function getStaticProps() {
  // You can fetch data here if needed, otherwise, return an empty object
  return {
    props: {}, // No props to pass
  };
}

const HomePage = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Sofueled - Building delightful customer experience</title>
        <meta name="description" content="Building delightful customer experience" />
        <meta property="twitter:title" content="Sofueled" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5VT0TWZVEF"
        strategy="worker"
      />
      <Script id="gtag-setup" strategy="worker">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5VT0TWZVEF');
        `}
      </Script>
      <HeroSection />
      {/* Lazy-loaded components */}
      <ClientLogoSection />
      <AboutSection />
      <ServiceSection />
      <NewTestimonial />
      <ChooseUsSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
