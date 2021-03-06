import React from 'react';



const Button = (props) => (
    <button 
        className={['btn', props.btnType].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}>
        {props.children}
    </button>
)

export default Button;