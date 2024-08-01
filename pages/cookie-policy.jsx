import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// Dynamically import the CookieTitle and CookieBody components
const CookieTitle = dynamic(() => import("../src/components/CookieTitle"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Optional loading component
});

const CookieBody = dynamic(() => import("../src/components/CookieBody"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Optional loading component
});

export async function getStaticProps() {
  // You can fetch data here if needed, otherwise, return an empty object
  return {
    props: {}, // No props to pass
  };
}

const CookiePage = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Sofueled - Cookie Policy</title>
        <meta name="description" content="Cookie Policy" />
        <meta property="twitter:title" content="Sofueled - Cookie Policy" />
      </Head>
      <CookieTitle />
      <CookieBody />
    </div>
  );
};

export default CookiePage;
