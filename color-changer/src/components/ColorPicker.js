import React from 'react';
import './styles.css';


function ColorPicker(props) {
    return (
        <div className="box-color">
            <h2>
                Choose the color
        </h2>
            <input type="color" onChange={props.changeColor} />
            <p>{props.selectedColor}</p>
        </div>
    );
}

export default ColorPicker;