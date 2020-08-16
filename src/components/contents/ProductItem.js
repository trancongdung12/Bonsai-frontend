import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
class ProductItem extends Component {
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
        var {products} = this.props;
        return (
            <div className="product-item">
                         <Link to={"detail/"+products.id}><img src={'http://127.0.0.1:8000'+products.image} /> </Link>
                    <p className="item-title">{products.name}</p>
                        <div className="caption">
                            <p className="price"><NumberFormat value={products.price} displayType={'text'} thousandSeparator={true} /> đ</p>
                            <div className="button">
                                <button className="btn-cart" onClick={this.onAddCart(products)}><span className="fa fa-shopping-cart"></span></button>
                                <Link to={"detail/"+products.id}>
                                    <button className="btn-detail"><span className="fa fa-eye"></span></button>
                                </Link>
                            </div>
                   </div>
             </div>
        );
    }
}

export default ProductItem;