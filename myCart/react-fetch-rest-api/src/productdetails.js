//to load product details part.

import React, { Component } from 'react';
const $ = window.$;
    class ProductDetails extends Component 
    {  
        constructor(props) 
        {
          super(props);
          this.state = {
            product : [],
            isLoaded: false,         
          }
        }
        componentDidMount() {
          let id = this.props.id;
          console.log("id is "+ id);
          fetch(`http://127.0.0.1:5000/product-details/${id}`)
          .then(res => {return res.json();})
          .then(product => 
          {
            this.setState({ product: [product] });
            console.log(this.state.product);
          })
          .catch(console.log);
        }
        render() {
          function addProduct(id,title,price, imagePath)
          {
            let product = [];            
            if(localStorage.getItem('product')){
                product = JSON.parse(localStorage.getItem('product'));
            }
            product.push({'Id' : id ,'title':title , 'price': price , 'imgpath': imagePath });
            localStorage.setItem('product', JSON.stringify(product));
          }        
        return (          
          <div className="container">
          <div class ="row">
          <div className="col-xs-12">
          <h1>Product Details</h1>          
          {this.state.product.map((product =>             
              <div className="card">
                <div className="card-body">                   
                <img src={product.imagePath}  className="img-responsive"  height = "150" width ="100"/>
                <h5 className="card-title" >{product.title}</h5>
                <h5 className="card-description">{product.description}</h5>
                <h5 className="card-price">€{product.price}</h5>
                
                <button type="button" class="btn btn-secondary" title="Add to cart">
                  <i class="fa fa-shopping-cart"></i>              
                </button>
                <button onClick={()=>addProduct(product._id, product.title , product.price, product.imagePath)}  >Add to Cart</button>                             
                </div>
              </div>                    
              ))
            }
          </div>
         </div>
         </div>
        );
      }
    }
    export default ProductDetails;