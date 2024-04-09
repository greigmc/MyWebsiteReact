import React, { useState, useMemo } from "react";
import Portfolio from "../../pages/PortfolioSection";
import "./../../App.css";


import {
  Modal,
  Button 
} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Powerlink
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Technologies Used</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <a 
          className="btn btn-primary"
          target="_blank" 
          rel="noreferrer" 
          href="https://www.powerlink.com.au/">
          {" "}
          View Project{" "}
        </a>
        <button onClick={props.onHide} className="btn btn-primary">Close</button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalOne() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="button" onClick={() => setModalShow(true)}>
        View
      </div>

      {/* <Button className="Button" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalOne;

