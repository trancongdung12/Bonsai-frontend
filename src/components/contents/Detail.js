import React, { Component } from 'react';
import tree from './tree.jpg';
import NumberFormat from 'react-number-format';
import './Detail.css';
import { withRouter } from 'react-router-dom';
class Details extends Component {
    constructor(props){
        super();
        this.state = {
            product :[],
            
        }
       
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('http://127.0.0.1:8000/api/product/'+id)
        .then(res => res.json())
        .then( (result)=>{
            this.setState({product:result});
        })
    }
    render() {
         var {product} = this.state;
        return (
            <div className="detail">
                <div className="detail-item">
                <div className="detail-img">
                    <img src={'http://127.0.0.1:8000'+product.image} />
                </div>
                <div className="detail-content">
                    <p><b>{product.name}</b></p>
                    <p>{product.description} </p>
                    <p><i>Lưu ý: Giá sản phẩm đã bao gồm chậu.</i></p>
                    <p><b>Tình trạng:</b> Còn hàng</p>
                    <p><b>Giá bán:</b> <span style={{color:"red"}}><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} /> đ</span></p>                
                </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Details);