import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal 
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    closeTimeoutMS={300}
    className="modal"
  >
    <h3 className="modal__title">We think you should choose:</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>Gotcha</button>
  </Modal>
);

export default OptionModal;

