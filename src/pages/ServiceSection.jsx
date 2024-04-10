import React from "react";
import { Link } from "react-scroll";
// import Cover from "../Components/Particles/Particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMagnifyingGlass,
  // fasearchengin,
  faImages,
  faChartLine,
  faDesktop,  
  // faPen,
  faGlobe,
  faCloud,
  faEnvelope,
  faRectangleAd,
  // faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./../App.css";

const ServiceSection = () => {
  return (
    <section id="services" className="position-relative w-100">
      <div className="row justify-content-around">
        {/* Side Image  */}
        <div className="col-lg-6 col-md-12 col-sm-12 service-image"></div>
        {/* <div className="col-lg-6 col-md-12 col-sm-12 position-relative service-image ">
          <div className="h-100 w-100 position-absolute tsparticles" id="tsparticles">
            <Cover />
          </div>
        </div> */}
        {/* Service Section */}
        <div className="col-lg-12 col-md-12 col-sm-12 my-0 p-4 mb-5">
          <h1 className="module-title font-alt text-center">MY SERVICES</h1>
          <div className="module-subtitle font-serif">
            I build distinctive, modern, clean, accessible websites that look
            good and function perfectly.<br></br>
            Some of the services I provide are listed below: 
          </div>
          <div className="row multi-columns-row g-4">
            {/* Web Development */}
            <div className="col-md-4 col-sm-12 col-xs-12 box-design">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faCode} />
                </div>
                <h3 className="alt-features-title font-alt">WEB DEVELOPMENT</h3>
                {/* Being an experienced qualified web developer, I can guarantee the best possible functionality for your business website at an honest affordable price. */}
                {/* Web development is the process of creating and maintaining websites and web applications. */}
              <ul>
                <li className="service-list">New websites are built using technology that suits your business needs and goals. </li>
                <li className="service-list">eCommerce websites build.</li> 
                <li className="service-list">Content management system build.</li>
                <li className="service-list">Existing websites upgrades.</li>
                <li className="service-list">Mobile apps are built using modern day technologies.</li>      
                <li className="service-list">Ongoing Maintenace and support.</li>            
              </ul>
                {/* Web Development is the major factor on how the website will
                function on the internet and relies on skills like modern
                computer languages, script validation, database development, web
                services and internet technologies. Being an experienced
                qualified web developer I can guarantee the best possible
                functionality for your business website at an honest affordable
                price.<br></br> */}
                <Link
                  className="section-scroll"
                  to="web-dev"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={200}
                  delay={100}
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* User Interface Design */}
            <div className="col-md-4 col-sm-12 col-xs-12 box-design">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon
                    className="icon-tools"
                    icon={faDesktop}
                  />
                </div>
                <h3 className="alt-features-title font-alt">User Interface Design (UI) </h3>
                {/* User interface design refers to the process of creating visually appealing and user-friendly interfaces for websites and web applications.. */}
                {/* UI design is about more than just creating and implementing a
                design and content. Correct methods such as readable fonts,
                layout, colours used, information architecture, site structure
                and navigation are essential and are implemented in to every
                website I build. Existing websites projects can also be modified
                and redesigned to suit a modern day standard. */}
              <ul>
                {/* <li className="service-list">Custom web design for all new websites using proven UI/UX technics that will capture your brand's audience.</li> */}
                <li className="service-list">Custom web design using UI/UX methodology.</li>
                <li className="service-list">Current website redesign using UI/UX methodology</li>

                {/* <li className="service-list">All designs are built using the mobile first concept, guaranteeing your website will be responsive / work on all devices.</li>  */}
                <li className="service-list">All designs built using mobile first concept (work on all devices).</li> 
                {/* <li className="service-list">Current website redesign: Got an old website that is behind your competitors, let us upgrade your website with a new modern design.</li> */}
                {/* <li className="service-list">Designs can be supplied to you using the newsiest technologies like Figma, Invision or Photoshop.  </li> */}
                <li className="service-list">Designs supplied to you in Figma, Invision or Photoshop.</li>
              </ul>
              <Link
                  className="section-scroll"
                  to="ui-design"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={200}
                  delay={100}
                >
                  Read More
                </Link>
              </div>
            </div>

                    {/* SEO */}
          <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faMagnifyingGlass} />

                </div>
                <h3 className="alt-features-title font-alt">Search Engine Optimisation</h3>
                {/* It is essential that you choose the right domain name as it serves as the headline for your business. */}
                <ul>
                <li className="service-list">Keyword research.</li> 
                <li className="service-list">On-page optimization.</li>
                <li className="service-list">High-quality content.</li>
                <li className="service-list">Mobile optimization.</li> 
                <li className="service-list">Site speed.</li>
                <li className="service-list">Social media engagement.</li>
                </ul>
              </div>
            </div>

          {/* website marketing analytics */}
          <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon
                    className="icon-tools"
                    icon={faChartLine}
                  />
                </div>
                <h3 className="alt-features-title font-alt">
                website marketing analytics
                </h3>
                {/* Is the process of gathering and analyzing data about your website's marketing efforts.  */}
                <ul>
                <li className="service-list">Set up of analytics platform of choice.</li> 
                <li className="service-list">Analytics code connected to your website and platform.</li> 
                <li className="service-list">Marketing campaigns set up.</li> 
                <li className="service-list">Key metrics &amp; goals set up.</li> 
                <li className="service-list">Data driven reports.</li> 
                {/* Contact me to find out more about what online marketing strategy best suits your business. */}
                  {/* <ul>
                  <li className="service-list">Total number of website visitors.</li> 
                  <li className="service-list">Traffic sources (organic, paid, social, etc.)</li> 
                  <li className="service-list">Bounce rate, Average time spent on site, Conversion rate, Top performing pages, Geographic location of visitors and more.</li> 
                  </ul> */}
              </ul>
              </div>
            </div>

                        {/* Email Marketing */}
                        <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faEnvelope} />
                </div>
                <h3 className="alt-features-title font-alt">EMAIL MARKETING</h3>
                {/* Email marketing allows you to connect with your customer in a
                highly personalized way, while staying within your budget, while
                some marketing trends come and go, email remains the most
                powerful channel available to the modern market. I will build
                your marketing campaign using all modern day technologies that
                work on all devices and designed towards your target market. */}
                {/* Looking at implementing an email marketing campaign for your business?<br></br>
                Then look no further, some of the service's I proved are:                  */}
                <ul>
                <li className="service-list">New hand coded custom email templates. </li> 
                <li className="service-list">Update to existing custom email templates.</li>
                <li className="service-list">Builder block email templates.</li>
                <li className="service-list">Newsletter email templates.</li>
                <li className="service-list">Sales & promotions email builds. </li>
                <li className="service-list">Salesforce marketing email template builds.</li>
                </ul>
                {/* <Link
                  id="navbar"
                  className="section-scroll"
                  to="email-marketing"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={200}
                  delay={100}
                >
                  Read More
                </Link> */}
              </div>
            </div>

            {/* Web Banners */}
            <div className="col-md-4 col-sm-12 col-xs-12">
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
                {/* A web banner is an advertisement displayed into a web page.
                Banner ads are intended generate traffic and customers to a
                website by linking to it. With the web platform flash all but
                absolute all banners will be built using HTML5, CSS &amp;
                JavaScript thus allowing your banner to work on all modern day
                devices. */}
                {/* Looking at implementing a web banner campaign for your business?<br></br>
                Then look no further, some of the service’s I proved are:  */}
              <ul>
                <li className="service-list">Custome built google ad banners in a range of sizes. </li> 
                <li className="service-list">Google ads account created, and banners uploaded.</li>
                <li className="service-list">Animated google ads built using HTML, CSS and JavaScript.</li>
              </ul>
              {/* <Link
                  id="navbar"
                  className="section-scroll"
                  to="google-banners"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={200}
                  delay={100}
                >
                  Read More
                </Link> */}
              </div>
            </div>

            {/* Hosting */}
            <div className="col-md-4 col-sm-12 col-xs-12 box-design">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon 
                    className="icon-tools" 
                    icon={faCloud} />
                </div>
                <h3 className="alt-features-title font-alt">HOSTING</h3>
                {/* Choosing the right web hosting package that best suits your
                website can be confusing and costly. I offer cost-efficient
                hosting packages that best suit the websites requirements and
                take in to consideration factors like disk space, speed,
                bandwidth allotment.<br></br> */}
                {/* Let us set you up with a hosting package that best suits your website  */}
                {/* Hosting packages for new websites or transfer your current website to our servers. */}
                <ul>
                <li className="service-list">Hosting packages for new websites or transfer your current website.</li>
                <li className="service-list">Web Hosting Economy Package.</li> 
                <li className="service-list">Web Hosting Deluxe Packages.</li>
                <li className="service-list">Web Hosting Ultimate packages.</li>
                <li className="service-list">Web Hosting Maximum packages.</li>  
                <li className="service-list">Enjoy faster page loads with data centers in North America, Europe, and Asia-Pacific.</li>
                </ul>
              </div>
            </div>


          {/* Domain */}
          <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faGlobe} />
                </div>
                <h3 className="alt-features-title font-alt">DOMAIN NAME</h3>
                {/* It is essential that you choose the right domain name as it serves as the headline for your business. */}
                <ul>
                <li className="service-list">Domain name set up and connected to your website.</li> 
                <li className="service-list">Current domain transfer to new hosting website.</li>
                <li className="service-list">Australian registered business set up (.au).</li>
                <li className="service-list">SSL / TLS domain security.</li>
                </ul>
              </div>
            </div>

            {/* logo design */}
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon
                    className="icon-tools"
                    icon={faImages}
                  />
                </div>
                <h3 className="alt-features-title font-alt">
                  Business logo design
                </h3>
                {/* Your logo design is an integral part of your brand identity, and helps you to create a successful business. 
                A carefully considered brand is the key to attracting the right customers, so you can reach new levels of success and profitability.
                I understand the importance of strategy when it comes to creating a logo. By incorporating your business goals, values and the needs of your target market, we can help you to achieve greater things through strategic design. */}
                {/* Your logo design is an integral part of your brand identity, and helps you to create a successful business.  */}
                <ul>
                <li className="service-list">Custome designed business logos. </li> 
                <li className="service-list">Custom animated business logos.</li>
                <li className="service-list">Available in choice of format.</li>
              </ul>
              </div>
            </div>



            {/* Content Writing */}
            {/* <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon
                    className="icon-tools"
                    icon={faPen}
                  />
                </div>
                <h3 className="alt-features-title font-alt">
                  Content writing
                </h3>
                Content writing is the art of crafting compelling and informative text for a variety of mediums, such as websites, blogs, articles, and social media platforms. It involves conducting research, understanding the target audience, and conveying a message in a clear and engaging manner. The goal of content writing is to capture the reader's attention, communicate information effectively, and ultimately drive engagement, conversions, or sales. It requires a strong command of the language, creative thinking, and the ability to adapt writing style to different subject matters and industries. Content writers play a crucial role in shaping the online presence and reputation of individuals and organizations, making it an essential skill in the digital era.
              </div>
            </div> */}
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
