import React, { Component } from 'react';
import './Header.css';
import logo from './image/logo.png';  
class Header extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className="nav-item-left">
            <b>Hotline:</b> 0123456789
            </div>
            <div className="nav-item-right">
              <ul>
                <li>
                  <div className="search-box">
                    <input type="text" name="txt-search" />
                    <button>Tìm kiếm</button>
                  </div>
                </li>
                <li><a href="">Đăng nhập</a></li>
                <li><a href="">Đăng ký</a></li>
                <li><a href=""><b>Giỏ hàng (1)</b></a></li>
              </ul>
            </div>
        </nav>
        <div className="logo">
            <img src={logo}  />
            <div className="logo-text">
                <p>Vườn Cây Việt</p>
                <p>Không chỉ là cây cảnh</p>
            </div>
        </div>
        <div className="menu">
            <ul>
              <li><a href="">Trang chủ</a></li>
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
