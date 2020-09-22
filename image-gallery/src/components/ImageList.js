import React from 'react';
import ImageCard from './ImageCard';
import './styles.css';

function ImageList(props) {
    const newImageList = props.urlList.map((url) => <ImageCard key={url} url={url}/>);
    return (
        <div className="gallery-area">
            {newImageList}
        </div>
    );
}

export default ImageList;