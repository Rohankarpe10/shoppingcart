// to render the home page
import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
const $ = window.$;
    class Products extends Component 
    {
        constructor(props) {
          super(props);
          this.state = {
            products: [],          
            isLoaded: false,
          }
        }      
        componentDidMount() {
          fetch('http://localhost:5000/')
          .then(res => {return res.json();})
          .then(products => {
            this.setState({ products });
            console.log(this.state.products);
          })
          .catch(console.log);
        }        
        render() {
          return (
            <div className="container">
            <div class ="col">
            <div className="col-xs-12">
            
            <h1>Products</h1>
            {this.state.products.map((product => (
            
              <div className="card">
                <div className="card-body">                    
                  <img src={product.imagePath}  className="img-responsive"  height = "120" width ="120"/>              
                  <Link to={`/productdetails/${product._id}`}>{product.title}</Link>                        
                  <div class="overlay-left">
                    <button type="button" class="btn btn-secondary" title="Quick Shop">
                      <i class="fa fa-eye"></i>
                    </button>
                    <button type="button" class="btn btn-secondary" title="Add to Wishlist">
                      <i class="fa fa-heart-o"></i>
                    </button>              
                    <button type="button" class="btn btn-secondary" title="Add to cart">
                      <i class="fa fa-shopping-cart"></i>              
                    </button>
                  </div>  
                  <div class="product-bottom text-left">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>   
                    <i class="fa fa-star"></i>   
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i> 
                  </div>              
                    <h5 className="card-description">{product.description}</h5>
                    <h5 className="card-price">€{product.price}</h5>                        
                </div>
              </div>
            )
          ))}
          </div>
         </div>
         </div>
        );
      }
    }
    export default Products;