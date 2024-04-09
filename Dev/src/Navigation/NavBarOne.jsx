import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";
import ".././App.css";

function NavBarOne() {
  const navigate = useNavigate();  return (
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
                onClick={() => navigate(-1)}>Home
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link 
                className="nav-link active section-scroll"
                onClick={() => navigate(-1)}>About
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link 
                className="nav-link active section-scroll"
                onClick={() => navigate(-1)}>Services
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link 
                className="nav-link active section-scroll"
                onClick={() => navigate(-1)}>Portfolio
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link 
                className="nav-link active section-scroll"
                onClick={() => navigate(-1)}>Expertise
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <Link 
                className="nav-link active section-scroll"
                onClick={() => navigate(-1)}>Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarOne;
