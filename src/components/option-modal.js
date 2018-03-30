import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose={props.closeModal}
        contentLabel = "Selected Option" 
        closeTimeoutMS={200}
        className={{
            base: 'chosen-modal'
          }}
    >
        <h1 className="modal-text">{props.selectedOption}</h1>
        <button
            className="button button--modal"
            onClick={props.closeModal}
        >Close</button>
    </Modal>
);

export default OptionModal;