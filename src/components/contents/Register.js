import React, { Component } from 'react';
import './Login.css'
class Register extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-item">
                <h3>Đăng ký</h3>
                <hr/>
                    <div className="login-info">
                        <form className="form-info">
                        <div className="form-item">
                                <div className="icon"><span className="fa fa-address-card"></span></div>
                                <input type="text" placeholder="Nhập họ & tên" />
                            </div>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-user"></span></div>
                                <input type="text" placeholder="Nhập tên đăng nhập" />
                            </div>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-key"></span></div>
                                <input type="password" placeholder="Nhập mật khẩu" />
                            </div>
                        </form>
                        <hr/>
                        <button className="btn-countinue"><span className="fa fa-lock"></span> Đăng ký</button>
                    </div>
              
            </div>
            </div>
        );
    }
}

export default Register;