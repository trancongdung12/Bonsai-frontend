import React, { Component } from 'react';
import Slide from '../partials/Slide';
import Sidebar from '../partials/Sidebar';
import ProductItem from './ProductItem';
import './Home.css';
class Home extends Component {
    constructor(){
        super();
        this.state = {
            categories : []
        }
    }
    componentDidMount(){
        fetch("http://127.0.0.1:8000/api/category")
        .then(res => res.json())
        .then(
          (response) => {
              this.setState({categories: response})
          })
    }
    render() {
        console.log(this.state.categories)
        return (
            <div>
                <Slide/>
                <Sidebar/>
                {
                this.state.categories.map((item)=>(
                <div className="home">              
                     <p className="title">{item.name}</p>
                     <hr/>
                     <div className="product">
                         {
                             item.products.map((product)=>(
                                <ProductItem products = {product} />
                             ))}
                     </div>     
                </div>
                 ))}
            </div>

        );
    }
}

export default Home;