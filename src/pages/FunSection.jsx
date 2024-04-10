import React from "react";
import Counter from "../Components/Counter/Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faChampagneGlasses,
  faFaceSmileWink,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import "./../App.css";

const FunSection = () => {
  return (
    <section className="bg-dark-60 parallax-bg py-5 w-100 position-relative">
      <div className="container">
        <div className="row multi-columns-row">
          {/* Successful projects */}
          <div className="col-sm-6 col-md-3 col-lg-3 progress-section">
            <div className="count-item mb-sm-40">
              <div className="count-icon">
                <FontAwesomeIcon className="icon-target" icon={faBullseye} />
              </div>
              <h3>
                <Counter number={95} />
              </h3>
              <h5 className="count-title font-serif">Successful Projects</h5>
            </div>
          </div>

          {/* Client Conversations */}
          <div className="col-sm-6 col-md-3 col-lg-3 progress-section">
            <div className="count-item mb-sm-40">
              <div className="count-icon">
                <FontAwesomeIcon className="icon-target" icon={faComments} />
              </div>
              <h3>
                <Counter number={800} />
              </h3>
              <h5 className="count-title font-serif">
                Client Conversations Min
              </h5>
            </div>
          </div>

          {/* Happy Customers */}
          <div className="col-sm-6 col-md-3 col-lg-3 progress-section">
            <div className="count-item mb-sm-40">
              <div className="count-icon">
                <FontAwesomeIcon
                  className="icon-target"
                  icon={faFaceSmileWink}
                />
              </div>
              <h3>
                <Counter number={95} />
              </h3>
              <h5 className="count-title font-serif">Happy Customers</h5>
            </div>
          </div>

          {/* Client Drinks */}
          <div className="col-sm-6 col-md-3 col-lg-3 progress-section">
            <div className="count-item mb-sm-40">
              <div className="count-icon">
                <FontAwesomeIcon
                  className="icon-target"
                  icon={faChampagneGlasses}
                />
              </div>
              <h3>
                <Counter number={200} />
              </h3>
              <h5 className="count-title font-serif">Client Drinks</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunSection;
