import React, { Component } from 'react';
import Slide from '../partials/Slide';
import Sidebar from '../partials/Sidebar';
class Home extends Component {
    render() {
        return (
            <div>
                <Slide/>
                <Sidebar/>
            </div>
        );
    }
}

export default Home;