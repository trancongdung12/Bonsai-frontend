import React, { Component } from 'react';
import './Login.css'
import {withRouter} from 'react-router-dom';
class Login extends Component {
    constructor(){
        super();
        this.state ={
            account : []
        }
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin(event){
        event.preventDefault();

        var username = event.target['username'].value;
        var password = event.target['password'].value;

        var account = {
            username:username,
            password:password
        }
        
        var isAccount = false;
        var accountInJson = JSON.stringify(account);
        fetch("http://127.0.0.1:8000/api/auth/login", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: accountInJson
        })
        .then((response) => {
            if(response.status === 200){
                isAccount = true;
            }
            return response.json();
        }).then(response => {
            if(isAccount){
            alert('Đăng nhập thành công');
            localStorage.setItem('user', response.data);
            this.props.history.push('/');
            }else{
                alert('Tên đăng nhập hoặc mật khẩu của bạn không đúng :(');
            }
               
        });
    }
    render() {
        return (
            <div className="login">
                <div className="login-item">
                <h3>Đăng nhập</h3>
                <hr/>
                    <div className="login-info">
                        <form className="form-info" onSubmit={this.onLogin}>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-user"></span></div>
                                <input type="text" name="username" placeholder="Nhập tên đăng nhập" />
                            </div>
                            <div className="form-item">
                                <div className="icon"><span className="fa fa-key"></span></div>
                                <input type="password" name="password" placeholder="Nhập mật khẩu" />
                            </div>
                            <hr/>
                        <button type="submit" className="btn-countinue"><span className="fa fa-lock"></span> Đăng nhập</button>
                        </form>
                        
                    </div>
              
            </div>
            </div>
        );
    }
}

export default withRouter(Login);