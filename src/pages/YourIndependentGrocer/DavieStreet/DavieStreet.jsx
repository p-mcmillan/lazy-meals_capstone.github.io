import Carousel from "../../../components/Carousel/Carousel";
import "../../../styles/DavieStreet.scss";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const LaunchModalOnLoad = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Code to launch the modal on page load
    setShowModal(true);
  }, []);

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Dialog className="custom-modal-dialog">
        <Modal.Header closeButton>
          <Modal.Title>FLYERS & DEALS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Grab and Scroll the Cards</h2>
          <p>
            Click and drag the cards to scroll horizontally.
            <br />
            <br />
            When done click the Generate Your Recipie button
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={() => setShowModal(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

function DavieStreet(props) {
  return (
    <>
      <div className="david-container">
        <h1 className="davieStHeader">Davie Street Your Independent Grocer</h1>
        <Carousel davieData={props.davieData} />
      </div>

      <LaunchModalOnLoad />
    </>
  );
}

export default DavieStreet;
