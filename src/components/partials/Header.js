import React, { Component } from 'react';
import './Header.css';
import logo from './image/logo.png';  
import {Link} from 'react-router-dom';
import ReactModal from 'react-modal';
import NumberFormat from 'react-number-format';
class Header extends Component {
  constructor(){
    super();
    var userLogin = localStorage.getItem("user");
    var cart = JSON.parse(localStorage.getItem("carts"));
        if(!cart){
          cart = [];
        }
    var userCart = cart.filter( function (item) {
      return item.user_id === userLogin;
    });
    
      if(userLogin){
        this.state = {
          isLogin : true,
          id_user : userLogin,
          countCart : userCart.length,
          showModal: false,
          order:[]
        }
      }else
        {
        this.state = {
          isLogin :false,
          userName: "",
          countCart:""
        }
      }
      this.onLogout = this.onLogout.bind(this);
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentDidMount(){
    if(this.state.isLogin){

        fetch("http://127.0.0.1:8000/api/user/name",{
            headers:{
                "Authorization":  this.state.id_user
            }
        })
        .then(res => res.json())
        .then(
          (result) => {
              this.setState({userName: result.data})
          })
    }

    fetch("http://127.0.0.1:8000/api/order", {
            method: "get",
             headers: {"Authorization": this.state.id_user}
        }).then(res => res.json())
        .then((result) => {
            this.setState({order:result.data})
          })
}
  onLogout(){
      localStorage.removeItem("user");
      this.setState({isLogin:false})
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  render() {
      var stt =0;
    return (
      <div>
        <nav>
            <div className="nav-item-left">
            <span className="fa fa-phone" style={{color:"red"}}></span><b> Hotline:</b> 0123456789
            </div>
            <div className="nav-item-right">
              <ul className="item">
                <li>
                  <div className="search-box">
                    <input type="text" name="txt-search" />
                    <button><span className="fa fa-search"></span></button>
                  </div>
                </li>
                {
                (this.state.isLogin) ?<ul className="item-account">
                   <li><b>{this.state.userName}</b> <button onClick={this.onLogout}>
                     <span className="fa fa-sign-out-alt"></span></button></li>
                     <li><Link to="/cart"><b>Giỏ hàng <span style={{color:"red"}}>({this.state.countCart})</span></b></Link></li>
                     <li><button onClick={this.handleOpenModal}>Đơn hàng</button></li>
                     </ul>:
                <li>
                  <ul className="item-auth">
                    <li><Link to="/login">Đăng nhập</Link></li>
                    <li><Link to="/register"> /Đăng ký</Link></li>
                  </ul>
                </li>
                }
              </ul>
            </div>
        </nav>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           portalClassName="modal-order"
        >
          <div className="order">
                 <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Thông tin đặt hàng</th>
                        <th scope="col">Sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                    this.state.order.map((item)=>
                    (
                   <tr>
                        <th scope="row">{++stt}</th>
                        <td>
                        <h5>Tên: {item.name}</h5>
                        <h5>Địa chỉ: {item.address}</h5>
                        <h5>Số điện thoại: {item.phone}</h5>
                        <h5>Tổng tiền: <span style={{color:"red"}}><NumberFormat value={item.total} displayType={'text'} thousandSeparator={true} /> đ</span></h5>
                        </td>
                        <td>
                            <table style={{width:"100%"}}> 
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>SL</th>
                                <th>Tình trạng</th>
                            </tr>
                            {
                            JSON.parse(item.cart).map((product)=>(
                                <tr>
                                <td><img src={"http://127.0.0.1:8000"+product.image} height="30px" width="30px" /></td>
                                <td>{product.name}</td>
                                <td>{product.quantity} đ</td>
                                <td><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} /> đ</td>
                                <td>Đang vận chuyển</td>
                                </tr>
                            
                            ))
                          }
                            </table>
                        </td>
                    </tr>  
                    ))
                    }
                    </tbody>
                    </table>
                 </div>
          <button onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
        <div className="logo">
            <img src={logo}  />
            <div className="logo-text">
                <p>Vườn Cây Việt</p>
                <p>Không chỉ là cây cảnh</p>
            </div>
        </div>
        <div className="menu">
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><a href="">Cây cảnh</a></li>
              <li><a href="">Chậu cảnh</a></li>
              <li><a href="">Phụ kiện cây cảnh</a></li>
              <li><a href="">Dịch vụ</a></li>
              <li><a href="">Tin tức</a></li>
              <li><a href="">Hỗ Trợ</a></li>
              <li><a href="">Liên hệ</a></li>
              <li><a href="">Khuyến mãi</a></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
