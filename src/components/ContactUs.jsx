import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Fade } from "react-awesome-reveal";


const ContactUs = () => {
  const [state, handleSubmit] = useForm("mqazeede");

  return (
    <section className="contact-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="contact-area">
          <div className="w-layout-grid contact-grid">
            <Fade direction="left" triggerOnce>
              <div
                id="w-node-_63227620-55aa-63ac-6e84-139eda81043c-cdeec3a1"
                data-w-id="63227620-55aa-63ac-6e84-139eda81043c"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="contact-main-wrap"
              >
                <div className="contact-form w-form">
                  {state.succeeded ? (
                    <p className="section-title">
                      Thank you for your message. We will get back to you soon!
                    </p>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="contact-form-area"
                      aria-label="Contact Form"
                    >
                      <div className="contact-field-area">
                        <div className="contact-field-wrap">
                          <label htmlFor="name" className="contact-label">
                            Full name
                          </label>
                          <input
                            className="contact-input-field w-input"
                            maxLength="256"
                            name="name"
                            data-name="Name"
                            placeholder="Susan Jose"
                            type="text"
                            id="name"
                            required
                            minLength="2"
                            pattern="[A-Za-z\s]*" // Ensures only alphabets and spaces
                            title="Name must be at least two characters long and contain only letters and spaces"
                            onInput={(e) =>
                              (e.target.value = e.target.value.replace(
                                /[^A-Za-z\s]/g,
                                ""
                              ))
                            }
                          />
                          <ValidationError
                            className="error"
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                          />
                        </div>
                        <div className="contact-field-wrap">
                          <label htmlFor="email" className="contact-label">
                            Email address
                          </label>
                          <input
                            className="contact-input-field w-input"
                            maxLength="256"
                            name="email"
                            data-name="Email"
                            placeholder="youremail@domain.com"
                            type="email"
                            id="email"
                            required
                          />
                          <ValidationError
                            className="error"
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                          />
                        </div>
                      </div>
                      <div className="contact-field-area">
                        <div className="contact-field-wrap">
                          <label htmlFor="phone" className="contact-label">
                            Phone
                          </label>
                          <input
                            className="contact-input-field w-input"
                            maxLength="10"
                            name="phone"
                            data-name="Phone"
                            placeholder="1234567890"
                            type="tel"
                            id="phone"
                            required
                            inputMode="numeric" // Ensures numeric keyboard on mobile devices
                            onInput={(e) =>
                              (e.target.value = e.target.value.replace(
                                /\D/g,
                                ""
                              ))
                            }
                            minLength="10" // Minimum length of 10 digits
                            pattern="\d{10,}" // Ensures at least 10 digits
                            title="Please enter at least 10 digits"
                          />
                          <ValidationError
                            prefix="Phone"
                            field="phone"
                            errors={state.errors}
                          />
                        </div>
                        <div className="contact-field-wrap">
                          <label htmlFor="subject" className="contact-label">
                            Subject
                          </label>
                          <input
                            className="contact-input-field w-input"
                            maxLength="256"
                            name="subject"
                            data-name="Subject"
                            placeholder="Business"
                            type="text"
                            id="subject"
                          />
                          <ValidationError
                            prefix="Subject"
                            field="subject"
                            errors={state.errors}
                          />
                        </div>
                      </div>
                      <div className="contact-field-wrap">
                        <label htmlFor="message" className="contact-label">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          maxLength="5000"
                          data-name="Message"
                          placeholder="Type your message here..."
                          className="contact-input-field text-area w-input"
                        ></textarea>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>
                      <div className="conatct-button-wrap">
                        <button
                          type="submit"
                          className="dark-button contact-button w-button"
                          disabled={state.submitting}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </Fade>
            <div
              id="w-node-_4401d320-6da1-bfb8-80ea-1aac80fb7861-cdeec3a1"
              data-w-id="4401d320-6da1-bfb8-80ea-1aac80fb7861"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="contact-content-area"
            >
              <Fade direction="right" triggerOnce>
                <div className="section-title-wrap">
                  <h2 className="section-title">Reach Out and Connect</h2>
                  <div className="section-content-wrap">
                    <p>
                      Reach out to our team for expert business consulting
                      services tailored to your needs.
                    </p>
                  </div>
                </div>
                <div className="contact-address-area">
                  <div className="contact-address-wrap">
                    <div
                      className="contact-icon-wrap"
                      style={{ backgroundColor: "rgb(245, 245, 245)" }}
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65eaed5f58e28b95d67ad1e8/65fd4c2e4510d574b1fba5be_email-initial-icon.svg"
                        loading="lazy"
                        alt="mail initial icon"
                        className="contact-initial-icon"
                        style={{ opacity: 1 }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65eaed5f58e28b95d67ad1e8/65fd4c37088caa74fe425740_email-hover-icon.svg"
                        loading="lazy"
                        alt="mail hover icon"
                        className="contact-hover-icon"
                        style={{ opacity: 0 }}
                      />
                    </div>
                    <div className="contact-address">
                      <h3 className="contact-address-title">Email</h3>
                      <a
                        href="mailto:communication@sofueled.com"
                        className="contact-address-link"
                      >
                        communication@sofueled.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-address-wrap">
                    <div
                      className="contact-icon-wrap"
                      style={{ backgroundColor: "rgb(245, 245, 245)" }}
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65eaed5f58e28b95d67ad1e8/65fd4c3017baef5d2b0c6675_call-initial-icon.svg"
                        loading="lazy"
                        alt="call initial icon"
                        className="contact-initial-icon"
                        style={{ opacity: 1 }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65eaed5f58e28b95d67ad1e8/65fd4c2e6543058f06348c2a_call-hover-icon.svg"
                        loading="lazy"
                        alt="call hover icon"
                        className="contact-hover-icon"
                        style={{ opacity: 0 }}
                      />
                    </div>
                    <div className="contact-address">
                      <h3 className="contact-address-title">Phone</h3>
                      <a
                        href="tel:+0832-6638703"
                        className="contact-address-link"
                      >
                        +0832-6638703
                      </a>
                    </div>
                  </div>
                  <div className="contact-address-wrap">
                    <div
                      className="contact-icon-wrap"
                      style={{ backgroundColor: "rgb(245, 245, 245)" }}
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65eaed5f58e28b95d67ad1e8/65fd4c2e3343c53626ac78a1_location-initial-icon.svg"
                        loading="lazy"
                        alt="location initial icon"
                        className="contact-initial-icon"
                        style={{ opacity: 1 }}
                      />
                      <img
                        src="https://cdn.prod.website-files.com/65eaed5f58e28b95d67ad1e8/65fd4c2ef04ba59536ee1ace_location-hover-icon.svg"
                        loading="lazy"
                        alt="location hover icon"
                        className="contact-hover-icon"
                        style={{ opacity: 0 }}
                      />
                    </div>
                    <div className="contact-address">
                      <h3 className="contact-address-title">Location</h3>
                      <p className="contact-address-text">
                        Silvio heights, A-16, 6th floor, St.Inez, Panaji Goa
                        403002
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
