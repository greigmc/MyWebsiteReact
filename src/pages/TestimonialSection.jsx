import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import ".././App.css";
// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function TestimonialSection() {
  const settings = {
    dots: true,
    pauseOnDotsHover: true,
    infinite: true,
    speed: 9000,
    arrows: false,
    autoplay: true,
    fade: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // adaptiveHeight: true,
  };

  const slidesData = [
    {
      id: 1,
      title: (
        <p>
          We release of CRO project on Monday, which Greig worked on. I must
          appreciate Greig has done a fantastic job in delivering the work load
          on time and with expected quality.
          <br />
          He has been charged up since day 1 and is amazing to work with.
        </p>
      ),
      label: (
        <em>
          Bharat Gujral - Delivery and Iteration Manager <br />
          iSelect
        </em>
      ),
    },
    {
      id: 2,
      title: (
        <p>
          I contacted Greig to help with the relaunch and redesign of our
          Intranet, after a brief consultation we agreed on a new design. Greig
          then made the changes and suggested other layout and display options
          to improve the ease of access and useability of our site. We at Ultra
          Tune, are more than happy with the high standard of work Greig
          provided.
        </p>
      ),
      label: (
        <em>
          Ben Madden - National Training Manager <br />
          Ultra Tune
        </em>
      ),
    },
    {
      id: 3,
      title: (
        <p>
          On working with Greig I soon realised his ability to take a brief and
          shape it into an efficient result. I have a reasonable understanding
          regarding the variables in web development; having managed several
          people in this field in the past; but without hesitation Greig met the
          brief and value added his presence which was super cool. Many Thanks
          Greig
        </p>
      ),
      label: (
        <em>
          David Martin - Brand &amp; Content Manager <br />
          Peak Property Group
        </em>
      ),
    },
    {
      id: 4,
      title: (
        <p>
          Greig has always been courteous and punctual. In his work, he has
          demonstrated a high level of professionalism, integrity and
          commitment. He has been extremely committed, embraced our procedures,
          platform and coding standards, can work independently or as part of a
          team and is able to complete tasks within strict deadlines.
        </p>
      ),
      label: (
        <em>
          Andrew Robinson - CEO <br />
          The Tubes
        </em>
      ),
    },
    {
      id: 5,
      title: (
        <p>
          Greig was initially hired to design and implement our website, which
          he done to the highest standard. He has also worked on our online
          marketing campaigns to increase the visibility of the website to new
          customers and also started our first social media marketing campaign.
          We found his attention to detail and workmanship second to none and I
          would happily recommend him for any future web development roles.
        </p>
      ),
      label: (
        <em>
          Martin Kean - Managing Director <br />
          Freeline Design 
        </em>
      ),
    },
    {
      id: 6,
      title: (
        <p>
          Greig was employed to build a new eCommerce website. He understands
          the vital importance of security and smooth functionality for
          websites, and applies the highest standards to the work he does in
          this regard. I can therefore recommend him to anyone who is looking
          for a web developer to make a new site or extend an existing one.
        </p>
      ),
      label: (
        <em>
          Susy MacAulay - Managing Editor <br />
          Island News &amp; Advertiser
        </em>
      ),
    },
  ];

  return (
    <section
      id="testimonial" className="bg-dark-60 pt-0 pb-0 parallax-bg testimonial position-relative w-100"
      // data-background="assets/images/004.jpg"
    >
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-md-8">
            <div className="quote">
              <FontAwesomeIcon
                className="icon-target"
                icon={faQuoteLeft}
                size="lg"
              />
            </div>
            <div
              className="slide mb-60 mt-20"
              id="fade-quote-carousel"
              data-ride="carousel"
              data-interval="16000"
            >
              <Slider {...settings}>
                {slidesData.map((slide, i) => (
                  <div className="carousel-inner" key={i}>
                    <div className="item">
                      <blockquote>
                        <div>
                          {slide.title}
                          {slide.label}
                        </div>
                      </blockquote>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
