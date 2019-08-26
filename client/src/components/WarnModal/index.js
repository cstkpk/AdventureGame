import React from "react";
import  { Modal, Button } from "react-bootstrap";
import "./style.css";

function WarnModal (props) {
    return (
        <Modal id="modal-style" show={props.show} onHide={props.onHide}>
            <Modal.Body className="modal-bg">
                <h4 className="text-center">Please Enter Your Name</h4>
            </Modal.Body>
            <Modal.Body className="modal-bg">
                <Button
                variant="success"
                className="btn-block"
                onClick={props.onClick}
                >
                Close
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default WarnModal;