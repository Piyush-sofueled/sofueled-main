import React from "react";
import { Fade } from "react-awesome-reveal";

const cookieContent = [
//   {
//     heading: "Introduction",
//     text: (
//       <span>
//         This policy outlines how Sofueled Media Pvt. Ltd. utilizes cookies and
//         similar tools on our website,{" "}
//         <a
//           href="https://www.sofueled.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           https: // www.sofueled.com
//         </a>
//         . We aim to provide you with a clear understanding of what cookies are,
//         their purpose on our site, and how you can manage them.
//       </span>
//     ),
//   },
  {
    heading: (
      <span>
        What are cookies<span style={{ fontFamily: "sans-serif" }}>?</span>
      </span>
    ),
    text: (
      <span>
        Cookies are tiny data files stored on your computer or phone when you
        browse websites. They help sites run smoothly, remember your
        preferences, and give site owners insights into user behavior.
      </span>
    ),
  },
  {
    heading: "How we use cookies",
    text: (
      <span>
        We use different types of cookies on our website:
        <ul>
          <li>
            <strong>Essential Cookies:</strong> These are crucial for the
            website to work properly, allowing you to browse and access secure
            sections.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> These help us anonymously gather
            data on how visitors use our site, so we can make improvements based
            on this information.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> These enable the website to
            remember your preferences (like language) and offer you a more
            personalized experience.
          </li>
          <li>
            <strong>Advertising and Marketing Cookies:</strong> These are used
            to show you ads relevant to your interests, limit how often you see
            the same ad, and measure the success of ad campaigns.
          </li>
        </ul>
      </span>
    ),
  },
  {
    heading: "Your choices regarding cookies",
    text: (
      <span>
        <p className="privacy-text-div">
          You have options for controlling and managing cookies. While most web
          browsers accept cookies by default, you can usually change your
          browser settings to reject them if you want. However, this might stop
          you from enjoying all the website&apos;s features.
        </p>
        You can also manage your cookie preferences directly on our website. We
        show a cookie consent banner on your first visit, where you can choose
        which types of cookies you&apos;re okay with. You can change these
        preferences anytime by clicking &quot;Cookie Settings&quot; at the bottom of our
        website.
      </span>
    ),
  },
  {
    heading: "Third-party cookies",
    text: (
      <span>
        In addition, we might allow other companies who provide services to us
        to use cookies on our website for the purposes mentioned earlier. These
        could be analytics firms, ad networks, or social media platforms. We
        don&apos;t have control over their cookies, so we suggest checking their
        cookie policies for more details.
      </span>
    ),
  },
  {
    heading: "Changes to this Cookie Policy",
    text: (
      <span>
        This Cookie Policy might be updated occasionally to match any changes in
        our practices or for other business, legal, or regulatory reasons. When
        this happens, we&apos;ll post the updated policy here with a new effective
        date.
      </span>
    ),
  },
  {
    heading: "Contact Us",
    text: (
      <span>
        <div className="privacy-text-div">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </div>
        Sofueled Media Pvt. Ltd.
        <br />
        Silvio Height, A-16, 6th Floor, St.Inez, Panaji Goa 403002
        <br />
        Email:{" "}
        <a
          style={{ textDecoration: "none", color: "#000000" }}
          href="mailto:communication@sofueled.com"
        >
          communication@sofueled.com
        </a>
      </span>
    ),
  },
];

const CookieBody = () => {
  return (
    <div className="licensing-font">
      <div className="w-layout-blockcontainer container-wrapper w-container">
      <Fade delay={200} triggerOnce>
        <p className="license-details">
          This policy outlines how Sofueled Media Pvt. Ltd. utilizes cookies and
          similar tools on our website,{" "}
          <a
            href="https://www.sofueled.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https: // www.sofueled.com
          </a>
          . We aim to provide you with a clear understanding of what cookies
          are, their purpose on our site, and how you can manage them.
        </p>
        </Fade>
        {cookieContent.map((item, index) => (
          <Fade key={index} delay={200} triggerOnce>
            <div key={index} className="licensing-title">
              <h2
                data-w-id={`heading-${index}`}
                className="licensing-secrtion-heading"
              >
                {index + 1}. {item.heading}
              </h2>
              <div
                data-w-id={`paragraph-${index}`}
                className="license-details"
              >
                {item.text}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default CookieBody;
