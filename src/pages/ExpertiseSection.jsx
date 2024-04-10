import React from "react";
import Cover from "../Components/Particles/Particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDesktop,
  faUsers,
  faMobileScreenButton,
  // faLayerGroup,
  faGlobe,
  // faEnvelope,
  // faRectangleAd,
} from "@fortawesome/free-solid-svg-icons";

import "./../App.css";
 
const ExpertiseSection = () => {


  return (
    <section id="expertise" className="position-relative w-100">
      <div className="row justify-content-around">
        <div className="col-lg-6 col-md-12 col-sm-12 my-0 p-4 mb-5">
          <h1 className="module-title font-alt text-center">EXPERTISE</h1>
          <div className="module-subtitle font-serif">
            I take pride in my work and guarantee all websites will be built
            using the newest of technologies and work on all modern day devices.
          </div>

          <div className="row multi-columns-row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {/* Web Development */}
              <div className="alt-features-item" id="web-dev">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faCode} />
                </div>
                <h3 className="alt-features-title font-alt d-flex justify-content-center">WEB DEVELOPMENT</h3>
                Being an experienced full stack web developer means I specialize in the development of websites, applications &amp; network application, 
                this means I cover aspects such as modern-day computer languages, code validation, 
                front and back-end development and website functionality. 
                It also means I understand the goals and requirements of building your website and 
                make sure it's built and designed for your online target audience.<br></br> 
                I work closely with my clients to find out the purpose of the site, desired functionality, design preferences, and any technical specifications before we start the website build. This helps to establish clear communication between myself and the client resulting in a better end product.               </div>

              {/* UI design */}
              <div className="alt-features-item" id="ui-design">
                <div className="alt-features-icon">
                  <FontAwesomeIcon
                    className="icon-tools"
                    icon={faDesktop}
                  />
                </div>
                <h3 className="alt-features-title font-alt d-flex justify-content-center">User Interface Design</h3>
                A user interface (UI) refers to the way in which a user interacts with websites. It includes the graphical elements, controls, and features that enable users to navigate, manipulate, and give commands to a system. A well-designed user interface is intuitive, user-friendly, and visually appealing, ensuring that users can easily understand and access the system's functionalities. It plays a critical role in enhancing user experience and making the overall interaction with a system efficient and enjoyable.<br></br> 
                From highly creative dynamic websites to simple web presences, I build modern day websites that are marketed and designed towards your target market and user friendly for all users, thus resulting in high sales for your business. 
              </div>

              {/* UX */}
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon
                    className="icon-tools"
                    icon={faUsers}
                  />
                </div>
                <h3 className="alt-features-title font-alt d-flex justify-content-center">User Experience</h3>
                User experience (UX) refers to the overall experience a person has while interacting with a website. It includes aspects such as ease of use, satisfaction, and efficiency of the user interface. A good UX ensures that users can easily navigate and achieve their goals while also enjoying the process. It involves incorporating design principles, user research, and testing to create an intuitive and enjoyable experience. By prioritizing user needs and preferences, companies can enhance customer satisfaction and loyalty. <br></br>
                {/* Market research has proven that the number one reason a client will leave your website is bad UX implementation, unclear navigation while moving around the website being the top of the list.<br></br> */}
                I build modern day websites that enhance your client UX, thus resulting in lower bounce rates and higher sales for your business.
              </div>

              {/* Cross Browser friendly */}
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faGlobe} />
                </div>{" "}
                <h3 className="alt-features-title font-alt d-flex justify-content-center">
                  CROSS BROWSER FRIENDLY
                </h3>
                Cross browser friendly refers to designing and developing websites or web applications that are compatible and accessible across different web browsers, such as Google Chrome, Mozilla Firefox, Safari, Internet Explorer, and Microsoft Edge. This involves ensuring that the website's layout, functionality, and performance are consistent and optimal across various browsers, which can be achieved through utilizing standardized web technologies, adhering to web development best practices, and testing the website on different browsers.<br></br>
                I build cross browser friendly websites that will reach a wider audience and provide a seamless user experience regardless of the browser being used. 
              </div>
              
              {/* Responsive Design */}
              <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon
                    className="icon-tools"
                    icon={faMobileScreenButton}
                  />
                </div>
                <h3 className="alt-features-title font-alt d-flex justify-content-center">
                  RESPONSIVE DESIGN
                </h3>
                Responsive design is an approach to web design that aims to create websites that provide an optimal viewing experience across a wide range of devices, including desktop computers, tablets, and mobile phones. The main goal of responsive design is to ensure that the website's layout and content automatically adapt to the screen size and orientation of the device being used to access it. This approach eliminates the need for separate mobile versions of websites and makes it easier for users to navigate and interact with the site regardless of the device they are using. By incorporating responsive design principles into all websites I build, I can ensure your website will remain user-friendly and accessible to a larger audience. 
              </div>

              {/* Email Marketing */}
              {/* <div className="alt-features-item" id="email-marketing">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faEnvelope} />
                </div>
                <h3 className="alt-features-title font-alt">
                  Email Marketing
                </h3>
                Email marketing allows you to connect with your customers in a highly personalized way, while staying within your budget. While some marketing trends come and go, email remains the most powerful channel available to the modern market. I will build your marketing campaign using all modern-day technologies that work on all devices and are designed for your target market. 
              </div> */}
              
              {/* Google Banners */}
              {/* <div className="alt-features-item" id="google-banners">
                <div className="alt-features-icon">
                  <FontAwesomeIcon 
                   className="icon-tools" 
                   icon={faRectangleAd} />
                </div>
                <h3 className="alt-features-title font-alt">
                  Google Web Banners
                </h3>
                A web banner is an advertisement displayed on a web page. Banner ads are intended generate traffic and customers to a website by linking to it. With the web platform flash all but absolutely all banners will be built using HTML5, CSS & JavaScript thus allowing your banner to work on all modern-day devices.       
                </div> */}

              {/* Webite Architecture */}
              {/* <div className="alt-features-item">
                <div className="alt-features-icon">
                  <FontAwesomeIcon className="icon-tools" icon={faLayerGroup} />
                </div>
                <h3 className="alt-features-title font-alt">
                  WEBSITE ARCHITECTURE
                </h3>
                Is about organizing the content and flow of a website. I will
                use proven research methods so your website is structured, user
                friendly and designed to your business needs & targets.
              </div> */}
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 position-relative">
          <div className="h-100 w-100 position-absolute tsparticles" id="tsparticles">
          {/* <p class="rotingtxt">Greig McMahon Web Development</p> */}
          <Cover />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
