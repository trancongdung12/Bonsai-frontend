import React, { Component } from 'react';
import tree from './tree.jpg';
import './Cart.css'
class Cart extends Component {
    render() {
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
                        <tr className="cart-tr">
                            <td>1</td>
                            <td><img src={tree} height="50px" width="50px" /></td>
                            <td>Cây hưởng dương</td>
                            <td>85,000 đ/Bộ</td>
                            <td className="td-quantity"><button>-</button><input type="text" value="1" disabled/><button>+</button></td>
                            <td><b>85,000 đ</b></td>
                            <td><button className="btn-delete"><span className="fa fa-trash"></span></button></td>
                        </tr>
                    </table>
                    <p>Tổng cộng: <b style={{color:"red"}}>85,000 đ</b></p>
                    <hr/>
                    <div className="btn-payment">
                        <button>Thanh toán</button>
                        <button>Chọn thêm sản phẩm</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;