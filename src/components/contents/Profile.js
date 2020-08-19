import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {withRouter} from 'react-router-dom';
import './Profile.css';
class Profile extends Component {
    constructor(){
        super();
        this.state={
            showModal:false,
            checkPass : false,
            userName : '' 
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onReNewPass = this.onReNewPass.bind(this);
        this.onDeleteAccount = this.onDeleteAccount.bind(this);
    }
    componentDidMount(){
        var userId = localStorage.getItem("user");
        fetch("http://127.0.0.1:8000/api/user/name",{
            headers:{
                "Authorization":  userId
            }
        })
        .then(res => res.json())
        .then(
          (result) => {
              this.setState({userName: result.data})
          })
    }
    handleOpenModal () {
        this.setState({ showModal: true });
      }
      
    handleCloseModal () {
        this.setState({ showModal: false,checkPass:false });
      }
    onChangePass(event){
        event.preventDefault();
        var oldpass = event.target['oldpass'].value;
        var userId = localStorage.getItem("user");
        var password = {
            oldpass:oldpass
        }
        var oldpassInJson = JSON.stringify(password);    
        fetch("http://127.0.0.1:8000/api/user/checkpass", {
            method: "post",
            headers: {
                "Content-Type":"application/json",
                "Authorization":  userId
            },
            body: oldpassInJson
        })
        .then((response) => {
            if(response.status == 200){
                this.setState({checkPass:true})
            }else{
                alert("Mật khẩu không trùng khớp!");
            }
        });
        
    }
    onReNewPass(event){
        event.preventDefault();
        var newpass = event.target['newpass'].value;
        var userId = localStorage.getItem("user");
        var password = {
            newpass:newpass
        }
        var newpassInJson = JSON.stringify(password);    
        fetch("http://127.0.0.1:8000/api/user/changepass", {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
                "Authorization":  userId
            },
            body: newpassInJson
        })
        .then((response) => {
            alert('Thay đổi mật khẩu thành công!')
            this.setState({showModal:false})
        });
        
    }
    onDeleteAccount(){
        var userId = localStorage.getItem("user");
        fetch("http://127.0.0.1:8000/api/user/destroy", {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
                "Authorization":  userId
            }
        })
        .then((response) => {
            alert('Tài khoản của bạn đã bị xóa!')
            localStorage.clear();
            this.props.history.push('/');
            window.location.reload();
        });
    }
    render() {
        return (
            <div className="profile">
                <div className="profile-item">
                    <div className="item">
                        <h3>Thông tin cá nhân</h3>
                        <ul>
                            <li>{this.state.userName}</li>
                            <li><button onClick={this.handleOpenModal}>Thay đổi mật khẩu</button></li>
                            <li><button onClick={this.onDeleteAccount}>Xóa tài khoản</button></li>
                        </ul>
                    </div>
                </div>
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    portalClassName="modal-changepass"
                 >
                <div className="changepass">
                        {
                            (!this.state.checkPass)?
                            <form onSubmit={this.onChangePass} className="form-changepass">
                                <p>Nhập mật khẩu cũ</p>
                              <input type="password" name="oldpass" placeholder="Nhập mật khẩu cũ"/>
                              <button>Kiểm tra</button>
                            </form>
                            :
                            <form onSubmit={this.onReNewPass} className="form-changepass">
                                <p>Nhập mật khẩu mới</p>
                              <input type="password" name="newpass" placeholder="Nhập mật khẩu mới"/>
                              <button>Cập nhật</button>
                            </form>
                        }
                        <button className="btn-close" onClick={this.handleCloseModal}>Close</button>
                    </div>
                    
                </ReactModal>
            </div>
        );
    }
}

export default withRouter(Profile);