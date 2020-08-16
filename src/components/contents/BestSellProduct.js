import React, { Component } from 'react';
import './BestSellProduct.css';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
class BestSellProduct extends Component {
    constructor(){
        super();
        this.state = {
            product : []
        }
    }
    componentDidMount(){
        fetch("http://127.0.0.1:8000/api/newproduct")
        .then(res => res.json())
        .then(
          (response) => {
              this.setState({product: response})
          })
    }
    onAddCart(item){
        return (event)=>{

            var cart = JSON.parse(localStorage.getItem("carts"));
            if(!cart){
              cart = [];
            }
            var userId = localStorage.getItem("user");
            var oldItem = cart.find((el)=>(el.id === item.id && el.user_id === userId ));
            if(oldItem){
              oldItem.quantity  +=1;
            }else{
              item.user_id = userId;
              item.quantity = 1;
              cart.push(item);
            }
            var userCart = cart.filter( function (item) {
                return item.user_id === userId;
              });
            alert("Đã thêm vào giỏ hàng thành công!");
            window.location.reload();
            localStorage.setItem("carts",JSON.stringify(cart));
          }
    }
    render() {
        return (
            <div className="best-sell-pro">
                <p className="title">SẢN PHẨM MỚI NHẤT</p>
                <hr/>
                <div className="product">
                    {this.state.product.map((item)=>(
                        <div className="item">
                         <Link to={"detail/"+item.id}><img src={'http://127.0.0.1:8000'+item.image} /></Link>
                        <p className="item-title">{item.name}</p>
                        <div className="caption">
                            <p className="price"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ</p>
                            <div className="button">
                                <button onClick={this.onAddCart(item)} className="btn-cart"><span className="fa fa-shopping-cart"></span></button>
                                <Link to={"detail/"+item.id}><button className="btn-detail"><span className="fa fa-eye"></span></button></Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>  
            </div>
        );
    }
}

export default BestSellProduct;