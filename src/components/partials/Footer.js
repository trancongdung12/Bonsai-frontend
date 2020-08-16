import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-top">
                    <h2>
                    NHẬN THÔNG TIN VỀ SẢN PHẨM MỚI NHẤT
                    </h2>
                    <small>Vui lòng nhập Email, chúng tôi sẽ gửi thông tin và báo giá ngay !</small>
                    <div className="form-control">
                        <input placeholder="Nhập email" />
                        <div className="btn-send">
                            <button>Gửi <span className="fa fa-paper-plane"></span></button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                     <div className="item-bottom">
                     <div className="title company">
                        <h3>Công ty TNHH Vườn Cây Việt</h3>
                        <p><span className="fa fa-home"></span> Văn phòng: 101b Lê Hữu Trác</p>
                        <p><span className="fa fa-user"></span> VoThiNhi</p>
                        <p><span className="fa fa-globe"></span> Mã số thế: 0801244382</p>
                        <p><span className="fa fa-qrcode"></span> webcaycanhhotro@gmail.com</p>
                        <p><span className="fa fa-mobile-alt"></span> Phản ánh:0966561589</p>
                     </div>
                     <div className="title address">
                        <h3>Địa chỉ bán buôn bán lẻ</h3>
                        <p><b>Tại Chi Nhánh Hà Nội</b></p>
                        <p>
                        Số 60 - Ngõ 235<br/>
                        Yên Hòa - Quận Cầu Giấy - Hà Nội<br/>
                        ĐT: 0988 833 653
                        </p>
                        <p><b>Tại Chi Nhánh Hồ Chí Minh</b></p>
                        <p>
                        Villa 6 - Hẻm 21- Đào Duy Anh<br/>
                        Phường 9 - Phú Nhuận - Hồ Chí Minh<br/>
                        ĐT: 0909 28 5658
                        </p>
                     </div>
                     <div className="title category">
                         <h3>Danh mục các sản phẩm</h3>
                         <ul>
                            <li><Link to="/"><span className="fab fa-pagelines"></span> Trang chủ</Link></li>
                            <li><a href=""><span className="fab fa-pagelines"></span> Cây cảnh</a></li>
                            <li><a href=""><span className="fab fa-pagelines"></span> Chậu cảnh</a></li>
                            <li><a href=""><span className="fab fa-pagelines"></span> Phụ kiện cây cảnh</a></li>
                            <li><a href=""><span className="fab fa-pagelines"></span> Dịch vụ</a></li>
                            <li><a href=""><span className="fab fa-pagelines"></span> Tin tức</a></li>
                            <li><a href=""><span className="fab fa-pagelines"></span> Hỗ Trợ</a></li>
                            <li><a href=""><span className="fab fa-pagelines"></span> Liên hệ</a></li>
                            <li><a href=""><span className="fab fa-pagelines"></span> Khuyến mãi</a></li>
                        </ul>
                     </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default Footer;