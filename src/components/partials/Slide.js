import React, { Component } from 'react';
import banner from './image/slide.jpg';
import './Slide.css';  
class Slide extends Component {
    render() {
        return (
            <img className="banner" src={banner}/>
        );
    }
}

export default Slide;