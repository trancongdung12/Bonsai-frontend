import React, { Component } from 'react';
import './BestSellProduct.css';
import tree from './tree.jpg'
class BestSellProduct extends Component {
    render() {
        return (
            <div className="best-sell-pro">
                <p className="title">SẢN PHẨM BÁN CHẠY</p>
                <hr/>
                <div className="product">
                    <div className="item">
                        <img src={tree} />
                        <p className="item-title">Cây hải dương</p>
                        <div className="caption">
                            <p className="price">80,000 đ</p>
                            <div className="button">
                                <button className="btn-cart"><span className="fa fa-shopping-cart"></span></button>
                                <button className="btn-detail"><span className="fa fa-eye"></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={tree} />
                        <p className="item-title">Cây hải dương</p>
                        <div className="caption">
                            <p className="price">80,000 đ</p>
                            <div className="button">
                                <button className="btn-cart"><span className="fa fa-shopping-cart"></span></button>
                                <button className="btn-detail"><span className="fa fa-eye"></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={tree} />
                        <p className="item-title">Cây hải dương</p>
                        <div className="caption">
                            <p className="price">80,000 đ</p>
                            <div className="button">
                                <button className="btn-cart"><span className="fa fa-shopping-cart"></span></button>
                                <button className="btn-detail"><span className="fa fa-eye"></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={tree} />
                        <p className="item-title">Cây hải dương</p>
                        <div className="caption">
                            <p className="price">80,000 đ</p>
                            <div className="button">
                                <button className="btn-cart"><span className="fa fa-shopping-cart"></span></button>
                                <button className="btn-detail"><span className="fa fa-eye"></span></button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default BestSellProduct;