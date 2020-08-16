import React, { Component } from 'react';
import './Payment.css';
import NumberFormat from 'react-number-format';
import {withRouter} from 'react-router-dom'
class Payment extends Component {
    constructor(){
        super();
        var cart = JSON.parse(localStorage.getItem("carts"));
        if(!cart){
              cart = [];
        }
        var userCart = cart.filter( function (item) {
            return item.user_id === localStorage.getItem("user");
          });
        this.state = {
            usercarts : userCart,
            carts: cart
        }
        this.onMakeOrder = this.onMakeOrder.bind(this);
    }
    onMakeOrder(event){
        event.preventDefault();
        var name = event.target['name'].value;
        var phone = event.target['phone'].value;
        var address = event.target['address'].value;

        var userCart = this.state.usercarts;
        var userId = localStorage.getItem("user");
        var totalCart = 0;
        userCart.map((item)=>(
            totalCart+=item.quantity*item.price
        ))

        var otherCart = this.state.carts.filter( function (item) {
            return item.user_id !== userId;
        }); 

        localStorage.setItem("carts",JSON.stringify(otherCart));
        var order = {
            name:name,
            phone:phone,
            address:address,
            total:totalCart.toString(),
            cart:JSON.stringify(userCart),
        }
        console.log(order);
       var orderInJson = JSON.stringify(order);
        
        fetch("http://127.0.0.1:8000/api/order", {
            method: "post",
            headers: {
                "Content-Type":"application/json",
                "Authorization":  userId
            },
            body: orderInJson
        })
        .then((response) => {
            console.log(response);
            alert("Cảm ơn quý khách đã mua hàng");
            this.props.history.push('/'); 
            window.location.reload();
            
        });
    }
    render() {
        var stt = 1;
        var total = 0;
        return (
            <div className="payment">
                <div className="payment-item">
                <h3>Thông tin giao hàng</h3>
                <hr/>
                <div className="payment-content">
                    <div className="payment-info">
                        <span className="payment-title">Nhập địa chỉ giao hàng</span>
                        <hr/>
                        <form className="form-info" onSubmit={this.onMakeOrder}>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-user"></span></div>
                                <input type="text" name="name" placeholder="Nhập họ & tên" />
                            </div>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-phone"></span></div>
                                <input type="text" name="phone" placeholder="Nhập số điện thoại" />
                            </div>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-home"></span></div>
                                <input type="text" name="address" placeholder="Nhập địa chỉ" />
                            </div>
                            <hr/>
                        <button className="btn-countinue"><span className="fa fa-check"></span> Đặt hàng</button>
                        </form>
                        
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
                        {this.state.usercarts.map((item)=>(
                            <tr className="cart-tr">
                            <td>{stt++}</td>
                            <td>{item.name}</td>
                            <td><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ/Bộ</td>
                            <td>{item.quantity}</td>
                            <td><b><NumberFormat value={item.price*item.quantity} displayType={'text'} thousandSeparator={true} /> đ</b></td>
                            <input hidden value={total+=item.price*item.quantity} />
                        </tr>
                        ))}
                        
                    </table>
                    <p>Tổng cộng: <b style={{color:"red"}}><NumberFormat value={total} displayType={'text'} thousandSeparator={true} /> đ</b></p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default withRouter(Payment);