import React from 'react';

const Actions = (props) => {
    return (
        <div>
            <button 
                className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

export { Actions };
