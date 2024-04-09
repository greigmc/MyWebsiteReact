import React from "react";
import { Link } from "react-scroll";
import ".././App.css";

const NavBar = () => { 
  return (
    <nav
      id="navbar"
      className="navbar  navbar-expand-lg navbar navbar-custom navbar-transparent fixed-top one-page"
    >
      <div className="container-fluid justify-content-end">
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link
                className="nav-link active section-scroll"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                delay={100}
              >
                Home
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link
                className="nav-link active section-scroll"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                delay={100}
              >
                About
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link
                className="nav-link active section-scroll"
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                delay={100}
              >
                Services
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link
                className="nav-link active section-scroll"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                delay={100}
              >
                Portfolio
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link
                className="nav-link active section-scroll"
                to="expertise"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                delay={100}
              >
                Expertise
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link
                className="nav-link active section-scroll"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                delay={100}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
