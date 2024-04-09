import React from "react";
// import {Link} from "react-router-dom";

import NavBarOne from "../../../Navigation/NavBarOne";
import Footer from "../../../Footer/Footer";

function DavidJones() {
    return (
      <div>
      <NavBarOne />
      <section className="module-small">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <div className="post">
                 <a href="https://www.davidjones.com/" target="_blank" rel="noreferrer">
                  <div className="post-thumbnail">
                  <img src="https://greigmcmahon.com/assets/images/portfolio/david-jones.png" alt=""/>
                  </div>
                 </a>
                  <div className="post-header font-alt">
                    <h1 className="post-title">David Jones</h1>
                    <div className="post-meta">Visit Website: 
                    <a href="https://www.davidjones.com/" target="_blank" rel="noreferrer"> David Jones</a><br />
                    Company:<a> The Destination Group</a>
                    </div>
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
                    <a href="#" rel="tag">HTML5</a>
                    <a href="#" rel="tag">CSS3</a>
                    <a href="#" rel="tag">Bootstrap</a>
                    <a href="#" rel="tag">Javascript</a>
                    <a href="#" rel="tag">jQuery</a>
                    <a href="#" rel="tag">PHP</a>
                    <a href="#" rel="tag">Photoshop</a>
                    <a href="#" rel="tag">inVision</a>

                  </div>
                </div>
               
                 <div className="widget">
                  <h5 className="widget-title font-alt">Popular Posts</h5>
                  <ul className="widget-posts">
                    <li className="clearfix">
                      <div className="widget-posts-image"><a href="01.html"><img src="../assets/images/posts/001.png" alt="Post Thumbnail"/></a></div>
                      <div className="widget-posts-body">
                        <div className="widget-posts-title"><a href="#">FRONT-END DEVELOPER – THE OBSTACLES</a></div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="widget-posts-image"><a href="02.html"><img src="../assets/images/posts/002.jpg" alt="Post Thumbnail"/></a></div>
                      <div className="widget-posts-body">
                        <div className="widget-posts-title"><a href="#">HTML5 &amp; CSS Validation</a></div>
                      </div>
                    </li>
                     <li className="clearfix">
                      <div className="widget-posts-image"><a href="03.html"><img src="../assets/images/posts/003.jpg" alt="Post Thumbnail"/></a></div>
                      <div className="widget-posts-body">
                        <div className="widget-posts-title"><a href="#">MOBILE FIRST, CONTENT FIRST</a></div>
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
  }
  
  export default DavidJones;