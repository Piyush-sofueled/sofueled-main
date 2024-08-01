// pages/contact-us.js
import React from "react";
import dynamic from 'next/dynamic';
import Head from "next/head";

// Dynamically import the ContactUs component
const ContactUs = dynamic(() => import("../src/components/ContactUs"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Optional loading component
});

export async function getStaticProps() {
  // You can fetch data here if needed, otherwise, return an empty object
  return {
    props: {}, // No props to pass
  };
}

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Sofueled - Contact Us</title>
        <meta name="description" content="Contact us for any query" />
        <meta property="twitter:title" content="Sofueled - Contact Us" />
      </Head>
      <ContactUs />
    </div>
  );
};

export default ContactPage;
