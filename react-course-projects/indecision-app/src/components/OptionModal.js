import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel="Selected Option"
        >
            <h3>Selected Options</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    )
};

export { OptionModal };


// create a new event handler in indecision that clears selectedOption state
// Pass that into OptionModal
// call it on button click