import React, { Component } from 'react';
import './Login.css'
class Register extends Component {
    constructor(){
        super();
        this.onCreateAccount = this.onCreateAccount.bind(this);
    }
    onCreateAccount(event){
        event.preventDefault();
        var name = event.target['name'].value;
        var email = event.target['email'].value;
        var password = event.target['password'].value;

        let account = {
            name:name,
            email:email,
            password:password
        }

        let accountInJson = JSON.stringify(account);
        fetch("http://127.0.0.1:8000/api/auth/register", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: accountInJson
        })
        .then((response) => {
            console.log(response);
            this.props.history.push('/dang-nhap'); 
        });
    }
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
                            <hr/>
                            <button className="btn-countinue"><span className="fa fa-lock"></span> Đăng ký</button>
                        </form>
                        
                    </div>
              
            </div>
            </div>
        );
    }
}

export default Register;