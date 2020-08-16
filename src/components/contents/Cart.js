import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import './Cart.css';
import {Link} from 'react-router-dom';
class Cart extends Component {
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
            carts : cart,
            usercarts : userCart
        }
        this.onDestroy = this.onDestroy.bind(this);
        this.onIncre = this.onIncre.bind(this);
        // this.onReduct = this.onReduct.bind(this);
    }
    onDestroy(key){
        return (event)=>{
            var newArr = this.state.carts;
            newArr.splice(key, 1);
            localStorage.setItem("carts",JSON.stringify(newArr));
            this.setState({usercarts: newArr });  
        }
       }
    onReduct(item){
        return (event)=>{ 
            var cart = this.state.carts;
            var oldItem = this.state.usercarts.find((el)=>(el.id === item.id));
            oldItem.quantity  = oldItem.quantity-1 ;
            if(oldItem.quantity == 0){
                alert("Số lượng > 1");
                oldItem.quantity = 1;
            }
            localStorage.setItem("carts",JSON.stringify(cart));          
            this.setState({carts: cart});
        }
    }
    onIncre(item){
        return (event)=>{
            var cart = this.state.carts;
            var oldItem = this.state.usercarts.find((el)=>(el.id === item.id));
            oldItem.quantity  = oldItem.quantity+1 ;
            this.setState({carts: cart});
            localStorage.setItem("carts",JSON.stringify(cart));
        }
    }
    render() {
        var stt = 1;
        var total = 0;
        return (
            <div className="cart">
                <div className="cart-item">
                    <h3>Giỏ hàng</h3>
                    <hr/>
                    <p className="note">- Nhấn nút "cập nhật" để thay đổi số lượng hoặc xóa sản phẩm trong giỏ hàng.<br/>
                    - Nhấn nút "Chọn sản phẩm" để chọn thêm sản phẩm khác muốn mua thêm.<br/>
                    - Sau khi đã chọn xong các sản phẩm cần mua. Nhấn nút "Đặt hàng" để mua hàng.</p>
                    <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Đơn giá</th>
                            <th  className="th-quantity">Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Xóa</th>
                        </tr>
                        </thead>
                        {this.state.usercarts.map((item,key)=>(
                            <tr className="cart-tr">
                            <td>{stt++}</td>
                            <td><img src={"http://127.0.0.1:8000"+item.image} height="50px" width="50px" /></td>
                            <td>{item.name}</td>
                            <td><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ/Bộ</td>
                            <td className="td-quantity">
                                <button onClick={this.onReduct(item)}>-</button>
                                <input type="text" value={item.quantity} disabled/>
                                <button onClick={this.onIncre(item)}>+</button></td>
                            <td><b><NumberFormat value={item.price*item.quantity} displayType={'text'} thousandSeparator={true} /> đ</b></td>
                            <td><button onClick={this.onDestroy(key)} className="btn-delete"><span className="fa fa-trash"></span></button></td>
                            <input hidden value={total+=item.price*item.quantity} />
                        </tr>
                        
                        ))}
                        
                    </table>
                    <p>Tổng cộng: <b style={{color:"red"}}><NumberFormat value={total} displayType={'text'} thousandSeparator={true} /> đ</b></p>
                    <hr/>
                    <div className="btn-payment">
                        <Link to="payment"><button>Thanh toán</button></Link>
                        <button>Chọn thêm sản phẩm</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;