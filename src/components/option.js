import React from 'react';

const Option = (props) =>  ( 
       
            <li className="choice">
                {props.optionText}
                <button 
                    onClick={(e)=> {
                        props.deleteChoice(props.optionText);
                    }}
                    className="button button--link button--option"
                >
                x
                </button>
            </li>
            
       
    );



export default Option;