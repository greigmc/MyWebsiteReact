import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ".././App.css";
// import "../assets/js/main";
import companyLogo from ".././assets/images/001.jpg";
import CookieConsent from "react-cookie-consent";


const Footer = () => {
  const [time, setTime] = useState(new Date().toString());
  
  useEffect(() => {
    const internal =     setInterval(showDate, 1000);
    return() => {
      clearInterval(internal);
    };
}, [time] );

  function showDate() {
    // console.log(new Date().toString());
    setTime(new Date().toString());
  }
  return (
    <div className="bg-dark pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="widget about">
              <h5 className="widget-title font-alt d-flex justify-content-start">About</h5>

              <p className="d-flex justify-content-start">
                I’m a professional Web developer with a BSc (Hons) in Web &amp;
                Mobile Development coupled with a Diploma in Business
                Management. My skillset allows me to implement a business savvy
                approach to creating secure bespoke websites. My working style
                is to liaise closely with my clients to fully understand and
                implement their requirements, ensuring the website fulfills both
                the brief and their objectives.
              </p>

              <p>Phone: 0449 606 926</p>

              <p>
                Email:
                <a href="mailto:info@greigmcmahon.com" target="_top">
                  {" "}
                  info@greigmcmahon.com
                </a>
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="widget">
              <h5 className="widget-title font-alt">
                Greig McMahon Web Development
              </h5>

              <div className="widget-posts-image">
                <Link href="#">
                  <img src={companyLogo} alt="Post Thumbnail" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="divider-d"></hr> */}
      {/* // Sub Footer */}
      <footer className="footer bg-dark">
        <div className="container">
          <div className="row">
            {/* <div className="col-sm-4">
              <div className="copyright font-alt d-flex justify-content-center">
                <p className="copyright font-alt">{new Date().toLocaleTimeString()}</p>
              </div>
            </div> */}
            {/* <div className="col-sm-4">
              <p className="copyright font-alt d-flex justify-content-start">
                <Link href="index.html"></Link>All Rights Reserved
              </p>
            </div> */}

            <div className="col-sm-12">
            <div className="copyright font-alt d-flex justify-content-center">
              <p className="copyright font-alt">
                {time.substring(0, 33)} @All Rights Reserved
              </p>

            </div>
              {/* <div className="footer-social-links">
                <Link
                  href="https://www.facebook.com/GreigMcMahonWebDeveloper"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </Link>

                <Link 
                  href="https://twitter.com/greiggyboy4" 
                  target="_blank"
                  rel="noreferrer">
                  <i className="fa fa-twitter"></i>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/greig-mcmahon-18502759/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div> */}
            </div>
            <div className="col-12 justify-content-centre">
            <CookieConsent style={{ background: "rgba(10, 10, 10, 1.9)" }}
              enableDeclineButton 
              declineButtonText="Decline" 
              declineButtonStyle={{background:"red", color: "#fff"}}
              buttonText="Accept"
              buttonStyle={{background:"#2a66dd", color: "#fff"}}
              flipButtons
              debug={false}>
            We and selected third parties use cookies or similar technologies for technical purposes and, with your consent.

            Use the “Accept” button to consent. Use the “Decline” button or close this notice to continue without accepting.</CookieConsent>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

setInterval(1000)


export default Footer;
