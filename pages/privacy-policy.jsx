import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// Dynamically import the PrivacyTitle and PrivacyBody components
const PrivacyTitle = dynamic(() => import("../src/components/PrivacyTitle"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Optional loading component
});

const PrivacyBody = dynamic(() => import("../src/components/PrivacyBody"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Optional loading component
});

export async function getStaticProps() {
  // You can fetch data here if needed, otherwise, return an empty object
  return {
    props: {}, // No props to pass
  };
}

const Privacy = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Sofueled - Privacy Policy</title>
        <meta name="description" content="Privacy Policy" />
        <meta property="twitter:title" content="Sofueled - Privacy Policy" />
      </Head>
      <PrivacyTitle />
      <PrivacyBody />
    </div>
  );
};

export default Privacy;
