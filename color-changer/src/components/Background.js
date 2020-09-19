import React, {Component} from 'react';
import ColorPicker from './ColorPicker';
import './styles.css'

class Background extends Component {
    constructor() {
        super();
        this.state = {
            selectedColor : "yellow",
        }
    }

    setBackgroundColor = (event) => {
        this.setState({
            selectedColor: event.target.value
        });
    }

    render() {
        return (
            <div className="box-container" style={{
                backgroundColor:this.state.selectedColor
            }}>
                <ColorPicker 
                    changeColor={
                        this.setBackgroundColor
                    }
                    selectedColor={
                        this.state.selectedColor
                    }
                />
            </div>
        )
    }
}

export default Background;