import React from 'react';
import Option from './option';

const Options = (props) => ( 
        <div>
            <div className="app-header">
                <h3 className="app-header__title">Your choices</h3>
                <button
                    className="button button--link" 
                    onClick={props.clearOptions}
                >Remove all Choices</button>
            </div>
            {props.choices.length === 0 && <p className="default-message">Add choices to get started</p>}
            {props.choices.length > 0 && <ul className="choices-list">
            {
                props.choices.map((option) => 
                    <Option 
                        key={option} 
                        optionText={option}
                        deleteChoice={props.deleteChoice}
                    />
                )
            }
            </ul> }
        </div>
    );

export default Options;