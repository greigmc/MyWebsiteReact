import React from 'react';
import { Link } from "react-scroll";
import ReactPlayer from '../Components/Video/Video.jsx';
import './../App.css';


const HomeSection = () => {
  return (
    <section className="home-section bg-dark-30 w-100 vh-100 position-relative" id="home" data-background="assets/images/header.jpg">
      <div className="mbYTP_wrapper">
        <ReactPlayer />
      </div>
      {/* title */}
      <div className="titan-caption">
        <div className="caption-content">
          <div className="font-alt mb-30 titan-title-size-2">Hello &amp; Welcome to</div>
          <div className="font-alt mb-35 titan-title-size-3">Greig McMahon</div>
          <div className="font-alt mb-40 titan-title-size-4">Web Development</div>
          {/* <Link className="section-scroll btn btn-border-w btn-round" href="#about">Learn More</Link> */}
          <Link className="section-scroll btn btn-border-w btn-round"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
            delay={100}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;