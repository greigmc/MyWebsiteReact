import React from "react";
import {Link} from "react-router-dom";
// import ModalOne from "./Modal";

const portfolio = [
  {
    id: 0,
    image: "https://greigmcmahon.com/assets/images/portfolio/powerlink.png",
    category: "corporate",
    name: "Powerlink",
    href: (
      <span>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://www.powerlink.com.au/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 1,
    image: "https://greigmcmahon.com/assets/images/portfolio/david-jones.png",
    category: "corporate",
    name: "David Jones",
    href: (
      <span>
            {/* <Link to={"./SinglePages/DavidJones"} >David Jones</Link> */}
        <a 
           target="_blank" 
           rel="noreferrer" 
           href="https://www.davidjones.com/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 2,
    image: "https://greigmcmahon.com/assets/images/portfolio/kpmg.png",
    category: "corporate",
    name: "KPMG",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://kpmg.com/au/en/home.html"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 3,
    image: "https://greigmcmahon.com/assets/images/portfolio/jaguar.jpg",
    category: "corporate",
    name: "Jaguar",
    href: (
      <span>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://jlra-online.com.au/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 4,
    image: "https://greigmcmahon.com/assets/images/portfolio/lenovo.png",
    category: "corporate",
    name: "Lenovo",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.lenovo.com/us/en/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 5,
    image: "https://greigmcmahon.com/assets/images/portfolio/stratton.png",
    category: "corporate",
    name: "Stratton Finance",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.strattonfinance.com.au/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 6,
    image: "https://greigmcmahon.com/assets/images/portfolio/carconnect.jpg",
    category: "corporate",
    name: "Car Connect",
    href: (
      <span>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://carconnect.com.au/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 7,
    image: "https://greigmcmahon.com/assets/images/portfolio/swinburn.jpg",
    category: "corporate",
    name: "Swinburne University",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.swinburne.edu.au/swinburne-edge/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 8,
    image: "https://greigmcmahon.com/assets/images/portfolio/iselect.png",
    category: "corporate",
    name: "iSelect",
    href: (
      <span>
        <a 
         target="_blank" 
         rel="noreferrer" 
         href="https://www.iselect.com.au/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 9,
    image: "https://greigmcmahon.com/assets/images/portfolio/oxfarm.jpg",
    category: "business",
    name: "Oxfarm",
    href: (
      <span>
        <a 
         target="_blank" 
         rel="noreferrer" 
         href=" https://www.oxfam.org.au/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 10,
    image: "https://greigmcmahon.com/assets/images/portfolio/titan-fx.png",
    category: "business",
    name: "Titan FX",
    href: (
      <span>
        <a 
         target="_blank" 
         rel="noreferrer" 
         href="https://traders.titanfx.com/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 11,
    image: "https://greigmcmahon.com/assets/images/portfolio/ultra-tune.jpg",
    category: "business",
    name: "Ultra Tune",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://intranet.ultratune.com.au/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 31,
    image: "https://greigmcmahon.com/assets/images/portfolio/Myer-Family.png",
    category: "business",
    name: "Myer Family",
    href: (
      <span>
        <a 
         target="_blank" 
         rel="noreferrer" 
         href=" https://myerfamilyinvestments.com.au/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 12,
    image: "https://greigmcmahon.com/assets/images/portfolio/vicky-cameron.png",
    category: "business",
    name: "Vicky Cameron",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.vickycameronmakeup.co.uk/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 13,
    image: "https://greigmcmahon.com/assets/images/portfolio/melbourne-it.png",
    category: "business",
    name: "Melbourne IT",
    href: (
      <span>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://www.melbourneit.au/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 14,
    image: "https://greigmcmahon.com/assets/images/portfolio/wollert-rise.jpg",
    category: "business",
    name: "Wollert Rise",
    href: (
      <span>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://wollertrise.com.au/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 15,
    image: "https://greigmcmahon.com/assets/images/portfolio/hillgrove.png",
    category: "business",
    name: "Hillgrove",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hillgroverockbank.com/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 16,
    image: "https://greigmcmahon.com/assets/images/portfolio/agl.jpg",
    category: "business",
    name: "AGL Solar",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.agl.com.au/residential/energy/solar-and-batteries/solar-energy"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 17,
    image: "https://greigmcmahon.com/assets/images/portfolio/ccm.jpg",
    category: "Business",
    name: "CCM Facilities",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.ccmpl.com.au/do/home"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 18,
    image: "https://greigmcmahon.com/assets/images/portfolio/peak-property.png",
    category: "business",
    name: "Peak Propery Group",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://peakpropertygroup.com.au/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },

  {
    id: 19,
    image: "https://greigmcmahon.com/assets/images/portfolio/stratton.png",
    category: "app",
    name: "Stratton Finance App",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://app.strattonfinance.com.au/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 20,
    image: "https://greigmcmahon.com/assets/images/portfolio/Infoready.png",
    category: "business",
    name: "Infoready",
    href: (
      <span>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://arq.group/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 21,
    image: "https://greigmcmahon.com/assets/images/portfolio/envy.png",
    category: "business",
    name: "Envy Building Group",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://envybuildinggroup.com.au/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 22,
    image:
      "https://greigmcmahon.com/assets/images/portfolio/scaffoldlogistics.jpg",
    category: "busniess",
    name: "Scaffold logistics",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.scaffoldlogistics.com.au/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 23,
    image: "https://greigmcmahon.com/assets/images/portfolio/freelinedesign.jpg",
    category: "business",
    name: "Freeline Design",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.freelinedesign.co.uk/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 24,
    image: "https://greigmcmahon.com/assets/images/portfolio/bonbeachhealth.jpg",
    category: "business",
    name: "Bonbeach Health",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.bonbeachhealth.com.au/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 25,
    image: "https://greigmcmahon.com/assets/images/portfolio/mercury.jpg",
    category: "business",
    name: "Mercury Study Tour",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://destination.com.au/mercurystudytour2018/index.html"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 26,
    image: "https://greigmcmahon.com/assets/images/portfolio/rushevents.jpg",
    category: "busniess",
    name: "Rush Events",
    href: (
      <span>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://rushevents.com.au/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 27,
    image: "https://greigmcmahon.com/assets/images/portfolio/completecolour.png",
    category: "busniess",
    name: "Complete Colour",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.completecolour.com.au/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 28,
    image: "https://greigmcmahon.com/assets/images/portfolio/david-jones.png",
    category: "ecommerce",
    name: "David Jones",
    href: (
      <span>
            {/* <Link to={"./SinglePages/DavidJones"} >David Jones</Link> */}
        <a 
           target="_blank" 
           rel="noreferrer" 
           href="https://www.davidjones.com/">
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 29,
    image: "https://greigmcmahon.com/assets/images/portfolio/thewalkingcoffee.png",
    category: "ecommerce",
    name: "The Walking Coffee",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://thewalkingcoffee.com/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 50,
    image: "https://greigmcmahon.com/assets/images/portfolio/trenery.jpg",
    category: "email",
    name: "David Jones Group",
    href: (
      <span>
        <Link to={"/SinglePages/Trenery"} >View Project</Link>

        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://www.greigmcmahon.com/email/trenery/trenery-home.html"
        >
          {" "}
          View Project{" "}
        </a> */}
      </span>
    ),
  },
  {
    id: 51,
    image: "https://greigmcmahon.com/assets/images/portfolio/stratton.png",
    category: "email",
    name: "Stratton Finance",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.greigmcmahon.com/email/stratton.html"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 52,
    image: "https://greigmcmahon.com/assets/images/portfolio/jaguar.jpg",
    category: "email",
    name: "Stratton Finance",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://jlra-online.com.au/eNews/2017/roty/dp-incentive/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
  {
    id: 53,
    image: "https://greigmcmahon.com/assets/images/portfolio/jaguar.jpg",
    category: "email",
    name: "Stratton Finance",
    href: (
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://jlra-online.com.au/eNews/2017/roty/study-tour/manager/november/"
        >
          {" "}
          View Project{" "}
        </a>
      </span>
    ),
  },
];

export default portfolio;
