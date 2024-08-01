import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "I have had the pleasure of working with the company providing services to my company. I have been very impressed. The founder has a commitment to his clients that is exceptional. The support goes beyond what is in the agreement. Their capabilities are also excellent. I am sure the team has a bright future ahead!",
    name: "Tony Saldhana",
    title:
      "Former VP, Global Business Services & IT at P&G and Cofounder of Inixia",
    avatar: "/images/Tony-Saldhanha.webp",
  },
  {
    quote: "It was wonderful interaction with the Team Sofueled",
    name: "Capt Uday Shriwas",
    title:
      "Former Head - Institutional vertical : Industrial and Domestic Products - IFB Inustries, Regional Head - IDFC First Bank",
    avatar: "/images/Captain-Uday.webp",
  },
  // Add more testimonials as needed
];

const NewTestimonial = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Define the function to check if the window width is less than or equal to 768px
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Check the initial window width
    checkIsMobile();
    
    // Add the resize event listener
    window.addEventListener("resize", checkIsMobile);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 1.14,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: !isMobile,
    centerPadding: isMobile ? "0px" : "130px",
    swipe: false,
  };

  return (
    <section className="testimonial-section-new">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="section-heading-wrapper">
          <Fade delay={100} direction="up" triggerOnce>
            <div className="title">Testimonials</div>
          </Fade>
          <Fade delay={200} direction="up" triggerOnce>
            <h1 className="testimonial-headingNew">
              See What They Say <br /> About Us
            </h1>
          </Fade>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-left-column">
            <Fade delay={300} direction="up" triggerOnce>
              <p className="base-paragraph medium-gray">
                Innovative solutions with real-world impact are achieved by
                combining creative ideas, collaborative connections,
                cutting-edge technology, and forward-thinking development
                strategies.
              </p>
            </Fade>
          </div>
          <div className="testimonial-right-column">
            <div
              className="slider-arrow hidden"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <Image
                src="https://assets-global.website-files.com/6629cd1d9dc0f70a2935266f/662f0ef00acef96920a619aa_Slider%20arrow%20Left.webp"
                loading="lazy"
                width="15"
                height="15"
                alt=""
              />
            </div>
            <div
              className="slider-arrow hidden"
              onClick={() => sliderRef.current.slickNext()}
            >
              <Image
                src="https://assets-global.website-files.com/6629cd1d9dc0f70a2935266f/662f0ef04e60e3ebb5012186_Slider%20arrow%20Right.webp"
                loading="lazy"
                width="15"
                height="15"
                alt=""
              />
            </div>
          </div>
        </div>
        <Fade delay={700} triggerOnce>
          <div className="slider-wrapper">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="slider-item w-slide">
                  <div className="testimonial-card">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="81"
                      height="64"
                    >
                      <path
                        d="M0 0 C5.01791684 2.41935276 8.49958655 5.9991731 11 11 C11.2734375 13.43359375 11.2734375 13.43359375 11.375 16.4375 C11.42398438 17.40558594 11.47296875 18.37367187 11.5234375 19.37109375 C10.17702598 28.70554375 4.28505771 37.49237466 -0.0625 45.75 C-0.57876953 46.73871094 -1.09503906 47.72742187 -1.62695312 48.74609375 C-4.32258551 53.8901158 -7.07720416 58.98148245 -10 64 C-14.06225548 63.42176904 -16.84762346 62.10882263 -20.3125 59.9375 C-21.19550781 59.38964844 -22.07851563 58.84179688 -22.98828125 58.27734375 C-23.65214844 57.85582031 -24.31601562 57.43429688 -25 57 C-23.71663984 53.66790224 -22.29046548 50.50895417 -20.6171875 47.35546875 C-20.17246094 46.51435547 -19.72773437 45.67324219 -19.26953125 44.80664062 C-18.80933594 43.94232422 -18.34914063 43.07800781 -17.875 42.1875 C-17.40707031 41.30384766 -16.93914063 40.42019531 -16.45703125 39.50976562 C-15.30692397 37.33864475 -14.15451854 35.1687774 -13 33 C-13.48283447 32.67749268 -13.96566895 32.35498535 -14.46313477 32.02270508 C-15.09533936 31.58853271 -15.72754395 31.15436035 -16.37890625 30.70703125 C-17.00611572 30.28139893 -17.6333252 29.8557666 -18.27954102 29.41723633 C-22.23188189 26.1614766 -22.89739026 21.92348765 -23.4375 17.0625 C-23.18645373 11.66500521 -21.11512583 7.43327847 -17.59765625 3.38671875 C-12.47109857 -1.0629829 -6.4729352 -0.97229068 0 0 Z "
                        fill="#FF6B2C"
                        transform="translate(70,0)"
                      />
                      <path
                        d="M0 0 C5.23758515 2.74403918 8.02625414 6.81704368 9.859375 12.31640625 C11.2332871 24.68161511 3.48629229 36.42252609 -2.265625 46.87890625 C-2.88566406 48.02681641 -3.50570313 49.17472656 -4.14453125 50.35742188 C-9.10041245 59.46451969 -9.10041245 59.46451969 -12.140625 63.31640625 C-17.45089754 61.8560813 -21.60392532 59.33319639 -26.140625 56.31640625 C-24.51380035 50.61317041 -21.80864513 45.63626722 -19.015625 40.44140625 C-18.54769531 39.56226563 -18.07976563 38.683125 -17.59765625 37.77734375 C-16.4494157 35.62146354 -15.29698597 33.46793848 -14.140625 31.31640625 C-14.91921875 31.03796875 -15.6978125 30.75953125 -16.5 30.47265625 C-20.33694642 28.7925732 -22.29305525 26.01154574 -24.140625 22.31640625 C-24.66841767 16.10469255 -24.88466143 10.55805725 -21.140625 5.31640625 C-15.00037229 -0.6928544 -8.45100694 -2.69877046 0 0 Z "
                        fill="#FF6B2C"
                        transform="translate(26.140625,0.68359375)"
                      />
                    </svg>
                    <h2 className="h4">{testimonial.quote}</h2>
                    <div className="testimonial-profile-wrapper">
                      <div className="profile-image-wrapper">
                        <Image
                          src={testimonial.avatar}
                          loading="lazy"
                          width="64"
                          height="64"
                          alt=""
                          className="profile-image"
                        />
                      </div>
                      <div className="profile-info-wrapper">
                        <p className="name">{testimonial.name}</p>
                        <p className="small-paragraph">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default NewTestimonial;
