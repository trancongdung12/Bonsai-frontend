import React, { Component } from 'react';
import './Payment.css';
class Payment extends Component {
    render() {
        return (
            <div className="payment">
                <div className="payment-item">
                <h3>Thông tin giao hàng</h3>
                <hr/>
                <div className="payment-content">
                    <div className="payment-info">
                        <span className="payment-title">Nhập địa chỉ giao hàng</span>
                        <hr/>
                        <form className="form-info">
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-user"></span></div>
                                <input type="text" placeholder="Nhập họ & tên" />
                            </div>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-phone"></span></div>
                                <input type="text" placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-home"></span></div>
                                <input type="text" placeholder="Nhập địa chỉ" />
                            </div>
                        </form>
                        <hr/>
                        <button className="btn-countinue"><span className="fa fa-check"></span> Đặt hàng</button>
                    </div>
                    <div className="payment-product">
                    <span className="payment-title">Đơn hàng</span>
                    <hr/>
                    <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                        </thead>
                        <tr className="cart-tr">
                            <td>1</td>
                            <td>Cây hưởng dương</td>
                            <td>85,000 đ/Bộ</td>
                            <td >1</td>
                            <td><b>85,000 đ</b></td>
                        </tr>
                    </table>
                    <p>Tổng cộng: <b style={{color:"red"}}>85,000 đ</b></p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Payment;