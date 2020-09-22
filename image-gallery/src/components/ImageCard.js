import React from 'react';
import "./styles.css";

function ImageCard(props) {
    return (
        <img className="image-card" src={props.url} alt={props.url} />
    );
}

export default ImageCard;