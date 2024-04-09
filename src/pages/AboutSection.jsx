import React from "react";
import { Link } from "react-scroll";
import profile from ".././assets/images/profile.jpg";
// import Button from 'react-bootstrap/Button';

import "./../App.css";

const AboutSection = () => {
  return (
    <section id="about" className="mb-4 position-relative w-100">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="module-title font-alt">About
            </h1>
            <div className="module-subtitle font-serif">
              “Without good design it is easy to miss the point.”
            </div>
          </div>
        </div>
        <section className="mb-20 mt-20">
          <div className="container mb-4 mb-md-5 mb-xl-6">
            <div className="row justify-content-md-center">
              <div className="row"></div>
              <div className="col-lg-5 col-md-8">
                <div className="black thick frame">
                  <img src={profile} alt="Logo" />
                </div>
              </div>
              {/* <div className="col-12 col-md-1"></div> */}
              <div className="col-lg-7 order-md-1 col-md-12">
                <div className="text-center mt-4 mt-lg-0">
                  <h2>Greig McMahon, Web Developer</h2>
                  <hr className="mx-auto ms-md-0 mb-4 text-secondary" />
                  <p className="about-section">
                    As a web developer, I am passionate about creating engaging and user-friendly websites. With strong technical skills and a creative mindset, I strive to deliver innovative solutions that exceed client expectations.
                  </p>
                  <p className="about-section">
                  My expertise lies in full stack web development, my passion lies in front-end development. I am adept at translating design concepts into pixel-perfect websites while ensuring cross-browser compatibility and responsiveness. I am constantly staying up to date with the latest industry trends and best practices to deliver modern and visually appealing interfaces.                   </p>
                  <p className="about-section">
                    In addition to my technical skills, I possess excellent problem-solving abilities and a keen eye for detail. I enjoy collaborating with clients to understand their unique requirements and deliver tailored solutions.
                  </p>
                </div>
                <div className="text-center me-md-3 me-xl-5">
                  <p className="mb-4">
                    <span className="module-subtitle font-serif">
                      13+ years of experience
                    </span>
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link
                      className="btn btn-light btn-lg section-scroll"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={200}
                      delay={100}
                    >
                      Hire Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row multi-columns-row post-columns"></div>
      </div>
    </section>
  );
};

export default AboutSection;
