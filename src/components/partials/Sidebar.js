import React, { Component } from 'react';
import './Sidebar.css';
import BestSellProduct  from '../contents/BestSellProduct';
class Sidebar extends Component {
    render() {
        return (
            <div className="content">
                <div className="side-bar">
                    <ul className="category">
                        <li><a href="">Cây cảnh</a></li>
                        <li><a href="">Cây cảnh để bàn</a></li>
                        <li><a href="">Cây cảnh để bàn</a></li>
                        <li><a href="">Cây cảnh để bàn</a></li>
                        <li><a href="">Cây cảnh để bàn</a></li>
                        <li><a href="">Cây cảnh để bàn</a></li>
                    </ul>
                    <ul className="category">
                        <li><a href="">Chậu cảnh</a></li>
                        <li><a href="">Chậu đất nung</a></li>
                        <li><a href="">Chậu đất nung</a></li>
                        <li><a href="">Chậu đất nung</a></li>
                        <li><a href="">Chậu đất nung</a></li>
                    </ul>
                </div>
                <div className="bestsell">
                     <BestSellProduct/>
                </div>
                
            </div>
        );
    }
}

export default Sidebar;