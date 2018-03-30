import React from 'react';

const Action = (props) =>  (
        <div>
            <button 
                className="big-button"
                onClick={props.makeChoice}
                disabled = {!props.hasOptions}
            >
                    Let me choose for you!
            </button>
        </div>
    );


export default Action;
