import React from "react";

// function Accordion() {
  const Accordion = () => {

  return (
    <>
      {/* Accordion */}
      <div role="tabpanel">
        <hr className="divider-w mt-10 mb-20" />
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                IS MY WEBSITE SAFE FROM HACKERS?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                All website are build and host on global secure servers with
                encryption code. SSL (Secure Sockets Layers) are included for
                free.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                WHY CHOOSE US?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Every website is built to the highest standard and targeted to
                your online market, also if your website crashes unlike large
                companies getting your website back online will be our upmost
                priority.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
