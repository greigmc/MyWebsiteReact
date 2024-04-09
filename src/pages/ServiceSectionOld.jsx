import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPenToSquare,
  faGlobe,
  faCloud,
  faEnvelope,
  faRectangleAd,
} from "@fortawesome/free-solid-svg-icons";
import "./../App.css";

const ServiceSection = () => {
  return (
    <section id="services" className="w-100 position-relative">
      <div className="row justify-content-around">
        {/* Side Image  */}
        <div className="col-lg-6 col-md-12 col-sm-12 service-image"></div>
        {/* Service Section */}
        <div className="col-lg-6 col-md-12 col-sm-12 my-0 p-4 mb-5">
          <h1 className="module-title font-alt text-center">MY SERVICES</h1>
          <div className="module-subtitle font-serif">
            I build distinctive, modern, clean, accessible websites that look
            good and function perfectly.
          </div>
          <div className="row multi-columns-row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faCode} />
                </div>
                <h3 className="alt-features-title font-alt">WEB DEVELOPMENT</h3>
                Web Development is the major factor on how the website will
                function on the internet and relies on skills like modern
                computer languages, script validation, database development, web
                services and internet technologies. Being an experienced
                qualified web developer I can guarantee the best possible
                functionality for your business website at an honest affordable
                price.
              </div>
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faCloud} />
                </div>
                <h3 className="alt-features-title font-alt">HOSTING</h3>
                Choosing the right web hosting package that best suits your
                website can be confusing and costly. I offer cost-efficient
                hosting packages that best suit the websites requirements and
                take in to consideration factors like disk space, speed,
                bandwidth allotment. I also offer hosting packages to websites
                that I have not built.
              </div>

              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faEnvelope} />
                </div>
                <h3 className="alt-features-title font-alt">EMAIL MARKETING</h3>
                Email marketing allows you to connect with your customer in a
                highly personalized way, while staying within your budget, while
                some marketing trends come and go, email remains the most
                powerful channel available to the modern market. I will build
                your marketing campaign using all modern day technologies that
                work on all devices and designed towards your target market.
              </div>

              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon
                    className="icon-tools"
                    icon={faPenToSquare}
                  />
                </div>
                <h3 className="alt-features-title font-alt">WEB DESIGN</h3>
                Web design is about more than just creating and implementing a
                design and content. Correct methods such as readable fonts,
                layout, colours used, information architecture, site structure
                and navigation are essential and are implemented in to every
                website I build. Existing websites projects can also be modified
                and redesigned to suit a modern day standard.
              </div>
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faGlobe} />
                </div>
                <h3 className="alt-features-title font-alt">DOMAIN</h3>
                It is essential that you choose the right domain name as it
                serves as the headline for your business and can be just as
                important as the business name or logo. There are many right and
                wrong methods in this process. Contact me to discuss what best
                domain name suits your business.
              </div>
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon
                    className="icon-tools"
                    icon={faRectangleAd}
                  />
                </div>
                <h3 className="alt-features-title font-alt">
                  WEB BANNERS (HTML5)
                </h3>
                A web banner is an advertisement displayed into a web page.
                Banner ads are intended generate traffic and customers to a
                website by linking to it. With the web platform flash all but
                absolute all banners will be built using HTML5, CSS &amp;
                JavaScript thus allowing your banner to work on all modern day
                devices.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start your project */}
      <div className="bg-dark pt-40 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-6 col-lg-offset-2">
              <div className="callout-text font-alt">
                <h3 className="callout-title">
                  Are you excited to start your project?
                </h3>
                <p>Get Started</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="callout-btn-box">
                <Link
                  className="section-scroll btn btn-w btn-round section-scroll"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                  delay={100}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
