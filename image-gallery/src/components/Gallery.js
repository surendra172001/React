import React, { Component } from 'react';
import './styles.css';
import ImageList from './ImageList';

class Gallery extends Component {

    constructor() {
        super();
        this.state = {
            inputVal: "",
            urlList: []
        };
    }

    addImage = () => {
        const url = this.state.inputVal;
        if (url.length > 0) {
            this.setState((prevState) => {
                return {
                    urlList: [...prevState.urlList, url],
                }
            });
        }
        this.clearInput();
    }

    clearInput = () => {
        this.setState({
            inputVal: ""
        });
    }

    onTextChange = (event) => {
        this.setState({
            inputVal: event.target.value
        })
    }

    render() {
        return (
            <div className="gallery-container">
                <p className="title">-----Image Gallery-----</p>
                <div className="input-area">
                    <input
                        type="text"
                        className="add-input"
                        placeholder="Enter Image Url"
                        onChange={this.onTextChange}
                        value={this.state.inputVal}
                    />
                    <button className="add-btn" onClick={this.addImage}>Add image</button>
                </div>
                <ImageList urlList={this.state.urlList} />
            </div>
        );
    }
}

export default Gallery;