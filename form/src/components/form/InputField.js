import React from 'react';
import './style.css';

function InputField(props) {
    return (
        <input
            className="input-style"
            type={props.type ? props.type : "text"}
            value={props.value}
            onChange={props.handler}
            placeholder={`Enter your ${props.fieldName}`}
        />
    );
}

export default InputField;