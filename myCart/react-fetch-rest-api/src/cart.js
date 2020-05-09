import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
const $ = window.$;

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product : JSON.parse(localStorage.getItem('product')),
            isLoaded : true            
        };              
    }

    render() {
        function removeProduct(id){
            console.log("ID to remove is ===================" + id);      
            var obj = JSON.parse(localStorage.getItem('product')) || {};
            console.log("1==========" + obj);
            
            for (var i = 0; i < obj.length; i++) { //loop over the collection
                if (obj[i].Id === id) { //see if ids match
                  obj.splice(i, 1); //remove item from array
                  console.log("3==========");
                  window.location.reload();
                  break; //exit loop                  
                }
            }
        let product = localStorage.setItem('product', JSON.stringify(obj));
    }        
        return (
            <div className="container"> 
            <div class ="row">
            <div className="col-xs-12">
            <h1>Cart Details</h1>
            {
              this.state.product.map((product =>               
              <div className="card">
                <div className="card-body">                      
                <img src={product.imgpath}  className="img-responsive"  height = "150" width ="100"/>
                <h5 className="card-title" >{product.title}</h5>
                <h5 className="card-description">{product.description}</h5>
                <h5 className="card-price">€{product.price}</h5>
                <button onClick={()=>removeProduct(product.Id)}  > Remove from Cart</button>                                
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
export default Cart;