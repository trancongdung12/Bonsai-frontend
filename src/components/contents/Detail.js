import React, { Component } from 'react';
import tree from './tree.jpg';
import './Detail.css'
class Details extends Component {
    render() {
        return (
            <div className="detail">
                <div className="detail-item">
                <div className="detail-img">
                    <img src={tree} />
                </div>
                <div className="detail-content">
                    <p><b>Cây hải đường</b></p>
                    <p>Cây hải đường thể hiện cho sự tinh thiết, thanh cao may mắn và tài lộc nên rất nhiều gia đình lựa chọn hoa hải đường trong dịp tết để trưng bày. </p>
                    <p><i>Lưu ý: Giá sản phẩm đã bao gồm chậu.</i></p>
                    <p><b>Tình trạng:</b> Còn hàng</p>
                    <p><b>Giá bán:</b> <span style={{color:"red"}}>85,000 </span>đ</p>                
                </div>
                </div>
            </div>
        );
    }
}

export default Details;