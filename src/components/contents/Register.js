import React, { Component } from 'react';
import './Login.css';
import {withRouter} from 'react-router-dom'
class Register extends Component {
    constructor(){
        super();
        this.onRegister = this.onRegister.bind(this);
    }
    onRegister(event){
        event.preventDefault();
        var name = event.target['name'].value;
        var username = event.target['username'].value;
        var password = event.target['password'].value;

        var account = {
            name:name,
            username:username,
            password:password
        }
        console.log(account);
        var accountInJson = JSON.stringify(account);
        fetch("http://127.0.0.1:8000/api/auth/register", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: accountInJson
        })
        .then((response) => {
            console.log(response);
            alert('Đăng ký thành công !')
            this.props.history.push('/login'); 
        });
    }
    render() {
        return (
            <div className="login">
                <div className="login-item">
                <h3>Đăng ký</h3>
                <hr/>
                    <div className="login-info">
                        <form className="form-info" onSubmit={this.onRegister}>
                        <div className="form-item">
                                <div className="icon"><span className="fa fa-address-card"></span></div>
                                <input type="text" name="name" placeholder="Nhập họ & tên" />
                            </div>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-user"></span></div>
                                <input type="text" name="username" placeholder="Nhập tên đăng nhập" />
                            </div>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-key"></span></div>
                                <input type="password" name="password" placeholder="Nhập mật khẩu" />
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

export default withRouter(Register);