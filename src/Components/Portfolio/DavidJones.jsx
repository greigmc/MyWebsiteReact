import React from "react";
import {Link} from "react-router-dom";

// import { BrowserRouter } from "react-router-dom";
import NavBar from "./../../Navigation/NavBar";
import Footer from "./../../Footer/Footer";
import "./../../Linkpp.css";

const DavidJones = () => {
  return (
    <div>
      <NavBar />
      {/* <section className="DavidJones" id="home"> */}
      <section className="module-small">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <div className="post">
                 <Link href="http://jlra-online.com.au/" target="_blank"><div className="post-thumbnail">
                  <img src="https://greigmcmahon.com/Linkssets/images/portfolio/david-jones.png" alt="Blog Featured"/>
                  </div>
                  </Link>
                  <div className="post-header font-alt">
                    <h1 className="post-title">Jaguar Land Rover Launch</h1>
                    {/* <div className="post-meta">Visit Website: <Link href="http://jlra-online.com.au/" target="_blank"> Jaguar Land Rover Launch</Link><br>
                    Company:<Link> The Destination Group</Link>
                    </div> */}
                  </div>
                  <div className="post-entry">
                    <em>*Content is currently being rewritten for this section</em>
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <h4>Brief </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <h4>Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                  </div>
                </div>
              </div>

              {/* Start of sidebar */}
              <div className="col-sm-4 col-md-3 col-md-offset-1 sidebar">
                <div className="portfolio-sidebar widget">
                  <h5 className="widget-title font-alt">Technologies Used</h5>
                  <div className="tags font-serif">
                  <Link
                    className="section-scroll"
                    to="web-dev"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={200}
                    delay={100}>  
                      HTML5
                    </Link>
                    <Link
                    className="section-scroll"
                    to="web-dev"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={200}
                    delay={100}>  
                      CSS3
                    </Link>
                    <Link
                    className="section-scroll"
                    to="web-dev"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={200}
                    delay={100}>  
                      Bootstrap
                    </Link>
                    <Link
                    className="section-scroll"
                    to="web-dev"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={200}
                    delay={100}>  
                      JavaScript
                    </Link>
                    <Link
                    className="section-scroll"
                    to="web-dev"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={200}
                    delay={100}>  
                      jQuery
                    </Link>
                    <Link
                    className="section-scroll"
                    to="web-dev"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={200}
                    delay={100}>  
                      PHP
                    </Link>
                    <Link
                    className="section-scroll"
                    to="web-dev"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={200}
                    delay={100}>  
                      inVision
                    </Link>
                  </div>
                </div>
               
                 <div className="widget">
                  <h5 className="widget-title font-alt">Popular Posts</h5>
                  <ul className="widget-posts">
                    <li className="clearfix">
                      {/* <div className="widget-posts-image"><Link href="01.html"><img src="../Linkssets/images/posts/001.png" alt="Post Thumbnail"/></Link></div> */}
                      <div className="widget-posts-body">
                        {/* <div className="widget-posts-title"><Link href="#">FRONT-END DEVELOPER – THE OBSTACLES</Link></div> */}
                      </div>
                    </li>
                    <li className="clearfix">
                      {/* <div className="widget-posts-image"><Link href="02.html"><img src="../Linkssets/images/posts/002.jpg" alt="Post Thumbnail"/></Link></div> */}
                      <div className="widget-posts-body">
                        {/* <div className="widget-posts-title"><Link href="#">HTML5 &amp; CSS Validation</Link></div> */}
                      </div>
                    </li>
                     <li className="clearfix">
                      {/* <div className="widget-posts-image"><Link href="03.html"><img src="../Linkssets/images/posts/003.jpg" alt="Post Thumbnail"/></Link></div> */}
                      <div className="widget-posts-body">
                        {/* <div className="widget-posts-title"><Link href="#">MOBILE FIRST, CONTENT FIRST</Link></div> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>        
        <Footer />
    </div>

  );
};
  
  export default DavidJones;